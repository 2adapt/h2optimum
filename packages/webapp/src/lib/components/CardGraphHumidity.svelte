<script context="module">
	import { datePlotly, customShapes } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	export let props;
	import { selectedDevices } from './Installation.svelte';
	import { browser } from '$app/environment';
	import {
		refreshGraph,
		unpack,
		updateGraph,
		getTraceName,
		filterHumidityByID,
		calibrateHumidityValues
	} from '$lib/utils.js';
	import { getRecommendedThresholds } from '../utils';

	let P;
	let graphContainer;
	let searchParams;
	let unitTypes = ['h'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let wasGenerated = false;
	let shapesValues;
	customShapes.subscribe((value) => {
		shapesValues = value;
	});
	if (!shapesValues) {
		shapesValues = [
			getRecommendedThresholds(props.soilTypeCode, 'saturated', 1),
			getRecommendedThresholds(props.soilTypeCode, 'wet', 1),
			getRecommendedThresholds(props.soilTypeCode, 'irrigate', 1)
		];
	}

	$: {
		if (browser && P) {
			refreshGraph($selectedDevices, props, shapesValues, GenerateGraph);
		}
	}

	$: {
		if (browser && P) {
			reactToFlatChange(dateArray);
		}
	}

	onMount(async () => {
		P = (await import('plotly.js-dist')).default;

		//await GenerateGraph(props);
		/*flat = flatpickr(flatContainer, {
			mode: 'range',
			defaultDate: [dateArray[0], dateArray[1]],
			onClose: function (selectedDates) {
				datePlotly.set(selectedDates.map((date) => this.formatDate(date, 'Y-m-d')));
			}
		});*/
	});

	async function GenerateGraph(devs, shapes) {
		devis = devs;
		var traceData = [];
		for (let device of devs) {
			let toDateDayAdded = new Date(dateArray[1]);
			toDateDayAdded.setDate(toDateDayAdded.getDate() + 1);
			toDateDayAdded = toDateDayAdded.toISOString().split('T')[0];

			searchParams = new URLSearchParams({
				from_date: dateArray[0],
				to_date: toDateDayAdded,
				device_mac: device.mac,
				installation_id: device.installation_id
			});

			let res = await fetch(
				`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`
			);
			let list = await res.json();

			unitTypes.forEach((unit) => {
				var traceName = getTraceName(unit);

				var filteredList = list.filter((obj) => obj.type === unit);
				var filteredListTemp = list.filter((obj) => obj.type === 't');
				var tempValues = unpack('val', filteredListTemp);

				var filteredListHum = [];
				var yValue = [];
				var trace = [];
				for (var i = 0; i < 3; i++) {
					filteredListHum.push(filterHumidityByID(i + 2, filteredList));

					yValue.push(calibrateHumidityValues(tempValues, filteredListHum[i]));

					let greaterThanMax = yValue[i].some((element) => element > 2000);

					var trace = {
						x: unpack('ts', filteredListHum[i]),
						y: yValue[i],
						name: device.description + ' ' + (i + 1) + traceName,
						type: 'scatter'
					};

					if (greaterThanMax) {
						trace.visible = 'legendonly';
					}

					traceData.push(trace);
				}
			});
		}
		//h = hList.filter(obj => obj.sid === 2);

		var graphLayout = {
			dragmode: 'pan',
			legend: {
				x: 0,
				y: 1.5,
				orientation: 'h',
				xaxis: {
					range: [dateArray[0], dateArray[1]],
					type: 'date'
				}
			},
			shapes: [
				{
					type: 'rect',
					xref: 'paper',
					y0: 0,
					y1: shapes[0],
					x0: 0,
					x1: 1,
					fillcolor: '#56A3A6',
					opacity: 0.3,
					line: {
						width: 0
					}
				},
				{
					type: 'rect',
					xref: 'paper',
					y0: shapes[0],
					y1: shapes[1],
					x0: 0,
					x1: 1,
					fillcolor: '#11B3E4',
					opacity: 0.3,
					line: {
						width: 0
					}
				},
				{
					type: 'rect',
					xref: 'paper',
					y0: shapes[1],
					y1: shapes[2],
					x0: 0,
					x1: 1,
					fillcolor: '#053949',
					opacity: 0.3,
					line: {
						width: 0
					}
				}
			],
			xaxis: { fixedrange: true },
			yaxis: {
				fixedrange: true,
				title: {
					text: 'Potencial hídrico (cbar)',
					font: {
						family: '',
						size: 12,
						color: '#7f7f7f'
					}
				}
			}
		};

		let graphConfig = {
			dragMode: false,
			responsive: true,
			displaylogo: false,
			displayModeBar: true,
			modeBarButtonsToRemove: ['zoom2d', 'zoomIn2d', 'zoomOut2d', 'resetScale2d', 'pan']
		};

		if (traceData) {
			P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
		}
	}

	function reactToFlatChange(dateArray) {
		if (devis && browser && P && wasGenerated == true) {
			updateGraph(dateArray, devis, P, graphContainer, unitTypes);
		} else {
			wasGenerated = true;
			GenerateGraph(props, shapesValues);
		}
	}
</script>

<div bind:this="{graphContainer}" class="w-fill h-[50vh] md:h-[100vh] lg:h-[50vh]">
	<!-- Plotly -->
</div>
