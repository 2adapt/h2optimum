import { r as redirect } from './index-9f328cea.js';
import set_cookie_parser__default from 'set-cookie-parser';

async function load(event) {
  if (event.locals.auth.isAuthenticated == false) {
    throw redirect(303, "/login");
  }
  const sidValue = event.cookies.get("sid");
  const res = await fetch(`https://auth.e-risk.pt/api/logout`, {
    method: "POST",
    headers: {
      "Cookie": "sid=" + sidValue
    }
  });
  const auth = await res.json();
  var cookiesParsed = set_cookie_parser__default.parse(res);
  if (auth.success == true) {
    for (let cookieParsed of cookiesParsed) {
      const { name, value, ...options } = cookieParsed;
      event.cookies.delete(name, value, options);
    }
    throw redirect(303, "/login");
  } else {
    throw redirect(303, "/login");
  }
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
const component = async () => (await import('./_page.svelte-a8a50d09.js')).default;
const server_id = "src/routes/logout/+page.server.js";
const imports = ["_app/immutable/nodes/4.f4b1fb14.js","_app/immutable/chunks/index.640f31cf.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=4-6f22d021.js.map
