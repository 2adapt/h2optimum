//import adapter from '@sveltejs/adapter-auto';
//import adapter from '@sveltejs/adapter-node';
import adapter from '@sveltejs/adapter-netlify';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		
		//adapter: adapter()

		adapter: adapter({
			envPrefix: 'H2OPTIMUM_V2_',
		}),
		csrf: {
			checkOrigin: false,
			// CSRF should corrected later
			// https://web.archive.org/web/20230311175338/https://webmatrices.com/d/1623-cross-site-post-form-submissions-are-forbidden-sveltekit/2
			// https://kit.svelte.dev/docs/adapter-node#environment-variables
			// https://github.com/sveltejs/kit/issues/6589
		},
		typescript: {
			config: (config) => {

				config.compilerOptions.sourceMap = false;
				config.compilerOptions.inlineSourceMap = false;

				return config;
			}
		}
	},
	preprocess: vitePreprocess(),
	compilerOptions: {
		preserveComments: true,
		preserveWhitespace: true,
		enableSourcemap: false
	}
};

export default config;
