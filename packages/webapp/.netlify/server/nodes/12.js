import * as server from '../entries/pages/public/_slug_id_/_page.server.js';

export const index = 12;
export const component = async () => (await import('../entries/pages/public/_slug_id_/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/public/[slug_id]/+page.server.js";
export const imports = ["_app/immutable/nodes/12.d616a46d.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/Installation.e31021ec.js","_app/immutable/chunks/stores.5634c9c6.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.31748c13.js","_app/immutable/chunks/MyModal.c51739d9.js","_app/immutable/chunks/stores.77259d89.js","_app/immutable/chunks/singletons.033e4f6a.js","_app/immutable/chunks/environment.07c54b58.js","_app/immutable/chunks/utils.7c8f4844.js","_app/immutable/chunks/clipboard.e9e9a94a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js","_app/immutable/chunks/index.d5bac33e.js","_app/immutable/chunks/parse.bee59afc.js"];
export const stylesheets = ["_app/immutable/assets/index.4d8e306f.css"];
export const fonts = [];
