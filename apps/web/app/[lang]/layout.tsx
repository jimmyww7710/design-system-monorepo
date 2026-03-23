import Link from "next/link";
import { notFound } from "next/navigation";

import { copy, isLocale, locales, type Locale } from "../../lib/copy";

export function generateStaticParams() {
    return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const locale = lang as Locale;
    const labels = copy[locale];

    return (
        <div className="min-h-screen">
            <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-6 text-sm text-slate-600">
                <Link className="font-semibold uppercase tracking-[0.2em] text-sky-700" href={`/${locale}`}>
                    {labels.home.eyebrow}
                </Link>
                <nav aria-label={labels.home.localeLabel} className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 p-1 shadow-sm shadow-slate-200/70 backdrop-blur">
                    {locales.map((item) => {
                        const active = item === locale;

                        return (
                            <Link
                                aria-current={active ? "page" : undefined}
                                className={active ? "rounded-full bg-slate-950 px-3 py-1.5 font-semibold text-white" : "rounded-full px-3 py-1.5 font-medium text-slate-600 hover:bg-slate-100"}
                                href={`/${item}`}
                                key={item}
                                lang={item}
                            >
                                {item.toUpperCase()}
                            </Link>
                        );
                    })}
                </nav>
            </header>
            {children}
        </div>
    );
}