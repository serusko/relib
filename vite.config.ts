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
    dts({ tsconfigPath: "./tsconfig.app.json" }),
  ],
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      input: Object.fromEntries(
        globSync(["src/components/**/index.tsx", "src/index.ts"]).map(
          (file) => {
            // This remove `src/` as well as the file extension from each
            // file, so e.g. src/nested/foo.js becomes nested/foo
            const entryName = relative(
              "src",
              file.slice(0, file.length - extname(file).length)
            );
            // This expands the relative paths to absolute paths, so e.g.
            // src/nested/foo becomes /project/src/nested/foo.js
            const entryUrl = fileURLToPath(new URL(file, import.meta.url));
            return [entryName, entryUrl];
          }
        )
      ),
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        entryFileNames: "[name].js",
        assetFileNames: "assets/[name][extname]",
        globals: {
          react: "React",
          "react-dom": "React-dom",
          "react/jsx-runtime": "react/jsx-runtime",
        },
        format: "cjs",
        dir: "dist",
        exports: "auto",
        // preserveModules: true,
        preserveModulesRoot: "src",
      },
    },
  },
});
