import { f as fail, r as redirect } from "../../../chunks/index2.js";
import set_cookie_parser__default from "set-cookie-parser";
import { A as API_ORIGIN } from "../../../chunks/private.js";
const actions = {
  default: async ({ request, cookies, fetch }) => {
    const form = await request.formData();
    const username = form.get("email");
    const password = form.get("password");
    const userData = { username, password };
    if (!username) {
      return fail(400, { username, missing: true });
    }
    const apiRes = await fetch(`${API_ORIGIN}/api/v2/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userData)
    });
    const apiData = await apiRes.json();
    if (apiData.success == true) {
      var setCookiesList = set_cookie_parser__default.parse(apiRes);
      console.log({ setCookiesList });
      for (let cookieParsed of setCookiesList) {
        const { name, value, ...options } = cookieParsed;
        cookies.set(name, value, options);
      }
      throw redirect(303, "/backoffice/installations");
    } else {
      return fail(400, { username, email: username, incorrect: true });
    }
  }
};
async function load(event) {
  if (event.locals.auth && event.locals.auth.isAuthenticated == true)
    ;
}
export {
  actions,
  load
};
