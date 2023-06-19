import { r as redirect, f as fail } from './index-9f328cea.js';
import set_cookie_parser__default from 'set-cookie-parser';

const actions = {
  default: async ({ request, cookies }) => {
    await request.formData();
    const username = "user-a@2adapt.pt";
    const password = "pass-a";
    const userData = { "username": username, "password": password };
    const res = await fetch(`https://auth.e-risk.pt/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const auth = await res.json();
    var cookiesParsed = set_cookie_parser__default.parse(res);
    if (auth.success == true) {
      for (let cookieParsed of cookiesParsed) {
        const { name, value, ...options } = cookieParsed;
        cookies.set(name, value, options);
      }
      throw redirect(303, "/testecards");
    } else {
      return fail(400, { email, incorrect: true });
    }
  }
};
async function load(event) {
  if (event.locals.auth.isAuthenticated == true) {
    throw redirect(303, "/testecards");
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 3;
const component = async () => (await import('./_page.svelte-3427de83.js')).default;
const server_id = "src/routes/login/+page.server.js";
const imports = ["_app/immutable/nodes/3.8a79cdc0.js","_app/immutable/chunks/index.640f31cf.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=3-9dfdb434.js.map
