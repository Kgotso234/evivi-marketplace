"use client";

import { useState } from "react";
import Link from "next/link";
//import { ChevronRight, Plus, Search, HelpCircle, Mail } from "lucide-react";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { ROUTES } from "@/constants/copy";

const c = CONTENT.faq;

const ChevronRight = getIcon("ChevronRight");
const Search = getIcon("Search");
const Plus = getIcon("Plus");
const HelpCircle = getIcon("HelpCircle");
const Mail = getIcon("Mail");

export default function FaqPage() {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter questions based on search input
    const filteredGroups = c.groups
        .map((group) => {
            const items = group.items.filter(
                (item) =>
                    item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    item.a.toLowerCase().includes(searchQuery.toLowerCase())
            );
            return { ...group, items };
        })
        .filter((group) => group.items.length > 0);

    return (
        <main className="min-h-screen bg-background text-foreground">
            {/* 1. HERO HEADER */}
            <section id="hero" className="relative overflow-hidden bg-brand-gradient text-white">
                {/* Content sits above the fade; extra top padding clears the fixed, transparent navbar */}
                <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 pt-28 pb-44 md:pt-50 md:pb-60">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center justify-center gap-2 text-xs text-white/70 uppercase tracking-widest font-medium mb-6">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <ChevronRight size={14} className="text-white/40" />
                        <span className="text-white font-semibold">FAQ</span>
                    </nav>

                    <div className="mx-auto max-w-3xl text-center">
                        <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur-sm border border-white/20 mb-4">
                            Support & Knowledge Base
                        </span>
                        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            {c.heading}
                        </h1>
                        <p className="mt-4 mx-auto text-base sm:text-lg text-white/85 max-w-2xl leading-relaxed">
                            {c.intro}
                        </p>

                        {/* Quick Search Bar */}
                        <div className="mt-8 relative max-w-xl mx-auto">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground z-10" />
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search questions or keywords..."
                                className="w-full rounded-full bg-card text-foreground pl-11 pr-4 py-3.5 text-xs sm:text-sm border border-border/60 shadow-md focus:outline-hidden focus:ring-2 focus:ring-magenta/50 placeholder:text-muted-foreground/70"
                            />
                        </div>
                    </div>
                </div>

                {/* Tall, eased fade into the FAQ section (starts at --color-warm-lilac #F9F0F7) */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-44 md:h-60">
                    <div
                        className="absolute inset-0 backdrop-blur-md"
                        style={{
                            WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
                            maskImage: "linear-gradient(to bottom, transparent 0%, black 100%)",
                        }}
                    />
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom,
                                rgba(249,240,247,0) 0%,
                                rgba(249,240,247,0.04) 15%,
                                rgba(249,240,247,0.15) 35%,
                                rgba(249,240,247,0.40) 55%,
                                rgba(249,240,247,0.70) 75%,
                                rgba(249,240,247,0.92) 90%,
                                rgba(249,240,247,1) 100%)`,
                        }}
                    />
                </div>
            </section>

            {/* 2. FAQ ACCORDION GROUPS */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-20 bg-soft-gradient min-h-[50vh]">
                <div className="mx-auto max-w-6xl">
                    {filteredGroups.length > 0 ? (
                        <div className="space-y-12 sm:space-y-16">
                            {filteredGroups.map((group) => (
                                <div key={group.title} className="scroll-mt-24">
                                    <h2 className="font-display text-xl sm:text-2xl font-bold text-plum-deep mb-6 flex items-center gap-2">
                                        <HelpCircle size={22} className="text-magenta" />
                                        {group.title}
                                    </h2>
                                    <div className="grid gap-4 md:grid-cols-2 items-start">
                                        {group.items.map((item, index) => (
                                            <details
                                                key={item.q}
                                                open={index === 0 && searchQuery === ""}
                                                className="group rounded-2xl border border-border/70 bg-card shadow-2xs transition-all duration-200 hover:border-magenta/30 hover:shadow-sm"
                                            >
                                                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-display font-semibold text-plum-deep text-sm sm:text-base sm:px-6">
                                                    <span>{item.q}</span>
                                                    <Plus
                                                        size={18}
                                                        className="shrink-0 text-magenta transition-transform duration-200 group-open:rotate-45"
                                                        aria-hidden="true"
                                                    />
                                                </summary>
                                                <div className="px-5 pb-5 sm:px-6 text-xs sm:text-sm border-t border-border/30 pt-3 mt-1">
                                                    <p className="leading-relaxed text-muted-foreground">{item.a}</p>
                                                    {item.linkRouteKey && (
                                                        <Link
                                                            href={ROUTES[item.linkRouteKey]}
                                                            className="mt-4 inline-flex items-center gap-1.5 font-bold text-magenta hover:underline"
                                                        >
                                                            <span>{item.linkLabel}</span>
                                                            <span aria-hidden="true"><ChevronRight size={14}  /></span>
                                                        </Link>
                                                    )}
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16 bg-card rounded-3xl border border-border/70 max-w-2xl mx-auto p-8">
                            <p className="text-lg font-semibold text-plum-deep">No questions matching "{searchQuery}"</p>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                                Try adjusting your search query or clear the input to see all topics.
                            </p>
                            <button
                                onClick={() => setSearchQuery("")}
                                className="mt-4 rounded-full bg-magenta/10 text-magenta px-4 py-2 text-xs font-bold hover:bg-magenta/20 transition-colors"
                            >
                                Clear Search Filter
                            </button>
                        </div>
                    )}

                    {/* 3. CONTACT SUPPORT FOOTER CARD */}
                    <div className="mt-16 sm:mt-20 rounded-3xl border border-border/70 bg-card p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-xs">
                        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-secondary text-magenta mb-4">
                            <Mail size={22} />
                        </div>
                        <h3 className="font-display text-xl font-bold text-plum-deep">Still have questions?</h3>
                        <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
                            Can't find the answer you're looking for? Reach out directly to our support team and we'll be happy to help.
                        </p>
                        <a
                            href="mailto:hello@evivi.com"
                            className="mt-6 inline-flex items-center justify-center rounded-full bg-magenta px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all hover:bg-magenta/90"
                        >
                            Contact Support
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}