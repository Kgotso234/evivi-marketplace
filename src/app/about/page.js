import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
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
        <main className="min-h-screen bg-background">
            {/* 1. Compact Sub-Page Hero Header (Distinct from Main Landing Hero) */}
            <header id="hero" className="relative border-b border-border/30 bg-brand-gradient text-white">
                <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-16 pb-12 md:pt-20 md:pb-16">
                    {/* Spatial Breadcrumbs Navigation */}
                    <nav className="flex items-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">About Us</span>
                    </nav>

                    <div className="max-w-3xl">
                        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm mb-4">
                            {c.hero.eyebrow}
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            {c.hero.heading}
                        </h1>
                        <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                            {c.hero.body}
                        </p>
                    </div>
                </div>
            </header>

            {/* 2. Our Story (Editorial Asymmetric Split Layout) */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)]/30 px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Left Sticky Column */}
                    <div className="lg:col-span-5 lg:sticky lg:top-24">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">
                            {c.story.eyebrow}
                        </p>
                        <h2 className="mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep leading-snug">
                            {c.story.heading}
                        </h2>
                    </div>

                    {/* Right Narrative Body */}
                    <div className="lg:col-span-7 rounded-2xl bg-card border border-border/60 p-6 sm:p-8 shadow-sm">
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                            {c.story.body}
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. Our Vision (Bento Grid Layout) */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-20 border-b border-border/30">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">
                            {c.vision.eyebrow}
                        </p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            {c.vision.heading}
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            {c.vision.body}
                        </p>
                    </div>

                    {/* Asymmetric Bento-style Card Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
                        {c.vision.moments.map((item, index) => {
                            const Icon = getIcon(item.icon);
                            // Add responsive span dynamics to vary visual weight
                            const spanClass = (index === 0 || index === c.vision.moments.length - 1) 
                                ? "col-span-1 sm:col-span-2 md:col-span-1" 
                                : "col-span-1";

                            return (
                                <div 
                                    key={item.label} 
                                    className={`flex flex-col items-center justify-center text-center p-5 rounded-2xl border border-border/60 bg-card hover:border-magenta/40 hover:shadow-sm transition-all group ${spanClass}`}
                                >
                                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta group-hover:scale-110 group-hover:bg-magenta group-hover:text-white transition-all duration-300">
                                        <Icon size={22} aria-hidden="true" />
                                    </span>
                                    <span className="mt-3 text-xs sm:text-sm font-semibold text-plum-deep">
                                        {item.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 4. More Ways Evivi Can Help (Feature Cards with Badges) */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl mb-10">
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-magenta">
                            {c.moreWaysToHelp.eyebrow}
                        </p>
                        <h2 className="mt-2 font-display text-2xl sm:text-3xl md:text-4xl font-bold text-plum-deep">
                            {c.moreWaysToHelp.heading}
                        </h2>
                        <p className="mt-3 text-base text-muted-foreground leading-relaxed">
                            {c.moreWaysToHelp.body}
                        </p>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                        {c.moreWaysToHelp.items.map((item) => {
                            const Icon = getIcon(item.icon);
                            return (
                                <Link 
                                    key={item.title} 
                                    href={ROUTES[item.routeKey]} 
                                    className="group relative flex flex-col justify-between rounded-2xl border border-border/70 bg-card p-7 transition-all hover:-translate-y-1 hover:border-magenta/30 hover:shadow-md"
                                >
                                    <div>
                                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta mb-4">
                                            <Icon size={20} aria-hidden="true" />
                                        </span>
                                        <h3 className="font-display text-lg font-bold text-plum-deep group-hover:text-magenta transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                                            {item.text}
                                        </p>
                                    </div>
                                    <div className="mt-6 pt-4 border-t border-border/40 flex items-center justify-between text-xs font-semibold text-magenta">
                                        <span>Learn more</span>
                                        <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* 5. Closing CTA Banner (Floating Glassmorphism Accent) */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-20">
                <div className="mx-auto max-w-5xl rounded-3xl bg-brand-gradient p-8 sm:p-10 md:p-12 text-white shadow-lg relative overflow-hidden">
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                        <div className="max-w-xl">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold">
                                {c.closing.heading}
                            </h2>
                            <p className="mt-2 text-sm sm:text-base text-white/85 leading-relaxed">
                                {t(c.closing.body)}
                            </p>
                        </div>
                        <Link 
                            href={`${ROUTES.buyer}#register`} 
                            className="whitespace-nowrap shrink-0 rounded-full bg-white px-6 py-3.5 text-xs sm:text-sm font-bold text-magenta shadow-md transition-all hover:bg-white/90 hover:scale-105 active:scale-95"
                        >
                            {CTA.buyer.label}
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}