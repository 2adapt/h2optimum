<script>
    import NewUserForm from '$lib/components/NewUserForm.svelte';
    import {showModal2} from '$lib/components/MyModal.svelte';
    export let data;
</script>

<div class="flex h-screen w-screen">

    <ul role="list" class="divide-y divide-gray-100 m-auto">
        <button
            on:click="{() => showModal2(NewUserForm)}"
            type="button"
            class="relative inline-flex items-center rounded-md bg-neutral-50 px-3 py-2 text-sm font-semibold text-stone-500 shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-200"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="h-5 w-5 pr-1"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                    clip-rule="evenodd"></path>
            </svg>
            Adicionar Utilizador</button
        >
        {#each data.users as user}	
        <li class="flex items-center justify-between gap-x-60 py-5">
            <div class="flex gap-x-4">
            <!--<img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">-->
            <div class="min-w-0 flex-auto">
                <p class="text-sm font-semibold leading-6 text-gray-900">{user.first_name} {user.last_name}</p>
                <p class="mt-1 truncate text-xs leading-5 text-gray-500">{user.email}</p>
            </div>
            </div>
            <div class="flex">
                <button on:click="{() => showModal2(NewUserForm, user)}" class="rounded-full bg-white px-2.5 py-1 mr-2 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Editar</button>
                <form class="" method="POST" action="?/deleteUser">
                    <button
                    type="submit"
                    class="rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                    >Apagar
                    </button>
                    <input type="hidden" id="ID" name="ID" value="{user.id}"> 
                </form>
            </div>
        </li>
        {/each}
    </ul>
</div>
  