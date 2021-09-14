const { tailwindExtractor } = require('tailwindcss/lib/lib/purgeUnusedStyles')

module.exports = {
	mode: 'jit',

	purge: ['./src/**/*.svelte'],

	darkMode: false, // or 'media' or 'class'

	theme: {
		extend: {
			colors: {
				primary: {
					100: '#e0e7ff' /* indigo-100 */,
					200: '#c7d2fe' /* indigo-200 */,
					500: '#6366f1' /* indigo-500 */,
					600: '#4f46e5' /* indigo-800 */,
					700: '#3730a3' /* indigo-800 */,
				},
				secondary: {
					100: '#d1fae5' /* green-300  */,
					500: '#55C451' /* lightgreen */,
					600: '#3db340' /* just-dark-green  */,
				},
				accent: {
					100: '#fee2e2' /* light-red */,
					500: '#f59e0b' /* yellow-500 */,
					900: '#eb0000;', // red
				},
			},

			fontFamily: {
				sans: ['Inter'],
			},

			animation: {
				float: 'float 6s linear infinite',
				wiggle: 'wiggle 6s linear infinite',
				scale: 'scale 6s ease-in infinite',
				fade: 'fade 6s linear infinite',
				dropdown: 'dropdown 0.3s linear',
				slide: 'slide 0.3s ease-in-out',
			},

			keyframes: {
				float: {
					'0%': { transform: 'translateY(0px)' },
					'100%': { transform: 'translateY(-100px)' },
				},
				wiggle: {
					'0%': { transform: 'translateX(0px)' },
					'100%': { transform: 'translateX(-20px)' },
				},
				scale: {
					'0%': { transform: 'scale(1)' },
					'90%': { transform: 'scale(1)' },
					'100%': { transform: 'scale(0)' },
				},
				fade: {
					'0%': { opacity: '1' },
					'70%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
				dropdown: {
					'0%': { transform: 'translateY(-10px)', opacity: '0' },
					'50%': { transform: 'translateY(-5px)', opacity: '0.3' },
					'100%': { transform: 'translateY(0px)', opacity: '1' },
				},
				slide: {
					'0%': { transform: 'translateX(10px)', opacity: '0' },
					'50%': { transform: 'translateX(5px)', opacity: '0.3' },
					'100%': { transform: 'translateX(0px)', opacity: '1' },
				},
			},
		},
	},

	variants: {
		extend: {
			backgroundColor: ['active'],
		},
	},

	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/forms'),
		require('tailwindcss-rtl'),
		require('@tailwindcss/typography'),
	],
}
