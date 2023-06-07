export async function load({ params }) {

    const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=pt,es,fr`);
    const list = await res.json();

    const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const listPosts = await resPosts.json();

    return { list, listPosts };
}