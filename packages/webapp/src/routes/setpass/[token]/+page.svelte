<script>
	export let form;
	import { onMount } from 'svelte';
	export let data;

	onMount(() => {
		if (data.locals.auth.isAuthenticated == true) {
			//window.location.reload(true);
		}
	});
</script>


<div class="flex min-h-full">
	<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
	  <div class="mx-auto w-full max-w-sm lg:w-96">  
        {#if data.success == true}
        <div>
            <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Repor palavra chave</h2>
          </div>
		<div class="mt-10">
            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form class="space-y-6" method="POST" use:enhance>
                <div>
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Palavra chave</label>
                    <div class="mt-2">
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
    
                <div>
                    <div class="flex items-center justify-between">
                    <label for="password2" class="block text-sm font-medium leading-6 text-gray-900">Repita a palavra chave</label>
                    </div>
                    <div class="mt-2">
                    <input id="password2" name="password2" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    </div>
                </div>
                {#if form?.matchPasswords}<p class="error">Palavras chaves têm que coincidir</p>{/if}
                <div>
                    <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submeter</button>
                </div>
                </form>
    
            </div>

		</div>
        {:else}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm text-center">
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Esta página já não é válida, submeta o pedido novamente.</h2>
                    <a href="/login" class="font-semibold text-indigo-600 hover:text-indigo-500">Voltar para o login</a>
                </div>
            </div>
        {/if}
	  </div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
	  <img class="absolute inset-0 h-full w-full object-cover" src="https://app.2adapt.pt/login/static/bg-alentejo.jpg" alt="">
	</div>
  </div>