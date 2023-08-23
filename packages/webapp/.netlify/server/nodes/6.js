import * as server from '../entries/pages/backoffice/installations/_page.server.js';

export const index = 6;
export const component = async () => (await import('../entries/pages/backoffice/installations/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/backoffice/installations/+page.server.js";
export const imports = ["_app/immutable/nodes/6.3b00b15e.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.31748c13.js","_app/immutable/chunks/index.d5bac33e.js","_app/immutable/chunks/MyModal.c51739d9.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/InstallationForm.59a3f097.js","_app/immutable/chunks/stores.77259d89.js","_app/immutable/chunks/singletons.033e4f6a.js","_app/immutable/chunks/utils.7c8f4844.js"];
export const stylesheets = ["_app/immutable/assets/index.4d8e306f.css"];
export const fonts = [];
