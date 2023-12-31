import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  jsxFramework: "qwik",

  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "src/styled-system",

  globalCss: {
    main: {
      "& h1": {
        fontSize: "xx-large",
        fontWeight: "bold",
        fontFamily: "serif",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "gray",
        pt: 6,
      },
      "& h2": {
        fontSize: "x-large",
        fontWeight: "bold",
        fontFamily: "serif",
        borderBottomStyle: "solid",
        borderBottomWidth: "1px",
        borderBottomColor: "gray",
        pt: 4,
      },
      "& h3": {
        fontSize: "large",
        fontWeight: "bold",
        pt: 4,
        pl: 2,
        textDecoration: "underline",
      },
      "& h4": {
        fontSize: "large",
        fontWeight: "bold",
        pt: 4,
        pl: 4,
      },
      "& p": {
        pt: 4,
      },
      "& ul": {
        pt: 4,
        pl: 8,
        listStyleType: "disc",
      },
      "& ul>li ul": {
        listStyleType: "circle",
        pt: 0,
      },
      "& ol": {
        pt: 4,
        pl: 8,
        listStyleType: "decimal",
      },
      "& a": {
        color: "blue.700",
        "&:hover": {
          opacity: "0.8",
        },
      },
    },
  },
});
