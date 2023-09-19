<script>
	import '../app.css';
	import { Modal } from '@2adapt/modal';
	import { browser } from '$app/environment';
	export let data;
	import { page } from '$app/stores';

	$: auth = data.locals.auth;

	$: path = $page.route.id;
</script>

<slot />


{#if browser}
	<Modal />
{/if}
