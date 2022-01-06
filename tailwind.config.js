const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    mode: "jit",
    content: {
        files: ["./components/**/*.{vue,js}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}", "./nuxt.config.{js,ts}"],
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
