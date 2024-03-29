import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<!--<div class="text-center">
	<h2>Login</h2>
	<form class="mt-5 inline-block w-[20vw] space-y-6" method="POST">
		<div>
			<label for="Email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
			<div class="mt-2">
				<input
					id="email"
					name="email"
					type="email"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.missing}<p class="error">The email field is required</p>{/if}

		<div>
			<label for="Password" class="block text-sm font-medium leading-6 text-gray-900"
				>Password</label
			>
			<div class="mt-2">
				<input
					id="password"
					name="password"
					type="password"
					class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6"
				/>
			</div>
		</div>
		{#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}

		<div class="flex flex-nowrap">
			<button
				type="submit"
				class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500"
				>Login</button
			>
		</div>
	</form>
</div>-->


<div class="flex min-h-full">
	<div class="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
	  <div class="mx-auto w-full max-w-sm lg:w-96">
		<div>
		  <h2 class="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
		</div>
  
		<div class="mt-10">
		  <div>
			<form method="POST" class="space-y-6">
			  <div>
				<label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
				<div class="mt-2">
				  <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
				</div>
				${form?.missing ? `<p class="error">The email field is required</p>` : ``}
			  </div>
  
			  <div>
				<label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
				<div class="mt-2">
				  <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
				</div>
			  </div>
  
			  <div class="flex items-center justify-between">
				<div class="flex items-center">
				  <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600">
				  <label for="remember-me" class="ml-3 block text-sm leading-6 text-gray-700">Remember me</label>
				</div>
  
				<div class="text-sm leading-6">
				  <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
				</div>
			  </div>
  
			  <div>
				<button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
			  </div>
			</form>
		  </div>

		</div>
	  </div>
	</div>
	<div class="relative hidden w-0 flex-1 lg:block">
	  <img class="absolute inset-0 h-full w-full object-cover" src="https://app.2adapt.pt/login/static/bg-alentejo.jpg" alt="">
	</div>
  </div>`;
});
export {
  Page as default
};
