import * as server from '../entries/pages/backoffice/weather/_page.server.js';

export const index = 9;
export const component = async () => (await import('../entries/pages/backoffice/weather/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/backoffice/weather/+page.server.js";
export const imports = ["_app/immutable/nodes/9.39c1767f.js","_app/immutable/chunks/index.e6278cb6.js"];
export const stylesheets = [];
export const fonts = [];
