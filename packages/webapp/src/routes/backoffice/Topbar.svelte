<script context="module">
	import { datePlotly, installationName } from '$lib/stores.js';
</script>

<script>
	import { cssTransition } from '$lib/svelte-css-transitions';
	// import { clickOutsideAction } from "svelte-legos";
	import { page } from '$app/stores';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	import InstallationForm from '$lib/components/InstallationForm.svelte';
	import { showModal2 } from '$lib/components/MyModal.svelte';

	export let sidebarIsOpen; // store
	export let dropdownMenuIsOpen; // store
	export let auth;

	let flatContainer;
	let dropdownMenuButton;
	let currentPath;
	let flat;
	let dateArray;
	let dropdownFlatIsOpen = false;
	let dropdownFlatButton;
	datePlotly.subscribe((value) => {
		dateArray = value;
	});
	if (!dateArray) {
		let todayDate = new Date();
		let lastWeekDate = new Date();
		lastWeekDate.setDate(todayDate.getDate() - 7);
		dateArray = [lastWeekDate.toISOString().split('T')[0], todayDate.toISOString().split('T')[0]];
	}

	$: {
		currentPath = $page.url.pathname;
		if (flatContainer) {
			generateFlat();
		}
	}

	function handleClickOnOnWindow(ev) {
		if (dropdownMenuButton.contains(ev.target)) {
			return;
		}

		$dropdownMenuIsOpen = false;
	}

	function generateFlat() {
		flat = flatpickr(flatContainer, {
			mode: 'range',
			defaultDate: [dateArray[0], dateArray[1]],
			onClose: function (selectedDates) {
				datePlotly.set(selectedDates.map((date) => this.formatDate(date, 'Y-m-d')));
				console.log(selectedDates.map((date) => this.formatDate(date, 'Y-m-d')));
			}
		});
	}

	function handleFlatSuggestionClick(event) {
		let dateNow = new Date();
		//dateNow = dateNow.toISOString().split('T')[0];
		let fromDate = new Date();
		if (event.target.attributes.value.value == '24') {
			fromDate.setDate(dateNow.getDate() - 1);
		} else if (event.target.attributes.value.value == '72') {
			fromDate.setDate(dateNow.getDate() - 2);
		} else if (event.target.attributes.value.value == 'semana') {
			fromDate.setDate(dateNow.getDate() - 8);
		} else if (event.target.attributes.value.value == 'mes') {
			fromDate.setMonth(dateNow.getMonth() - 1);
		} else if (event.target.attributes.value.value == 'ano') {
			fromDate.setFullYear(dateNow.getFullYear() - 1);
		} else {
			fromDate.setDate(dateNow.getDate() - 8);
		}

		dateNow.setDate(dateNow.getDate() + 1);
		datePlotly.set([fromDate.toISOString().split('T')[0], dateNow.toISOString().split('T')[0]]);
	}
</script>

<svelte:window on:click="{handleClickOnOnWindow}" />

<header class="w-full">
	<div class="relative z-10 flex h-10 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
		<button
			type="button"
			class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden"
			on:click="{() => {
				$sidebarIsOpen = !$sidebarIsOpen;
			}}"
		>
			<span class="sr-only">Open sidebar</span>
			<svg
				class="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke-width="1.5"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path>
			</svg>
		</button>

		<div class="flex flex-1 justify-between px-4 sm:px-6">
			<div class="ml-2 flex flex flex-1 items-center space-x-4 sm:ml-6 sm:space-x-6">
				<!--{#if currentPath.startsWith('/backoffice/installations/')}
            <div class="items-center"><h1>{$installationName}</h1></div>
          {/if}-->
				<!-- 
            <form class="flex w-full md:ml-0">
              <label for="search-field" class="sr-only">Search all files</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search-field" id="search-field" class="h-full w-full border-0 py-2 pl-8 pr-3 text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm" placeholder="Search" type="search">
              </div>
            </form>
 -->
			</div>
			<div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
				{#if currentPath.startsWith('/backoffice/installations/')}
					<div>
						<div class="flex rounded-md shadow-sm">
							<div class="relative flex flex-grow items-stretch focus-within:z-10">
								<input
									type="text"
									bind:this="{flatContainer}"
									id="flatPickrTemp"
									class="block w-[20vh] rounded-l-md border-0 text-sm leading-6 text-gray-500 ring-1 ring-inset ring-gray-300"
								/>
							</div>
							<button
								on:click="{() => {
									dropdownFlatIsOpen = !dropdownFlatIsOpen;
								}}"
								bind:this="{dropdownFlatButton}"
								type="button"
								class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
							>
								<!--<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg> -->
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
										d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
									></path>
								</svg>
							</button>
						</div>
						<div
							class="absolute right-0 z-10 mr-5 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="user-menu-button"
							tabindex="-1"
							style="display:none;"
							use:cssTransition="{{ show: dropdownFlatIsOpen }}"
							data-transition-enter=""
							data-transition-enter-start=""
							data-transition-enter-end=""
							data-transition-leave=""
							data-transition-leave-start=""
							data-transition-leave-end=""
						>
							<a
								on:click="{handleFlatSuggestionClick}"
								value="24"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Últimas 24horas</a
							>
							<a
								on:click="{handleFlatSuggestionClick}"
								value="72"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Últimas 72horas</a
							>
							<a
								on:click="{handleFlatSuggestionClick}"
								value="semana"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Última semana</a
							>
							<a
								on:click="{handleFlatSuggestionClick}"
								value="mes"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Último mês</a
							>
							<a
								on:click="{handleFlatSuggestionClick}"
								value="ano"
								class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Último ano</a
							>
						</div>
					</div>
				{/if}
				{#if currentPath == '/backoffice/installations'}
					<button
						on:click="{() => showModal2(InstallationForm)}"
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
				{/if}
				<!-- Profile dropdown -->
				<div class="relative flex-shrink-0">
					<div>
						<button
							type="button"
							class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
							id="user-menu-button"
							aria-expanded="false"
							aria-haspopup="true"
							on:click="{() => {
								$dropdownMenuIsOpen = !$dropdownMenuIsOpen;
							}}"
							bind:this="{dropdownMenuButton}"
						>
							<!-- <span class="sr-only">Open user menu</span> -->
							<!-- 
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
 -->
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								class="h-9 w-9"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
								></path>
							</svg>
						</button>
					</div>

					<!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
					<div
						class="absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
						role="menu"
						aria-orientation="vertical"
						aria-labelledby="user-menu-button"
						tabindex="-1"
						style="display:none;"
						use:cssTransition="{{ show: $dropdownMenuIsOpen }}"
						data-transition-enter=""
						data-transition-enter-start=""
						data-transition-enter-end=""
						data-transition-leave=""
						data-transition-leave-start=""
						data-transition-leave-end=""
					>
						<!-- Active: "bg-gray-100", Not Active: "" -->
						<a
							href="/"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-0">Página inicial</a
						>

						<div
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
							role="menuitem"
							tabindex="-1"
							id="user-menu-item-1"
						>
							<!--
                  <form method="POST" action="/logout">
                      <button type="submit" class="">Terminar sessão</button>
                  </form>
                  -->
							<a href="/logout"><button type="submit" class="">Terminar sessão</button></a>
						</div>
						<!-- 
                <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
              </div>
 -->
					</div>
					<!-- 
            <button type="button" class="flex items-center justify-center rounded-full bg-sky-400 p-1 text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span class="sr-only">Add file</span>
            </button>
 -->
				</div>
			</div>
		</div>
	</div></header
>
