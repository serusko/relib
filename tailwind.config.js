import plugin from "tailwindcss/plugin";
import { violet, orange, rose, neutral } from "tailwindcss/colors";

const colors = {
  primary: violet,
  warning: orange,
  inverse: "#fff",
  danger: rose,
  text: "#222",
  neutral,
};

const colorVars = {};

const newVars = Object.keys(colors).reduce((vars, color) => {
  const value = colors[color];

  if (typeof value === "string") {
    vars[`--color-${color}`] = value;
    colorVars[color] = `var(--color-${color})`;
  } else {
    Object.keys(value).forEach((shade) => {
      vars[`--color-${color}-${shade}`] = value[shade];
      colorVars[color] = colorVars[color] || {};
      colorVars[color][shade] = `var(--color-${color}-${shade})`;
    });
  }

  return vars;
}, {});

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./lib/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: colorVars,
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        ":root": newVars,
      });
    }),
  ],
};
