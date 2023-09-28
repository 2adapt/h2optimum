<script context="module">
	import { datePlotly } from '$lib/stores.js';
</script>

<script>
	import { onMount } from 'svelte';
	import { closeModal2 } from '@2adapt/modal';
	import { page } from '$app/stores';
	export let props;

	let currentPath = $page.url.pathname;

    // Array com datas selecionadas (ex: [ "2023-09-21", "2023-09-29" ] )
    console.log($datePlotly)


	onMount(async () => {
		
	});
</script>

<div class="sm:mx-auto sm:w-full sm:max-w-sm">
		<h2 class="mb-4 text-center text-lg font-semibold leading-9 tracking-tight text-gray-900"
			>Descarregar CSV: {props.description}</h2
		>
</div>

<form class="w-full space-y-6" method="POST" action="{currentPath}?/something">

    <fieldset>
        <label for="minSat" class="leading-1 block text-sm font-medium text-gray-900">Símbolo para separador</label>
        <div class="space-y-5 mt-2">
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="small" aria-describedby="small-description" name="separator" type="radio" checked class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="small" class="font-medium text-gray-900">Vírgula ( , )</label>
              </div>
            </div>
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="medium" aria-describedby="medium-description" name="separator" type="radio" class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="medium" class="font-medium text-gray-900">Ponto e vírgula ( ; )</label>
              </div>
            </div>
          </div>
    </fieldset>

    <fieldset>
        <label for="minSat" class="leading-1 block text-sm font-medium text-gray-900">Agregar valores:</label>
        <div class="space-y-5 mt-2">
            <div class="relative flex items-start">
              <div class="flex h-6 items-center">
                <input id="medium" aria-describedby="medium-description" checked name="format" type="radio" class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
              </div>
              <div class="ml-3 text-sm leading-6">
                <label for="medium" class="font-medium text-gray-900">À hora</label>
              </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                    <input id="medium" aria-describedby="medium-description" name="format" type="radio" class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
                </div>
                <div class="ml-3 text-sm leading-6">
                    <label for="medium" class="font-medium text-gray-900">A cada 6 horas</label>
                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                    <input id="medium" aria-describedby="medium-description" name="format" type="radio" class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
                </div>
                <div class="ml-3 text-sm leading-6">
                    <label for="medium" class="font-medium text-gray-900">Ao dia</label>
                </div>
            </div>
            <div class="relative flex items-start">
                <div class="flex h-6 items-center">
                    <input id="small" aria-describedby="small-description" name="format" type="radio" class="h-4 w-4 border-gray-300 text-sky-500 focus:ring-sky-500">
                </div>
                <div class="ml-3 text-sm leading-6">
                    <label for="small" class="font-medium text-gray-900">Sem agregação (usar instante original)</label>
                </div>
            </div>
          </div>
    </fieldset>

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
			>Descarregar
		</button>
	</div>
</form>
