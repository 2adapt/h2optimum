<script context="module">
	import { datePlotly, installationName, aggregation } from '$lib/stores.js';
</script>

<script>
	import { cssTransition } from '$lib/svelte-css-transitions';
	// import { clickOutsideAction } from "svelte-legos";
	import { page } from '$app/stores';
	import flatpickr from 'flatpickr';
	import 'flatpickr/dist/flatpickr.min.css';
	import InstallationForm from '$lib/components/InstallationForm.svelte';
	import { showModal2 } from '@2adapt/modal';
	import { filterInstallation } from '$lib/stores.js';

	export let sidebarIsOpen; // store
	export let dropdownMenuIsOpen; // store
	export let auth;

	let flatContainer;
	let flatContainerMobile;
	let dropdownMenuButton;
	let currentPath;
	let flat;
	let flatMobile;
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

		flatMobile = flatpickr(flatContainerMobile, {
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
					d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
				></path>
			</svg>
		</button>

		<div class="flex flex-1 justify-between px-4 sm:px-6">
			<div> </div>
			<div class="flex items-center space-x-4 sm:ml-6 sm:space-x-6">
				{#if currentPath.startsWith('/backoffice/installations/') || currentPath.startsWith('/public/')}
					<div>
						<div class="relative flex flex-grow items-stretch focus-within:z-10">
							<div class="flex flex-nowrap">
								<div class="ml-2 md:mr-5">
									<select
										name="deviceType"
										bind:value="{$aggregation}"
										class="block w-32 md:w-full rounded-md mr-0 md:mr-5 border-0 text-sm leading-6 text-gray-500 ring-1 ring-inset ring-gray-300"
									>
										<option selected value="{null}"> Sem agregação </option>
										<option value="3"> 3h </option>
										<option value="6"> 6h </option>
										<option value="12"> 12h </option>
										<option value="24"> 24h </option>
									</select>
								</div>
							</div>

							<div class="relative flex flex-grow items-stretch focus-within:z-10">
								<input
									type="text"
									bind:this="{flatContainer}"
									id="flatPickrTemp"
									class="block hidden md:block rounded-l-md border-0 text-sm leading-6 text-gray-500 ring-1 ring-inset ring-gray-300"
								/>
								<button
									bind:this="{flatContainerMobile}"
									type="button"
									class="relative md:hidden border-0 -mr-px inline-flex items-center gap-x-1.5 rounded-l-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
											d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
										></path>
									</svg>
								</button></div
							>
							<button
								on:click="{() => {
									dropdownFlatIsOpen = !dropdownFlatIsOpen;
								}}"
								bind:this="{dropdownFlatButton}"
								type="button"
								class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold border-gray-100 text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
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
					<div class="relative flex flex-nowrap">
						<div>
							<select
								name="filterInstallation"
								bind:value="{$filterInstallation}"
								class="sm:leading-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm"
							>
								<option value="active"> Ativos </option>
								<option value="archived"> Arquivados </option>
								<option value="all"> Todos </option>
							</select>
						</div>
					</div>
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
								clip-rule="evenodd"
							></path>
						</svg>
						Adicionar</button
					>
				{/if}
				{#if !currentPath.startsWith('/public/')}
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
				{/if}
			</div>
		</div>
	</div></header
>
