<script>
    import "../app.css";
    import MyModal from "$lib/components/MyModal.svelte";   
    import { browser } from '$app/environment';
    export let data;
    import { page } from '$app/stores';

    $: auth = data.locals.auth;
        
    $: path = $page.route.id;    


</script>



{#if auth.isAuthenticated == true}
    <p>{auth.artifacts.user_email}</p>
    <a href="/logout">
        <button  class="ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Logout</button>
    </a>
{:else}
    {#if path != "/login"}
        <a href="/login">
            <button class="ml-1 flex justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Login</button>
        </a>
    {/if}
{/if}

<slot />

{#if browser}
    <MyModal />
{/if}
