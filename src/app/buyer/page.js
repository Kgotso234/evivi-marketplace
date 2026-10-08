import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Sparkles, CheckCircle2 } from "lucide-react";
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
        <main className="min-h-screen bg-background">
            {/* 1. Compact, Dedicated Sub-Page Hero Header */}
            <header id="hero" className="relative border-b border-border/30 bg-brand-gradient text-white overflow-hidden">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-12 md:pt-20 md:pb-16 relative z-10">
                    {/* Spatial Navigation Anchor / Breadcrumbs */}
                    <nav className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">For Buyers</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-7">
                            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm mb-4">
                                {c.hero.eyebrow}
                            </span>
                            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                                {c.hero.heading}
                            </h1>
                            <p className="mt-4 text-base sm:text-lg text-white/85 max-w-xl leading-relaxed">
                                {c.hero.body}
                            </p>
                            <div className="mt-8 flex flex-wrap items-center gap-4">
                                <a 
                                    href="#register" 
                                    className="rounded-full bg-white px-7 py-3.5 text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                                >
                                    Join the waitlist
                                </a>
                                <span className="flex items-center gap-1.5 text-xs text-white/70">
                                    <Sparkles size={14} className="text-magenta" />
                                    Priority access for Valentine 2027
                                </span>
                            </div>
                        </div>

                        {/* Compact Visual Preview Framing */}
                        <div className="lg:col-span-5 relative  lg:block">
                            <div className="relative h-64 w-full rounded-2xl overflow-hidden border border-white/20 shadow-xl">
                                <Image 
                                    src="/images/hero-image.jpg" 
                                    alt="Evivi Gifting Experience" 
                                    fill 
                                    priority 
                                    sizes="(max-width: 1024px) 100vw, 40vw" 
                                    className="object-cover" 
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/80 via-transparent to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/10 backdrop-blur-md p-3 border border-white/20 text-xs text-white flex items-center justify-between">
                                    <span>Curated Gifting Marketplace</span>
                                    <span className="flex size-2 rounded-full bg-emerald-400 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* 2. Step-by-Step Interactive Experience Flow */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">How it works</p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            A simpler way to find and send gifts
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            Evivi connects you with local businesses and delivery partners so you can focus on the moment, not the logistics.
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 relative">
                        {c.howItWorks.steps.map((step, idx) => {
                            const Icon = getIcon(step.icon);
                            return (
                                <div 
                                    key={step.number} 
                                    className="relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-6 transition-all hover:border-magenta/30 hover:shadow-md"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta">
                                                <Icon size={22} aria-hidden="true" />
                                            </span>
                                            <span className="flex size-7 items-center justify-center rounded-full bg-magenta/10 font-mono text-xs font-bold text-magenta">
                                                0{idx + 1}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-lg font-bold text-plum-deep">{step.title}</h3>
                                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 3. Valentine Feature Showcase Split-Screen */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-card border border-border/70 p-8 md:p-12 shadow-sm">
                        <div className="lg:col-span-5 relative min-h-[260px] sm:min-h-[300px] overflow-hidden rounded-2xl bg-secondary/50 flex flex-col items-center justify-center text-center p-6 border border-border/50">
                            {(() => { 
                                const GiftIcon = getIcon("Gift"); 
                                return <GiftIcon size={64} className="text-magenta/70 mb-3 animate-bounce" aria-hidden="true" />; 
                            })()}
                            <span className="text-xs font-bold uppercase tracking-widest text-plum-deep">Valentine 2027 Special</span>
                            <p className="mt-1 text-xs text-muted-foreground max-w-xs">Handpicked local gifts, bouquets, and artisanal treats ready for effortless ordering.</p>
                        </div>
                        <div className="lg:col-span-7">
                            <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">{c.valentineSection.eyebrow}</p>
                            <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.valentineSection.heading}</h2>
                            <p className="mt-4 text-base leading-relaxed text-muted-foreground">{c.valentineSection.body}</p>
                            <a 
                                href="#register" 
                                className="mt-6 inline-flex items-center gap-2 rounded-full bg-magenta px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-magenta/90"
                            >
                                Join the waitlist
                                <ChevronRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Why Join Early (3-Card Perks Grid) */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)]/30 px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.whyJoin.heading}</h2>
                        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{c.whyJoin.body}</p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {c.whyJoin.items.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-7 shadow-sm transition-all hover:border-magenta/30">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <CheckCircle2 size={18} className="text-magenta/60" />
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-plum-deep">{item.title}</h3>
                                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Destination Registration Portal Section */}
            <section id="register" data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center mb-10">
                        <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-widest text-magenta mb-3">
                            Early Access Registration
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-sm sm:text-base text-muted-foreground leading-relaxed">{c.register.body}</p>
                    </div>
                    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-md">
                        <RegistrationForm role="buyer" />
                    </div>
                </div>
            </section>
        </main>
    );
}