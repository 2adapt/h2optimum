<script context="module">
	import { datePlotly } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	export let devices;
	export let soil;
	import { selectedDevices } from './Installation.svelte';
	import { browser } from '$app/environment';
	import { refreshGraph, unpack, updateGraph, getTraceName, addYear } from '$lib/utils.js';
	import NewThresholdsForm from './NewThresholdsForm.svelte';
	import { showModal2 } from './MyModal.svelte';

	let P;
	let graphContainer;
	let flatContainer;
	let searchParams;
	let unitTypes = ['t', 'tar'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let flat;
	let wasGenerated = false;
	//recreate/update whole graph with reactive? no animations available for shapes
	let shapesValues = [20,30];

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

				var trace = {
					x: unpack('ts', filteredList),
					y: unpack('val', filteredList),
					name: device.description + traceName,
					type: 'scatter',
				};

				traceData.push(trace);
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
				}
			],
			yaxis: {
				title: {
					text: 'Temperature (ºC)',
					font: {
						family: '',
						size: 12,
						color: '#7f7f7f'
					}
				}	
			}
		};

		let graphConfig = { responsive: true, displaylogo: false, scrollZoom: true };
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

	async function generateCompare(devs){
		let activeTraces = graphContainer.data;
		let indexesToRemove = activeTraces.map((element, index) => {
			if (element.compare == true) {
				return index;
			}
		}).filter(element => element >= 0);
		if(indexesToRemove.length > 0){
			P.deleteTraces(graphContainer,indexesToRemove)
		} else {
			devis = devs;
		var traceData = [];
		var fromYearAgo = new Date(dateArray[0]);
		var toYearAgo = new Date(dateArray[1]);
		fromYearAgo.setFullYear(fromYearAgo.getFullYear() - 1 );
		toYearAgo.setFullYear(toYearAgo.getFullYear() - 1 );


			for (let device of devs) {
				searchParams = new URLSearchParams({
					fromDate: fromYearAgo.toISOString().split('T')[0],
					toDate: toYearAgo.toISOString().split('T')[0],
					//fromDate: "2023-05-08",
					//toDate: "2023-05-15",
					deviceMac: device.mac
				});

				let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
				let list = await res.json();				

				unitTypes.forEach((unit) => {
					var traceName = getTraceName(unit);

					var filteredList = list.filter((obj) => obj.type === unit);

					var datesStr = unpack('ts', filteredList);
					let datesYearAdded = datesStr.map(element => {
						return addYear(element)
					});

					var trace = {
						x: datesYearAdded,
						y: unpack('val', filteredList),
						name: '(C) ' + device.description + traceName,
						type: 'scatter',
						opacity: 0.2,
						compare: true
					};

					P.addTraces(graphContainer, trace);
				});
			}
		}
	}

	async function compareGraph(){
		refreshGraph($selectedDevices, devices, shapesValues, generateCompare);
	}
	
	function OnChangeThreshMin(event){
		shapesValues[1] = event.target.value;
	}

</script>
<li
	class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
>
	<div class="h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">MEASUREMENTS TEMPERATURE</h3>
			</div>
			<div class="ml-4 mt-2 flex-shrink-0">				
				<button title="Compare with same period last year" on:click="{compareGraph}" class=" rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Compare</button>
				<input
					type="text"
					bind:this="{flatContainer}"
					id="flatPickrTemp"
					class="h-10 w-60 text-sm text-gray-500"
				/>
				<button on:click="{() => {
					showModal2(NewThresholdsForm, soil);
				}}"
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
			</div>
		</div>
	</div>
	<div bind:this="{graphContainer}" class="h-[40vh] w-full"><!-- Plotly --></div>
</li>
