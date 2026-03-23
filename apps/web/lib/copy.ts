export const locales = ["en", "de"] as const;

export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
    return locales.includes(value as Locale);
}

export const copy = {
    en: {
        home: {
            cta: "Open login page",
            description: "The playground consumes the local workspace package through Turborepo, so component changes in the UI library flow straight into a production-like app surface.",
            eyebrow: "Turborepo UI System",
            heading: "Build once, verify in Storybook, and exercise components in a real Next.js app.",
            localeLabel: "Language",
            storybook: "Storybook docs",
            title: "Workspace Links"
        },
        login: {
            back: "Back to playground",
            components: "Components under test",
            copy: "This playground route uses shared Input, FormField, Checkbox, and Button components in a compact sign-in experience.",
            eyebrow: "Login Flow",
            forgot: "Forgot password?",
            helperEmail: "Use the same email you registered with.",
            helperPassword: "Minimum 8 characters.",
            heading: "A real form surface for validating the design system.",
            intro: "Use this page to validate spacing, labels, helper text, and focus states in a realistic layout.",
            keepSignedIn: "Keep me signed in for 30 days",
            localeLabel: "Language",
            password: "Password",
            passwordPlaceholder: "Enter your password",
            signIn: "Sign in",
            subtitle: "Sign in to continue",
            summary: "Sign-in form with required fields, helper copy, and session preference.",
            summaryLabel: "Use case",
            welcome: "Welcome back",
            workEmail: "Work email"
        }
    },
    de: {
        home: {
            cta: "Login-Seite öffnen",
            description: "Die Playground-App nutzt das lokale Workspace-Paket über Turborepo, sodass Änderungen an der UI-Bibliothek direkt in einer produktnahen Oberfläche sichtbar werden.",
            eyebrow: "Turborepo UI System",
            heading: "Einmal entwickeln, in Storybook prüfen und in einer echten Next.js-App erproben.",
            localeLabel: "Sprache",
            storybook: "Storybook-Dokumentation",
            title: "Workspace-Links"
        },
        login: {
            back: "Zurück zum Playground",
            components: "Verwendete Komponenten",
            copy: "Diese Playground-Route verwendet gemeinsame Input-, FormField-, Checkbox- und Button-Komponenten in einem kompakten Anmeldeformular.",
            eyebrow: "Login-Flow",
            forgot: "Passwort vergessen?",
            helperEmail: "Verwende dieselbe E-Mail-Adresse, mit der du dich registriert hast.",
            helperPassword: "Mindestens 8 Zeichen.",
            heading: "Eine echte Formularfläche zur Validierung des Design-Systems.",
            intro: "Nutze diese Seite, um Abstände, Labels, Hilfetexte und Fokuszustände in einem realistischen Layout zu prüfen.",
            keepSignedIn: "Für 30 Tage angemeldet bleiben",
            localeLabel: "Sprache",
            password: "Passwort",
            passwordPlaceholder: "Passwort eingeben",
            signIn: "Anmelden",
            subtitle: "Melde dich an, um fortzufahren",
            summary: "Anmeldeformular mit Pflichtfeldern, Hilfetexten und Sitzungsoption.",
            summaryLabel: "Anwendungsfall",
            welcome: "Willkommen zurück",
            workEmail: "Geschäftliche E-Mail"
        }
    }
} as const;