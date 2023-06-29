import { e as error } from './index-9f328cea.js';

async function load(event) {
  let paramString = event.params.slug_id;
  let paramArray = paramString.split("-");
  let id = paramArray.pop();
  let user = event.locals;
  const res = await fetch(`https://app.2adapt.pt/api/get-installations?user_id=1`);
  const installations = await res.json();
  const installation = installations.find((item) => item.id == id);
  if (!installation) {
    throw error(404, {
      message: "Installation not found"
    });
  }
  installation.devices.forEach((obj) => {
    obj.last_reading_formatted = new Date(obj.last_reading).toLocaleString();
  });
  return {
    installation,
    user
  };
}
const actions = {
  default: async (event) => {
    const formData = await event.request.formData();
    for (let field of formData) {
    }
    return { success: true };
  }
};

var _page_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  actions: actions,
  load: load
});

const index = 5;
const component = async () => (await import('./_page.svelte-59765fe6.js')).default;
const server_id = "src/routes/public/[slug_id]/+page.server.js";
const imports = ["_app/immutable/nodes/5.897f55a7.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/Installation.a5330ac6.js","_app/immutable/chunks/singletons.d8d1e010.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/MyModal.72fb1127.js","_app/immutable/chunks/stores.81791067.js","_app/immutable/chunks/parse.bee59afc.js"];
const stylesheets = ["_app/immutable/assets/Installation.21fdfc57.css","_app/immutable/assets/leaflet.4d8e306f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-fc63f1d5.js.map
