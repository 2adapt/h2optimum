import './index-9f328cea.js';

async function load(event) {
  let Cards;
  const res = await fetch(`https://app.2adapt.pt/api/get-installations?user_id=1`);
  Cards = await res.json();
  Cards.forEach((obj) => {
    obj.hidden = false, obj.lat = 38.5, obj.long = -8.15;
  });
  return {
    Cards
  };
}

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 6;
const component = async () => (await import('./_page.svelte-b1913679.js')).default;
const server_id = "src/routes/testecards/+page.server.js";
const imports = ["_app/immutable/nodes/6.2a7aabb1.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/preload-helper.41c905a7.js"];
const stylesheets = ["_app/immutable/assets/leaflet.4d8e306f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=6-c0b98d18.js.map
