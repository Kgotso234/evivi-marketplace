"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Instagram,
    Facebook,
    Music2,
    ArrowRight,
} from "lucide-react";
import { CTA, selectSellerRole } from "@/constants/copy";

const socials = [
    {
        Icon: Instagram,
        label: "Evivi on Instagram",
        href: "#",
    },
    {
        Icon: Facebook,
        label: "Evivi on Facebook",
        href: "#",
    },
    {
        Icon: Music2,
        label: "Evivi on TikTok",
        href: "#",
    },
];

const columns = [
    {
        title: "Shop",
        links: [
            {
                label: "How it Works",
                href: "/#how-it-works",
            },
            {
                label: "Early Access",
                href: CTA.buyer.href,
            },
            {
                label: "FAQs",
                href: "/faq",
            },
        ],
    },
    {
        title: "Sell",
        links: [
            {
                label: "Sell on Evivi",
                href: CTA.seller.href,
                onClick: selectSellerRole,
            },
        ],
    },
    {
        title: "Partners",
        links: [
            {
                label: "Delivery Partners",
                href: "/delivery-partners",
            },
            {
                label: "Event Planners & Coordinators",
                href: "/event-planners",
            },
            {
                label: "Event Suppliers",
                href: "/event-suppliers",
            },
        ],
    },
    {
        title: "Company",
        links: [
            {
                label: "About Evivi",
                href: "/about",
            },
        ],
    },
];

export default function Footer() {
    return (
        <footer
            className="border-t"
            style={{
                background: "var(--color-soft-lavender, #FAF7FC)",
                borderColor:
                    "var(--color-lavender-border, #E8DFF0)",
            }}
        >
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">

                {/* Footer CTA */}
                <div
                    className="border-b py-14 md:py-16"
                    style={{
                        borderColor:
                            "var(--color-lavender-border, #E8DFF0)",
                    }}
                >
                    <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">

                        <div className="max-w-2xl">
                            <span
                                className="text-xs font-semibold uppercase tracking-[0.18em]"
                                style={{
                                    color:
                                        "var(--color-vibrant-magenta, #C2185B)",
                                }}
                            >
                                Celebrate with Evivi
                            </span>

                            <h2
                                className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl"
                                style={{
                                    color:
                                        "var(--color-deep-plum, #3B0D5C)",
                                }}
                            >
                                Make every moment worth celebrating.
                            </h2>

                            <p
                                className="mt-3 max-w-xl text-sm leading-6 sm:text-base"
                                style={{
                                    color:
                                        "var(--color-muted-purple, #6B5B7B)",
                                }}
                            >
                                Discover meaningful gifts, support local
                                sellers and bring celebrations together.
                            </p>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href={CTA.buyer.href}
                                className="btn-primary inline-flex items-center justify-center gap-2"
                            >
                                Shop Gifts
                                <ArrowRight size={17} />
                            </Link>

                            <Link
                                href={CTA.seller.href}
                                onClick={selectSellerRole}
                                className="btn-secondary inline-flex items-center justify-center gap-2"
                            >
                                Sell on Evivi
                                <ArrowRight size={17} />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Main Footer */}
                <div className="grid gap-12 py-14 md:py-16 lg:grid-cols-[1.6fr_repeat(4,1fr)] lg:gap-12">

                    {/* Brand */}
                    <div>
                        <Link
                            href="/"
                            className="inline-flex"
                            aria-label="Evivi home"
                        >
                            <Image
                                src="/images/evivi-logo.png"
                                alt="Evivi"
                                width={150}
                                height={60}
                                className="h-11 w-auto object-contain"
                            />
                        </Link>

                        <p
                            className="mt-5 max-w-[290px] text-sm leading-6"
                            style={{
                                color:
                                    "var(--color-muted-purple, #6B5B7B)",
                            }}
                        >
                            A celebration marketplace connecting people with
                            gifts, local sellers, delivery partners and event
                            professionals.
                        </p>

                        {/* Social Links */}
                        <div className="mt-6 flex items-center gap-2.5">
                            {socials.map(
                                ({ Icon, label, href }) => (
                                    <a
                                        key={label}
                                        href={href}
                                        aria-label={label}
                                        className="flex h-9 w-9 items-center justify-center rounded-full border bg-white transition-all duration-200 hover:-translate-y-0.5"
                                        style={{
                                            borderColor:
                                                "var(--color-lavender-border, #E8DFF0)",
                                            color:
                                                "var(--color-deep-plum, #3B0D5C)",
                                        }}
                                    >
                                        <Icon
                                            size={16}
                                            strokeWidth={1.8}
                                        />
                                    </a>
                                )
                            )}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {columns.map((column) => (
                        <div key={column.title}>
                            <h3
                                className="text-sm font-semibold"
                                style={{
                                    color:
                                        "var(--color-deep-plum, #3B0D5C)",
                                }}
                            >
                                {column.title}
                            </h3>

                            <ul className="mt-5 space-y-3">
                                {column.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={link.onClick}
                                            className="text-sm transition-colors duration-200 hover:text-[var(--color-vibrant-magenta,#C2185B)]"
                                            style={{
                                                color:
                                                    "var(--color-muted-purple, #6B5B7B)",
                                            }}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div
                    className="flex flex-col gap-4 border-t py-6 text-xs sm:flex-row sm:items-center sm:justify-between"
                    style={{
                        borderColor:
                            "var(--color-lavender-border, #E8DFF0)",
                        color:
                            "var(--color-muted-purple, #8A7898)",
                    }}
                >
                    <p>
                        © 2026 Innerchild Events (Pty) Ltd. All rights
                        reserved.
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                        <Link
                            href="#"
                            className="transition-colors hover:text-[var(--color-vibrant-magenta,#C2185B)]"
                        >
                            Terms & Conditions
                        </Link>

                        <Link
                            href="#"
                            className="transition-colors hover:text-[var(--color-vibrant-magenta,#C2185B)]"
                        >
                            Privacy Policy
                        </Link>

                        <Link
                            href="#"
                            className="transition-colors hover:text-[var(--color-vibrant-magenta,#C2185B)]"
                        >
                            Seller Agreement
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}