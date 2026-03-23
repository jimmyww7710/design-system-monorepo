import { Button } from "@repo/ui";

const variants = [
    { label: "Primary", variant: "primary" as const },
    { label: "Secondary", variant: "secondary" as const },
    { label: "Outline", variant: "outline" as const }
];

export default function HomePage() {
    return (
        <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16">
            <div className="grid gap-10 rounded-[2rem] border border-white/60 bg-white/80 p-10 shadow-2xl shadow-sky-100 backdrop-blur md:grid-cols-[1.2fr_0.8fr] md:p-14">
                <section className="space-y-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Turborepo UI System</p>
                    <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-slate-950 md:text-6xl">
                        Build once, verify in Storybook, and exercise components in a real Next.js app.
                    </h1>
                    <p className="max-w-xl text-lg leading-8 text-slate-600">
                        The playground consumes the local workspace package through Turborepo, so component changes in
                        the UI library flow straight into a production-like app surface.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {variants.map((item) => (
                            <Button key={item.variant} variant={item.variant}>
                                {item.label}
                            </Button>
                        ))}
                    </div>
                </section>
                <aside className="rounded-[1.5rem] border border-slate-200/70 bg-slate-950 p-8 text-slate-50 shadow-xl shadow-slate-900/20">
                    <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Workspace Links</p>
                    <dl className="mt-6 space-y-6 text-sm text-slate-300">
                        <div>
                            <dt className="font-semibold text-white">Library package</dt>
                            <dd className="mt-1">packages/ui</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">Playground app</dt>
                            <dd className="mt-1">apps/web</dd>
                        </div>
                        <div>
                            <dt className="font-semibold text-white">Storybook docs</dt>
                            <dd className="mt-1">apps/docs</dd>
                        </div>
                    </dl>
                </aside>
            </div>
        </main>
    );
}