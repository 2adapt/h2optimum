<script context="module">
	import { customShapes } from '$lib/stores.js';
</script>

<script>
	import { closeModal2 } from '$lib/components/MyModal.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
    import { getRecommendedThresholds } from '$lib/utils.js';
    export let props;

	let currentPath = $page.url.pathname;
	//let currentPage = currentPath.split('/')[2];

    let saturatedMax = getRecommendedThresholds(props, 'saturated', 1);
    let humMax = getRecommendedThresholds(props, 'wet', 1);
    let irrigateMax = getRecommendedThresholds(props, 'irrigate', 1);

	function handleFromSubmit(){
		customShapes.set([saturatedMax,humMax,irrigateMax]);
		closeModal2();
	}
</script>

<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
		>Editar thresholds</h2
	>
</div>
<form class="w-full space-y-6" method="POST" action="{currentPath}" use:enhance>
    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Solo saturado entre</label
		>
		<div class="mt-2 flex">
			<input
				id="minSat"
				name="minSat"
				type="number"
				disabled
                value={getRecommendedThresholds(props, 'saturated', 0)}
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
            <span class="mr-5 ml-5 leading-8">-</span>
			<input
				id="maxSat"
				name="maxSat"
				type="number"
                bind:value="{saturatedMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Solo adquadamente húmido entre</label
		>
		<div class="mt-2 flex">
			<input
				id="minSat"
				name="minSat"
				type="number"
				disabled
                bind:value="{saturatedMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
            <span class="mr-5 ml-5 leading-8">-</span>
			<input
				id="maxSat"
				name="maxSat"
				type="number"
                bind:value="{humMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Solo necessita irrigação entre</label
		>
		<div class="mt-2 flex">
			<input
				id="minSat"
				name="minSat"
				type="number"
				disabled
                bind:value="{humMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
            <span class="mr-5 ml-5 leading-8">-</span>
			<input
				id="maxSat"
				name="maxSat"
				type="number"
                bind:value="{irrigateMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Solo seco acima de</label
		>
		<div class="mt-2 flex">
            <input
				id="minSat"
				name="minSat"
				type="number"
				disabled
                bind:value="{irrigateMax}"
				class="block w-20 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

	<div class="flex flex-nowrap">
		<button
			on:click="{() => closeModal2()}"
			type="button"
			class="mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500">
			Fechar
		</button>

		<button
			on:click="{handleFromSubmit}"
			type="submit"
			class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
			>Gravar
			</button>
	</div>
</form>
