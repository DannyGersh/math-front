const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [tailwindcss('main/style/tailwind.config.js'), autoprefixer],
};