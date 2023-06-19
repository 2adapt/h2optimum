async function load({ params }) {
  const res = await fetch(`https://restcountries.com/v3.1/alpha?codes=pt,es,fr`);
  const list = await res.json();
  const resPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const listPosts = await resPosts.json();
  return { list, listPosts };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 2;
const component = async () => (await import('./_page.svelte-a870b295.js')).default;
const server_id = "src/routes/+page.server.js";
const imports = ["_app/immutable/nodes/2.67aa0d0a.js","_app/immutable/chunks/index.640f31cf.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=2-982c40f8.js.map
