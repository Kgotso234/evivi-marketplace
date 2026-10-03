import Image from "next/image";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import RegistrationForm from "@/components/registration/RegistrationForm";

const c = CONTENT.buyer;

export const metadata = {
    title: "Get Valentine Early Access | Evivi",
    description: "Be among the first to discover gifts and celebrations on Evivi for Valentine 2027.",
};

export default function BuyersPage() {
    return (
        <>
            <section id="hero" className="relative overflow-hidden min-h-screen flex items-center text-white">
                <Image src="/images/hero-image.jpg" alt="" fill priority sizes="100vw" className="hidden md:block object-cover hero-bg-bounce" />
                <Image src="/images/hero-mobile.jpg" alt="" fill priority sizes="100vw" className="block md:hidden object-cover hero-bg-bounce" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/85 via-[var(--color-deep-plum)]/45 to-[var(--color-deep-plum)]/10" />
                <div className="relative z-10 mx-auto max-w-6xl w-full px-5 sm:px-8 py-24">
                    <span className="section-eyebrow" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>{c.hero.eyebrow}</span>
                    <h1 className="mt-5 max-w-xl font-display text-4xl md:text-6xl font-bold leading-[1.05]">{c.hero.heading}</h1>
                    <p className="mt-5 max-w-lg text-lg text-white/85">{c.hero.body}</p>
                    <a href="#register" className="btn-primary mt-8 inline-flex">Join the waitlist</a>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">How it works</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">A simpler way to find and send gifts</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">Evivi will connect you with local businesses and delivery partners so you can focus on the moment, not the logistics.</p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {c.howItWorks.steps.map((step) => {
                            const Icon = getIcon(step.icon);
                            return (
                                <div key={step.number} className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft">
                                    <div className="relative inline-flex">
                                        <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta"><Icon className="size-6" aria-hidden="true" /></span>
                                        <span className="absolute -left-2 -top-2 flex size-6 items-center justify-center rounded-full text-xs font-bold text-white" style={{ backgroundColor: "var(--color-vibrant-magenta)" }} aria-hidden="true">{step.number.replace("0", "")}</span>
                                    </div>
                                    <h3 className="font-display mt-5 text-xl text-plum-deep">{step.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
                    <div className="relative min-h-[320px] overflow-hidden rounded-[var(--radius-card)] bg-soft-gradient flex items-center justify-center">
                        {(() => { const GiftIcon = getIcon("Gift"); return <GiftIcon size={56} className="text-magenta/50" aria-hidden="true" />; })()}
                    </div>
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">{c.valentineSection.eyebrow}</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.valentineSection.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.valentineSection.body}</p>
                        <a href="#register" className="btn-primary mt-7 inline-flex">Join the waitlist</a>
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)] px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.whyJoin.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.whyJoin.body}</p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {c.whyJoin.items.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-6">
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta"><Icon size={20} aria-hidden="true" /></span>
                                    <h3 className="font-display mt-5 text-xl text-plum-deep">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CHANGED: was a bare "#" link with a TODO comment — now a real
                registration form, same component/pattern as the Seller page. */}
            <section id="register" data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-muted-foreground">{c.register.body}</p>
                    </div>
                    <div className="mt-10">
                        <RegistrationForm role="buyer" />
                    </div>
                </div>
            </section>
        </>
    );
}