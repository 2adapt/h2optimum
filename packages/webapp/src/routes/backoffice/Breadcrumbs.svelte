<script>


export let level0 = '';
export let url0 = '';

export let level1 = null;
export let url1 = null;

export let level2 = null;
export let url2 = null;

export let level3 = null;
export let url3 = null;

</script>

<nav class="flex Xborder border-gray-500 py-4 h-14" aria-label="Breadcrumb">
  <ol role="list" class="flex items-center space-x-4">
    <li>
      <div>

        {#if level0 === ''}
        <a href="{url0}" class="text-gray-400 hover:text-gray-500">
          <svg class="h-5 w-5 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z" clip-rule="evenodd" />
          </svg>
          <span class="sr-only">{level0}</span>
        </a>
        {:else}
        <a href="{url0}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{level0}</a>
        {/if}


      </div>
    </li>

    {#if level1 != null && url1 != null}
      
    <li>
      <div class="flex items-center">
        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
        <a href="{url1}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">{level1}</a>
      </div>
    </li>

    {/if}

    {#if level2 != null && url2 != null}
      
    <li>
      <div class="flex items-center">
        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
        <a href="{url2}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">{level2}</a>
      </div>
    </li>

    {/if}

    {#if level3 != null && url3 != null}
      
    <li>
      <div class="flex items-center">
        <svg class="h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
        </svg>
        <a href="{url3}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700" aria-current="page">{level3}</a>
      </div>
    </li>

    {/if}

  </ol>
</nav>