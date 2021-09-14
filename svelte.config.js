import preprocess from 'svelte-preprocess'
import node from '@sveltejs/adapter-node'
import netlify from '@sveltejs/adapter-netlify'
import vercel from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static'

const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: vercel(),
		vite: {
			server: {
				proxy: {
					// '/api': 'https://api.misiki.in',
					// '/apia': 'https://automation.litekart.in/api',
					// '/api': {
					// 	target: 'https://api.litekart.in',
					// 	changeOrigin: true,
					// 	rewrite: (path) => path.replace(/^\/api/, ''),
					// },
					'/apia': {
						target: 'http://automation.litekart.in/api',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/apia/, '/'),
					},
					'/api': {
						target: 'http://api.misiki.in/api',
						changeOrigin: true,
						rewrite: (path) => path.replace(/^\/api/, '/'),
					},
				},
			},
			ssr: {
				noExternal: ['svelte-hero-icons'],
			},
			optimizeDeps: {
				include: ['svelte-hero-icons'],
			},
		},
	},
}

export default config
