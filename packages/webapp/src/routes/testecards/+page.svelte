<script>
	/** @type {import('./$types').PageData} */
	export let data;
	import CardsGrid from './CardsGrid.svelte';
</script>

<CardsGrid cards="{data.Cards}" />
