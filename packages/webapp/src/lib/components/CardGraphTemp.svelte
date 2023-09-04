<script context="module">
	import { datePlotly } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	import { selectedDevices } from './Installation.svelte';
	import { browser } from '$app/environment';
	import { refreshGraph, unpack, updateGraph, getTraceName, addYear } from '$lib/utils.js';
	export let props;

	let P;
	let graphContainer;
	let searchParams;
	let unitTypes = ['t', 'tar'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let wasGenerated = false;
	//recreate/update whole graph with reactive? no animations available for shapes
	let shapesValues = [20, 30];

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

	async function GenerateGraph(devs) {
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
				installation_id: device.installation_id,
				limit: 99999
			});

			let res = await fetch(
				`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`
			);
			let list = await res.json();
			console.log(list);

			unitTypes.forEach((unit) => {
				var traceName = getTraceName(unit);

				var filteredList = list.filter((obj) => obj.type === unit);

				var trace = {
					x: unpack('ts', filteredList),
					y: unpack('val', filteredList),
					name: device.description + traceName,
					type: 'scatter'
				};

				traceData.push(trace);
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
			xaxis: { fixedrange: true },
			yaxis: {
				fixedrange: true,
				title: {
					text: 'Temperatura (ºC)',
					font: {
						family: '',
						size: 12,
						color: '#7f7f7f'
					}
				}
			}
		};

		let graphConfig = {
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

	async function generateCompare(devs) {
		let activeTraces = graphContainer.data;
		let indexesToRemove = activeTraces
			.map((element, index) => {
				if (element.compare == true) {
					return index;
				}
			})
			.filter((element) => element >= 0);
		if (indexesToRemove.length > 0) {
			P.deleteTraces(graphContainer, indexesToRemove);
		} else {
			devis = devs;
			var traceData = [];
			var fromYearAgo = new Date(dateArray[0]);
			var toYearAgo = new Date(dateArray[1]);
			fromYearAgo.setFullYear(fromYearAgo.getFullYear() - 1);
			toYearAgo.setFullYear(toYearAgo.getFullYear() - 1);
			fromYearAgo.setDate(fromYearAgo.getDate() + 1);
			toYearAgo.setDate(toYearAgo.getDate() + 1);

			for (let device of devs) {
				searchParams = new URLSearchParams({
					from_date: fromYearAgo.toISOString().split('T')[0],
					to_date: toYearAgo.toISOString().split('T')[0],
					//from_date: "2023-05-08",
					//to_date: "2023-05-15",
					device_mac: device.mac,
					installation_id: device.installation_id,
					limit: 99999
				});

				let res = await fetch(
					`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`
				);
				let list = await res.json();

				unitTypes.forEach((unit) => {
					var traceName = getTraceName(unit);

					var filteredList = list.filter((obj) => obj.type === unit);

					var datesStr = unpack('ts', filteredList);
					let datesYearAdded = datesStr.map((element) => {
						return addYear(element);
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

	export async function compareGraph() {
		console.log('Generated');
		refreshGraph($selectedDevices, props, shapesValues, generateCompare);
	}

	function OnChangeThreshMin(event) {
		shapesValues[1] = event.target.value;
	}
</script>

<div bind:this="{graphContainer}" class="w-fill h-[50vh] md:h-[100vh] lg:h-[50vh]"
	><!-- Plotly --></div
>
