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
    dts({
      tsconfigPath: "./tsconfig.build.json",
      exclude: ["**/*.stories.tsx", "**/*.stories.ts"],
    }),
  ],
  build: {
    lib: {
      entry: [
        resolve(__dirname, "lib/index.ts"),
        resolve(__dirname, "lib/*/index.ts"),
      ],
      formats: ["es"],
    },
    rollupOptions: {
      input: Object.fromEntries(
        globSync([
          "./lib/**/index.tsx",
          "./lib/**/index.tsx",
          "./lib/index.ts",
        ]).map((file) => {
          const entryName = relative(
            "lib",
            file.slice(0, file.length - extname(file).length)
          );
          const entryUrl = fileURLToPath(new URL(file, import.meta.url));
          return [entryName, entryUrl];
        })
      ),
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        dir: "dist", // Output directory
        // entryFileNames: (chunk) => `${chunk.name}.js`,
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        // TODO: fix this
        // preserveModules: true, // This option keeps the module structure intact
        // preserveModulesRoot: "lib", // Ensures the src/ directory is removed from the output path
        // manualChunks: (id) => {
        //   const p = parse(id);
        //   console.log(p);
        //   return `${p.base}`;
        // },
      },
    },
  },
});
