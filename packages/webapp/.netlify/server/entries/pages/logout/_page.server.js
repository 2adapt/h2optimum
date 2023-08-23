import { r as redirect } from "../../../chunks/index2.js";
import set_cookie_parser__default from "set-cookie-parser";
import { A as API_ORIGIN } from "../../../chunks/private.js";
async function load(event) {
  const sidValue = event.cookies.get("sid");
  const res = await fetch(`${API_ORIGIN}/api/v2/auth/logout`, {
    method: "POST",
    headers: {
      "cookie": "sid=" + sidValue
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
export {
  load
};
