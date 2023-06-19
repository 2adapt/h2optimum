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
const component = async () => (await import('./_page.svelte-3985aeb0.js')).default;
const server_id = "src/routes/public/[slug_id]/+page.server.js";
const imports = ["_app/immutable/nodes/5.4c0db3d0.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/Installation.5f3eac3a.js","_app/immutable/chunks/singletons.50cae92a.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/MyModal.21921a7f.js","_app/immutable/chunks/stores.3dee118a.js"];
const stylesheets = ["_app/immutable/assets/Installation.21fdfc57.css","_app/immutable/assets/leaflet.4d8e306f.css"];
const fonts = [];

export { component, fonts, imports, index, _page_server as server, server_id, stylesheets };
//# sourceMappingURL=5-ebdaf3d1.js.map
