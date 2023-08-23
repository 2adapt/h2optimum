import * as server from '../entries/pages/login/_page.server.js';

export const index = 10;
export const component = async () => (await import('../entries/pages/login/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/login/+page.server.js";
export const imports = ["_app/immutable/nodes/10.925ebe85.js","_app/immutable/chunks/index.e6278cb6.js"];
export const stylesheets = [];
export const fonts = [];
