import { copyFileSync, mkdirSync } from "node:fs";
import { defineConfig } from "tsup";

export default defineConfig({
    clean: true,
    dts: true,
    entry: ["src/index.ts"],
    format: ["esm", "cjs"],
    outExtension({ format }) {
        return {
            js: format === "cjs" ? ".cjs" : ".js"
        };
    },
    sourcemap: true,
    treeshake: true,
    splitting: false,
    external: ["react", "react-dom"],
    outDir: "dist",
    onSuccess: async () => {
        mkdirSync("dist", { recursive: true });
        copyFileSync("src/styles/styles.css", "dist/styles.css");
    }
});