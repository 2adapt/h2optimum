<script>
import { cssTransition } from '$lib/svelte-css-transitions'; 
// import { clickOutsideAction } from "svelte-legos";

export let sidebarIsOpen; // store
export let dropdownMenuIsOpen; // store
export let auth;

let dropdownMenuButton;

function handleClickOnOnWindow(ev) {

	if (dropdownMenuButton.contains(ev.target)) { return }

	$dropdownMenuIsOpen = false;
}

</script>

<svelte:window on:click={handleClickOnOnWindow}  />


    <header class="w-full">
      <div class="relative z-10 flex h-10 flex-shrink-0 border-b border-gray-200 bg-white shadow-sm">
        <button type="button" class="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 md:hidden"
        on:click="{() => { $sidebarIsOpen = !$sidebarIsOpen}}"
        >
          <span class="sr-only">Open sidebar</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
          </svg>
        </button>
        <div class="flex flex-1 justify-between px-4 sm:px-6">
          <div class="flex flex-1">
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
            <!-- Profile dropdown -->
            <div class="relative flex-shrink-0"
            >
              <div>
                <button type="button" class="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" id="user-menu-button" aria-expanded="false" aria-haspopup="true"
                on:click="{() => { $dropdownMenuIsOpen = !$dropdownMenuIsOpen }}"
                bind:this="{dropdownMenuButton}"
                >
                  <!-- <span class="sr-only">Open user menu</span> -->
<!-- 
                  <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="">
 -->
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>



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
              <div class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabindex="-1"
              style="display:none;"
              use:cssTransition={{ show: $dropdownMenuIsOpen }}
              data-transition-enter=""
              data-transition-enter-start=""
              data-transition-enter-end=""
              data-transition-leave=""
              data-transition-leave-start=""
              data-transition-leave-end=""
              
              

              >
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
            <button type="button" class="flex items-center justify-center rounded-full bg-blue-600 p-1 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span class="sr-only">Add file</span>
            </button>
 -->            
          </div>
        </div>
      </div>
    </header>