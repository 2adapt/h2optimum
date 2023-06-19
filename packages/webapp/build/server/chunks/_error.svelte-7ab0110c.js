import { c as create_ssr_component, a as subscribe, e as escape } from './index3-a7d75b1a.js';
import { p as page } from './stores-084954a6.js';

const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<h1>${escape($page.error.message)}</h1>
<p>Teste error</p>`;
});

export { Error as default };
//# sourceMappingURL=_error.svelte-7ab0110c.js.map
