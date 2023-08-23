import { r as redirect } from "../../../chunks/index2.js";
async function load(event) {
  throw redirect(303, "/backoffice/installations");
}
export {
  load
};
