<script>
	import '../app.css';
	import MyModal from '$lib/components/MyModal.svelte';
	import { browser } from '$app/environment';
	export let data;
	import { page } from '$app/stores';

	$: auth = data.locals.auth;

	$: path = $page.route.id;
</script>

<div class="overscroll-auto">
	<slot />
</div>


{#if browser}
	<MyModal />
{/if}
