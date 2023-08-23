<script>
	export let cards;
	import { onMount } from 'svelte';
	import 'leaflet/dist/leaflet.css';
	import { cssTransition } from '$lib/svelte-css-transitions';
	import { showModal2 } from '$lib/components/MyModal.svelte';
	import InstallationForm from '$lib/components/InstallationForm.svelte';
	import { hasErrors } from '$lib/utils';
	import { page } from '$app/stores';

	let L;
	let mapInstance;
	let zoom = 15;
	let diagnose = diag();
	let currentPath = $page.url.pathname;

	onMount(async () => {
		L = (await import('leaflet')).default;

		createMap();
	});

	function createMap() {
		cards.forEach((element) => {
			var mapOptions = {
				center: [element.location.lat, element.location.lon],
				zoom: zoom,
				scrollWheelZoom: false,
				attributionControl: false,
				dragging: false
			};

			mapInstance = L.map(element.mapBlock, mapOptions);
			mapInstance.addLayer(L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png'));

			L.marker([element.location.lat, element.location.lon]).addTo(mapInstance);
		});
	}

	async function diag() {
		for (let i = 0; i < cards.length; i++) {
			cards[i].hasErrors = await hasErrors(cards[i]);
		}
	}
</script>

<ul class="grid grid-cols-1 gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
	{#each cards as card (card.id)}
		<li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white shadow">
			<div class="min-h-[90px] border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
				<div class="-ml-4 -mt-4 flex flex-nowrap items-center justify-between">
					<a href="/backoffice/installations/{card.slug}-{card.id}" class="group">
						<div class="ml-4 mt-4">
							<h3 class="text-base font-semibold leading-6 text-gray-900 group-hover:text-sky-500"
								>{card.name}</h3
							>

							<p class="mt-1 line-clamp-1 text-sm text-gray-500"
								>{#if card.description}{card.description}{/if}</p
							>
						</div>
					</a>
					<div class="relative inline-block text-left">
						<div class="ml-4 mt-4 flex-shrink-0">
							<button on:click="{() => (card.hidden = !card.hidden)}" class="text-sm leading-6">
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
						<!-- DROPDOWN CARD OPTIONS -->
						<div
							use:cssTransition="{{ show: card.hidden }}"
							data-transition-enter="transition ease-out duration-100"
							data-transition-enter-start="transform opacity-0 scale-50"
							data-transition-enter-end="transform opacity-100 scale-100"
							data-transition-leave="transition ease-in duration-75"
							data-transition-leave-start="transform opacity-100 scale-100"
							data-transition-leave-end="transform opacity-0 scale-95"
							class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
							role="menu"
							aria-orientation="vertical"
							aria-labelledby="menu-button"
							tabindex="-1"
						>
							<!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
							<button
								on:click="{() => {
									showModal2(InstallationForm, card);
								}}"
								class="group flex w-full items-center px-4 py-2 text-sm text-gray-700"
								role="menuitem"
								tabindex="-1"
								id="menu-item-0"
							>
								<svg
									class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										d="M5.433 13.917l1.262-3.155A4 4 0 017.58 9.42l6.92-6.918a2.121 2.121 0 013 3l-6.92 6.918c-.383.383-.84.685-1.343.886l-3.154 1.262a.5.5 0 01-.65-.65z"
									></path>
									<path
										d="M3.5 5.75c0-.69.56-1.25 1.25-1.25H10A.75.75 0 0010 3H4.75A2.75 2.75 0 002 5.75v9.5A2.75 2.75 0 004.75 18h9.5A2.75 2.75 0 0017 15.25V10a.75.75 0 00-1.5 0v5.25c0 .69-.56 1.25-1.25 1.25h-9.5c-.69 0-1.25-.56-1.25-1.25v-9.5z"
									></path>
								</svg>
								Editar
							</button>
							{#if $page.data && $page.data.locals && $page.data.locals.auth && $page.data.locals.auth.credentials}
								{#if $page.data.locals.auth.credentials.is_admin}
									<form
										class="group flex items-center px-4 py-2 text-sm text-gray-700"
										method="POST"
										action="{currentPath}?/deleteInstallation"
									>
										<svg
											class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
												clip-rule="evenodd"></path>
										</svg>
										<button
											type="submit"
											class="group flex w-full items-center px-3 py-2 text-sm text-gray-700"
											>Apagar
										</button>
										<input type="hidden" id="ID" name="ID" value="{card.id}" />
									</form>
								{/if}
							{/if}
						</div>
						<!-- END DROPDOWN CARD OPTIONS -->
					</div>
				</div>
			</div>
			<div bind:this="{card.mapBlock}" class="z-0 h-56 w-full flex-shrink-0"></div>
			<div>
				<div class="-mt-px flex divide-x divide-gray-200">
					<div class="flex w-0 flex-1">
						<div
							class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
						>
							{#if card && card.status == 0}
								<svg
									class="h-5 w-5 text-red-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
									></path>
								</svg>
							{:else}
								<svg
									class="h-5 w-5 text-green-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"
									></path>
								</svg>
							{/if}
						</div>
					</div>

					<div class="-ml-px flex w-0 flex-1">
						<div
							class="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
						>
							<!--{#if Object.keys(card.errorsObj).length > 0}-->
							{#if card.hasErrors}
								<svg
									class="h-5 w-5 text-yellow-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
										clip-rule="evenodd"></path>
									<path
										d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z"
									></path>
									<path
										fill-rule="evenodd"
										d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
										clip-rule="evenodd"></path>
								</svg>
							{:else}
								<svg
									class="h-5 w-5 text-green-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<path
										fill-rule="evenodd"
										d="M12 6.75a5.25 5.25 0 016.775-5.025.75.75 0 01.313 1.248l-3.32 3.319c.063.475.276.934.641 1.299.365.365.824.578 1.3.64l3.318-3.319a.75.75 0 011.248.313 5.25 5.25 0 01-5.472 6.756c-1.018-.086-1.87.1-2.309.634L7.344 21.3A3.298 3.298 0 112.7 16.657l8.684-7.151c.533-.44.72-1.291.634-2.309A5.342 5.342 0 0112 6.75zM4.117 19.125a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75h-.008a.75.75 0 01-.75-.75v-.008z"
										clip-rule="evenodd"></path>
									<path
										d="M10.076 8.64l-2.201-2.2V4.874a.75.75 0 00-.364-.643l-3.75-2.25a.75.75 0 00-.916.113l-.75.75a.75.75 0 00-.113.916l2.25 3.75a.75.75 0 00.643.364h1.564l2.062 2.062 1.575-1.297z"
									></path>
									<path
										fill-rule="evenodd"
										d="M12.556 17.329l4.183 4.182a3.375 3.375 0 004.773-4.773l-3.306-3.305a6.803 6.803 0 01-1.53.043c-.394-.034-.682-.006-.867.042a.589.589 0 00-.167.063l-3.086 3.748zm3.414-1.36a.75.75 0 011.06 0l1.875 1.876a.75.75 0 11-1.06 1.06L15.97 17.03a.75.75 0 010-1.06z"
										clip-rule="evenodd"></path>
								</svg>
							{/if}
							<!--<span class="hidden lg:block">Diagnosis: </span>
								<span
									class="inline-flex items-center rounded-full bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20"
									>{card.diagnostic}</span
								>-->
						</div>
					</div>
				</div>
			</div>
		</li>
	{/each}
</ul>
