import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { SELLER_DISPLAY_CATEGORIES } from "@/data/registration";
import RegistrationForm from "@/components/registration/RegistrationForm";

const c = CONTENT.seller;

export default function SellersPage() {
    return (
        <>
            <section id="hero" className="relative overflow-hidden min-h-[92vh] md:min-h-screen flex items-center text-white">
                <Image src={c.hero.image} alt="" fill priority sizes="100vw" className="object-cover hero-bg-bounce" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/90 via-[var(--color-deep-plum)]/50 to-[var(--color-deep-plum)]/20" />
                <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{c.hero.eyebrow}</p>
                    <h1 className="mt-2 max-w-xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">{c.hero.heading}</h1>
                    <p className="mt-4 max-w-xl text-lg text-white/85">{c.hero.body}</p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link href="#register" className="btn-primary">Apply to Sell on Evivi</Link>
                        <a href="#seller-journey" className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10">
                            Explore how it works
                        </a>
                    </div>
                    <p className="mt-5 flex items-center gap-2 text-sm text-white/75">
                        <span className="size-2 shrink-0 rounded-full bg-[var(--color-coral-rose)]" aria-hidden="true" />
                        {c.hero.statusNote}
                    </p>
                </div>
            </section>

            <section data-navbar-theme="dark" className="bg-[var(--color-deep-plum)] px-5 py-16 text-white sm:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{c.intro.eyebrow}</p>
                    <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">{c.intro.heading}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-white/70">{c.intro.body}</p>
                </div>
            </section>

            <section id="seller-journey" data-navbar-theme="light" className="px-5 py-16 sm:px-8 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">The seller journey</p>
                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">A simple path from application to selling.</h2>
                    </div>
                    <div className="mt-8 grid gap-0 border-t border-[var(--color-lavender-border)] md:grid-cols-2 lg:grid-cols-3">
                        {c.journeySteps.map((step, index) => (
                            <div key={step.num} className={`border-b border-[var(--color-lavender-border)] p-5 ${index % 3 !== 2 ? "lg:border-r" : ""} ${index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""}`}>
                                <span className="font-display text-2xl text-[var(--color-vibrant-magenta)]/70">{step.num}</span>
                                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-deep-plum)]">{step.title}</h3>
                                <p className="mt-1 text-sm text-[var(--color-muted-purple)]">{step.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 py-8 sm:px-8">
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-2">
                    <div className="relative hidden h-[360px] lg:block">
                        <Image src={c.craft.image} alt="A gift seller creating and preparing a celebration gift" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">{c.craft.eyebrow}</p>
                        <h2 className="mt-2 font-display text-2xl text-[var(--color-deep-plum)] md:text-3xl">{c.craft.heading}</h2>
                        <p className="mt-3 text-sm text-[var(--color-muted-purple)]">{c.craft.body}</p>
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 py-16 sm:px-8">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">{c.whoCanSell.eyebrow}</p>
                        <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">{c.whoCanSell.heading}</h2>
                    </div>
                    <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-soft">
                            <Image src={c.whoCanSell.image} alt="Beautifully prepared Valentine's gift packages" fill className="object-cover" />
                        </div>
                        <div className="grid gap-2 sm:grid-cols-2">
                            {SELLER_DISPLAY_CATEGORIES.map((category) => (
                                <div key={category} className="rounded-xl border bg-white px-4 py-3 text-sm font-medium text-[var(--color-deep-plum)]" style={{ borderColor: "var(--color-lavender-border)" }}>
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-4 text-center text-sm text-[var(--color-muted-purple)]">{c.whoCanSell.note}</p>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 py-8 sm:px-8 md:py-12">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white sm:p-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">{c.benefits.eyebrow}</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl">
                            {c.benefits.heading}
                            {(() => { const Heart = getIcon("Heart"); return <Heart size={26} fill="currentColor" className="ml-1 inline align-middle text-[#ff8fa3]" aria-hidden="true" />; })()}
                        </h2>
                        <p className="mt-4 text-white/80">{c.benefits.body}</p>
                    </div>
                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {c.benefits.items.map((item, index) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <li key={item.title} className={`rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm ${index === c.benefits.items.length - 1 ? "sm:col-span-2" : ""}`}>
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8fa3]"><Icon size={22} aria-hidden="true" /></span>
                                        <h3 className="text-lg font-medium">{item.title}</h3>
                                    </div>
                                    <p className="mt-2 text-sm text-white/75">{item.copy}</p>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="mt-10 flex items-start gap-4 rounded-2xl bg-white/10 p-5 sm:p-6">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-vibrant-magenta)]">
                            {(() => { const Sparkles = getIcon("Sparkles"); return <Sparkles size={20} aria-hidden="true" />; })()}
                        </span>
                        <div>
                            <span className="font-medium">{c.benefits.note.title}</span>
                            <p className="mt-1 text-sm text-white/75">{c.benefits.note.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="register" data-navbar-theme="light" className="px-5 py-16 sm:px-8 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">{c.register.eyebrow}</p>
                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">{c.register.heading}</h2>
                        <p className="mt-3 text-[var(--color-muted-purple)]">{c.register.body}</p>
                    </div>

                    <div className="mt-10">
                        <RegistrationForm role="seller" />
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[var(--color-muted-purple)]">{c.register.disclaimer}</p>
                </div>
            </section>
        </>
    );
}