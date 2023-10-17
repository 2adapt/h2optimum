<script>

    import { writable } from 'svelte/store';
    import { dev } from '$app/environment';
    import Topbar from '../../backoffice/Topbar.svelte';   
    
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
    
    <div class="flex h-full pointer-events-auto" class:debug-screens={dev}>    
      <!-- Content area -->
      <div class="flex flex-1 flex-col">
        <Topbar {sidebarIsOpen} {dropdownMenuIsOpen} auth={data.locals.auth}/>
    
        <!-- Main content -->
          <slot />
      </div>
    </div>
    