<script>
	import { onMount } from 'svelte';
	import { closeModal2 } from '@2adapt/modal';
	export let props;

	let firstname;
	let lastname;
	let email;
	let installations = [];
	let id = null;

	onMount(async () => {
		if (props) {
			if (props.first_name) {
				firstname = props.first_name;
			}
			if (props.last_name) {
				lastname = props.last_name;
			}
			if (props.email) {
				email = props.email;
			}
			if (props.id) {
				id = props.id;
			}
			if (props.installationList) {
				installations = props.installationList.map((element) => element.id);
			}
		}
	});
</script>

<div class="sm:mx-auto sm:w-full sm:max-w-sm">
	{#if props}
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
			>Editar utilizador</h2
		>
	{:else}
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
			>Novo utilizador</h2
		>
	{/if}
</div>

<form class="w-full space-y-6" method="POST" action="?/manageUser">
	<div>
		<label for="Firstname" class="leading-1 block text-sm font-medium text-gray-900"
			>Primeiro nome</label
		>
		<div class="mt-2">
			<input
				id="Firstname"
				name="firstname"
				type="text"
				required
				bind:value="{firstname}"
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div>
		<label for="Lastname" class="leading-1 block text-sm font-medium text-gray-900"
			>Último nome</label
		>
		<div class="mt-2">
			<input
				id="Lastname"
				name="lastname"
				type="text"
				bind:value="{lastname}"
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm"
			/>
		</div>
	</div>

	<div>
		<label for="email" class="leading-1 block text-sm font-medium text-gray-900"> Email </label>
		<div class="mt-2">
			<input
				id="email"
				name="email"
				type="text"
				bind:value="{email}"
				required
				class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
			/>
		</div>
	</div>

	<div>
		<label for="installation" class="leading-1 block text-sm font-medium text-gray-900"
			>Instalaçoes</label
		>
		<div>
			<select
				multiple
				name="installationList"
				bind:value="{installations}"
				class="sm:leading-1 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:max-w-xs sm:text-sm"
			>
				{#each props.installations as installation}
					<option value="{installation.id}"> {installation.id} - {installation.name} </option>
				{/each}
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
