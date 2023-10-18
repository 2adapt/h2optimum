<script context="module">
	import { writable } from 'svelte/store';
	import { installationName, aggregation, datePlotly } from '$lib/stores.js';

	export let selectedDevices = writable({});
</script>

<script>
	import { onMount } from 'svelte';
	import LoadMap from '$lib/components/LoadMap.svelte';
	import { showModal2 } from '@2adapt/modal';
	import NewDeviceForm from '$lib/components/NewDeviceForm.svelte';
	import { page } from '$app/stores';
	import CardGraphTemp from './CardGraphTemp.svelte';
	import CardGraphHumidity from './CardGraphHumidity.svelte';
	import CardGraphBattery from './CardGraphBattery.svelte';
	import ClipboardJS from 'clipboard';
	export let data;
	import { getDiagnostic } from '../utils';
	import { cssTransition } from '$lib/svelte-css-transitions';
	import NewThresholdsForm from './NewThresholdsForm.svelte';

	let currentPath = $page.url.pathname;
	let CardGraphTempComp;
	let diagIcon;
	let diagDesc;
	let showingDiag = false;
	let dropdownHumIsOpen = false;
	let isInstallationOwner = false;
	let urlArray = $page.url.pathname.split('/');
	if (!urlArray.includes('public')) {
		isInstallationOwner = true;
	}

	let publicLink = $page.url.origin + '/public/' + urlArray[3];

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
	let errorsObj = {};

	$selectedDevices = {};
	data.listDevices.forEach((device) => {
		$selectedDevices[device.id] = true;
	});

	onMount(async () => {
		new ClipboardJS('.btn');
		errorsObj = await getDiagnostic(data.installation);
		installationName.set(data.installation.name);
	});

	function runCompare() {
		CardGraphTempComp.compareGraph();
	}

	data.installation.deviceList.graph = true;

	function showTitle() {
		if (showingDiag == false) {
			if (diagIcon.title) {
				diagDesc.innerHTML = diagIcon.title;
				diagDesc.classList.remove('hidden');
				showingDiag = true;
			}
		} else {
			diagDesc.classList.add('hidden');
			showingDiag = false;
		}
	}

	function downloadCSV(device) {

		let toDateDayAdded = new Date($datePlotly[1]);
			toDateDayAdded.setDate(toDateDayAdded.getDate() + 1);
			toDateDayAdded = toDateDayAdded.toISOString().split('T')[0];


		let params ={
			from_date: $datePlotly[0],
			to_date: toDateDayAdded,
			device_mac: device.mac,
			installation_id: device.installation_id,
			limit: 99999,
		}

		if($aggregation != null){
			params.time_bucket = aggregation
		}

		let searchParams = new URLSearchParams(params);

		window.open("https://api.h2optimum.2adapt.pt/api/v2/measurement-export?" + searchParams.toString(), "_blank");
	}
</script>

<!--* SUMMARY + DEVICES -->
<ul class="mt-10 grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow"
	>
		<div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Sumário</h3>
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
					<div class="min-w-0 flex-auto"> Diagnóstico: </div>
				</div>
				<div class="relative sm:flex sm:flex-col sm:items-end">
					{#if Object.keys(errorsObj).length > 0}
						<span on:click="{showTitle}" bind:this="{diagIcon}" title="{JSON.stringify(errorsObj)}">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="h-6 w-6 text-yellow-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
								></path>
							</svg>
						</span>
						<span
							bind:this="{diagDesc}"
							class="absolute right-0 top-7 z-10 hidden w-[70vw] origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:w-[30vw]"
						>
						</span>
					{:else}
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-6 w-6 text-green-400"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
						</svg>
					{/if}
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto"> Tipo de solo: </div>
				</div>
				<div class="sm:flex sm:flex-col sm:items-end">
					{data.installation.soilType.description}
				</div>
			</li>
			{#if isInstallationOwner}
				<li class="flex gap-x-6 p-5">
					<div class="flex w-32"> Link público: </div>
					<div class="w-full sm:flex sm:flex-col sm:items-end">
						<div class="flex w-full rounded-md shadow-sm">
							<div class="w-fill relative flex flex-grow items-stretch focus-within:z-10">
								<input id="publicUrl" value="{publicLink}" type="text" readonly class="w-full" />
							</div>
							<button
								type="button"
								data-clipboard-target="#publicUrl"
								class="btn relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
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
										d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
									></path>
								</svg>
								Copiar
							</button>
						</div>
					</div>
				</li>
			{/if}
		</ul>
	</li>

	<li
		class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"
	>
		<div class="border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Dispositivos</h3>
				</div>
				{#if isInstallationOwner}
					<div class="ml-4 mt-2 flex-shrink-0">
						<button
							on:click="{() => showModal2(NewDeviceForm)}"
							type="button"
							class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200 hover:bg-neutral-200"
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
							Adicionar</button
						>
					</div>
				{/if}
			</div>
		</div>
		<ul class="divide-y divide-dotted divide-gray-100">
			<li class="grid grid-cols-3 gap-4 p-4 text-start">
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Descrição </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Última Leitura </p>
				</div>
				<div class="hidden min-w-0 flex-auto md:block">
					<p class="text-sm font-semibold leading-6"> Mac Address </p>
				</div>
			</li>

			<!-- START FOR HERE-->
			{#each data.listDevices as device}
				<li class="grid grid-cols-3 gap-4 p-4 text-start">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							{device.description}
						</p>
					</div>
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							{device.last_reading_formatted}
						</p>
					</div>
					<div class="relative flex min-w-0 items-center justify-between">
						<p class="hidden text-sm leading-6 md:block">
							{device.mac}
						</p>
						<input
							id="visible-checkbox"
							bind:checked="{$selectedDevices[device.id]}"
							type="checkbox"
							class="h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"
						/>
						{#if isInstallationOwner}
							<button
								class="text-sm leading-6"
								on:click="{() => {
									device.dropdownNewDeviceIsOpen = !device.dropdownNewDeviceIsOpen;
								}}"
							>
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
							<div
								class="absolute right-0 top-7 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
								role="menu"
								aria-orientation="vertical"
								aria-labelledby="user-menu-button"
								tabindex="-1"
								style="display:none;"
								use:cssTransition="{{ show: device.dropdownNewDeviceIsOpen }}"
								data-transition-enter=""
								data-transition-enter-start=""
								data-transition-enter-end=""
								data-transition-leave=""
								data-transition-leave-start=""
								data-transition-leave-end=""
							>
								<!-- Active: "bg-gray-100", Not Active: "" -->
								<a
									on:click="{() => showModal2(NewDeviceForm, device)}"
									class="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Editar</a
								>

								<a
									on:click="{()=>downloadCSV(device)}"
									class="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-0">Descarregar CSV</a
								>

								<div
									class="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
									role="menuitem"
									tabindex="-1"
									id="user-menu-item-1"
								>
									<!--
									<form method="POST" action="/logout">
										<button type="submit" class="">Terminar sessão</button>
									</form>
									-->
									<form class="" method="POST" action="{currentPath}?/deleteDevice">
										<button type="submit" class="">Apagar </button>
										<input type="hidden" id="ID" name="ID" value="{device.id}" />
									</form>
								</div>
								<!-- 
									<a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
								</div>
									-->
							</div>
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
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
	>
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Temperatura</h3>
				</div>
				<div class="flex">
					<div class="ml-4 mt-2 flex-shrink-0">
						<button
							title="Compara com o mesmo período do ano passado"
							on:click="{runCompare}"
							class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-neutral-200"
							>Comparar com ano anterior</button
						>
					</div>
					<div class="ml-2 mt-2 flex-shrink-0">
						<button
							on:click="{() => {
								showModal2(CardGraphTemp, data.installation.deviceList);
							}}"
							class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-neutral-200"
							>Abrir</button
						>
					</div>
				</div>
			</div>
		</div>
		<CardGraphTemp bind:this="{CardGraphTempComp}" props="{data.listDevices}" />
	</li>
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
	>
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="flex flex-wrap text-base font-semibold leading-6"
						>Potencial hídrico<a title="Ajuda" href="/backoffice/help"
							><svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-3 w-3"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
								></path>
							</svg></a
						>
					</h3>
				</div>
				<div class="relative ml-4 mt-2 flex-shrink-0">
					<!--<input
						type="text"
						bind:this="{flatContainer}"
						id="flatPickrTemp"
						class="h-10 w-60 text-sm text-gray-500"
					/>-->
					<div class="flex">
						<button
							on:click="{() => {
								dropdownHumIsOpen = !dropdownHumIsOpen;
							}}"
							class="text-sm leading-6"
						>
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
						<div
							class="absolute right-0 top-7 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
							style="display:none;"
							use:cssTransition="{{ show: dropdownHumIsOpen }}"
							data-transition-enter=""
							data-transition-enter-start=""
							data-transition-enter-end=""
							data-transition-leave=""
							data-transition-leave-start=""
							data-transition-leave-end=""
						>
							<a
								on:click="{() => {
									showModal2(NewThresholdsForm, data.installation.soilTypeCode);
								}}"
								class="block px-4 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100"
								role="menuitem"
								tabindex="-1"
								id="user-menu-item-0">Editar thresholds</a
							>

						</div>
						<div class="ml-2 flex-shrink-0">
							<button
								on:click="{() => {
									showModal2(CardGraphHumidity, data.installation.deviceList);
								}}"
								class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-neutral-200"
								>Abrir</button
							>
						</div>
					</div>
				</div>
			</div>
		</div>
		<CardGraphHumidity props="{data.listDevices}" />
	</li>
</ul>
<!--* END MEASUREMENTS -->

<!--* BATTERY + MAP -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li
		class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow"
	>
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Bateria</h3>
				</div>
				<div class="flex">
					<div class="ml-2 mt-2 flex-shrink-0">
						<button
							on:click="{() => {
								showModal2(CardGraphBattery, data.installation.deviceList);
							}}"
							class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-neutral-200"
							>Abrir</button
						>
					</div>
				</div>
			</div>
		</div>
		<CardGraphBattery props="{data.listDevices}" />
	</li>

	<li
		class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow"
	>
		<div class="border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Mapa</h3>
				</div>
				<div class="ml-4 mt-2 flex-shrink-0">
					<button
						on:click="{() => {
							showModal2(LoadMap, propsToMapModal);
						}}"
						type="button"
						class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-neutral-200"
					>
						Abrir mapa</button
					>
				</div>
			</div>
		</div>
		<LoadMap props="{propsToMapPage}" />
	</li>
</ul>
<!--* END BATTERY + MAP -->
