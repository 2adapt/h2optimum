import { writable } from 'svelte/store';

let todayDate = new Date();
let lastWeekDate = new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);
todayDate.setDate(todayDate.getDate() + 1);
let dateArray = [lastWeekDate.toISOString().split('T')[0], todayDate.toISOString().split('T')[0]];
const datePlotly = writable(dateArray);

const customShapes = writable();

const installationName = writable('Nome da instalação');

const filterInstallation = writable('active');


export {datePlotly, customShapes, installationName, filterInstallation}
