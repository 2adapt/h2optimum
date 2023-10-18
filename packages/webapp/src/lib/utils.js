import { redirect } from '@sveltejs/kit';
//import { PUBLIC_API_ORIGIN } from '$env/static/public';

/**
 *
 * @param {*} selectedD Devices selected in checkboxes
 * @param {*} D All the devices associated with current installation
 * @param {*} Generate Function to generate plot
 */
function refreshGraph(selectedD, D, shapesValues, limit, useAbs, aggregation, Generate) {
	var devis = [];
	for (const property in selectedD) {
		if (selectedD[property] == true) {
			let device = D.find((obj) => {
				return obj.id == property;
			});
			devis.push(device);
		}
	}
	Generate(devis, shapesValues, limit, useAbs, aggregation);
}

function unpack(prop, array) {
	if(Array.isArray(array)){
		const Values = array.map((obj) => (obj[prop] == -127 ? NaN : obj[prop]));	
		return Values;
	} else {
		return array;
	}

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
			`https://api.h2optimum.2adapt.pt/api/v2/measurement-new?${searchParams.toString()}`
		);
		let list = await res.json();

		units.forEach((unit) => {
			var traceName = getTraceName(unit);
			if (unit != 'h') {

				if (list) {
					var traceUpdate = {
						x: unpack('ts', list),
						y: unpack(unit, list),
						name: device.description + traceName,
						type: 'scatter'
					};

					traceDataUpdate.push(traceUpdate);
				}
			} else {

				var traceUpdate = {
					x: unpack('ts', filteredListHum[i]),
					y: unpack(unit, list),
					name: device.description + traceName,
					type: 'scatter'
				};

				traceDataUpdate.push(traceUpdate);
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
	} else if (unitCode == 's1_potential') {
		return ' - 1';
	} else if (unitCode == 's2_potential') {
		return ' - 2';
	} else if (unitCode == 's3_potential') {
		return ' - 3';
	} else {
		return ' - Desconhecido';
	}
}

/*function calibrateHumidityValues(tempArray, humidityList) {
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
}*/

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
			limit: 99999,
			potential_threshold: 99999
		});

		let valHum;
		let res = await fetch(
			`https://api.h2optimum.2adapt.pt/api/v2/measurement-new?${searchParams.toString()}`
		);
		let list = await res.json();

		if(!list || !list[0]){
			diagnostic[device.description] = ['Erro ao realizar o diagnóstico'];
			continue;
		}

		if (!list[0].t && !list[0].b && !list[0].tar) {
			diagnostic[device.description] = ['Dispositivo inativo'];
			continue;
		}

		if (list[0].s1_potential > 2000) {
			arrErrors.push('Erro no sensor 1 de cbar solo(>2k).');
		}
		if (list[0].s2_potential > 2000) {
			arrErrors.push('Erro no sensor 2 de cbar solo(>2k).');
		}
		if (list[0].s3_potential > 2000) {
			arrErrors.push('Erro no sensor 3 de cbar solo(>2k).');
		}

		if (list[0].t == -127) {
			arrErrors.push('Erro no sensor de temperatura solo(-127).');
		}

		if (!list[0].t) {
			arrErrors.push('Erro no sensor de temperatura solo(inativo).');
		}

		if (!list[0].tar || list[0].tar == undefined) {
			arrErrors.push('Erro no sensor de temperatura ar(inativo).');
		}

		if (list[0].b <= 3.5) {
			arrErrors.push('Bateria baixa.');
		}

		if (!list[0].b) {
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
	addYear,
	getRecommendedThresholds,
	redirectIfNotAuth,
	getDiagnostic,
	hasErrors
};
