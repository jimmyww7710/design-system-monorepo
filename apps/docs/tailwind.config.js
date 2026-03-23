const sharedConfig = require("../../tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
    presets: [sharedConfig],
    content: [
        "./stories/**/*.{ts,tsx}",
        "../../packages/ui/src/**/*.{ts,tsx}"
    ]
};