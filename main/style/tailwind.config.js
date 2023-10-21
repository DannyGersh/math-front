/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./main/**/*.{js,jsx}'],
	theme: {
		colors: {
			blue: '#1fb6ff',
		},
		extend: {
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
		},
	},
	plugins: [],
};
