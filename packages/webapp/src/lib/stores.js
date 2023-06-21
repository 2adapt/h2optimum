import { writable } from 'svelte/store';

let todayDate = new Date();
let lastWeekDate = new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);
let dateArray = [lastWeekDate.toISOString().split('T')[0], todayDate.toISOString().split('T')[0]];
const datePlotly = writable(dateArray);

export {datePlotly}
