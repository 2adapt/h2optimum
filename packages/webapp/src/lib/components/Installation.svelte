<script context="module">
	import { writable } from 'svelte/store';

	export let selectedDevices = writable({});
</script>

<script>
	import { onMount } from 'svelte';
	import LoadMap from '$lib/components/LoadMap.svelte';
	import { showModal2 } from '$lib/components/MyModal.svelte';
	import NewDeviceForm from '$lib/components/NewDeviceForm.svelte';
	import { page } from '$app/stores';
	import CardGraphTemp from './CardGraphTemp.svelte';
	import CardGraphHumidity from './CardGraphHumidity.svelte';
	import CardGraphBattery from './CardGraphBattery.svelte';
	export let data;

	let isInstallationOwner = false;
	let urlArray = $page.url.pathname.split('/');
	if (!urlArray.includes('public')) {
		isInstallationOwner = true;
	}

	let propsToMapModal = {
		coordinates: {
			lat: data.installation.location.lat,
			lon: data.installation.location.lon
		},
		size: 'full'
	};
	let propsToMapPage = {
		coordinates: {
			lat: data.installation.location.lat,
			lon: data.installation.location.lon
		},
		size: 'md'
	};

	$selectedDevices = {};
	data.installation.devices.forEach((device) => {
		$selectedDevices[device.id] = true;
	});

	onMount(async () => {
	});
</script>

<!--* SUMMARY + DEVICES -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow"
	>
		<div class="h-24 border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">SUMMARY</h3>
				</div>
				<!--<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>-->
			</div>
		</div>
		<ul>
			<!-- <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">-->
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<!--<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>-->
			<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
			<!--<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> -->
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6">Diagnostics:</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<button
						type="button"
						class="rounded-md bg-sky-500 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
						>DETAILS</button
					>
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6"
							>Soil type: <span class="font-normal">{data.installation.soilTypeCode}</span></p
						>
					</div>
				</div>
			</li>
		</ul>
	</li>

	<li
		class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"
	>
		<div class="h-24 border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">DEVICES</h3>
				</div>
				<!--{#if isInstallationOwner}-->
					<div class="ml-4 mt-2 flex-shrink-0">
						<button
							on:click="{() => showModal2(NewDeviceForm)}"
							type="button"
							class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="h-5 w-5 pr-1"
							>
								<path
									fill-rule="evenodd"
									d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
									clip-rule="evenodd"></path>
							</svg>
							NEW</button
						>
					</div>
				<!--{/if}-->
			</div>
		</div>
		<ul class="divide-y divide-dotted divide-gray-100">
			<li class="grid grid-cols-3 gap-4 p-4 text-start">
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Description </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Battery mode </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Last reading </p>
				</div>
			</li>

			<!-- START FOR HERE-->
			{#each data.installation.devices as device}
				<li class="grid grid-cols-3 gap-4 p-4 text-start">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							{device.description}
						</p>
					</div>
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							{device.battery_mode_code}
						</p>
					</div>
					<div class="flex min-w-0 justify-between">
						<p class="text-sm leading-6">
							{device.last_reading_formatted}
						</p>
						<input
							id="visible-checkbox"
							bind:checked="{$selectedDevices[device.id]}"
							type="checkbox"
							class="h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						{#if isInstallationOwner}
							<button class="text-sm leading-6">
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
						{/if}
					</div>
				</li>
			{/each}
			<!--END FOR HERE-->
		</ul>
	</li>
</ul>
<!--* END SUMMARY + DEVICES -->

<!--* MEASUREMENTS-->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	<CardGraphTemp devices="{data.installation.devices}" installation="{data.installation}" />
	<CardGraphHumidity devices="{data.installation.devices}" />
</ul>
<!--* END MEASUREMENTS -->

<!--* BATTERY + MAP -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	<CardGraphBattery devices="{data.installation.devices}" />
	<li
		class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"
	>
		<div class="h-24 border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">MAP</h3>
				</div>
				<div class="ml-4 mt-2 flex-shrink-0">
					<button
						on:click="{() => {
							showModal2(LoadMap, propsToMapModal);
						}}"
						type="button"
						class="relative inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"
					>
						Open map</button
					>
				</div>
			</div>
		</div>
		<LoadMap props="{propsToMapPage}" />
	</li>
</ul>
<!--* END BATTERY + MAP -->
