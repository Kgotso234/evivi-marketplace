import Image from "next/image";
import Link from "next/link";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { SELLER_DISPLAY_CATEGORIES } from "@/data/registration";
import RegistrationForm from "@/components/registration/RegistrationForm";

const c = CONTENT.seller;

export const metadata = {
    title: "Sell on Evivi | Marketplace for Sellers & Artisans",
    description: "Grow your business by listing your gifts, decor, and event supplies on Evivi.",
};

export default function SellersPage() {
    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* 1. HERO SECTION (Animation Preserved & Applied on Background Picture) */}
            <section id="hero" className="relative overflow-hidden min-h-[90vh] md:min-h-screen flex items-center text-white">
                <Image 
                    src={c.hero.image} 
                    alt="Sell on Evivi" 
                    fill 
                    priority 
                    sizes="100vw" 
                    className="object-cover hero-bg-bounce transform-gpu scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-plum-deep/90 via-plum-deep/50 to-plum-deep/20" />
                
                <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
                    <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm border border-white/20 mb-4">
                        {c.hero.eyebrow}
                    </span>
                    <h1 className="mt-2 max-w-xl font-display text-3xl sm:text-5xl font-bold leading-[1.05]">
                        {c.hero.heading}
                    </h1>
                    <p className="mt-4 max-w-xl text-base sm:text-lg text-white/85 leading-relaxed">
                        {c.hero.body}
                    </p>
                    
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link 
                            href="#register" 
                            className="rounded-full bg-white px-7 py-3.5 text-center text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                        >
                            Apply to Sell on Evivi
                        </Link>
                        <a 
                            href="#seller-journey" 
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-xs sm:text-sm font-medium text-white transition-all hover:bg-white/10"
                        >
                            Explore how it works
                        </a>
                    </div>
                    
                    <p className="mt-5 flex items-center gap-2 text-xs sm:text-sm text-white/75">
                        <span className="size-2 shrink-0 rounded-full bg-coral-rose animate-pulse" aria-hidden="true" />
                        {c.hero.statusNote}
                    </p>
                </div>
            </section>

            {/* 2. INTRO SECTION */}
            <section data-navbar-theme="dark" className="bg-plum-deep px-5 py-16 text-white sm:px-8 border-b border-border/20">
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{c.intro.eyebrow}</p>
                    <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight">{c.intro.heading}</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-xs sm:text-sm md:text-base text-white/70 leading-relaxed">{c.intro.body}</p>
                </div>
            </section>

            {/* 3. SELLER JOURNEY */}
            <section id="seller-journey" data-navbar-theme="light" className="px-5 py-16 sm:px-8 md:py-24 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">The seller journey</p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">A simple path from application to selling.</h2>
                    </div>
                    <div className="grid gap-0 border-t border-border/70 md:grid-cols-2 lg:grid-cols-3">
                        {c.journeySteps.map((step, index) => (
                            <div 
                                key={step.num} 
                                className={`border-b border-border/70 p-6 transition-all hover:bg-secondary/40 ${index % 3 !== 2 ? "lg:border-r" : ""} ${index % 2 !== 1 ? "md:border-r lg:border-r-0" : ""}`}
                            >
                                <span className="font-display text-2xl font-bold text-magenta/80">{step.num}</span>
                                <h3 className="mt-2 font-display text-lg font-bold text-plum-deep">{step.title}</h3>
                                <p className="mt-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">{step.copy}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CRAFT / SPOTLIGHT SECTION */}
            <section data-navbar-theme="light" className="px-5 py-12 sm:px-8">
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl bg-card border border-border/70 shadow-xs lg:grid-cols-2 items-center">
                    <div className="relative hidden h-[380px] lg:block">
                        <Image src={c.craft.image} alt="A gift seller creating and preparing a celebration gift" fill className="object-cover" />
                    </div>
                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">{c.craft.eyebrow}</p>
                        <h2 className="mt-2 font-display text-2xl md:text-3xl font-bold text-plum-deep">{c.craft.heading}</h2>
                        <p className="mt-3 text-xs sm:text-sm leading-relaxed text-muted-foreground">{c.craft.body}</p>
                    </div>
                </div>
            </section>

            {/* 5. WHO CAN SELL & CATEGORIES */}
            <section data-navbar-theme="light" className="px-5 py-16 sm:px-8 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">{c.whoCanSell.eyebrow}</p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.whoCanSell.heading}</h2>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-border/70 shadow-xs">
                            <Image src={c.whoCanSell.image} alt="Beautifully prepared Valentine's gift packages" fill className="object-cover" />
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                            {SELLER_DISPLAY_CATEGORIES.map((category) => (
                                <div key={category} className="rounded-2xl border border-border/70 bg-card px-4 py-3.5 text-xs sm:text-sm font-semibold text-plum-deep shadow-2xs hover:border-magenta/40 transition-colors">
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>
                    <p className="mt-6 text-center text-xs text-muted-foreground">{c.whoCanSell.note}</p>
                </div>
            </section>

            {/* 6. BENEFITS */}
            <section data-navbar-theme="light" className="px-5 py-12 sm:px-8 md:py-16">
                <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-brand-gradient p-8 text-white sm:p-12 shadow-lg">
                    <div className="max-w-2xl">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">{c.benefits.eyebrow}</p>
                        <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold">
                            {c.benefits.heading}
                            {(() => { const Heart = getIcon("Heart"); return <Heart size={24} fill="currentColor" className="ml-2 inline align-middle text-[#ff8fa3]" aria-hidden="true" />; })()}
                        </h2>
                        <p className="mt-4 text-xs sm:text-sm text-white/80 leading-relaxed">{c.benefits.body}</p>
                    </div>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {c.benefits.items.map((item, index) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <li key={item.title} className={`rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm ${index === c.benefits.items.length - 1 ? "sm:col-span-2" : ""}`}>
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8fa3]"><Icon size={20} aria-hidden="true" /></span>
                                        <h3 className="text-base font-bold">{item.title}</h3>
                                    </div>
                                    <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed">{item.copy}</p>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white/10 p-5 sm:p-6 backdrop-blur-sm border border-white/15">
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-magenta">
                            {(() => { const Sparkles = getIcon("Sparkles"); return <Sparkles size={20} aria-hidden="true" />; })()}
                        </span>
                        <div>
                            <span className="font-bold text-sm sm:text-base">{c.benefits.note.title}</span>
                            <p className="mt-1 text-xs sm:text-sm text-white/75 leading-relaxed">{c.benefits.note.text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 7. REGISTRATION PORTAL */}
            <section id="register" data-navbar-theme="light" className="scroll-mt-20 px-5 py-16 sm:px-8 md:py-24 bg-soft-gradient">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center mb-10">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-magenta">{c.register.eyebrow}</p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">{c.register.heading}</h2>
                        <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">{c.register.body}</p>
                    </div>

                    <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-md">
                        <RegistrationForm role="seller" />
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-muted-foreground">{c.register.disclaimer}</p>
                </div>
            </section>
        </main>
    );
}