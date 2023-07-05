<script>
	import { onMount } from 'svelte';
	import { closeModal2 } from '$lib/components/MyModal.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
    export let props;

	let currentPath = $page.url.pathname;
	//let currentPage = currentPath.split('/')[2];
	let name = '';
	let description = '';
	let lat = 0;
	let long = 0;

	onMount(async () => {
		if(props){
			if(props.name){
				name = props.name;
			}
			if(props.description){
				description = props.description;
			}
			if(props.lat){
				lat = props.lat;
			}
			if(props.long){
				long = props.long;
			}
		}
	});


</script>

<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
		>Editar Instalação</h2
	>
</div>
<form class="w-[20vw] space-y-6" method="POST" action="{currentPath}" use:enhance>
    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Nome</label
		>
		<div class="mt-2">
			<input
				id="name"
				name="name"
				type="text"
                value="{name}"
				required
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Descrição</label
		>
		<div class="mt-2">
			<input
				id="description"
				name="description"
				type="text"
                value="{description}"
				required
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Latitude</label
		>
		<div class="mt-2">
			<input
				id="lat"
				name="lat"
				type="number"
                value="{lat}"
				required
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

    <div>
		<label for="minSat" class="block text-sm font-medium leading-1 text-gray-900"
			>Longitude</label
		>
		<div class="mt-2">
			<input
				id="long"
				name="long"
				type="number"
                value="{long}"
				required
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>


	<div class="flex flex-nowrap">
		<button
			on:click="{() => closeModal2()}"
			type="button"
			class="mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm hover:bg-neutral-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500">
			Fechar
		</button>

		<button
			type="submit"
			class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
			>Gravar
			</button>
	</div>
</form>
