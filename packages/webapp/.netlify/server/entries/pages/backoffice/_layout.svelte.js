import { c as create_ssr_component, s as subscribe, f as set_store_value, b as add_attribute, e as escape, v as validate_component } from "../../../chunks/index.js";
import { w as writable } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
import { d as datePlotly } from "../../../chunks/stores2.js";
import "flatpickr";
import "devalue";
const logo = "/_app/immutable/assets/logo.c66aafc1.svg";
const Sidebar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $sidebarIsOpen, $$unsubscribe_sidebarIsOpen;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { sidebarIsOpen } = $$props;
  $$unsubscribe_sidebarIsOpen = subscribe(sidebarIsOpen, (value) => $sidebarIsOpen = value);
  if ($$props.sidebarIsOpen === void 0 && $$bindings.sidebarIsOpen && sidebarIsOpen !== void 0)
    $$bindings.sidebarIsOpen(sidebarIsOpen);
  {
    {
      set_store_value(sidebarIsOpen, $sidebarIsOpen = false, $sidebarIsOpen);
    }
  }
  $$unsubscribe_sidebarIsOpen();
  $$unsubscribe_page();
  return `<!-- Narrow sidebar -->
  <div class="hidden w-28 overflow-y-auto bg-sky-500 lg:block scrollbar-custom">
    <div class="flex w-full flex-col items-center">
<!-- 
      <div class="flex flex-shrink-0 items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
      </div>
 -->      
      <div class="Xmt-6 w-full flex-1 space-y-1 px-2">
        <!-- Current: "bg-sky-600 text-white", Default: "text-blue-100 hover:bg-sky-400 hover:text-white" -->
        <!--
        <a href="/testecards" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id === '/testecards' ? 'bg-sky-600 text-white' : 'text-blue-100 hover:bg-sky-400 hover:text-white'}
        ">
          <svg class="text-blue-100 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="mt-2">Início</span>
        </a>
        -->
        <a href="/backoffice" class="group flex w-full flex-col items-center rounded-md text-xs font-medium">
          <img${add_attribute("src", logo, 0)}>
        </a>

        <a href="/backoffice/installations" class="${"group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium " + escape(
    $page.route.id.startsWith("/backoffice/installations") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}">
          <svg class="text-blue-100 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
          <span class="mt-2">Instalações</span>
        </a>

        ${$page.data && $page.data.locals && $page.data.locals.auth && $page.data.locals.auth.credentials ? `${$page.data.locals.auth.credentials.is_admin ? `<a href="/backoffice/users" class="${"group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium " + escape(
    $page.route.id.startsWith("/backoffice/users") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}" aria-current="page">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg>        
          <span class="mt-2">Utilizadores</span>
        </a>` : ``}` : ``}


        <a href="/backoffice/weather" class="${"group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium " + escape(
    $page.route.id.startsWith("/backoffice/weather") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg>        
          <span class="mt-2">Meteorologia</span>
        </a>

        <a href="/backoffice/help" class="${"group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium " + escape(
    $page.route.id.startsWith("/backoffice/help") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}">
          <svg class="text-blue-100 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path></svg>
          <span class="mt-2">Ajuda</span>
        </a>

<!--
        {#if $page.data && $page.data.locals && $page.data.locals.auth && $page.data.locals.auth.credentials}
          {#if $page.data.locals.auth.credentials.is_admin}

          <a href="/testecards/config" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
          {$page.route.id.startsWith('/testecards/config') ? 'bg-sky-600 text-white' : 'text-blue-100 hover:bg-sky-400 hover:text-white'}
          ">
            <svg class="text-blue-100 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
            </svg>
            <span class="mt-2">Configurações</span>
          </a>
                      
          {/if}
        {/if}
-->

      </div>
    </div>
  </div>

  <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  -->
  <div class="relative z-20 md:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu backdrop, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" style="display:none;" data-transition-enter="transition-opacity ease-linear duration-300" data-transition-enter-start="opacity-0" data-transition-enter-end="opacity-100" data-transition-leave="transition-opacity ease-linear duration-300" data-transition-leave-start="opacity-100" data-transition-leave-end="opacity-0"></div>

    <div class="fixed inset-0 z-40 flex" style="display:none;" data-transition-enter="transition ease-in-out duration-500 transform" data-transition-enter-start="" data-transition-enter-end="" data-transition-leave="transition ease-in-out duration-500 transform" data-transition-leave-start="" data-transition-leave-end="">
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative flex w-full max-w-xs flex-1 flex-col bg-sky-500 Xpt-5 Xpb-4" style="display:none;" data-transition-enter="transition ease-in-out duration-300 transform" data-transition-enter-start="-translate-x-full" data-transition-enter-end="translate-x-0" data-transition-leave="transition ease-in-out duration-300 transform" data-transition-leave-start="translate-x-0" data-transition-leave-end="-translate-x-full">
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-1 right-0 -mr-14 p-1" style="display:none;" data-transition-enter="ease-in-out duration-300" data-transition-enter-start="opacity-0" data-transition-enter-end="opacity-100" data-transition-leave="ease-in-out duration-300" data-transition-leave-start="opacity-100" data-transition-leave-end="opacity-0">
          <button type="button" class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white">
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>
<!-- 
        <div class="flex flex-shrink-0 items-center px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
        </div>
 -->        
        <div class="py-4 Xmt-5 h-0 flex-1 px-2 overflow-y-auto bg-sky-500 md:block scrollbar-custom">
          <nav class="flex h-full flex-col">
            <div class="space-y-1">
              <!-- Current: "bg-sky-600 text-white", Default: "text-blue-100 hover:bg-sky-400 hover:text-white" -->
<!--
              <a href="/testecards" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id === '/testecards' ? 'bg-sky-600 text-white' : 'text-blue-100 hover:bg-sky-400 hover:text-white'}
              "

              >
                <svg class="text-blue-100 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Início</span>
              </a>
-->
              <a href="/backoffice/installations" class="${"group flex items-center rounded-md py-2 px-3 text-sm font-medium " + escape(
    $page.route.id.startsWith("/backoffice/installations") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}">
                <svg class="text-blue-100 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"></path></svg>
                <span>Instalações</span>
              </a>

              ${$page.data && $page.data.locals && $page.data.locals.auth && $page.data.locals.auth.credentials ? `${$page.data.locals.auth.credentials.is_admin ? `<a href="/backoffice/users" class="${"group flex items-center rounded-md py-2 px-3 text-sm font-medium " + escape(
    $page.route.id.startsWith("/backoffice/users") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path></svg>              
                <span>Utilizadores</span>
              </a>` : ``}` : ``}

              <a href="/backoffice/weather" class="${"group flex items-center rounded-md py-2 px-3 text-sm font-medium " + escape(
    $page.route.id.startsWith("/backoffice/weather") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}" aria-current="page">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path></svg> 
                <span>Meteorologia</span>
              </a>

              <a href="/backoffice/help" class="${"group flex items-center rounded-md py-2 px-3 text-sm font-medium " + escape(
    $page.route.id.startsWith("/backoffice/help") ? "bg-sky-600 text-white" : "text-blue-100 hover:bg-sky-400 hover:text-white",
    true
  )}">
                <svg class="text-blue-100 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"></path></svg>
                <span>Ajuda</span>
              </a>

<!--
              <a href="/testecards/config" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id.startsWith('/testecards/config') ? 'bg-sky-600 text-white' : 'text-blue-100 hover:bg-sky-400 hover:text-white'}
              ">
                <svg class="text-blue-100 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
                </svg>
                <span>Configurações</span>
              </a>
-->
            </div>
          </nav>
        </div>
      </div>

      <div class="w-14 flex-shrink-0" aria-hidden="true">
        <!-- Dummy element to force sidebar to shrink to fit close icon -->
      </div>
    </div>
  </div>`;
});
const flatpickr_min = "";
const Topbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_dropdownMenuIsOpen;
  let $page, $$unsubscribe_page;
  let $$unsubscribe_sidebarIsOpen;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let { sidebarIsOpen } = $$props;
  $$unsubscribe_sidebarIsOpen = subscribe(sidebarIsOpen, (value) => value);
  let { dropdownMenuIsOpen } = $$props;
  $$unsubscribe_dropdownMenuIsOpen = subscribe(dropdownMenuIsOpen, (value) => value);
  let { auth } = $$props;
  let flatContainer;
  let dropdownMenuButton;
  let currentPath;
  let dateArray;
  let dropdownFlatButton;
  datePlotly.subscribe((value) => {
    dateArray = value;
  });
  if (!dateArray) {
    let todayDate = /* @__PURE__ */ new Date();
    let lastWeekDate = /* @__PURE__ */ new Date();
    lastWeekDate.setDate(todayDate.getDate() - 7);
    dateArray = [
      lastWeekDate.toISOString().split("T")[0],
      todayDate.toISOString().split("T")[0]
    ];
  }
  if ($$props.sidebarIsOpen === void 0 && $$bindings.sidebarIsOpen && sidebarIsOpen !== void 0)
    $$bindings.sidebarIsOpen(sidebarIsOpen);
  if ($$props.dropdownMenuIsOpen === void 0 && $$bindings.dropdownMenuIsOpen && dropdownMenuIsOpen !== void 0)
    $$bindings.dropdownMenuIsOpen(dropdownMenuIsOpen);
  if ($$props.auth === void 0 && $$bindings.auth && auth !== void 0)
    $$bindings.auth(auth);
  {
    {
      currentPath = $page.url.pathname;
    }
  }
  $$unsubscribe_dropdownMenuIsOpen();
  $$unsubscribe_page();
  $$unsubscribe_sidebarIsOpen();
  return `


    <header class="w-full">
      <div class="relative z-10 flex h-10 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500 md:hidden">
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"></path></svg>
        </button>

        <div class="flex flex-1 justify-between px-4 sm:px-6">       

          <div class="flex flex-1 ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">          
          <!--{#if currentPath.startsWith('/backoffice/installations/')}
            <div class="items-center"><h1>{$installationName}</h1></div>
          {/if}-->
<!-- 
            <form class="flex w-full md:ml-0">
              <label for="search-field" class="sr-only">Search all files</label>
              <div class="relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                  <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input name="search-field" id="search-field" class="h-full w-full border-0 py-2 pl-8 pr-3 text-gray-900 focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm" placeholder="Search" type="search">
              </div>
            </form>
 -->
          </div>
          <div class="ml-2 flex items-center space-x-4 sm:ml-6 sm:space-x-6">
          ${currentPath.startsWith("/backoffice/installations/") ? `<div>
            <div class="flex rounded-md shadow-sm">
              <div class="relative flex flex-grow items-stretch focus-within:z-10">
                <input type="text" id="flatPickrTemp" class="block rounded-l-md border-0 text-gray-500 ring-1 ring-inset ring-gray-300 text-sm leading-6 w-[20vh]"${add_attribute("this", flatContainer, 0)}>
              </div>
              <button type="button" class="relative -ml-px inline-flex items-center gap-x-1.5 rounded-r-md px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50"${add_attribute("this", dropdownFlatButton, 0)}>
                <!--<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                </svg> -->    
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"></path></svg>                   
              </button>
            </div>
            <div class="absolute right-0 z-10 mr-5 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display:none;" data-transition-enter="" data-transition-enter-start="" data-transition-enter-end="" data-transition-leave="" data-transition-leave-start="" data-transition-leave-end="">
              <a value="24" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Últimas 24horas</a>
              <a value="72" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Últimas 72horas</a>
              <a value="semana" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Última semana</a>
              <a value="mes" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Último mês</a>
              <a value="ano" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Último ano</a>
          </div>

          </div>` : ``}
          ${currentPath == "/backoffice/installations" ? `<button type="button" class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-5 w-5 pr-1"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z" clip-rule="evenodd"></path></svg>
          Adicionar</button>` : ``}
            <!-- Profile dropdown -->
            <div class="relative flex-shrink-0">
              <div>
                <button type="button" class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true"${add_attribute("this", dropdownMenuButton, 0)}>
                  <!-- <span class="sr-only">Open user menu</span> -->
<!-- 
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
 -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9"><path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>



                </button>
              </div>

              <!--
                Dropdown menu, show/hide based on menu state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              -->
              <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1" style="display:none;" data-transition-enter="" data-transition-enter-start="" data-transition-enter-end="" data-transition-leave="" data-transition-leave-start="" data-transition-leave-end="">
                <!-- Active: "bg-gray-100", Not Active: "" -->
                <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-0">Página inicial</a>

                <div class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">
                  <!--
                  <form method="POST" action="/logout">
                      <button type="submit" class="">Terminar sessão</button>
                  </form>
                  -->
                  <a href="/logout"><button type="submit" class="">Terminar sessão</button></a>
                  
                </div>
<!-- 
                <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" tabindex="-1" id="user-menu-item-1">Terminar sessão</a>
              </div>
 -->              
            </div>
<!-- 
            <button type="button" class="flex items-center justify-center rounded-full bg-sky-400 p-1 text-white hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span class="sr-only">Add file</span>
            </button>
 -->            
          </div>
        </div>
      </div>
    </div></header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_dropdownMenuIsOpen;
  let $$unsubscribe_sidebarIsOpen;
  let { data } = $$props;
  let sidebarIsOpen = writable(false);
  $$unsubscribe_sidebarIsOpen = subscribe(sidebarIsOpen, (value) => value);
  let dropdownMenuIsOpen = writable(false);
  $$unsubscribe_dropdownMenuIsOpen = subscribe(dropdownMenuIsOpen, (value) => value);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  $$unsubscribe_dropdownMenuIsOpen();
  $$unsubscribe_sidebarIsOpen();
  return `<div class="${["flex h-full pointer-events-auto", ""].join(" ").trim()}">
  ${validate_component(Sidebar, "Sidebar").$$render($$result, { sidebarIsOpen }, {}, {})}

  <!-- Content area -->
  <div class="flex flex-1 flex-col overflow-hidden">
    ${validate_component(Topbar, "Topbar").$$render(
    $$result,
    {
      sidebarIsOpen,
      dropdownMenuIsOpen,
      auth: data.locals.auth
    },
    {},
    {}
  )}

    <!-- Main content -->
    <div class="flex flex-1 items-stretch overflow-hidden Xborder-[5px] Xborder-red-400">
      ${slots.default ? slots.default({}) : ``}
    </div>
  </div>
</div>`;
});
export {
  Layout as default
};
