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
	<div
		class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
	>
		<div class="mx-auto w-full max-w-sm lg:w-96">
			<div>
				<h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900"
					>Inicio de sessão</h2
				>
			</div>

			<div class="mt-10">
				<div>
					<form method="POST" class="space-y-6">
						<div>
							<label for="email" class="block text-sm font-medium leading-6 text-gray-900"
								>Email</label
							>
							<div class="mt-2">
								<input
									id="email"
									name="email"
									type="email"
									autocomplete="email"
									required
									class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
								/>
							</div>
							{#if form?.missing}<p class="error">Email é obrigatório</p>{/if}
						</div>

						<div>
							<label for="password" class="block text-sm font-medium leading-6 text-gray-900"
								>Password</label
							>
							<div class="mt-2">
								<input
									id="password"
									name="password"
									type="password"
									autocomplete="current-password"
									required
									class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"
								/>
							</div>
						</div>

						{#if form?.fail}
							<!-- this message is ephemeral; it exists because the page was rendered in
						response to a form submission. it will vanish if the user reloads -->
							<p class="text-red-500">Erro: {form?.reason}</p>
						{/if}

						<!--<div class="flex items-center justify-between">
				<div class="flex items-center">
				  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-sky-600 focus:ring-sky-600">
				  <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Remember me</label>
				</div>
  
				<div class="text-sm leading-6">
				  <a href="#" class="font-semibold text-sky-600 hover:text-sky-500">Forgot password?</a>
				</div>
			  </div>-->

						<div class="text-sm leading-6">
							<!--<a href="/resetpass" class="font-semibold text-indigo-600 hover:text-indigo-500">Esqueceu-se da palavra chave?</a>-->
						</div>

						<div>
							<button
								type="submit"
								class="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
								>Iniciar sessao</button
							>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
		<img
			class="absolute inset-0 h-full w-full object-cover"
			src="https://app.2adapt.pt/login/static/bg-alentejo.jpg"
			alt=""
		/>
	</div>
</div>
