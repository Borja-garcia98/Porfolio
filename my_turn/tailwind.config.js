module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  mode: process.env.NODE_ENV ? "jit" : undefined,
  darkMode: "class",
  content: [],
  theme: {
    extend: {
      boxShadow: {
        airbnb: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      },
      borderColor: {
        dark: {
          primary: "#EFDBBB",
          secondary: "#EFDBBB",
        },
      },
      backgroundColor: {
        dark: {
          primary: "#D8D8D7",
          secondary: "#424242",
          "modifier-hover": "#4f545c29",
          "modifier-active": "#4f545c52",
        },
        light: {
          primary: "#EFDBBB",
        },
        "transparent-black": "rgba(0, 0, 0, 0.8);",
      },
      textColor: {
        dark: {
          primary: "#ffff",
          "modifier-hover": "#ffff",
          "modifier-active": "#ffff",
        },
        light: {
          primary: "#393839",
          "modifier-hover": "#ffff",
          "modifier-active": "#ffff",
        },
      },
      colors: {
        "sky-blue": "#EFDBBB",
      },
    },
  },
  plugins: [],
};
