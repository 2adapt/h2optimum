import { r as redirectIfNotAuth } from "./utils.js";
import { A as API_ORIGIN } from "./private.js";
async function handle({ event, resolve }) {
  const sidValue = event.cookies.get("sid");
  const apiRes = await fetch(`${API_ORIGIN}/api/v2/auth/who`, {
    method: "GET",
    headers: {
      "cookie": "sid=" + sidValue
    }
  });
  const apiData = await apiRes.json();
  event.locals.auth = apiData;
  if (event.route.id.startsWith("/backoffice")) {
    redirectIfNotAuth(event);
  }
  return await resolve(event);
}
export {
  handle
};
