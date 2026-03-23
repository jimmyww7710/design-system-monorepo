import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Button, Checkbox, FormField, Input, buttonVariants, cn } from "@repo/ui";

import { copy, isLocale, type Locale } from "../../../lib/copy";

export const metadata: Metadata = {
    title: "Login Playground",
    description: "A realistic login flow built with the shared UI package"
};

export default async function LocalizedLoginPage({ params }: Readonly<{ params: Promise<{ lang: string }> }>) {
    const { lang } = await params;

    if (!isLocale(lang)) {
        notFound();
    }

    const locale = lang as Locale;
    const labels = copy[locale].login;

    return (
        <main className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 py-16" lang={locale}>
            <div className="grid w-full gap-8 rounded-[2rem] border border-white/60 bg-white/80 p-8 shadow-2xl shadow-sky-100 backdrop-blur md:grid-cols-[0.95fr_1.05fr] md:p-12">
                <section className="flex flex-col justify-between gap-8 rounded-[1.5rem] bg-slate-950 p-8 text-slate-50 shadow-xl shadow-slate-900/20">
                    <div className="space-y-5">
                        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-300">{labels.eyebrow}</p>
                        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">{labels.heading}</h1>
                        <p className="max-w-md text-base leading-7 text-slate-300">{labels.copy}</p>
                    </div>
                    <dl className="grid gap-5 rounded-[1.25rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
                        <div>
                            <dt className="font-semibold text-white">{labels.components}</dt>
                            <dd className="mt-1">Input, FormField, Checkbox, Button</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">{labels.summaryLabel}</dt>
                            <dd className="mt-1">{labels.summary}</dd>
                        </div>
                    </dl>
                </section>

                <section className="rounded-[1.5rem] border border-slate-200/70 bg-white p-8 shadow-lg shadow-slate-200/70">
                    <div className="space-y-2">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">{labels.welcome}</p>
                        <h2 className="text-3xl font-semibold tracking-tight text-slate-950">{labels.subtitle}</h2>
                        <p className="text-sm leading-6 text-slate-600">{labels.intro}</p>
                    </div>

                    <form action="#" className="mt-8 space-y-5">
                        <FormField helperText={labels.helperEmail} label={labels.workEmail} required>
                            <Input autoComplete="email" name="email" placeholder="name@example.com" />
                        </FormField>

                        <FormField helperText={labels.helperPassword} label={labels.password} required>
                            <Input autoComplete="current-password" name="password" placeholder={labels.passwordPlaceholder} type="password" />
                        </FormField>

                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                            <Checkbox label={labels.keepSignedIn} name="remember" />
                            <Link className="text-sm font-medium text-sky-700 underline-offset-4 hover:underline" href={`/${locale}`}>
                                {labels.forgot}
                            </Link>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">
                            <Button type="submit">{labels.signIn}</Button>
                            <Link className={cn(buttonVariants({ variant: "outline" }), "w-full")} href={`/${locale}`}>
                                {labels.back}
                            </Link>
                        </div>
                    </form>
                </section>
            </div>
        </main>
    );
}