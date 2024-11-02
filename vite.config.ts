/// <reference types="vite/client" />
import { resolve, relative, extname } from "node:path";
import { defineConfig } from "vite";
import { fileURLToPath } from "node:url";
import { globSync } from "glob";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { libInjectCss } from "vite-plugin-lib-inject-css";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({ tsconfigPath: "./tsconfig.app.json", exclude: ["**/*.stories.tsx"] }),
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/Button/index.ts"),
        resolve(__dirname, "src/Title/index.ts"),
      ],
      formats: ["es"],
    },
    rollupOptions: {
      input: Object.fromEntries(
        globSync(["src/**/index.tsx", "src/index.ts"]).map((file) => {
          const entryName = relative(
            "src",
            file.slice(0, file.length - extname(file).length)
          );
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        dir: "dist", // Output directory
        entryFileNames: (chunk) => `${chunk.name}.js`,
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        preserveModules: true, // This option keeps the module structure intact
        preserveModulesRoot: "src", // Ensures the src/ directory is removed from the output path
      },
    },
  },
});
