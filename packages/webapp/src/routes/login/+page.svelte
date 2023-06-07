<script>
    export let form;
    import { onMount } from 'svelte';
    export let data;

    onMount(() => {
        if(data.locals.auth.isAuthenticated == true){
            window.location.reload(true);
        }
    });
</script>
<div class="text-center">
    <h2>Login</h2>
    <form class="space-y-6 w-[20vw] inline-block mt-5" method="POST">
        <div>
            <label for="Email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div class="mt-2">
            <input id="email" name="email" type="email"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
            </div>
        </div>
        {#if form?.missing}<p class="error">The email field is required</p>{/if}
    
       <div>
           <label for="Password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
           <div class="mt-2">
               <input id="password" name="password" type="password"  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-500 sm:text-sm sm:leading-6">
           </div>
       </div>
       {#if form?.incorrect}<p class="error">Invalid credentials!</p>{/if}
    
    
       <div class="flex flex-nowrap">
        <button type="submit" class="ml-1 flex w-full justify-center rounded-md bg-sky-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-500">Login</button>
       </div>
    </form>
</div>