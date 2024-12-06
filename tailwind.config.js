import plugin from "tailwindcss/plugin";
import { violet, orange, rose, neutral } from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: violet,
        warning: orange,
        inverse: "#fff",
        danger: rose,
        text: "#222",
        neutral,
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      const colors = theme("colors");
      const newVars = Object.keys(colors).reduce((vars, color) => {
        const value = colors[color];
        if (typeof value === "string") {
          vars[`--color-${color}`] = value;
        } else {
          Object.keys(value).forEach((shade) => {
            vars[`--color-${color}-${shade}`] = value[shade];
          });
        }
        return vars;
      }, {});

      addBase({
        ":root": newVars,
      });
    }),
  ],
};
