/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                border: "hsl(214 32% 91%)",
                input: "hsl(214 32% 91%)",
                ring: "hsl(212 72% 59%)",
                background: "hsl(210 40% 98%)",
                foreground: "hsl(222 47% 11%)",
                primary: {
                    DEFAULT: "hsl(215 84% 45%)",
                    foreground: "hsl(210 40% 98%)"
                },
                secondary: {
                    DEFAULT: "hsl(215 28% 92%)",
                    foreground: "hsl(222 47% 11%)"
                },
                muted: {
                    DEFAULT: "hsl(214 32% 94%)",
                    foreground: "hsl(215 16% 36%)"
                }
            },
            borderRadius: {
                lg: "0.875rem",
                md: "0.75rem",
                sm: "0.5rem"
            },
            boxShadow: {
                focus: "0 0 0 4px hsl(212 72% 59% / 0.18)"
            },
            fontFamily: {
                sans: [
                    "var(--font-geist-sans)",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif"
                ]
            }
        }
    },
    plugins: []
};