<script>

import { writable } from 'svelte/store';
import { dev } from '$app/environment';
// import { SvelteToast } from '@zerodevx/svelte-toast';
// import { SvelteToast } from 'local-svelte-toast';
import Sidebar from './Sidebar.svelte';
import Topbar from './Topbar.svelte';
// import { keydownIsEscape } from '../../lib/utils.js';

export let data;
let sidebarIsOpen = writable(false);
let dropdownMenuIsOpen = writable(false);
// let toastOptions = {
//   duration: 3000,
//   dismissable: false,
//   theme: {
//   }
// }

function handleKeydownOnWindow (ev) {

	// reference: https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key

	if (keydownIsEscape(ev)) {
		$sidebarIsOpen = false;
		$dropdownMenuIsOpen = false;
	}
}

</script>

<div class="flex h-full" class:debug-screens={dev}>
  <Sidebar {sidebarIsOpen} />

  <!-- Content area -->
  <div class="flex flex-1 flex-col overflow-hidden">
    <Topbar {sidebarIsOpen} {dropdownMenuIsOpen} auth={data.locals.auth}/>

    <!-- Main content -->
    <div class="flex flex-1 items-stretch overflow-hidden Xborder-[5px] Xborder-red-400">
      <slot />
    </div>
  </div>
</div>
