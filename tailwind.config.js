/** @type {import('tailwindcss').Config } */

module.exports = {
    content: [
        "index.html",
        "./src/**/*.{js, ts, jsx, tsx}",
        "./node_modules/preline/**/*.{js, ts}",
    ],
    theme: {
        extend: {},
    },
    plugins: []
}