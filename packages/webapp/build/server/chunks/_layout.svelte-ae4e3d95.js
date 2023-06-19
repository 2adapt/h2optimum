import { c as create_ssr_component, a as subscribe, e as escape } from './index3-a7d75b1a.js';
import { p as page } from './stores-084954a6.js';

const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let auth;
  let path;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  auth = data.locals.auth;
  path = $page.route.id;
  $$unsubscribe_page();
  return `${auth.isAuthenticated == true ? `<p>${escape(auth.artifacts.user_email)}</p>
	<a href="/logout">
		<button class="ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Logout</button>
	</a>` : `${path != "/login" ? `<a href="/login">
		<button class="ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Login</button>
	</a>` : ``}`}

${slots.default ? slots.default({}) : ``}

${``}`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-ae4e3d95.js.map
