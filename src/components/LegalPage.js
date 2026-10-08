import Link from "next/link";
import { getIcon } from "@/data/icons";


const ChevronRight = getIcon("ChevronRight");

export default function LegalPage({ content: c, crumb }) {
    return (
        <main className="min-h-screen bg-background">
            <section id="hero" className="relative overflow-hidden bg-brand-gradient text-white">
                <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-36 pb-32 md:pt-44 md:pb-40">
                    <nav className="flex items-center justify-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">{crumb}</span>
                    </nav>
                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm mb-4">
                            {c.hero.eyebrow}
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            {c.hero.heading}
                        </h1>
                        <p className="mt-4 mx-auto text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                            {c.hero.body}
                        </p>
                    </div>
                </div>

                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-36 md:h-44">
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom,
                                rgba(249,240,247,0) 0%,
                                rgba(249,240,247,0.15) 35%,
                                rgba(249,240,247,0.70) 75%,
                                rgba(249,240,247,1) 100%)`,
                        }}
                    />
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 pb-20">
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta mb-4">
                            On this page
                        </p>
                        <ul className="space-y-2 text-sm">
                            {c.sections.map((s) => (
                                <li key={s.id}>
                                    <a href={`#${s.id}`} className="text-muted-foreground hover:text-magenta transition-colors">
                                        {s.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <div className="lg:col-span-8 rounded-2xl bg-card border border-border/60 p-6 sm:p-10 shadow-sm">
                        <p className="text-xs text-muted-foreground">Last updated: {c.lastUpdated}</p>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.intro}</p>

                        <div className="mt-10 space-y-10">
                            {c.sections.map((s) => (
                                <div key={s.id} id={s.id} className="scroll-mt-24">
                                    <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-deep">
                                        {s.title}
                                    </h2>
                                    {s.body?.map((p, i) => (
                                        <p key={i} className="mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">
                                            {p}
                                        </p>
                                    ))}
                                    {s.list && (
                                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm sm:text-base leading-relaxed text-muted-foreground marker:text-magenta">
                                            {s.list.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}