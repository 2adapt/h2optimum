<script context="module">
	import { writable } from 'svelte/store';

	let component = writable(null);
	let props = writable(null);
	let globalModal;

	export function showModal2(componentToLoad, propsToLoad) {
		component.set(componentToLoad);
		props.set(propsToLoad);
		globalModal.showModal();
	}

	export function closeModal2() {
		component.set(null);
		globalModal.close();
	}
</script>

<script>
	import { onMount } from 'svelte';

	onMount(async () => {});
</script>

<dialog
	bind:this="{globalModal}"
	class="w-fit fixed transform overflow-hidden overflow-scroll rounded-lg bg-white px-4 pb-3 pt-1 shadow-xl transition-all"
>
	<div class="text-right">
		<button
			on:click="{() => {
				closeModal2();
			}}"
			type="button"
			class="relative mt-1 inline-flex items-center rounded-md bg-transparent text-sm font-semibold text-stone-400 hover:text-stone-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
					d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
			</svg>
		</button>
	</div>

	<svelte:component this="{$component}" props="{$props}" />
</dialog>
