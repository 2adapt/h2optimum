import { c as create_ssr_component, b as add_attribute, s as subscribe, f as set_store_value, e as escape, a as each, v as validate_component } from "./index.js";
import { d as datePlotly, c as customShapes } from "./stores2.js";
import { w as writable } from "./index3.js";
/* empty css         */import { p as page } from "./stores.js";
import "devalue";
import { a as refreshGraph, u as unpack, b as addYear, g as getTraceName, c as getRecommendedThresholds } from "./utils.js";
import "./index2.js";
import "clipboard";
const LoadMap = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { props } = $$props;
  let MapContainer;
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  return `<div class="relative transform overflow-hidden bg-white px-4 pb-1 pt-1 text-center shadow-xl transition-all"${add_attribute("this", MapContainer, 0)}></div>`;
});
const CardGraphTemp = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedDevices, $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => $selectedDevices = value);
  let { props } = $$props;
  let P;
  let graphContainer;
  let searchParams;
  let unitTypes = ["t", "tar"];
  let dateArray;
  datePlotly.subscribe((value) => {
    dateArray = value;
  });
  let shapesValues = [20, 30];
  async function generateCompare(devs) {
    let activeTraces = graphContainer.data;
    let indexesToRemove = activeTraces.map((element, index) => {
      if (element.compare == true) {
        return index;
      }
    }).filter((element) => element >= 0);
    if (indexesToRemove.length > 0) {
      P.deleteTraces(graphContainer, indexesToRemove);
    } else {
      var fromYearAgo = new Date(dateArray[0]);
      var toYearAgo = new Date(dateArray[1]);
      fromYearAgo.setFullYear(fromYearAgo.getFullYear() - 1);
      toYearAgo.setFullYear(toYearAgo.getFullYear() - 1);
      fromYearAgo.setDate(fromYearAgo.getDate() + 1);
      toYearAgo.setDate(toYearAgo.getDate() + 1);
      for (let device of devs) {
        searchParams = new URLSearchParams({
          from_date: fromYearAgo.toISOString().split("T")[0],
          to_date: toYearAgo.toISOString().split("T")[0],
          //from_date: "2023-05-08",
          //to_date: "2023-05-15",
          device_mac: device.mac,
          installation_id: device.installation_id
        });
        let res = await fetch(`https://api.h2optimum.2adapt.pt/api/v2/measurement?${searchParams.toString()}`);
        let list = await res.json();
        unitTypes.forEach((unit) => {
          var traceName = getTraceName(unit);
          var filteredList = list.filter((obj) => obj.type === unit);
          var datesStr = unpack("ts", filteredList);
          let datesYearAdded = datesStr.map((element) => {
            return addYear(element);
          });
          var trace = {
            x: datesYearAdded,
            y: unpack("val", filteredList),
            name: "(C) " + device.description + traceName,
            type: "scatter",
            opacity: 0.2,
            compare: true
          };
          P.addTraces(graphContainer, trace);
        });
      }
    }
  }
  async function compareGraph() {
    console.log("Generated");
    refreshGraph($selectedDevices, props, shapesValues, generateCompare);
  }
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  if ($$props.compareGraph === void 0 && $$bindings.compareGraph && compareGraph !== void 0)
    $$bindings.compareGraph(compareGraph);
  $$unsubscribe_selectedDevices();
  return `<div class="h-[50vh] md:h-[100vh] lg:h-[50vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>`;
});
const CardGraphHumidity = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => value);
  let { props } = $$props;
  let graphContainer;
  datePlotly.subscribe((value) => {
  });
  let shapesValues;
  customShapes.subscribe((value) => {
    shapesValues = value;
  });
  if (!shapesValues) {
    shapesValues = [
      getRecommendedThresholds(props.soilTypeCode, "saturated", 1),
      getRecommendedThresholds(props.soilTypeCode, "wet", 1),
      getRecommendedThresholds(props.soilTypeCode, "irrigate", 1)
    ];
  }
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  $$unsubscribe_selectedDevices();
  return `<div class="h-[50vh] md:h-[100vh] lg:h-[50vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>`;
});
const CardGraphBattery = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_selectedDevices;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => value);
  let { props } = $$props;
  let graphContainer;
  datePlotly.subscribe((value) => {
  });
  if ($$props.props === void 0 && $$bindings.props && props !== void 0)
    $$bindings.props(props);
  $$unsubscribe_selectedDevices();
  return `<div class="h-[50vh] md:h-[100vh] lg:h-[50vh] w-full"${add_attribute("this", graphContainer, 0)}><!-- Plotly --></div>`;
});
let selectedDevices = writable({});
const Installation = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $selectedDevices, $$unsubscribe_selectedDevices;
  let $page, $$unsubscribe_page;
  $$unsubscribe_selectedDevices = subscribe(selectedDevices, (value) => $selectedDevices = value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { data } = $$props;
  let currentPath = $page.url.pathname;
  let CardGraphTempComp;
  let diagIcon;
  let diagDesc;
  let isInstallationOwner = false;
  let urlArray = $page.url.pathname.split("/");
  if (!urlArray.includes("public")) {
    isInstallationOwner = true;
  }
  let publicLink = $page.url.origin + "/public/" + urlArray[3];
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
  let errorsObj = {};
  set_store_value(selectedDevices, $selectedDevices = {}, $selectedDevices);
  data.listDevices.forEach((device) => {
    set_store_value(selectedDevices, $selectedDevices[device.id] = true, $selectedDevices);
  });
  data.installation.graph = true;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<!--* SUMMARY + DEVICES -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li class="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center text-stone-500 shadow">
		<div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Sumário</h3>
				</div>
				<div class="ml-4 mt-2 flex-shrink-0">
					${escape(data.installation.name)}
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
						Diagnóstico:
					</div>
				</div>
				<div class="sm:flex sm:flex-col sm:items-end relative">
					${Object.keys(errorsObj).length > 0 ? `<span${add_attribute("title", JSON.stringify(errorsObj), 0)}${add_attribute("this", diagIcon, 0)}>
							<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"></path></svg>
						</span>
						<span class="hidden absolute right-0 p-2 top-7 z-10 w-[70vw] sm:w-[30vw] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none "${add_attribute("this", diagDesc, 0)}> </span>` : `<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`}
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						Tipo de solo:
					</div>
				</div>
				<div class="sm:flex sm:flex-col sm:items-end">
					${escape(data.installation.soilTypeCode)}
				</div>
			</li>
			<li class="flex justify-between gap-x-6 p-5">
				<div class="flex gap-x-4">
					<div class="min-w-0 flex-auto">
						Link público:
					</div>
				</div>
				<div class="sm:flex sm:flex-col sm:items-end">
					<div>
						<div class="mt-2 flex rounded-md shadow-sm">
							<div class="relative flex flex-grow items-stretch focus-within:z-10">
								<input id="publicUrl"${add_attribute("value", publicLink, 0)} type="text" readonly class="w-full"> 
							</div>
						  	<button type="button" data-clipboard-target="#publicUrl" class="btn relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>								  
								Copiar
						  	</button>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</li>

	<li class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow">
		<div class="border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Dispositivos</h3>
				</div>
				${isInstallationOwner ? `<div class="ml-4 mt-2 flex-shrink-0">
						<button type="button" class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 pr-1"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd"></path></svg>
							Adicionar</button>
					</div>` : ``}
			</div>
		</div>
		<ul class="divide-y divide-dotted divide-gray-100">
			<li class="grid grid-cols-3 gap-4 p-4 text-start">
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Descrição </p>
				</div>
				<div class="min-w-0 flex-auto">
					<p class="text-sm font-semibold leading-6"> Última Leitura </p>
				</div>
				<div class="min-w-0 flex-auto md:block hidden">
					<p class="text-sm font-semibold leading-6"> Mac Address </p>
				</div>
			</li>

			<!-- START FOR HERE-->
			${each(data.listDevices, (device) => {
      return `<li class="grid grid-cols-3 gap-4 p-4 text-start">
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							${escape(device.description)}
						</p>
					</div>
					<div class="min-w-0 flex-auto">
						<p class="text-sm leading-6">
							${escape(device.last_reading_formatted)}
						</p>
					</div>
					<div class="flex min-w-0 justify-between items-center relative">
						<p class="text-sm leading-6 md:block hidden">
							${escape(device.mac)}
						</p>
						<input id="visible-checkbox" type="checkbox" class="h-4 w-4 rounded text-sky-600 focus:ring-2 focus:ring-blue-500 dark:ring-offset-gray-800 dark:focus:ring-blue-600"${add_attribute("checked", $selectedDevices[device.id], 1)}>
						${isInstallationOwner ? `<button class="text-sm leading-6">
								<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>
							</button>
							<div class="absolute right-0 top-7 z-10 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display:none;" data-transition-enter="" data-transition-enter-start="" data-transition-enter-end="" data-transition-leave="" data-transition-leave-start="" data-transition-leave-end="">
									<!-- Active: "bg-gray-100", Not Active: "" -->
									<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-0">Editar</a>

									<div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">
									<!--
									<form method="POST" action="/logout">
										<button type="submit" class="">Terminar sessão</button>
									</form>
									-->
									<form class="" method="POST" action="${escape(currentPath, true) + "?/deleteDevice"}">
									<button type="submit" class="">Apagar
									</button>
									<input type="hidden" id="ID" name="ID"${add_attribute("value", device.id, 0)}> 
									</form>
									
									</div>
									<!-- 
									<a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
								</div>
									-->              
							</div>` : ``}
					</div>
				</li>`;
    })}
			<!--END FOR HERE-->
		</ul>
	</li>
</ul>
<!--* END SUMMARY + DEVICES -->

<!--* MEASUREMENTS-->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Temperatura</h3>
				</div>
				<div class="flex">
					<div class="ml-4 mt-2 flex-shrink-0">				
						<button title="Compara com o mesmo período do ano passado" class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Comparar com ano anterior</button>
					</div>
					<div class="ml-2 mt-2 flex-shrink-0">				
						<button class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Abrir</button>
					</div>
				</div>

			</div>
		</div>
		${validate_component(CardGraphTemp, "CardGraphTemp").$$render(
      $$result,
      {
        props: data.listDevices,
        this: CardGraphTempComp
      },
      {
        this: ($$value) => {
          CardGraphTempComp = $$value;
          $$settled = false;
        }
      },
      {}
    )}
	</li>
	<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Potencial hídrico</h3>
				</div>
				<div class="relative ml-4 mt-2 flex-shrink-0">
					<!--<input
						type="text"
						bind:this="{flatContainer}"
						id="flatPickrTemp"
						class="h-10 w-60 text-sm text-gray-500"
					/>-->
					<div class="flex">
					<button class="text-sm leading-6">
						<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"></path></svg>
					</button>
					<div class="absolute right-0 top-7 z-10 w-52 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display:none;" data-transition-enter="" data-transition-enter-start="" data-transition-enter-end="" data-transition-leave="" data-transition-leave-start="" data-transition-leave-end="">
						<a class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-0">Editar thresholds</a>

						<div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">

						<a href=""><button type="submit" class="">Descarregar CSV</button></a>
						
						</div>           
					</div>
						<div class="ml-2 flex-shrink-0">				
							<button class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Abrir</button>
						</div>
					</div>
				</div>
			</div>
		</div>
		${validate_component(CardGraphHumidity, "CardGraphHumidity").$$render($$result, { props: data.listDevices }, {}, {})}
	</li>
</ul>
<!--* END MEASUREMENTS -->

<!--* BATTERY + MAP -->
<ul class="grid grid-cols-1 gap-6 p-5 sm:grid-cols-1 lg:grid-cols-2">
	<li class="col-span-1 flex flex-col divide-y divide-gray-200 bg-white text-center text-neutral-50 shadow">
		<div class="rounded-t-lg border-b border-gray-200 bg-sky-500 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Bateria</h3>
				</div>
				<div class="flex">
					<div class="ml-2 mt-2 flex-shrink-0">				
						<button class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Abrir</button>
					</div>
				</div>
			</div>
		</div>
		${validate_component(CardGraphBattery, "CardGraphBattery").$$render($$result, { props: data.listDevices }, {}, {})}
	</li>

	<li class="col-span-1 flex flex-col divide-y rounded-lg bg-sky-500 text-center text-stone-50 shadow">
		<div class="border-b border-gray-200 px-4 py-5 sm:px-6">
			<div class="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
				<div class="ml-4 mt-2">
					<h3 class="text-base font-semibold leading-6">Mapa</h3>
				</div>
				<div class="ml-4 mt-2 flex-shrink-0">
					<button type="button" class="rounded-md bg-neutral-50 px-2.5 py-1.5 text-sm text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">
						Abrir mapa</button>
				</div>
			</div>
		</div>
		${validate_component(LoadMap, "LoadMap").$$render($$result, { props: propsToMapPage }, {}, {})}
	</li>
</ul>
<!--* END BATTERY + MAP -->`;
  } while (!$$settled);
  $$unsubscribe_selectedDevices();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Installation as I
};
