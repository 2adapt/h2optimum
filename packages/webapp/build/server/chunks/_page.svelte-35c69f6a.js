import { c as create_ssr_component, v as validate_component } from './index3-a7d75b1a.js';
import { I as Installation } from './Installation-b13e863b.js';
import './index2-e2f371e8.js';
import './stores-084954a6.js';
import 'flatpickr';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Installation, "Installation").$$render($$result, { data }, {}, {})}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-35c69f6a.js.map
