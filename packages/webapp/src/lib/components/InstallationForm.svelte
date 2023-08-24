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
	let lon = 0;
	let id = null;
	let soilType;
	let status;

	onMount(async () => {
		if (props) {
			if (props.name) {
				name = props.name;
			}
			if (props.description) {
				description = props.description;
			}
			if (props.location.lat) {
				lat = props.location.lat;
			}
			if (props.location.lon) {
				lon = props.location.lon;
			}
			if (props.id) {
				id = props.id;
			}
			if (props.soil_type_code) {
				soilType = props.soil_type_code;
			}
			if (props.status) {
				status = props.status;
			}
		}
	});
</script>

<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	{#if props}
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
			>Editar Instalação</h2
		>
	{:else}
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
			>Nova Instalação</h2
		>
	{/if}
</div>
<form class="w-full space-y-6" method="POST" action="{currentPath}?/manageInstallation">
	<div>
		<label for="minSat" class="leading-1 block text-sm font-medium text-gray-900">Nome</label>
		<div class="mt-2">
			<input
				id="name"
				name="name"
				type="text"
				value="{name}"
				required
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div>
		<label for="minSat" class="leading-1 block text-sm font-medium text-gray-900">Descrição</label>
		<div class="mt-2">
			<input
				id="description"
				name="description"
				type="text"
				value="{description}"
				required
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div class="flex flex-nowrap">
		<label for="soilType" class="leading-1 block text-sm font-medium text-gray-900 sm:pt-1.5"
			>Tipo de solo</label
		>
		<div class="ml-2">
			<select
				name="soilType"
				bind:value="{soilType}"
				class="sm:leading-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm"
			>
				<option value="loamy_sand"> Areia argilosa </option>
				<option value="fine_sandy_loam"> Franco-arenoso fino </option>
				<option value="sandy_loam"> Franco arenoso </option>
				<option value="loam"> Argiloso </option>
				<option value="clay"> Argila </option>
			</select>
		</div>
	</div>

	<div>
		<label for="lat" class="leading-1 block text-sm font-medium text-gray-900">Latitude</label>
		<div class="mt-2">
			<input
				id="lat"
				name="lat"
				type="number"
				step="any"
				value="{lat}"
				required
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div>
		<label for="lon" class="leading-1 block text-sm font-medium text-gray-900">Longitude</label>
		<div class="mt-2">
			<input
				id="lon"
				name="lon"
				type="number"
				step="any"
				value="{lon}"
				required
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div class="flex flex-nowrap">
		<label for="status" class="leading-1 block text-sm font-medium text-gray-900 sm:pt-1.5"
			>Estado</label
		>
		<div class="ml-2">
			<select
				name="status"
				bind:value="{status}"
				class="sm:leading-1 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm"
			>
				<option value="active"> Ativo </option>
				<option value="archived"> Arquivado </option>
			</select>
		</div>
	</div>

	<input type="hidden" id="ID" name="ID" value="{id}" />

	<div class="flex flex-nowrap">
		<button
			on:click="{() => closeModal2()}"
			type="button"
			class="mr-1 flex w-full justify-center rounded-md bg-neutral-400 px-3 py-1.5 text-sm font-semibold leading-6 text-stone-500 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 hover:bg-neutral-500"
		>
			Fechar
		</button>

		<button
			type="submit"
			class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500 hover:bg-sky-600"
			>Gravar
		</button>
	</div>
</form>
