/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		colors: {
			current: 'currentColor',
			base: {
				black: '#100F0F',
				950: '#1C1B1A',
				900: '#282726',
				850: '#343331',
				800: '#403E3C',
				700: '#575653',
				600: '#6F6E69',
				500: '#878580',
				300: '#B7B5AC',
				200: '#CECDC3',
				150: '#DAD8CE',
				100: '#E6E4D9',
				50: '#F2F0E5',
				paper: '#FFFCF0',
			},
			red: {
				DEFAULT: '#AF3029',
				light: '#D14D41',
			},
			orange: {
				DEFAULT: '#BC5215',
				light: '#DA702C',
			},
			yellow: {
				DEFAULT: '#AD8301',
				light: '#D0A215',
			},
			green: {
				DEFAULT: '#66800B',
				light: '#879A39',
			},
			cyan: {
				DEFAULT: '#24837B',
				light: '#3AA99F',
			},
			blue: {
				DEFAULT: '#205EA6',
				light: '#4385BE',
			},
			purple: {
				DEFAULT: '#5E409D',
				light: '#8B7EC8',
			},
			magenta: {
				DEFAULT: '#A02F6F',
				light: '#CE5D97',
			},
		},
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						pre: {
							borderColor: 'var(--tw-prose-pre-borders)',
							borderWidth: '1px',
						},
					},
				},
				flexoki: {
					css: {
						'--tw-prose-body': theme('colors.base.black'),
						'--tw-prose-headings': theme('colors.base.black'),
						'--tw-prose-lead': theme('colors.base[600]'),
						'--tw-prose-links': theme('colors.base.black'),
						'--tw-prose-bold': theme('colors.base.black'),
						'--tw-prose-code': theme('colors.base.black'),
						'--tw-prose-counters': theme('colors.base.black'),
						'--tw-prose-bullets': theme('colors.base.black'),
						'--tw-prose-pre-borders': theme('colors.base[100]'),
						'--tw-prose-invert-body': theme('colors.base[200]'),
						'--tw-prose-invert-headings': theme('colors.base[200]'),
						'--tw-prose-invert-lead': theme('colors.base[600]'),
						'--tw-prose-invert-links': theme('colors.base[200]'),
						'--tw-prose-invert-bold': theme('colors.base[200]'),
						'--tw-prose-invert-code': theme('colors.base[200]'),
						'--tw-prose-invert-pre-borders': theme('colors.base[900]'),
						'--tw-prose-invert-counters': theme('colors.base[200]'),
						'--tw-prose-invert-bullets': theme('colors.base[200]'),
					},
				},
				invert: {
					css: {
						'--tw-prose-pre-borders': 'var(--tw-prose-invert-pre-borders)',
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
