import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { I as Installation } from "../../../../chunks/Installation.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Installation, "Installation").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
