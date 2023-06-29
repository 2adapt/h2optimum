<script>
	import { onMount } from 'svelte';
	import { closeModal2 } from '$lib/components/MyModal.svelte';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	export let props;

	let isCreatingDev = false;
	let createdDev = false;
	let currentPath = $page.url.pathname;
	//let currentPage = currentPath.split('/')[2];
	let description;
	let MACaddress;
	let devType;
	let activationkey;

	onMount(async () => {
		if(props){
			if(props.description){
				description = props.description;
			}
			if(props.mac){
				MACaddress = props.mac;
			}
			if(props.device_type_code){
				devType = props.device_type_code;
			}
			if(props.activation_key){
				activationkey = props.activation_key;
			}
		}
	});
</script>


<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	{#if props}
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
		>Editar dispositivo</h2
	>
	{:else}
	<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
		>Novo dispositivo</h2
	>	{/if}
</div>

<form class="w-full space-y-6" method="POST" action="{currentPath}"	
use:enhance={() => {
	isCreatingDev = true;

	return async ({ update }) => {
		await update();
		isCreatingDev = false;
		createdDev = true;
		setTimeout(() => {
			createdDev = false;
		}, 5000);

	};
}}>
	<div>
		<label for="Description" class="block text-sm font-medium leading-1 text-gray-900"
			>Descrição</label
		>
		<div class="mt-2">
			<input
				id="Description"
				name="description"
				type="text"
				required
				bind:value="{description}"
				disabled={isCreatingDev}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

	<div>
		<label for="MACaddress" class="block text-sm font-medium leading-1 text-gray-900"
			>MAC address</label
		>
		<div class="mt-2">
			<input
				id="MACaddress"
				name="MACaddress"
				type="text"
				required
				bind:value="{MACaddress}"
				disabled={isCreatingDev}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-1"
			/>
		</div>
	</div>

	<div class="flex flex-nowrap">
		<label for="DeviceType" class="block text-sm font-medium leading-1 text-gray-900 sm:pt-1.5"
			>Tipo de dispositivo</label
		>
		<div class="ml-2">
			<select
				name="deviceType"
				bind:value="{devType}"
				disabled={isCreatingDev}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm sm:leading-1"
			>
				<option value="device_sensor"> Sensors only </option>
				<option value="device_switch"> Switch only </option>
				<option value="device_mixed"> Mixed </option>
			</select>
		</div>
	</div>

	<div>
		<label for="ActivationKey" class="block text-sm font-medium leading-1 text-gray-900">
			Chave de ativação
		</label>
		<div class="mt-2">
			<input
				id="ActivationKey"
				name="activationkey"
				type="text"
				bind:value="{activationkey}"
				required
				disabled={isCreatingDev}
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
			/>
		</div>
	</div>

	{#if isCreatingDev}
		<span>A criar dispositivo...</span>
	{/if}
	{#if createdDev}
		<span>Dispositivo criado com sucesso!</span>
	{/if}

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
