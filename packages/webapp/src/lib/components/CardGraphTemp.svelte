<script context="module">
    import { datePlotly } from '$lib/stores.js';
</script>

<script>
	import { onMount } from "svelte";
	import flatpickr from "flatpickr";
	import 'flatpickr/dist/flatpickr.min.css';
    export let devices;
    import { selectedDevices } from './Installation.svelte'
    import { browser } from '$app/environment';
    import { refreshGraph, unpack, updateGraph, getTraceName } from '$lib/utils.js';

    let P;
    let graphContainer;
    let flatContainer;
    let searchParams;
    let unitTypes = ['t','tar'];
    let devis = [];
    let dateArray
    datePlotly.subscribe(value => {
		dateArray = value;
	});
    let flat;
    
    $:{
        if(browser){
            refreshGraph($selectedDevices, devices, GenerateGraph);
        }
    }

    $:{
        if(browser){
            if(flat){
                reactToFlatChange(dateArray);
            }
        }
    }

    onMount(async () => {
        P = (await import('plotly.js-dist')).default;

        //await GenerateGraph(devices);
		flat = flatpickr( flatContainer, {mode: "range", 
            defaultDate: [dateArray[0],dateArray[1]], 
            onClose: function(selectedDates) {
                datePlotly.set(selectedDates.map(date => this.formatDate(date, "Y-m-d")));
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

        var graphLayout = {legend: {"orientation": "h", 
            xaxis: {
                range: [dateArray[0], dateArray[1]],
                type: 'date'
            },
        }};

        let graphConfig = {responsive: true, displaylogo: false}

        P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
	}

    function reactToFlatChange(dateArray){
        flat.setDate(dateArray, false);
        updateGraph(dateArray, devis, P, graphContainer,unitTypes);
    }

</script>

<li class="col-span-1 flex flex-col divide-y divide-gray-200  bg-white text-center shadow text-neutral-50">
    <div class="border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6 rounded-t-lg h-24">
        <div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
            <div class="ml-4 mt-2">
                <h3 class="text-base font-semibold leading-6">MEASUREMENTS TEMPERATURE</h3>
            </div>
            <div class="ml-4 mt-2 flex-shrink-0">
                <input type="text" bind:this={flatContainer}  id="flatPickrTemp" class="h-10 w-60 text-gray-500 text-sm">
            </div>
        </div>
    </div>
    <div bind:this={graphContainer} class="h-[40vh] w-full"><!-- Plotly --></div>
</li>