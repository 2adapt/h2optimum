import { c as create_ssr_component, v as validate_component } from "../../../../../chunks/index.js";
import { I as Installation } from "../../../../../chunks/Installation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<main class="flex-1 overflow-y-auto Xborder-[5px] Xborder-green-400 scrollbar-custom">
 	<div class="max-w-full 2xl:max-w-[96rem] mx-auto">
	 	<div class="px-4 sm:px-6 lg:px-8 Xborder Xborder-orange-400">
            ${validate_component(Installation, "Installation").$$render($$result, { data }, {}, {})}
	 	</div>
	</div>
 </main>`;
});
export {
  Page as default
};
