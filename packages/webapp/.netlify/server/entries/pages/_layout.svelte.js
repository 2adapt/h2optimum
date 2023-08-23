import { c as create_ssr_component, s as subscribe } from "../../chunks/index.js";
import { p as page } from "../../chunks/stores.js";
const app = "";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  data.locals.auth;
  $page.route.id;
  $$unsubscribe_page();
  return `${slots.default ? slots.default({}) : ``}


${``}`;
});
export {
  Layout as default
};
