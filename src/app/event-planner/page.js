import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Calendar, Sparkles, Clock, CheckCircle2 } from "lucide-react";
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
        <main className="min-h-screen bg-background text-foreground">
            {/* 1. HERO HEADER */}
            <header className="relative border-b border-border/30 bg-brand-gradient text-white overflow-hidden">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-12 md:pt-20 md:pb-16 relative z-10">
                    {/* Spatial Navigation / Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">Event Planners</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm border border-white/20 mb-4">
                                {c.hero.badge}
                            </span>
                            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                {c.hero.heading}
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                                {c.hero.body}
                            </p>
                            <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-xl leading-relaxed">
                                {c.hero.notAvailable}
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a 
                                    href="#register" 
                                    className="rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                                >
                                    Join the Waitlist
                                </a>
                                <a 
                                    href="#why-join" 
                                    className="rounded-full bg-white/10 border border-white/20 px-6 py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/20"
                                >
                                    Learn More
                                </a>
                            </div>
                        </div>

                        {/* Visual Image Card Frame */}
                        <div className="lg:col-span-5 relative hidden lg:block">
                            <div className="relative h-72 w-full rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                                <Image 
                                    src="/images/hero-image.jpg" 
                                    alt="Event coordination preview" 
                                    fill 
                                    priority 
                                    sizes="(max-width: 1024px) 100vw, 40vw" 
                                    className="object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 text-xs text-white flex items-center gap-3">
                                    <span className="flex size-9 items-center justify-center rounded-lg bg-white/20 text-white">
                                        <Calendar size={18} />
                                    </span>
                                    <div>
                                        <p className="font-semibold">Event Coordination Tools</p>
                                        <p className="text-[11px] text-white/70">Building for seamless celebration planning</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. WHY PLANNERS JOIN */}
            <section id="why-join" data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <span className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">Why Evivi</span>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            Why planners may join Evivi
                        </h2>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {c.whyJoin.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-6 shadow-sm hover:border-magenta/30 transition-all">
                                    <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta">
                                        <Icon size={20} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display mt-5 text-xl font-bold text-plum-deep">{item.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. FUTURE PREVIEWS */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">{c.future.eyebrow}</p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.future.heading}</h2>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.future.body}</p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {c.futurePreviews.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.label} className="relative min-h-[200px] overflow-hidden rounded-2xl border border-border/70 bg-soft-gradient p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-magenta/30 transition-all">
                                    <span className="flex size-12 items-center justify-center rounded-2xl bg-card border border-border/60 text-magenta/70 shadow-xs">
                                        <Icon size={24} aria-hidden="true" />
                                    </span>
                                    <span className="text-xs sm:text-sm font-semibold text-plum-deep">{item.label}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. AVAILABILITY NOTICE */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-12 md:py-16 border-b border-border/30">
                <div className="mx-auto max-w-5xl rounded-3xl bg-[var(--color-warm-lilac)]/30 border border-border/70 px-7 py-10 md:px-12 text-center">
                    <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-magenta/10 text-magenta mb-4">
                        <Clock size={20} />
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-plum-deep">{c.availability.heading}</h2>
                    <p className="mx-auto mt-3 max-w-2xl text-xs sm:text-sm sm:leading-relaxed text-muted-foreground">{c.availability.body}</p>
                </div>
            </section>

            {/* 5. REGISTRATION PORTAL */}
            <section id="register" data-navbar-theme="light" className="scroll-mt-20 px-5 sm:px-8 py-16 md:py-24 bg-soft-gradient">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center mb-10">
                        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-magenta mb-3">
                            Waitlist
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.register.body}</p>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-md">
                        <RegistrationForm role="planner" />
                    </div>
                </div>
            </section>
        </main>
    );
}