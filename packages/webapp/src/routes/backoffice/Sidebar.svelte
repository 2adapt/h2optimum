<script>
import { page } from '$app/stores';
import { cssTransition } from '$lib/svelte-css-transitions'; 
// import { clickOutsideAction } from "svelte-legos";

function clickOutsideAction() {}

export let sidebarIsOpen;

$: {
	// for small screen only: close the left menu (mobile) when there is a change in $page
	$page;

	$sidebarIsOpen = false;
}

</script>

  <!-- Narrow sidebar -->
  <div class="hidden w-28 overflow-y-auto bg-blue-700 lg:block scrollbar-custom">
    <div class="flex w-full flex-col items-center py-4">
<!-- 
      <div class="flex flex-shrink-0 items-center">
        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
      </div>
 -->      
      <div class="Xmt-6 w-full flex-1 space-y-1 px-2">
        <!-- Current: "bg-blue-800 text-white", Default: "text-blue-100 hover:bg-blue-600 hover:text-white" -->
        <!--
        <a href="/testecards" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id === '/testecards' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
        ">
          <svg class="text-blue-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          <span class="mt-2">Início</span>
        </a>
        -->

        <a href="/backoffice/installations" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id.startsWith('/backoffice/installations') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}"
        >
          <svg class="text-blue-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
          </svg>
          <span class="mt-2">Instalações</span>
        </a>

        <a href="/backoffice/users" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id.startsWith('/backoffice/users') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
        " aria-current="page">
          <svg class="text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          <span class="mt-2">Utilizadores</span>
        </a>

        <a href="/backoffice/weather" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id.startsWith('/backoffice/weather') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
        ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>        
          <span class="mt-2">Meteorologia</span>
        </a>

        <a href="/backoffice/help" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
        {$page.route.id.startsWith('/backoffice/help') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
        ">
          <svg class="text-blue-300 group-hover:text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
          </svg>
          <span class="mt-2">Ajuda</span>
        </a>

<!--
        {#if $page.data && $page.data.locals && $page.data.locals.auth && $page.data.locals.auth.artifacts}
          {#if $page.data.locals.auth.artifacts.isAdmin}

          <a href="/testecards/config" class="group flex w-full flex-col items-center rounded-md p-3 text-xs font-medium
          {$page.route.id.startsWith('/testecards/config') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
          ">
            <svg class="text-blue-300 group-hover:text-white h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
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
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75"
    style="display:none;"
    use:cssTransition={{ show: $sidebarIsOpen }}
    data-transition-enter="transition-opacity ease-linear duration-300"
    data-transition-enter-start="opacity-0"
    data-transition-enter-end="opacity-100"
    data-transition-leave="transition-opacity ease-linear duration-300"
    data-transition-leave-start="opacity-100"
    data-transition-leave-end="opacity-0"
    ></div>

    <div class="fixed inset-0 z-40 flex"
    style="display:none;"
    use:cssTransition={{ show: $sidebarIsOpen }}
    data-transition-enter="transition ease-in-out duration-500 transform"
    data-transition-enter-start=""
    data-transition-enter-end=""
    data-transition-leave="transition ease-in-out duration-500 transform"
    data-transition-leave-start=""
    data-transition-leave-end=""
    >
      <!--
        Off-canvas menu, show/hide based on off-canvas menu state.

        Entering: "transition ease-in-out duration-300 transform"
          From: "-translate-x-full"
          To: "translate-x-0"
        Leaving: "transition ease-in-out duration-300 transform"
          From: "translate-x-0"
          To: "-translate-x-full"
      -->
      <div class="relative flex w-full max-w-xs flex-1 flex-col bg-blue-700 Xpt-5 Xpb-4"
      style="display:none;"
      use:cssTransition={{ show: $sidebarIsOpen }}
      data-transition-enter="transition ease-in-out duration-300 transform"
      data-transition-enter-start="-translate-x-full"
      data-transition-enter-end="translate-x-0"
      data-transition-leave="transition ease-in-out duration-300 transform"
      data-transition-leave-start="translate-x-0"
      data-transition-leave-end="-translate-x-full"
      use:clickOutsideAction
      on:clickoutside="{() => { $sidebarIsOpen = false; }}"
      >
        <!--
          Close button, show/hide based on off-canvas menu state.

          Entering: "ease-in-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
          Leaving: "ease-in-out duration-300"
            From: "opacity-100"
            To: "opacity-0"
        -->
        <div class="absolute top-1 right-0 -mr-14 p-1"
        style="display:none;"
        use:cssTransition={{ show: $sidebarIsOpen }}
        data-transition-enter="ease-in-out duration-300"
        data-transition-enter-start="opacity-0"
        data-transition-enter-end="opacity-100"
        data-transition-leave="ease-in-out duration-300"
        data-transition-leave-start="opacity-100"
        data-transition-leave-end="opacity-0"
        >
          <button type="button" class="flex h-12 w-12 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-white"
          on:click="{() => { $sidebarIsOpen = !$sidebarIsOpen}}"
          >
            <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>
<!-- 
        <div class="flex flex-shrink-0 items-center px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=white" alt="Your Company">
        </div>
 -->        
        <div class="py-4 Xmt-5 h-0 flex-1 px-2 overflow-y-auto bg-blue-700 md:block scrollbar-custom">
          <nav class="flex h-full flex-col">
            <div class="space-y-1">
              <!-- Current: "bg-blue-800 text-white", Default: "text-blue-100 hover:bg-blue-600 hover:text-white" -->
<!--
              <a href="/testecards" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id === '/testecards' ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
              "

              >
                <svg class="text-blue-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <span>Início</span>
              </a>
-->
              <a href="/testecards/installations" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id.startsWith('/testecards/installations') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}"
              >
                <svg class="text-blue-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
                <span>Instalações</span>
              </a>

              <a href="/testecards/users" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id.startsWith('/testecards/users') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
              " aria-current="page">
                <svg class="text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                </svg>
                <span>Utilizadores</span>
              </a>

              <a href="/testecards/help" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id.startsWith('/testecards/help') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
              ">
                <svg class="text-blue-300 group-hover:text-white mr-3 h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z" />
                </svg>
                <span>Ajuda</span>
              </a>

<!--
              <a href="/testecards/config" class="group flex items-center rounded-md py-2 px-3 text-sm font-medium
              {$page.route.id.startsWith('/testecards/config') ? 'bg-blue-800 text-white' : 'text-blue-100 hover:bg-blue-600 hover:text-white'}
              ">
                <svg class="text-blue-300 group-hover:text-white mr-3 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
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
  </div>