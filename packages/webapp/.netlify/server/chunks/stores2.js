import { w as writable } from "./index3.js";
let todayDate = /* @__PURE__ */ new Date();
let lastWeekDate = /* @__PURE__ */ new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);
todayDate.setDate(todayDate.getDate() + 1);
let dateArray = [lastWeekDate.toISOString().split("T")[0], todayDate.toISOString().split("T")[0]];
const datePlotly = writable(dateArray);
const customShapes = writable();
export {
  customShapes as c,
  datePlotly as d
};
