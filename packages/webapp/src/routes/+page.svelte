<script>
    import { onMount } from 'svelte';

    /** @type {import('./$types').PageData} */    
    export let data;


    let selectedPost = '';
    let selectedCountry = null;
    let doubled;
    let showModal = false;

    function onPostClick(ID){
        if(selectedPost.id == ID){
            selectedPost = '';
        } else {
            selectedPost = data.listPosts[ID-1];
        }
    }

    function closePost(){
        selectedPost = '';
    }

    function doubleCount(n){
       return n*2;
    }

    let count = 0;
    $:{
        doubled = doubleCount(count);
    }

    onMount( function () {
        setTimeout(function( ){
            count = 10;
        } ,2000)
    }
    )

</script>

<h1>Countries</h1>
<select bind:value={selectedCountry}>
    <option value="" selected>Select a country</option>
    {#each data.list as country}
        <option value={country}>
            {country.cca2}
        </option>
    {/each}
</select>

{#if selectedCountry}
    <h3>Country Info</h3>
    <p>Nome: {selectedCountry.name.common}</p>
    <p>Capital: {selectedCountry.capital}</p>
    <p>Moeda: {Object.keys(selectedCountry.currencies)[0]} </p>
{/if}

<h1>Posts</h1>
{#each data.listPosts as post}
    <button class="py-2 px-3 mr-1 mb-1 text-sm font-medium text-red-600 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-100 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white hover:dark:bg-gray-200" on:click={onPostClick(post.id)}>ID: {post.id}</button>
{/each}
{#if selectedPost}
    <p>ID: {selectedPost.id}</p>
    <p>Title: {selectedPost.title}</p>
    <p>Body: {selectedPost.body}</p>
    <button on:click={closePost}>Close Post</button>
{/if}


<h1>Reactive count</h1>

<p>Count: {count}</p>
<p>Doubled: {doubled}</p>
<button on:click={() => count += 1}>Increment</button>
<button on:click={() => count = 0}>Reset</button>

<button on:click={() => (showModal = true)}>Show Modal</button>
{#if showModal}
	<div class="box" on:outclick={() => (showModal = false)}>
		Click outside me!
	</div>
{/if}