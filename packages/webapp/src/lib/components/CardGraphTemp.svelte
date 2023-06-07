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
    import { refreshGraph } from '$lib/utils.js';


    let P;
    let graphContainer;
    let graphLayout = {legend: {"orientation": "h"}};
	let graphConfig = {responsive: true, displaylogo: false}
    let flatContainer;
    let todayDate = new Date();
	let lastWeekDate = new Date();
	lastWeekDate.setDate(todayDate.getDate() - 7);
    let temp;
    let tar;
    let searchParams;
    let traceData = [];
    let traceDataUpdate = [];
    let numTraces = [];
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
		flatpickr(flatContainer, {mode: "range", 
            defaultDate: [lastWeekDate, todayDate], 
            onClose: function(selectedDates) {
                dateArray = selectedDates.map(date => this.formatDate(date, "Y-m-d"));
                // Use 'stores' to make it accessible by the other flatpickrs

                updateGraph(dateArray, devis);
            },
        });
    });

    async function GenerateGraph(devs){
        traceData = [];
        for(let device of devs){
            searchParams = new URLSearchParams({
                fromDate: dateArray[0],
                toDate: dateArray[1],
                deviceMac: device.mac,
            });

            let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
		    let list = await res.json();

            temp = list.filter(obj => obj.type === 't');
            tar = list.filter(obj => obj.type === 'tar');
            //hList = list.filter(obj => obj.type === 'h');

            var traceSolo = {
                x: unpack('ts', temp),
                y: unpack('val', temp),
                name: device.description + ' - Temp. solo',
                type: 'scatter'
            };

            var traceAr = {
                x: unpack('ts', tar),
                y: unpack('val', tar),
                name: device.description + ' - Temp. ar',
                type: 'scatter'
            };

            //traceData.push(traceSolo);
            traceData.push(traceSolo, traceAr);
        }
        //h = hList.filter(obj => obj.sid === 2);

        graphLayout = {legend: {"orientation": "h", 
            xaxis: {
                range: [lastWeekDate, todayDate],
                type: 'date'
            },
        }};

        P.newPlot(graphContainer, traceData, graphLayout, graphConfig);
	}

    async function updateGraph(dates){
        traceDataUpdate = [];
        for(let device of devis){
            searchParams = new URLSearchParams({
                fromDate: dates[0],
                toDate: dates[1],
                deviceMac: device.mac,
            });

            let res = await fetch(`https://api.2adapt.pt/v1/get-measurements?${searchParams.toString()}`);
		    let list = await res.json();

            temp = list.filter(obj => obj.type === 't');
            tar = list.filter(obj => obj.type === 'tar');
            //hList = list.filter(obj => obj.type === 'h');


            var traceSoloUpdate = {
                x: unpack('ts', temp),
                y: unpack('val', temp),
                name: device.description + ' - Temp. solo',
                type: 'scatter'
            };

            var traceArUpdate = {
                x: unpack('ts', tar),
                y: unpack('val', tar),
                name: device.description + ' - Temp. ar',
                type: 'scatter'
            };

            traceDataUpdate.push(traceSoloUpdate, traceArUpdate);
        };

        for (var i = 0; i < traceDataUpdate.length; i++){
            numTraces.push(i);
        }

        P.animate(graphContainer,{
            data: traceDataUpdate,
            traces: numTraces,
            layout: {
                xaxis: {range: [dates[0], dates[1]]}
            }
            }, {
            transition: {
                duration: 1000,
                easing: 'cubic-in-out'
            },
            frame: {
                duration: 1000
            }
        });
    }

    function unpack(prop, array){
        const Values = array.map(obj => obj[prop] == -127 ? null : obj[prop]);
        return Values;
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