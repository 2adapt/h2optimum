import * as server from '../entries/pages/_page.server.js';

export const index = 3;
export const component = async () => (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.js";
export const imports = ["_app/immutable/nodes/3.23439219.js","_app/immutable/chunks/index.e6278cb6.js"];
export const stylesheets = [];
export const fonts = [];
