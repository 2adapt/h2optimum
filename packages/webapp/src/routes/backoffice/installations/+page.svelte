<script>

// import Breadcrumbs from './Breadcrumbs.svelte';
import CardsGrid from './CardsGrid.svelte';
export let data;

</script>

 <main class="flex-1 overflow-y-auto Xborder-[5px] Xborder-green-400 scrollbar-custom overscroll-auto">
 	<div class="max-w-full 2xl:max-w-[96rem] mx-auto">
	 	<div class="px-4 sm:px-6 lg:px-8 Xborder Xborder-orange-400">
	 		<!-- <Breadcrumbs level0="" url0="/" level1="Backoffice" url1="/backoffice"  /> -->
            <CardsGrid cards="{data.Cards}" />
	 	</div>
	</div>
 </main>

