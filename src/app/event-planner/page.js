import Image from "next/image";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import RegistrationForm from "@/components/registration/RegistrationForm";

const c = CONTENT.eventPlanner;

export const metadata = {
    title: "Event Planners and Coordinators | Evivi",
    description: "Discover what Evivi is building for event planners and coordinators. Join the waitlist for future availability.",
};

export default function EventPlannersPage() {
    return (
        <>
            <section id="hero" className="relative overflow-hidden min-h-[80vh] flex items-center text-white">
                <Image src="/images/hero-image.jpg" alt="" fill priority sizes="100vw" className="hidden md:block object-cover hero-bg-bounce" />
                <Image src="/images/hero-mobile.jpg" alt="" fill priority sizes="100vw" className="block md:hidden object-cover hero-bg-bounce" />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/85 via-[var(--color-deep-plum)]/45 to-[var(--color-deep-plum)]/10" />
                <div className="relative z-10 mx-auto max-w-6xl w-full px-5 sm:px-8 py-24">
                    <span className="section-eyebrow" style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}>{c.hero.badge}</span>
                    <h1 className="mt-5 max-w-xl font-display text-4xl md:text-6xl font-bold leading-[1.05]">{c.hero.heading}</h1>
                    <p className="mt-5 max-w-lg text-lg text-white/85">{c.hero.body}</p>
                    <p className="mt-3 max-w-lg text-white/70">{c.hero.notAvailable}</p>
                    <a href="#register" className="btn-primary mt-8 inline-flex">Join the Waitlist</a>
                </div>
            </section>

            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">Why planners may join Evivi</h2>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {c.whyJoin.map((item) => {
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

            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">{c.future.eyebrow}</p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.future.heading}</h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.future.body}</p>
                    </div>
                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {c.futurePreviews.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.label} className="relative min-h-[220px] overflow-hidden rounded-2xl bg-soft-gradient flex flex-col items-center justify-center gap-2">
                                    <Icon size={36} className="text-magenta/50" aria-hidden="true" />
                                    <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-24">
                <div className="mx-auto max-w-5xl rounded-[var(--radius-card)] bg-[var(--color-warm-lilac)] px-7 py-12 text-center md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.availability.heading}</h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{c.availability.body}</p>
                </div>
            </section>

            {/* CHANGED: was href="#" with a TODO — now the shared registration form */}
            <section id="register" data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-muted-foreground">{c.register.body}</p>
                    </div>
                    <div className="mt-10">
                        <RegistrationForm role="planner" />
                    </div>
                </div>
            </section>
        </>
    );
}