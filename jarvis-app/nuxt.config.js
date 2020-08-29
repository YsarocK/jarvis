module.exports = {
	mode: 'spa',
	head: {title: 'Jarvis APP',
			link: [
				{ rel: 'icon', type: 'image/jpg', href: '/logo.jpg' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Signika:wght@300;400;500;600;700&display=swap' }
			]
	}, // Headers of the page
	loading: false, // Disable default loading bar
	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},
	dev: process.env.NODE_ENV === 'DEV',
	css: [
		'@/assets/css/global.css'
	]
}
