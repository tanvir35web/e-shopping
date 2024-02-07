/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "476px",
            // => @media (min-width: 576px) { ... }

            md: "760px",
            // => @media (min-width: 960px) { ... }

            lg: "1280px",
            // => @media (min-width: 1440px) { ... }
            xl: "1480px",
            // => @media (min-width: 1440px) { ... }
        },
        extend: {
            fontFamily: {
                bodyFont: "Poppins",
            },
        },
    },
    plugins: [],
};
