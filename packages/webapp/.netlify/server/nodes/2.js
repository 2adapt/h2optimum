import * as server from '../entries/pages/backoffice/_layout.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/backoffice/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/backoffice/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.ab8af5aa.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/environment.07c54b58.js","_app/immutable/chunks/stores.77259d89.js","_app/immutable/chunks/singletons.033e4f6a.js","_app/immutable/chunks/index.d5bac33e.js","_app/immutable/chunks/stores.5634c9c6.js","_app/immutable/chunks/InstallationForm.59a3f097.js","_app/immutable/chunks/MyModal.c51739d9.js"];
export const stylesheets = ["_app/immutable/assets/2.21fdfc57.css"];
export const fonts = [];
