const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        logo: "url('/opaque-logo.svg')",
      },
      colors: {
        gray: colors.neutral,
        blue: colors.sky,
        brand: "#0864a6", // hsl(205, 91%, 34%)
        "brand-dark": "#064675", // hsl(205, 91%, 24%)
        "brand-gradient": "#e8f4fd", // hsl(205, 91%, 95%)
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h2: {
              fontSize: "1.875rem",
              fontWeight: "800",
              letterSpacing: "-0.025em",
              lineHeight: "2.25rem",
              textAlign: "center",
            },
            h4: {
              marginBottom: 0,
            },
            a: {
              color: theme("colors.brand"),
              textDecoration: "none",
            },
            "a:hover": {
              color: theme("colors.brand-dark"),
              textDecoration: "underline",
            },
            p: {
              lineHeight: "1.5rem",
            },
            ul: {
              lineHeight: "1.5rem",
              marginTop: "-1em",
            },
            "ul > li": {
              marginTop: "0.25em",
              marginBottom: "0.25em",
            },
            "ul > li::marker": {
              color: "currentColor",
            },
          },
        },
      }),
    },
    listStyleType: {
      none: "none",
      circle: "circle",
      decimal: "decimal",
      disc: "disc",
    },
    minHeight: {
      0: "0",
      80: "20rem",
      full: "100%",
      screen: "100vh",
    },
    screens: {
      xxs: "360px",
      xs: "500px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
      borderColor: ["group-focus"],
      opacity: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
