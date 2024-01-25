/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
      fontFamily: {
        'display': [ 'Noto Sans Display', 'sans-serif']
      }
    },
	},
	plugins: [],
};
