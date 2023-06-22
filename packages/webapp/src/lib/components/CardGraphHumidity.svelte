<script context="module">
	import { datePlotly } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	export let devices;
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

	let P;
	let graphContainer;
	let flatContainer;
	let searchParams;
	let unitTypes = ['h'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let flat;
	let wasGenerated = false;
	let shapesValues = [0,10];


	$: {
		if (browser && P) {
			refreshGraph($selectedDevices, devices, shapesValues, GenerateGraph);
		}
	}

	$: {
		if (browser && P) {
			if (flat) {
				reactToFlatChange(dateArray);
			}
		}
	}

	onMount(async () => {
		P = (await import('plotly.js-dist')).default;

		//await GenerateGraph(devices);
		flat = flatpickr(flatContainer, {
			mode: 'range',
			defaultDate: [dateArray[0], dateArray[1]],
			onClose: function (selectedDates) {
				datePlotly.set(selectedDates.map((date) => this.formatDate(date, 'Y-m-d')));
			}
		});
	});

	async function GenerateGraph(devs, shapes) {
		devis = devs;
		var traceData = [];
		for (let device of devs) {
			searchParams = new URLSearchParams({
				fromDate: dateArray[0],
				toDate: dateArray[1],
				deviceMac: device.mac
			});

			let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
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

					var trace = {
						x: unpack('ts', filteredListHum[i]),
						y: yValue[i],
						name: device.description + ' ' + (i + 1) + traceName,
						type: 'scatter'
					};

					traceData.push(trace);
				}
			});
		}
		//h = hList.filter(obj => obj.sid === 2);

		var graphLayout = {
			dragmode: 'pan',
			legend: {
				'orientation': 'h',
				xaxis: {
					range: [dateArray[0], dateArray[1]],
					type: 'date'
				}
			},
			shapes: [
				{
					type: 'rect',
					xref: 'paper',
					y0: shapes[0],
					y1: shapes[1],
					x0: 0,
					x1: 1,
					fillcolor: '#d3d3d3',
            		opacity: 0.3,
            		line: {
                		width: 0
            		}
				},
				{
					type: 'rect',
					xref: 'paper',
					y0: 10,
					y1: 20,
					x0: 0,
					x1: 1,
					fillcolor: '#eb4034',
            		opacity: 0.3,
            		line: {
                		width: 0
            		}
				}

			],
			yaxis: {
				title: {
					text: 'Water Potencial (cbar)',
					font: {
						family: '',
						size: 12,
						color: '#7f7f7f'
					}
				}	
			}
		};

		let graphConfig = { responsive: true, displaylogo: false, modeBarButtonsToRemove: ['zoom2d','zoomIn2d', 'zoomOut2d','resetScale2d','pan']};

		if(traceData){
			P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
		}
	}

	function reactToFlatChange(dateArray) {
		flat.setDate(dateArray, false);
		if(devis && browser && P && wasGenerated == true){
			updateGraph(dateArray, devis, P, graphContainer, unitTypes);
		} else {
			wasGenerated = true;
			GenerateGraph(devices);
		}	
	}
</script>

<li
	class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
>
	<div class="h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">MEASUREMENTS HUMIDITY</h3>
			</div>
			<div class="ml-4 mt-2 flex-shrink-0">
				<input
					type="text"
					bind:this="{flatContainer}"
					id="flatPickrTemp"
					class="h-10 w-60 text-sm text-gray-500"
				/>
			</div>
		</div>
	</div>
	<div bind:this="{graphContainer}" class="h-[50vh] w-full"><!-- Plotly --></div>
</li>
