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
const imports = ["_app/immutable/nodes/0.ec2a1a78.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/MyModal.72fb1127.js","_app/immutable/chunks/singletons.d8d1e010.js","_app/immutable/chunks/stores.81791067.js"];
const stylesheets = ["_app/immutable/assets/0.28597991.css"];
const fonts = [];

export { component, fonts, imports, index, _layout_server as server, server_id, stylesheets };
//# sourceMappingURL=0-5439904d.js.map
