/**
 *
 * @param {*} selectedD Devices selected in checkboxes
 * @param {*} D All the devices associated with current installation
 * @param {*} Generate Function to generate plot
 */
function refreshGraph(selectedD, D, Generate) {
	var devis = [];
	for (const property in selectedD) {
		if (selectedD[property] == true) {
			let device = D.find((obj) => {
				return obj.id == property;
			});
			devis.push(device);
		}
	}
	Generate(devis);
}

function unpack(prop, array) {
	const Values = array.map((obj) => (obj[prop] == -127 ? NaN : obj[prop]));
	//console.log('Error: values at -127 encountered - Hidding those values');
	return Values;
}

function addYear(dateStr){
	let onlyDate = dateStr.split('T')[0];
	// ! Change to 0 later
	let year = onlyDate.split('-')[0];
	let changedYear = Number(year)+1;
	// ! Swap 0 with var
	//let finalDate = onlyDate.split('-')[0] + "-" + changedYear + "-" + onlyDate.split('-')[2] + 'T' + dateStr.split('T')[1];
	let finalDate = changedYear + "-" + onlyDate.split('-')[1] + "-" + onlyDate.split('-')[2] + 'T' + dateStr.split('T')[1];
	return finalDate;
}

function filterHumidityByID(sid, array) {
	const Values = array.filter((obj) => {
		if (obj.sid == sid) {
			return obj;
		}
	});
	return Values;
}

/**
 *
 * @param {*} dates The dates to use in from to
 * @param {*} devis Devices to update
 * @param {*} P Plotly Instance
 * @param {*} graphContainer Container to update
 * @param {*} units Units to update (t, tar, h or b)
 */
async function updateGraph(dates, devis, P, graphContainer, units) {
	var traceDataUpdate = [];
	var numTraces = [];
	for (let device of devis) {
		var searchParams = new URLSearchParams({
			fromDate: dates[0],
			toDate: dates[1],
			deviceMac: device.mac
		});

		let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
		let list = await res.json();
		
		units.forEach((unit) => {
			var traceName = getTraceName(unit);
			if (unit != 'h') {
				var unitToUpdate = list.filter((obj) => obj.type === unit);

				if(unitToUpdate){
					var traceUpdate = {
						x: unpack('ts', unitToUpdate),
						y: unpack('val', unitToUpdate),
						name: device.description + traceName,
						type: 'scatter',
					};

					traceDataUpdate.push(traceUpdate);
				}

			} else {
				var filteredList = list.filter((obj) => obj.type === unit);
				var filteredListTemp = list.filter((obj) => obj.type === 't');
				var tempValues = unpack('val', filteredListTemp);

				var filteredListHum = [];
				var yValue = [];

				for (var i = 0; i < 3; i++) {
					filteredListHum.push(filterHumidityByID(i + 2, filteredList));

					yValue.push(calibrateHumidityValues(tempValues, filteredListHum[i]));
					
					var traceUpdate = {
						x: unpack('ts', filteredListHum[i]),
						y: yValue[i],
						name: device.description + ' ' + (i + 1) + traceName,
						type: 'scatter'
					};

					traceDataUpdate.push(traceUpdate);
				}
			}
		});
	}

	for (var i = 0; i < traceDataUpdate.length; i++) {
		numTraces.push(i);
	}
	if(P && numTraces && traceDataUpdate){
		P.animate(
			graphContainer,
			{
				data: traceDataUpdate,
				traces: numTraces,
				layout: {
					xaxis: { range: [dates[0], dates[1]] }
				}
			},
			{
				transition: {
					duration: 1000,
					easing: 'cubic-in-out'
				},
				frame: {
					duration: 1000
				}
			}
		);
	}
		
	
}

function getTraceName(unitCode) {
	if (unitCode == 't') {
		return ' - Temp. solo';
	} else if (unitCode == 'tar') {
		return ' - Temp. ar';
	} else if (unitCode == 'h') {
		return '';
	} else if (unitCode == 'b') {
		return ' - Bateria';
	} else {
		return ' - Desconhecido';
	}
}

function calibrateHumidityValues(tempArray, humidityList) {
	var humiArray = unpack('val', humidityList);
	var WPA2 = [];
	for (var i = 0; i < humiArray.length; i++) {
		var r = humiArray[i];
		var T = tempArray[i];

		if (r >= 0 && r < 1000) {
			WPA2.push(Math.abs(-20 * ((r / 1000) * (1 + 0.018 * (25 - T)) - 0.55)));
		} else if (r >= 1000 && r < 8000) {
			WPA2.push(Math.abs((-3.213 * (r / 1000) - 4.093) / (1 - 0.009733 * (r / 1000) - 0.01205 * T)));
		} else if (r >= 8000) {
			WPA2.push(
				Math.abs(-2.246 - 5.239 * (r / 1000) * (1 + 0.018 * (T - 24)) - 0.06756 * Math.pow(r / 1000, 2) * Math.pow(1 + 0.018 * (T - 24), 2))
			);
		} else {
			console.log('Error');
			WPA2.push(null);
		}
	}
	return WPA2;
}

export {
	refreshGraph,
	unpack,
	updateGraph,
	getTraceName,
	filterHumidityByID,
	calibrateHumidityValues,
	addYear
};
