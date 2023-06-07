<script>
	import { onMount } from "svelte";
	import flatpickr from "flatpickr";
	import 'flatpickr/dist/flatpickr.min.css';

    let P;
    let graphContainer;
    let GraphLayout = {legend: {"orientation": "h"}};
	let GraphConfig = {responsive: true, displaylogo: false}
    let flatContainer;
    let todayDate = new Date();
	let lastWeekDate = new Date();
	lastWeekDate.setDate(todayDate.getDate() - 7);

    onMount(async () => {
        P = (await import('plotly.js-dist')).default;

        GenerateGraph();

		flatpickr(flatContainer, {mode: "range", defaultDate: [lastWeekDate, todayDate]});
    });

    function GenerateGraph(){
		var trace1 = {
			x: [1, 2],
			y: [10, 15],
			type: 'scatter'
		};

		var trace2 = {
			x: [1, 2],
			y: [16, 5],
			type: 'scatter'
		};

		var data = [trace1, trace2];

		P.newPlot(graphContainer, data, GraphLayout, GraphConfig);
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