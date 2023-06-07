<script context="module">
    import { writable } from 'svelte/store';

	export let dateArray = writable({});
</script>

<script>
	import { onMount } from "svelte";
	import flatpickr from "flatpickr";
	import 'flatpickr/dist/flatpickr.min.css';
    export let devices;
    import { selectedDevices } from './Installation.svelte'
    import { browser } from '$app/environment';
    import { refreshGraph, unpack, updateGraph, getTraceName, filterHumidityByID, calibrateHumidityValues } from '$lib/utils.js';

    let P;
    let graphContainer;
    let flatContainer;
    let todayDate = new Date();
	let lastWeekDate = new Date();
	lastWeekDate.setDate(todayDate.getDate() - 7);
    let searchParams;
    let unitTypes = ['h'];
    let dateArray = [lastWeekDate.toISOString().split('T')[0], todayDate.toISOString().split('T')[0]];
    let devis = [];
    
    $:{
        if(browser){
            refreshGraph($selectedDevices, devices, GenerateGraph);
        }
    }

    onMount(async () => {
        P = (await import('plotly.js-dist')).default;

        //await GenerateGraph(devices);
		flatpickr( flatContainer, {mode: "range", 
            defaultDate: [lastWeekDate, todayDate], 
            onClose: function(selectedDates) {
                dateArray = selectedDates.map(date => this.formatDate(date, "Y-m-d"));
                // Use 'stores' to make it accessible by the other flatpickrs

                updateGraph(dateArray, devis, P, graphContainer,unitTypes);
            },
        });
    });

    async function GenerateGraph(devs){
        devis = devs;
        var traceData = [];
        for(let device of devs){
            searchParams = new URLSearchParams({
                fromDate: dateArray[0],
                toDate: dateArray[1],
                deviceMac: device.mac,
            });

            let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
		    let list = await res.json();

            unitTypes.forEach(unit => {
                var traceName = getTraceName(unit);

                var filteredList = list.filter(obj => obj.type === unit);
				var filteredListTemp = list.filter(obj => obj.type === 't');
				var tempValues = unpack('val', filteredListTemp);

				var filteredListHum= [];
				var yValue = [];
				var trace = [];
				for (var i = 0; i < 3; i++){
					filteredListHum.push(filterHumidityByID(i+2, filteredList));

					yValue.push(calibrateHumidityValues(tempValues, filteredListHum[i]));

					var trace = {
						x: unpack('ts', filteredListHum[i]),
						y: yValue[i],
						name: device.description + ' ' + (i+1) + traceName,
						type: 'scatter'
					};

					traceData.push(trace);
				}
                
            });
        }
        //h = hList.filter(obj => obj.sid === 2);

        var graphLayout = {legend: {"orientation": "h", 
            xaxis: {
                range: [lastWeekDate, todayDate],
                type: 'date'
            },
        }};

        let graphConfig = {responsive: true, displaylogo: false}

        P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
	}

</script>

<li class="col-span-1 flex flex-col divide-y divide-gray-200  bg-white text-center shadow text-neutral-50">
    <div class="border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6 rounded-t-lg h-24">
        <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div class="ml-4 mt-2">
                <h3 class="text-base font-semibold leading-6">MEASUREMENTS HUMIDITY</h3>
            </div>
            <div class="ml-4 mt-2 flex-shrink-0">
                <input type="text" bind:this={flatContainer}  id="flatPickrTemp" class="h-10 w-60 text-gray-500 text-sm">
            </div>
        </div>
    </div>
    <div bind:this={graphContainer} class="h-[40vh] w-full"><!-- Plotly --></div>
</li>