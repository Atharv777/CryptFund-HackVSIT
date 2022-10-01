/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                accentColor: "#50C19D",
                backgroundColor: "#191919",
                greenDark: "rgba(28, 33, 32, 1)",
                lightGray: "#D0D0D0"
            },
            boxShadow: {
                primary: "0px 6px 6px rgba(0, 0, 0, 0.3)",
                secondary: "0px 8px 8px rgba(0, 0, 0, 0.4)"
            }
        },
    },
    plugins: [],
}
