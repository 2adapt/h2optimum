<script context="module">
	import { datePlotly, customShapes } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	export let devices;
	export let installation;
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
	import NewThresholdsForm from './NewThresholdsForm.svelte';
	import { showModal2 } from './MyModal.svelte';
	import { cssTransition } from '$lib/svelte-css-transitions'; 
	import { getRecommendedThresholds } from '../utils';


	let P;
	let dropdownHumIsOpen = false;
	let graphContainer;
	let searchParams;
	let unitTypes = ['h'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let flat;
	let wasGenerated = false;
	let shapesValues;
	customShapes.subscribe((value) => {
		shapesValues = value;
	});
	if(!shapesValues){
		shapesValues = [getRecommendedThresholds(installation.soilTypeCode, 'saturated', 1),getRecommendedThresholds(installation.soilTypeCode, 'wet', 1),getRecommendedThresholds(installation.soilTypeCode, 'irrigate', 1)];
	}

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
				fromDate: dateArray[0],
				toDate: toDateDayAdded,
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

					let greaterThanMax = yValue[i].some(element => element > 2000);

					var trace = {
						x: unpack('ts', filteredListHum[i]),
						y: yValue[i],
						name: device.description + ' ' + (i + 1) + traceName,
						type: 'scatter'
					};

					if(greaterThanMax){
						trace.visible = 'legendonly'
					}

					traceData.push(trace);
				}
			});
		}
		//h = hList.filter(obj => obj.sid === 2);

		var graphLayout = {
			dragmode: 'pan',
			legend: {
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
			xaxis: {fixedrange: true},
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

		let graphConfig = {dragMode: false, responsive: true, displaylogo: false, displayModeBar: true, modeBarButtonsToRemove: ['zoom2d','zoomIn2d', 'zoomOut2d','resetScale2d','pan']};

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
			GenerateGraph(devices, shapesValues);
		}	
	}
</script>

<li
	class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
>
	<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">Potencial hídrico</h3>
			</div>
			<div class="relative ml-4 mt-2 flex-shrink-0">
				<!--<input
					type="text"
					bind:this="{flatContainer}"
					id="flatPickrTemp"
					class="h-10 w-60 text-sm text-gray-500"
				/>-->

				<button on:click="{() => { dropdownHumIsOpen = !dropdownHumIsOpen }}"
				class="text-sm leading-6">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="h-6 w-6"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
						></path>
					</svg>
				</button>
				<div class="absolute right-0 top-7 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
				style="display:none;"
				use:cssTransition={{ show: dropdownHumIsOpen }}
				data-transition-enter=""
				data-transition-enter-start=""
				data-transition-enter-end=""
				data-transition-leave=""
				data-transition-leave-start=""
				data-transition-leave-end=""
				>
					<!-- Active: "bg-gray-100", Not Active: "" -->
					<a on:click="{() => {
						showModal2(NewThresholdsForm, installation.soilTypeCode);
					}}" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-0">Editar thresholds</a>

					<div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">
					<!--
					<form method="POST" action="/logout">
						<button type="submit" class="">Terminar sessão</button>
					</form>
					-->
					<a href="/logout"><button type="submit" class="">Descarregar CSV</button></a>
					
					</div>
					<!-- 
					<a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
				</div>
					-->              
			</div>
			</div>
		</div>
	</div>
	<div bind:this="{graphContainer}" class="h-[50vh] md:h-[100vh] lg:h-[50vh] w-full"><!-- Plotly --></div>
</li>
