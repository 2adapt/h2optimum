import * as server from '../entries/pages/backoffice/users/_page.server.js';

export const index = 8;
export const component = async () => (await import('../entries/pages/backoffice/users/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/backoffice/users/+page.server.js";
export const imports = ["_app/immutable/nodes/8.73e2a79e.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/stores.5634c9c6.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/index.31748c13.js","_app/immutable/chunks/MyModal.c51739d9.js","_app/immutable/chunks/clipboard.e9e9a94a.js","_app/immutable/chunks/_commonjsHelpers.725317a4.js"];
export const stylesheets = ["_app/immutable/assets/index.4d8e306f.css"];
export const fonts = [];
