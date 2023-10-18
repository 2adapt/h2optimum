<script context="module">
	import { datePlotly, aggregation } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	export let props;
	import { selectedDevices } from './Installation.svelte';
	import { browser } from '$app/environment';
	import { refreshGraph, unpack, updateGraph, getTraceName } from '$lib/utils.js';

	let P;
	let graphContainer;
	let searchParams;
	let unitTypes = ['b'];
	let devis = [];
	let dateArray;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	let wasGenerated = false;

	$: {
		if (browser && P) {
			refreshGraph($selectedDevices, props, null, null, null, $aggregation, GenerateGraph);
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

	async function GenerateGraph(devs, shapes, limit, abs, aggregation) {
		devis = devs;
		var traceData = [];
		for (let device of devs) {
			let toDateDayAdded = new Date(dateArray[1]);
			toDateDayAdded.setDate(toDateDayAdded.getDate() + 1);
			toDateDayAdded = toDateDayAdded.toISOString().split('T')[0];

			let params ={
				from_date: dateArray[0],
				to_date: toDateDayAdded,
				device_mac: device.mac,
				installation_id: device.installation_id,
				limit: 99999,
			}

			if(aggregation != null){
				params.time_bucket = aggregation
			}

			searchParams = new URLSearchParams(params);

			let res = await fetch(
				`https://api.h2optimum.2adapt.pt/api/v2/measurement-new?${searchParams.toString()}`
			);
			let list = await res.json();

			delete params.time_bucket;

			unitTypes.forEach((unit) => {
				var traceName = getTraceName(unit);

				//var filteredList = list.filter((obj) => obj.type === unit);

				var trace = {
					x: unpack('ts', list),//datas
					y: unpack('b', list),//valores
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
				title: {
					text: 'Bateria (v)',
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
			scrollZoom: true,
			modeBarButtonsToRemove: ['zoom2d', 'zoomIn2d', 'zoomOut2d', 'resetScale2d', 'pan']
		};

		if (traceData) {
			P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
		}
	}

	function reactToFlatChange(dateArray) {
		if (devis && browser && P && wasGenerated == true) {
			updateGraph(dateArray, devis, P, graphContainer, unitTypes, null, null, $aggregation);
		} else {
			wasGenerated = true;
			GenerateGraph(props);
		}
	}
</script>

<div bind:this="{graphContainer}" class="w-fill h-[50vh] md:h-[100vh] lg:h-[50vh]"
	><!-- Plotly --></div
>
