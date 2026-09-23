"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Users,
    ClipboardList,
    ShieldCheck,
    Star,
    TrendingUp,
    Sparkles,
} from "lucide-react";
import { useState } from "react";
import { SELLER_DISPLAY_CATEGORIES } from "@/data/registration";
import RegistrationForm from "@/components/registration/RegistrationForm";

const sellerBenefits = [
    {
        icon: Users,
        title: "Reach more gift buyers",
        copy: "Put your products in front of people actively looking for Valentine gifts.",
    },
    {
        icon: ClipboardList,
        title: "Manage orders easily",
        copy: "Receive customer orders through Evivi instead of relying on scattered messages and manual tracking.",
    },
    {
        icon: ShieldCheck,
        title: "Get paid securely",
        copy: "Customer payments are processed through Evivi's payment system.",
    },
    {
        icon: Star,
        title: "Build your reputation",
        copy: "Earn ratings and reviews that help future buyers choose your business.",
    },
    {
        icon: TrendingUp,
        title: "Create more opportunities to sell",
        copy: "Reach customers beyond your existing audience and add another sales channel for your gift business.",
    },
];

const journeySteps = [
    {
        num: "01",
        title: "Apply to join",
        copy: "Tell us about your business, what you sell and where you operate.",
    },
    {
        num: "02",
        title: "Share your offerings",
        copy: "Let Evivi know what types of gifts or Valentine packages you offer.",
    },
    {
        num: "03",
        title: "Get ready for customers",
        copy: "Once selected, prepare your eligible offerings for the Evivi marketplace.",
    },
    {
        num: "04",
        title: "Receive structured orders",
        copy: "Customers discover your offerings and place orders through Evivi.",
    },
    {
        num: "05",
        title: "Fulfil the order",
        copy: "Support delivery, collection, or both based on your business model.",
    },
    {
        num: "06",
        title: "Grow with Evivi",
        copy: "Build your presence, customer trust and reputation as the marketplace develops.",
    },
];


export default function SellersPage() {
    return (
        <>
            <section
                id="hero"
                className="relative flex min-h-[680px] items-center overflow-hidden text-white"
            >
                <Image
                    src="/images/seller-hero.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hero-bg-bounce object-cover"
                />

                {/* Main image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/75 via-[var(--color-deep-plum)]/35 to-[var(--color-deep-plum)]/10" />

                {/* Soft fade into the next section */}
                <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[var(--color-deep-plum)] via-[var(--color-deep-plum)]/80 to-transparent" />

                <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                        How to sell on Evivi
                    </p>

                    <h1 className="mt-2 max-w-xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
                        Turn what you create into something worth celebrating.
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-white/85">
                        Bring your gifts, flowers and Valentine packages to
                        customers looking for meaningful ways to celebrate.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="#register"
                            className="btn-primary"
                        >
                            Apply to Sell on Evivi
                        </Link>

                        <a
                            href="#seller-journey"
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                        >
                            Explore how it works
                        </a>
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="dark"
                className="relative bg-[var(--color-deep-plum)] px-5 py-16 text-white sm:px-8"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                        Your craft deserves to be discovered
                    </p>

                    <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                        Whether you create bouquets, hampers, baked treats or
                        personalised gifts, there may be a place for you on Evivi.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-white/70">
                        We're inviting selected sellers to join early, create
                        real Valentine offerings and help shape the marketplace
                        before launch.
                    </p>
                </div>
            </section>

            <section
                id="seller-journey"
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            The seller journey
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            A simple path from application to selling.
                        </h2>
                    </div>

                    {/* Desktop */}
                    <div className="mt-8 hidden grid-cols-3 border-t border-[var(--color-lavender-border)] md:grid">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.num}
                                className={`p-5 ${
                                    index !== journeySteps.length - 1
                                        ? "border-r border-[var(--color-lavender-border)]"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center gap-3">
                                    <span
                                        className="flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                                        style={{
                                            backgroundColor:
                                                "var(--color-vibrant-magenta)",
                                        }}
                                    >
                                        {index + 1}
                                    </span>

                                    <h3 className="font-display text-lg font-semibold text-[var(--color-deep-plum)]">
                                        {step.title}
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted-purple)]">
                                    {step.copy}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Mobile */}
                    <div className="mt-8 md:hidden">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.num}
                                className="relative flex gap-4 pb-6 last:pb-0"
                            >
                                {index < journeySteps.length - 1 && (
                                    <span
                                        className="absolute left-5 top-10 bottom-0 border-l-2 border-dashed border-[var(--color-lavender-border)]"
                                        aria-hidden="true"
                                    />
                                )}

                                <span
                                    className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white"
                                    style={{
                                        backgroundColor:
                                            "var(--color-vibrant-magenta)",
                                    }}
                                >
                                    {index + 1}
                                </span>

                                <div className="flex-1 rounded-2xl px-2 py-1">
                                    <h3 className="font-display text-lg font-semibold text-[var(--color-deep-plum)]">
                                        {step.title}
                                    </h3>

                                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted-purple)]">
                                        {step.copy}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-8 sm:px-8"
            >
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-2">
                    <div className="relative hidden h-[360px] lg:block">
                        <Image
                            src="/images/seller-craft.png"
                            alt="A gift seller creating and preparing a celebration gift"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Made for creators
                        </p>

                        <h2 className="mt-2 font-display text-2xl text-[var(--color-deep-plum)] md:text-3xl">
                            Your products tell a story. Evivi helps customers find it.
                        </h2>

                        <p className="mt-3 text-sm text-[var(--color-muted-purple)]">
                            From a carefully arranged bouquet to a personalised
                            gift box, the things you create are part of how
                            people celebrate the moments that matter to them.
                        </p>
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Who can sell
                        </p>

                        <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Made for the people who make celebrations special.
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-soft">
                            <Image
                                src="/images/seller-gifts.png"
                                alt="Beautifully prepared Valentine's gift packages"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                            {SELLER_DISPLAY_CATEGORIES.map((category) => (
                                <div
                                    key={category}
                                    className="rounded-xl border bg-white px-4 py-3 text-sm font-medium text-[var(--color-deep-plum)]"
                                    style={{
                                        borderColor:
                                            "var(--color-lavender-border)",
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-4 text-center text-sm text-[var(--color-muted-purple)]">
                        Don't see your category? Tell us what you create when you apply.
                    </p>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-8 sm:px-8 md:py-12"
            >
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white sm:p-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                            For gift sellers
                        </p>

                        <h2 className="mt-3 font-display text-3xl md:text-4xl">
                            Sell your gifts. Reach more customers. Grow with Evivi.
                            <Heart
                                size={26}
                                fill="currentColor"
                                className="ml-1 inline align-middle text-[#ff8fa3]"
                                aria-hidden="true"
                            />
                        </h2>

                        <p className="mt-4 text-white/80">
                            If you sell flowers, hampers, chocolates, balloons
                            or Valentine gift packages, we're inviting selected
                            gift sellers to join Evivi early.
                        </p>
                    </div>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {sellerBenefits.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={item.title}
                                    className={`rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm ${
                                        index === sellerBenefits.length - 1
                                            ? "sm:col-span-2"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8fa3]">
                                            <Icon
                                                size={22}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <h3 className="text-lg font-medium">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm text-white/75">
                                        {item.copy}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-10 flex items-start gap-4 rounded-2xl bg-white/10 p-5 sm:p-6">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-vibrant-magenta)]">
                            <Sparkles
                                size={20}
                                aria-hidden="true"
                            />
                        </span>

                        <div>
                            <span className="font-medium">
                                Early sellers help shape Evivi.
                            </span>

                            <p className="mt-1 text-sm text-white/75">
                                Share feedback, suggest improvements and be part
                                of building the best way to buy and sell gifts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="register"
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Ready to join Evivi?
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Your next customer could be looking for exactly what you create.
                        </h2>

                        <p className="mt-3 text-[var(--color-muted-purple)]">
                            Join the early Evivi seller network and help us shape
                            the future of celebration.
                        </p>
                    </div>

                    <div
                        className="mt-10  p-6 md:p-8"
                    >
                        <h3 className="mb-6 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                            Tell us about your business
                        </h3>

                        <RegistrationForm role="seller" />
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[var(--color-muted-purple)]">
                        Submitting an application does not automatically
                        guarantee marketplace approval or placement.
                    </p>
                </div>
            </section>
        </>
    );
}