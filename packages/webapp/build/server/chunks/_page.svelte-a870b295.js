import { c as create_ssr_component, b as each, e as escape, d as add_attribute } from './index3-a7d75b1a.js';

function doubleCount(n) {
  return n * 2;
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let doubled;
  let count = 0;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  {
    {
      doubled = doubleCount(count);
    }
  }
  return `<h1>Countries</h1>
<select><option value="" selected>Select a country</option>${each(data.list, (country) => {
    return `<option${add_attribute("value", country, 0)}>
			${escape(country.cca2)}
		</option>`;
  })}</select>

${``}

<h1>Posts</h1>
${each(data.listPosts, (post) => {
    return `<button class="mb-1 mr-1 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-red-600 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-200 dark:hover:text-white dark:focus:ring-gray-100">ID: ${escape(post.id)}</button>`;
  })}
${``}

<h1>Reactive count</h1>

<p>Count: ${escape(count)}</p>
<p>Doubled: ${escape(doubled)}</p>
<button>Increment</button>
<button>Reset</button>

<button>Show Modal</button>
${``}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-a870b295.js.map
