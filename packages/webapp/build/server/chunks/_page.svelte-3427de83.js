import { c as create_ssr_component } from './index3-a7d75b1a.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { form } = $$props;
  let { data } = $$props;
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="text-center">
	<h2>Login</h2>
	<form class="mt-5 inline-block w-[20vw] space-y-6" method="POST">
		<div>
			<label for="Email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
			<div class="mt-2">
				<input id="email" name="email" type="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
			</div>
		</div>
		${form?.missing ? `<p class="error">The email field is required</p>` : ``}

		<div>
			<label for="Password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
			<div class="mt-2">
				<input id="password" name="password" type="password" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
			</div>
		</div>
		${form?.incorrect ? `<p class="error">Invalid credentials!</p>` : ``}

		<div class="flex flex-nowrap">
			<button type="submit" class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Login</button>
		</div>
	</form>
</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-3427de83.js.map
