export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.pns"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.b25f87f2.js","app":"_app/immutable/entry/app.537e865d.js","imports":["_app/immutable/entry/start.b25f87f2.js","_app/immutable/chunks/index.e6278cb6.js","_app/immutable/chunks/singletons.033e4f6a.js","_app/immutable/chunks/paths.cf73cfda.js","_app/immutable/chunks/parse.bee59afc.js","_app/immutable/entry/app.537e865d.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.e6278cb6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js'),
			() => import('./nodes/10.js'),
			() => import('./nodes/11.js'),
			() => import('./nodes/12.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/backoffice",
				pattern: /^\/backoffice\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/backoffice/help",
				pattern: /^\/backoffice\/help\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/backoffice/installations",
				pattern: /^\/backoffice\/installations\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/backoffice/installations/[slug_id]",
				pattern: /^\/backoffice\/installations\/([^/]+?)\/?$/,
				params: [{"name":"slug_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,2,], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/backoffice/users",
				pattern: /^\/backoffice\/users\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/backoffice/weather",
				pattern: /^\/backoffice\/weather\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/login",
				pattern: /^\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/logout",
				pattern: /^\/logout\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/public/[slug_id]",
				pattern: /^\/public\/([^/]+?)\/?$/,
				params: [{"name":"slug_id","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
