async function load(event) {
  let locals = event.locals;
  return {
    locals
  };
}

var _layout_server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 0;
const component = async () => (await import('./_layout.svelte-ae4e3d95.js')).default;
const server_id = "src/routes/+layout.server.js";
const imports = ["_app/immutable/nodes/0.9a07661e.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/MyModal.21921a7f.js","_app/immutable/chunks/singletons.50cae92a.js","_app/immutable/chunks/stores.3dee118a.js"];
const stylesheets = ["_app/immutable/assets/0.beb1ad27.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-fa53fc4a.js.map
