import Link from "next/link";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { helper } from "@/lib/helper";
import { CTA, IS_LIVE, ROUTES } from "@/constants/copy";

const c = CONTENT.about;
const t = (v) => helper(v, IS_LIVE);

export const metadata = {
    title: "About Evivi | Our Vision",
    description: "Evivi is starting with Valentine gifting, and building toward a full celebration marketplace. Learn about our vision for what's next.",
};

export default function AboutPage() {
    return (
        <>
            <section id="hero" className="relative min-h-screen overflow-hidden bg-brand-gradient text-white">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 py-28 md:py-36 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{c.hero.eyebrow}</p>
                    <h1 className="mt-4 mx-auto max-w-3xl font-display text-4xl md:text-6xl font-bold leading-[1.1]">{c.hero.heading}</h1>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-white/85">{c.hero.body}</p>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">{c.vision.eyebrow}</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.vision.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.vision.body}</p>
                    </div>
                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {c.vision.moments.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.label} className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border/70 bg-card p-5">
                                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta"><Icon size={22} aria-hidden="true" /></span>
                                    <span className="text-sm font-medium text-plum-deep">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">{c.moreWaysToHelp.eyebrow}</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.moreWaysToHelp.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.moreWaysToHelp.body}</p>
                    </div>
                    <div className="mt-10 grid gap-5 sm:grid-cols-2">
                        {c.moreWaysToHelp.items.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <Link key={item.title} href={ROUTES[item.routeKey]} className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft">
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta"><Icon size={20} aria-hidden="true" /></span>
                                    <h3 className="font-display mt-5 text-xl text-plum-deep">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-magenta">Learn more<span className="transition-transform group-hover:translate-x-1">→</span></span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)] px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">{c.story.eyebrow}</p>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.story.heading}</h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.story.body}</p>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] evivi-gradient px-7 py-12 text-center text-white md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">{c.closing.heading}</h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">{t(c.closing.body)}</p>
                    <Link href={`${ROUTES.buyer}#register`} className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-vibrant-magenta)] transition-transform hover:-translate-y-0.5">
                        {CTA.buyer.label}
                    </Link>
                </div>
            </section>
        </>
    );
}