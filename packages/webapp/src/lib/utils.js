import { redirect } from '@sveltejs/kit';
//import { PUBLIC_API_ORIGIN } from '$env/static/public';

/**
 *
 * @param {*} selectedD Devices selected in checkboxes
 * @param {*} D All the devices associated with current installation
 * @param {*} Generate Function to generate plot
 */
function refreshGraph(selectedD, D, shapesValues, Generate) {
	var devis = [];
	for (const property in selectedD) {
		if (selectedD[property] == true) {
			let device = D.find((obj) => {
				return obj.id == property;
			});
			devis.push(device);
		}
	}
	Generate(devis, shapesValues);
}

function unpack(prop, array) {
	const Values = array.map((obj) => (obj[prop] == -127 ? NaN : obj[prop]));
	//console.log('Error: values at -127 encountered - Hidding those values');
	return Values;
}

function addYear(dateStr) {
	let onlyDate = dateStr.split('T')[0];
	// ! Change to 0 later
	let year = onlyDate.split('-')[0];
	let changedYear = Number(year) + 1;
	// ! Swap 0 with var
	//let finalDate = onlyDate.split('-')[0] + "-" + changedYear + "-" + onlyDate.split('-')[2] + 'T' + dateStr.split('T')[1];
	let finalDate =
		changedYear +
		'-' +
		onlyDate.split('-')[1] +
		'-' +
		onlyDate.split('-')[2] +
		'T' +
		dateStr.split('T')[1];
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
		let toDateDayAdded = new Date(dates[1]);
		toDateDayAdded.setDate(toDateDayAdded.getDate() + 1);
		toDateDayAdded = toDateDayAdded.toISOString().split('T')[0];

		var searchParams = new URLSearchParams({
			from_date: dates[0],
			to_date: toDateDayAdded,
			device_mac: device.mac,
			installation_id: device.installation_id,
			limit: 99999
		});

		let res = await fetch(
			`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`
		);
		let list = await res.json();

		units.forEach((unit) => {
			var traceName = getTraceName(unit);
			if (unit != 'h') {
				var unitToUpdate = list.filter((obj) => obj.type === unit);

				if (unitToUpdate) {
					var traceUpdate = {
						x: unpack('ts', unitToUpdate),
						y: unpack('val', unitToUpdate),
						name: device.description + traceName,
						type: 'scatter'
					};

					traceDataUpdate.push(traceUpdate);
				}
			} else {
				var filteredList = list.filter((obj) => obj.type === unit);
				var filteredListTemp = list.filter((obj) => obj.type === 't');
				var tempValues = unpack('val', filteredListTemp);

				// if any tempValues == NaN

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
	if (P && numTraces && traceDataUpdate) {
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

		if (!T) {
			T = 25;
			console.log('A usar valor temperatura 25');
		}

		if (r >= 0 && r < 1000) {
			WPA2.push(Math.abs(-20 * ((r / 1000) * (1 + 0.018 * (T - 24)) - 0.55)));
		} else if (r >= 1000 && r < 8000) {
			WPA2.push(
				Math.abs((-3.213 * (r / 1000) - 4.093) / (1 - 0.009733 * (r / 1000) - 0.01205 * T))
			);
		} else if (r >= 8000) {
			WPA2.push(
				Math.abs(
					-2.246 -
						5.239 * (r / 1000) * (1 + 0.018 * (T - 24)) -
						0.06756 * Math.pow(r / 1000, 2) * Math.pow(1 + 0.018 * (T - 24), 2)
				)
			);
		} else {
			WPA2.push(null);
		}
	}
	return WPA2;
}

/**
 *
 * @param {string} soilType The type of soil
 * @param {string} valueType What value to get (saturated, wet, irrigate, dry)
 * @param {boolean} minOrMax 0 = min 1 = max
 */
function getRecommendedThresholds(soilType, valueType, minOrMax) {
	if (soilType == 'loamy_sand') {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 11;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 11;
			} else return 20;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 20;
			} else return 25;
		} else {
			return 25;
		}
	} else if (soilType == 'fine_sandy_loam') {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 12;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 12;
			} else return 22;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 22;
			} else return 30;
		} else {
			return 30;
		}
	} else if (soilType == 'sandy_loam') {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 13;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 13;
			} else return 28;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 28;
			} else return 40;
		} else {
			return 40;
		}
	} else if (soilType == 'loam') {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 23;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 23;
			} else return 64;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 64;
			} else return 84;
		} else {
			return 84;
		}
	} else if (soilType == 'clay') {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 36;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 36;
			} else return 160;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 160;
			} else return 215;
		} else {
			return 215;
		}
	} else {
		if (valueType == 'saturated') {
			if (minOrMax == 0) {
				return 0;
			} else return 10;
		} else if (valueType == 'wet') {
			if (minOrMax == 0) {
				return 10;
			} else return 60;
		} else if (valueType == 'irrigate') {
			if (minOrMax == 0) {
				return 60;
			} else return 100;
		} else {
			return 100;
		}
	}
}

function redirectIfNotAuth(event, redirectTo = '/login') {
	if (event.locals && event.locals.auth && event.locals.auth.isAuthenticated && event.locals.auth.isAuthenticated == false) {
		throw redirect(303, redirectTo);
	}
}

async function getDiagnostic(installation) {
	let diagnostic = {};
	let todayDate = new Date();
	let tommorowDate = new Date();
	todayDate = todayDate.toISOString().split('T')[0];
	tommorowDate.setDate(tommorowDate.getDate() + 1);
	tommorowDate = tommorowDate.toISOString().split('T')[0];

	if (installation.deviceList.length == 0) {
		return (diagnostic = ['Sem dispositivos']);
	}

	for (let device of installation.deviceList) {
		let arrErrors = [];
		let searchParams = new URLSearchParams({
			from_date: todayDate,
			to_date: tommorowDate,
			device_mac: device.mac,
			installation_id: device.installation_id,
			limit: 99999
		});

		let valHum;
		let res = await fetch(
			`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`
		);
		let list = await res.json();

		var filteredListTemp = list.filter((obj) => obj.type === 't');
		var filteredListAr = list.filter((obj) => obj.type === 'tar');
		var filteredListBatt = list.filter((obj) => obj.type === 'b');
		var filteredListHum = list.filter((obj) => obj.type === 'h');

		let lastReadingTemp = filteredListTemp[filteredListTemp.length - 1];
		let lastReadingAr = filteredListAr[filteredListAr.length - 1];
		let lastReadingBatt = filteredListBatt[filteredListBatt.length - 1];
		//varificar de todos os sensores de hum
		//let lastReadingHum = filteredListHum[filteredListHum.length - 1];

		for (var i = 0; i < 3; i++) {
			let listHum = filterHumidityByID(i + 2, filteredListHum);
			let lastReadingHum = listHum[listHum.length - 1];

			if (lastReadingTemp && lastReadingHum) {
				if (lastReadingTemp.val == -127) {
					arrErrors.push('Erro num cálculo da hum(Temp inválida, a calcular com temp = 25).');
				} else {
					valHum = calibrateHumidityValues([lastReadingTemp.val], [lastReadingHum]);
					if (valHum[0] > 2000 || !valHum[0]) {
						arrErrors.push('Erro no sensor de hum ' + (i + 1) + ' (>2k).');
					}
				}
			}

			if (!lastReadingHum) {
				arrErrors.push('Erro no sensor de hum(inativo).');
			}
		}

		if (!lastReadingTemp && !lastReadingAr && !lastReadingBatt) {
			diagnostic[device.description] = ['Dispositivo inativo'];
			continue;
		}

		if (lastReadingTemp.val == -127) {
			arrErrors.push('Erro no sensor de temperatura solo(-127).');
		}

		if (!lastReadingTemp) {
			arrErrors.push('Erro no sensor de temperatura solo(inativo).');
		}

		if (!lastReadingAr || lastReadingAr == undefined) {
			arrErrors.push('Erro no sensor de temperatura ar(inativo).');
		}

		if (lastReadingBatt.val <= 3.5) {
			arrErrors.push('Bateria baixa.');
		}

		if (!lastReadingBatt) {
			arrErrors.push('Erro na bateria.');
		}

		if (arrErrors.length > 0) {
			diagnostic[device.description] = arrErrors;
		}
	}

	return diagnostic;
}

async function hasErrors(installation) {
	if (installation) {
		let diag = await getDiagnostic(installation);
		if (Object.keys(diag).length > 0) {
			return true;
		} else {
			return false;
		}
	}
}

export {
	refreshGraph,
	unpack,
	updateGraph,
	getTraceName,
	filterHumidityByID,
	calibrateHumidityValues,
	addYear,
	getRecommendedThresholds,
	redirectIfNotAuth,
	getDiagnostic,
	hasErrors
};
