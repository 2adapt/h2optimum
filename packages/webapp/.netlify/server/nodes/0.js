import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/nodes/0.2187a8eb.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/MyModal.c51739d9.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/stores.77259d89.js","_app/immutable/chunks/singletons.033e4f6a.js"];
export const stylesheets = ["_app/immutable/assets/0.72bece88.css"];
export const fonts = [];
