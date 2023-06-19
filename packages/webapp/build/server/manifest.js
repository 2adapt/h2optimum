const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.d0dd8f38.js","app":"_app/immutable/entry/app.af738544.js","imports":["_app/immutable/entry/start.d0dd8f38.js","_app/immutable/chunks/index.640f31cf.js","_app/immutable/chunks/singletons.50cae92a.js","_app/immutable/entry/app.af738544.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.640f31cf.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./chunks/0-fa53fc4a.js'),
			() => import('./chunks/1-7898c3d6.js'),
			() => import('./chunks/2-982c40f8.js'),
			() => import('./chunks/3-9dfdb434.js'),
			() => import('./chunks/4-6f22d021.js'),
			() => import('./chunks/5-ebdaf3d1.js'),
			() => import('./chunks/6-c0b98d18.js'),
			() => import('./chunks/7-f7486ad3.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/public/[slug_id]",
				pattern: /^\/public\/([^/]+?)\/?$/,
				params: [{"name":"slug_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/testecards",
				pattern: /^\/testecards\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/testecards/[slug_id]",
				pattern: /^\/testecards\/([^/]+?)\/?$/,
				params: [{"name":"slug_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};

const prerendered = new Set([]);

export { manifest, prerendered };
//# sourceMappingURL=manifest.js.map
