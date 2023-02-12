import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		csp: {
			directives: {
				'script-src': ['self'],
			},
		},
		inlineStyleThreshold: Infinity,
		alias: {
			'@LL': 'src/i18n/i18n-svelte',
			'@routes': 'src/routes',
			'@components': 'src/components',
		},
	},
}

export default config
