<script>
	export let data;
	import Installation from '$lib/components/Installation.svelte';
</script>

 <main class="flex-1 overflow-y-auto Xborder-[5px] Xborder-green-400 scrollbar-custom">
	<div class=" fixed text-center w-full bg-white pt-3 pb-3 rounded text-stone-500" style="z-index: 1;">{data.installation.name}</div>

 	<div class="max-w-full 2xl:max-w-[96rem] mx-auto">
	 	<div class="px-4 sm:px-6 lg:px-8 Xborder Xborder-orange-400">
            <Installation data="{data}" />
	 	</div>
	</div>
 </main>



