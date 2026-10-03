import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { helper } from "@/lib/helper";
import { CTA, CTA as _CTA, IS_LIVE, ROUTES } from "@/constants/copy";

const c = CONTENT.home;
const t = (value) => helper(value, IS_LIVE); // shorthand

export const metadata = {
    title: "Evivi - Find the Right Gift, Make the Moment Happen",
    description: t(c.closing.body), // reuse closing body as a reasonable meta description, or add a dedicated meta field to content.js if you'd rather keep them distinct
};

const HOW_IT_WORKS_ACCENT = "#E91E63";

const STATUS_LABEL = { open: "Open now", soon: "Coming later" };
const STATUS_STYLE = {
    open: "bg-[#FDE7EF] text-[var(--color-vibrant-magenta)]",
    soon: "border border-border bg-secondary text-muted-foreground",
};

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section id="hero" className="relative overflow-hidden min-h-[92vh] md:min-h-screen flex items-center text-white">
                <Image src="/images/hero-image.jpg" alt="" fill priority sizes="100vw" className="hidden md:block object-cover hero-bg-bounce" />
                <Image src="/images/Hero-mobile.jpg" alt="" fill priority sizes="100vw" className="block md:hidden object-cover hero-bg-bounce" />
                <div className="absolute inset-0 bg-black/40 z-[1]" />
                <div className="absolute inset-0 bg-radial-[at_left_center] from-black/80 via-black/40 to-transparent pointer-events-none z-[2]" />
                <div className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-44 bg-gradient-to-b from-black/70 via-black/30 to-transparent" aria-hidden="true" />

                <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 py-24 md:py-32">
                    <div className="max-w-xl bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/10 shadow-2xl">
                        <span
                            className="section-eyebrow mb-6 inline-block"
                            style={{ background: "rgba(255,255,255,0.15)", color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
                        >
                            {t(c.hero.badge)}
                        </span>
                        <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] mt-4 mb-6 drop-shadow-md">
                            {c.hero.heading.map((line, i) => (
                                <span key={line}>
                                    {line}
                                    {i < c.hero.heading.length - 1 && <br />}
                                </span>
                            ))}
                        </h1>
                        <p className="text-white/90 text-lg md:text-xl max-w-md mb-8 drop-shadow">{c.hero.body}</p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <Link href={CTA.buyer.href} className="btn-primary px-8 py-4 text-center text-lg font-semibold">
                                {CTA.buyer.label}
                            </Link>
                            <Link
                                href={CTA.seller.href}
                                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-8 py-4 text-center text-lg font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
                            >
                                {CTA.seller.label}
                            </Link>
                        </div>

                        <p className="mt-5 flex items-center gap-2 text-sm text-white/85">
                            <span className="size-2 shrink-0 rounded-full bg-[var(--color-coral-rose)]" aria-hidden="true" />
                            {t(c.hero.note)}
                        </p>
                    </div>
                </div>
            </section>

            {/* HOW IT WORKS */}
            <section id="how-it-works" data-navbar-theme="light" className="px-5 sm:px-8 pt-10 md:pt-16 pb-16 md:pb-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-magenta uppercase" style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}>
                            {t(c.howItWorks.eyebrow)}
                        </p>
                        <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold leading-[1.2] text-plum-deep">{c.howItWorks.heading}</h2>
                        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{t(c.howItWorks.intro)}</p>
                    </div>

                    <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
                        {c.howItWorks.steps.map((step, i) => {
                            const Icon = getIcon(step.icon);
                            return (
                                <div key={step.id} className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft">
                                    <div className="relative inline-flex">
                                        <span className="flex size-12 items-center justify-center rounded-xl bg-secondary" style={{ color: HOW_IT_WORKS_ACCENT }}>
                                            <Icon className="size-7" aria-hidden="true" />
                                        </span>
                                        <span
                                            className="absolute -left-2 -top-2 flex size-7 items-center justify-center rounded-full text-sm font-bold text-white"
                                            style={{ backgroundColor: HOW_IT_WORKS_ACCENT }}
                                            aria-hidden="true"
                                        >
                                            {i + 1}
                                        </span>
                                    </div>
                                    <h3 className="font-display mt-5 text-2xl leading-[1.3] text-plum-deep">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t(step.copy)}</p>
                                </div>
                            );
                        })}
                    </div>
                    {/* Mobile numbered-rail version omitted for brevity — identical
                        mapping over c.howItWorks.steps with t(step.copy), unchanged
                        pattern from the version already in your codebase. */}

                    {/* BANNER */}
                    <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-[#f6c9d6] bg-gradient-to-br from-[#fdf1f5] to-[#fbe4ec] p-6 sm:flex-row sm:items-center md:p-8">
                        <span className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white" style={{ color: HOW_IT_WORKS_ACCENT }}>
                            {(() => {
                                const GiftIcon = getIcon("Gift");
                                return <GiftIcon className="size-7" aria-hidden="true" />;
                            })()}
                        </span>
                        <div className="flex-1">
                            <h3 className="font-display text-2xl text-plum-deep">{c.banner.heading}</h3>
                            <p className="mt-1 text-base leading-relaxed text-muted-foreground">{t(c.banner.body)}</p>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
                            <Link
                                href={CTA.buyer.href}
                                className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-semibold sm:w-auto"
                            >
                                {CTA.buyer.label}
                                <ChevronRight size={16} aria-hidden="true" />
                            </Link>
                            <p className="px-6 text-xs leading-snug text-muted-foreground">{t(c.banner.note)}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHO IT'S FOR */}
            <section data-navbar-theme="light" className="bg-white px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold text-magenta uppercase" style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}>
                            {c.personas.eyebrow}
                        </p>
                        <h2 className="font-display mt-3 text-3xl md:text-4xl font-bold leading-[1.2] text-plum-deep">{c.personas.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.personas.intro}</p>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
                        {c.personas.items.map((p) => {
                            const Icon = getIcon(p.icon);
                            const status = t(p.status);
                            return (
                                <Link
                                    key={p.id}
                                    href={ROUTES[p.routeKey]}
                                    className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <span className="flex size-12 items-center justify-center rounded-xl bg-secondary" style={{ color: p.accent }}>
                                            <Icon className="size-7" aria-hidden="true" />
                                        </span>
                                        <span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold leading-none ${STATUS_STYLE[status]}`}>
                                            {STATUS_LABEL[status]}
                                        </span>
                                    </div>
                                    <h3 className="font-display mt-5 text-xl leading-[1.3] text-plum-deep">{p.title}</h3>
                                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-vibrant-magenta)]">
                                        {status === "open" ? (IS_LIVE ? "Shop now" : "Get early access") : "Join the waitlist"}
                                        <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                                    </span>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* VISION TEASER */}
            <section data-navbar-theme="light" className="bg-white px-5 sm:px-8 pb-16 md:pb-20">
                <div className="mx-auto max-w-6xl">
                    <div className="flex flex-col gap-6 rounded-[var(--radius-card)] border border-border bg-secondary p-8 md:flex-row md:items-center md:justify-between md:p-10">
                        <div className="max-w-2xl">
                            <p className="text-sm font-semibold text-magenta uppercase" style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}>
                                {c.vision.eyebrow}
                            </p>
                            <h3 className="font-display mt-3 text-2xl md:text-3xl font-bold leading-[1.2] text-plum-deep">{c.vision.heading}</h3>
                            <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.vision.body}</p>
                        </div>
                        <Link href={ROUTES[c.vision.routeKey]} className="btn-secondary shrink-0 gap-2">
                            {c.vision.linkLabel}
                            <ChevronRight className="size-4" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* CLOSING CTA */}
            <section data-navbar-theme="light" className="bg-white pb-20">
                <div className="mx-auto max-w-[1280px] px-5 md:px-8">
                    <div className="bg-soft-gradient rounded-[var(--radius-card)] px-6 py-12 text-center">
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--color-deep-plum)] mb-4">{c.closing.heading}</h3>
                        <p className="text-[var(--color-muted-purple)] text-lg mb-6 max-w-lg mx-auto">{t(c.closing.body)}</p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href={CTA.shop.href} className="btn-primary text-lg px-9 py-4">
                                {CTA.shop.label}
                            </Link>
                            <Link href={CTA.seller.href} className="btn-secondary text-lg px-9 py-4">
                                {CTA.seller.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}