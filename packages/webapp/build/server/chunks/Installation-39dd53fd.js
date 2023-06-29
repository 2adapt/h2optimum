import { c as create_ssr_component, a as subscribe, f as set_store_value, e as escape, b as each, d as add_attribute, v as validate_component } from './index3-a7d75b1a.js';
import { w as writable } from './index2-e2f371e8.js';
import { p as page } from './stores-084954a6.js';
import 'flatpickr';

const LoadMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  let MapContainer;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  return `<div class="relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all"${add_attribute("this", MapContainer, 0)}></div>`;
});
let todayDate = /* @__PURE__ */ new Date();
let lastWeekDate = /* @__PURE__ */ new Date();
lastWeekDate.setDate(todayDate.getDate() - 7);
let dateArray = [lastWeekDate.toISOString().split("T")[0], todayDate.toISOString().split("T")[0]];
const datePlotly = writable(dateArray);
const CardGraphTemp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => value);
  let { devices } = $$props;
  let graphContainer;
  let flatContainer;
  datePlotly.subscribe((value) => {
  });
  if ($$props.devices === void 0 && $$bindings.devices && devices !== void 0)
    $$bindings.devices(devices);
  $$unsubscribe_selectedDevices();
  return `<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
	<div class="h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">MEASUREMENTS TEMPERATURE</h3>
			</div>
			<div class="ml-4 mt-2 flex-shrink-0">				
				<button title="Compare with same period last year" class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Compare</button>
				<input type="text" id="flatPickrTemp" class="h-10 w-60 text-sm text-gray-500"${add_attribute("this", flatContainer, 0)}>
				<button class="text-sm leading-6">
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>
				</button>
			</div>
		</div>
	</div>
	<div class="h-[40vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>
</li>`;
});
const CardGraphHumidity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => value);
  let { devices } = $$props;
  let graphContainer;
  let flatContainer;
  datePlotly.subscribe((value) => {
  });
  if ($$props.devices === void 0 && $$bindings.devices && devices !== void 0)
    $$bindings.devices(devices);
  $$unsubscribe_selectedDevices();
  return `<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
	<div class="h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">MEASUREMENTS HUMIDITY</h3>
			</div>
			<div class="ml-4 mt-2 flex-shrink-0">
				<input type="text" id="flatPickrTemp" class="h-10 w-60 text-sm text-gray-500"${add_attribute("this", flatContainer, 0)}>
			</div>
		</div>
	</div>
	<div class="h-[40vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>
</li>`;
});
const CardGraphBattery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => value);
  let { devices } = $$props;
  let graphContainer;
  let flatContainer;
  datePlotly.subscribe((value) => {
  });
  if ($$props.devices === void 0 && $$bindings.devices && devices !== void 0)
    $$bindings.devices(devices);
  $$unsubscribe_selectedDevices();
  return `<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
	<div class="h-24 rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
		<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
			<div class="ml-4 mt-2">
				<h3 class="text-base font-semibold leading-6">MEASUREMENTS BATTERY</h3>
			</div>
			<div class="ml-4 mt-2 flex-shrink-0">
				<input type="text" id="flatPickrTemp" class="h-10 w-60 text-sm text-gray-500"${add_attribute("this", flatContainer, 0)}>
			</div>
		</div>
	</div>
	<div class="h-[40vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>
</li>`;
});
let selectedDevices = writable({});
const Installation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedDevices, $$unsubscribe_selectedDevices;
  let $page, $$unsubscribe_page;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => $selectedDevices = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let isInstallationOwner = false;
  let urlArray = $page.url.pathname.split("/");
  if (!urlArray.includes("public")) {
    isInstallationOwner = true;
  }
  ({
    coordinates: {
      lat: data.installation.location.lat,
      lon: data.installation.location.lon
    },
    size: "full"
  });
  let propsToMapPage = {
    coordinates: {
      lat: data.installation.location.lat,
      lon: data.installation.location.lon
    },
    size: "md"
  };
  set_store_value(selectedDevices, $selectedDevices = {}, $selectedDevices);
  data.installation.devices.forEach((device) => {
    set_store_value(selectedDevices, $selectedDevices[device.id] = true, $selectedDevices);
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_selectedDevices();
  $$unsubscribe_page();
  return `<!--* SUMMARY + DEVICES -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	<li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow">
		<div class="h-24 border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">SUMMARY</h3>
				</div>
				<!--<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Create new job</button>
				</div>-->
			</div>
		</div>
		<ul>
			<!-- <li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6 font-semibold">Status: Off</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">-->
			<!-- Enabled: "bg-indigo-600", Not Enabled: "bg-gray-200" -->
			<!--<button type="button" class="bg-gray-200 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2" role="switch" aria-checked="false">
						<span class="sr-only">Use setting</span>-->
			<!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
			<!--<span aria-hidden="true" class="translate-x-0 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"></span>
					</button>
				</div>
			 </li> -->
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6">Diagnostics:</p>
					</div>
				</div>
				<div class="hidden sm:flex sm:flex-col sm:items-end">
					<button type="button" class="rounded-md bg-sky-500 px-2.5 py-1.5 text-sm text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">DETAILS</button>
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6">Soil type: <span class="font-normal">${escape(data.installation.soilTypeCode)}</span></p>
					</div>
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						<p class="text-sm font-semibold leading-6">Crop type: <span class="font-normal">${escape(data.installation.cropTypeCode)}</span></p>
					</div>
				</div>
			</li>
		</ul>
	</li>

	<li class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow">
		<div class="h-24 border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">DEVICES</h3>
				</div>
				<!--{#if isInstallationOwner}-->
					<div class="ml-4 mt-2 flex-shrink-0">
						<button type="button" class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 pr-1"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd"></path></svg>
							NEW</button>
					</div>
				<!--{/if}-->
			</div>
		</div>
		<ul class="divide-y divide-dotted divide-gray-100">
			<li class="grid grid-cols-3 gap-4 p-4 text-start">
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Description </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Battery mode </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Last reading </p>
				</div>
			</li>

			<!-- START FOR HERE-->
			${each(data.installation.devices, (device) => {
    return `<li class="grid grid-cols-3 gap-4 p-4 text-start">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							${escape(device.description)}
						</p>
					</div>
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							${escape(device.battery_mode_code)}
						</p>
					</div>
					<div class="flex min-w-0 justify-between">
						<p class="text-sm leading-6">
							${escape(device.last_reading_formatted)}
						</p>
						<input id="visible-checkbox" type="checkbox" class="h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"${add_attribute("checked", $selectedDevices[device.id], 1)}>
						${isInstallationOwner ? `<button class="text-sm leading-6">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>
							</button>` : ``}
					</div>
				</li>`;
  })}
			<!--END FOR HERE-->
		</ul>
	</li>
</ul>
<!--* END SUMMARY + DEVICES -->

<!--* MEASUREMENTS-->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	${validate_component(CardGraphTemp, "CardGraphTemp").$$render($$result, { devices: data.installation.devices }, {}, {})}
	${validate_component(CardGraphHumidity, "CardGraphHumidity").$$render($$result, { devices: data.installation.devices }, {}, {})}
</ul>
<!--* END MEASUREMENTS -->

<!--* BATTERY + MAP -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 md:grid-cols-2">
	${validate_component(CardGraphBattery, "CardGraphBattery").$$render($$result, { devices: data.installation.devices }, {}, {})}
	<li class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow">
		<div class="h-24 border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">MAP</h3>
				</div>
				<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="relative inline-flex items-center rounded-md bg-neutral-50 px-2 py-1 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200">
						Open map</button>
				</div>
			</div>
		</div>
		${validate_component(LoadMap, "LoadMap").$$render($$result, { props: propsToMapPage }, {}, {})}
	</li>
</ul>
<!--* END BATTERY + MAP -->`;
});

export { Installation as I };
//# sourceMappingURL=Installation-39dd53fd.js.map
