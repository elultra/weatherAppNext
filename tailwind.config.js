/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            xs: {
                min: "390px",
            },
            sm: {
                min: "640px",
            },
            md: {
                min: "768px",
            },
            lg: {
                min: "1024px",
            },
            xl: {
                min: "1280px",
            },
            "2xl": {
                min: "1536px",
            },
        },
        fontSize: {
            //fontsize,lineHeight
            sm: ["12px", "17px"],
            xs: ["14px", "19px"],
            base: ["16px", "19px"],
            lg: ["18px", "28px"],
            xl: ["20px", "28px"],
            "2xl": ["24px", "32px"],
            "3xl": ["30px", "36px"],
            "4xl": ["36px", "40px"],
            "5xl": ["44px", "44px"],
            "6xl": ["60px", "60px"],
        },
        fontWeight: {
            thin: 200,
            light: 300,
            normal: 400,
            semibold: 600,
            bold: 700,
            black: 900,
        },
        extend: {
            fontFamily: {
                primary: ["Source Sans Pro", ...fontFamily.sans],
                smiley: ["SmileySans", ...fontFamily.sans],
            },
            colors: {
                primary: {
                    // Customize it on globals.css :root
                    50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
                    100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
                    200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
                    300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
                    400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
                    500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
                    600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
                    700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
                    800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
                    900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
                },
                dark: "#222222",
            },
            // Replaces all of the default `opacity` values
            opacity: {
                0: "0",
                20: "0.2",
                40: "0.4",
                60: "0.6",
                80: "0.8",
                100: "1",
            },
            keyframes: {
                flicker: {
                    "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
                        opacity: 0.99,
                        filter: "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
                    },
                    "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
                        opacity: 0.4,
                        filter: "none",
                    },
                },
                shimmer: {
                    "0%": {
                        backgroundPosition: "-700px 0",
                    },
                    "100%": {
                        backgroundPosition: "700px 0",
                    },
                },
            },
            animation: {
                flicker: "flicker 3s linear infinite",
                shimmer: "shimmer 1.3s linear infinite",
            },
        },
    },
    variants: {},
    plugins: [],
};
