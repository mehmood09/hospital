/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        blackColor: "#000",
        mainColor: "#ffdd40",
        navColor: "#181818",
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771FF",
        greenColor: "#228b22",
        irisBlueColor: "#01B5C5",
        headingColor: "#181A1E",
        textColor:"#4E545F",
      },
    },
  },
  plugins: [],
}

