import type { StorybookConfig } from "@storybook/react-vite";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const rootDir = dirname(fileURLToPath(import.meta.url));

const config: StorybookConfig = {
    framework: "@storybook/react-vite",
    stories: ["../stories/**/*.stories.@(ts|tsx)"],
    addons: ["@storybook/addon-essentials", "@storybook/addon-interactions"],
    async viteFinal(baseConfig) {
        return {
            ...baseConfig,
            resolve: {
                ...baseConfig.resolve,
                alias: {
                    ...(baseConfig.resolve?.alias ?? {}),
                    "@repo/ui": resolve(rootDir, "../../../packages/ui/src/index.ts")
                }
            }
        };
    }
};

export default config;