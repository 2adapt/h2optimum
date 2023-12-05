<script>
	// import Breadcrumbs from './Breadcrumbs.svelte';
	import CardsGrid from './CardsGrid.svelte';
	export let data;
	import { filterInstallation } from '$lib/stores.js';

	let selectedFilter;
	$: filterInstallation.set(selectedFilter);
</script>

<main
	class="Xborder-[5px] Xborder-green-400 scrollbar-custom flex-1 overflow-y-auto overscroll-auto"
>
	<!--<div class="relative flex flex-nowrap">
		<div class="fixed right-0 z-0 mr-2 mt-2" style="z-index: 1;">
			<select
				name="filterInstallation"
				bind:value="{selectedFilter}"
				class="sm:leading-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm"
			>
				<option value="active"> Ativos </option>
				<option value="archived"> Arquivados </option>
				<option value="all"> Todos </option>
			</select>
		</div>
	</div>-->

	<div class="mx-auto max-w-full 2xl:max-w-[96rem]">
		<div class="Xborder Xborder-orange-400 lg:px-8">
			<!-- <Breadcrumbs level0="" url0="/" level1="Backoffice" url1="/backoffice"  /> -->
			<CardsGrid cards="{data.Cards}" />
		</div>
	</div>
</main>
