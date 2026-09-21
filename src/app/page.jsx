import Image from "next/image";
import Link from "next/link";
import {
    Search,
    Gift,
    Truck,
    ClipboardCheck,
    ChevronRight,
    Heart,
    Store,
    Bike,
    CalendarCheck,
    Package,
} from "lucide-react";
import { CTA } from "@/constants/copy";

export const metadata = {
    title: "Evivi — Find the Right Gift, Make the Moment Happen",
    description:
        "Evivi is a marketplace for gifts and celebrations, connecting buyers with local sellers, delivery partners, and event professionals.",
};

const HOW_IT_WORKS_ACCENT = "#E91E63";

const steps = [
    {
        icon: Search,
        title: "Discover",
        copy: "Browse Valentine gifts from local gift sellers near you or near where the gift needs to go.",
    },
    {
        icon: Gift,
        title: "Choose",
        copy: "Pick the gift that feels right and review the product details before ordering.",
    },
    {
        icon: Truck,
        title: "Choose delivery or collection",
        copy: "See the options available for your gift and plan for when you need it.",
    },
    {
        icon: ClipboardCheck,
        title: "Pay and follow your order",
        copy: "Complete your purchase and follow your gift until it is delivered or ready for collection.",
    },
];

const PERSONAS = [
    {
        title: "Buyers",
        description: "Find and send the right gift, delivered where it needs to be.",
        href: "/#hero",
        icon: Gift,
        accent: "var(--color-vibrant-magenta)",
    },
    {
        title: "Sellers",
        description: "List your gifts and reach more Valentine buyers.",
        href: "/sellers",
        icon: Store,
        accent: "var(--color-royal-purple)",
    },
    {
        title: "Delivery Partners",
        description: "Earn from local deliveries on your own schedule.",
        href: "/delivery-partners",
        icon: Bike,
        accent: "var(--color-coral-rose)",
    },
    {
        title: "Event Planners",
        description: "Coordinate events and connect with trusted suppliers.",
        href: "/event-planners",
        icon: CalendarCheck,
        accent: "var(--color-deep-plum)",
    },
    {
        title: "Suppliers",
        description: "Supply the products and services behind every celebration.",
        href: "/event-suppliers",
        icon: Package,
        accent: "var(--color-muted-purple)",
    },
];

export default function HomePage() {
    return (
        <>
            {/* 1. Hero — id="hero" is what Navbar checks; no data-navbar-theme needed,
                   Navbar treats #hero as transparent by default, then flips to "light"
                   once the user scrolls past it. */}
            <section
                id="hero"
                className="relative overflow-hidden min-h-[92vh] md:min-h-screen flex items-center text-white"
            >
                <Image
                    src="/images/hero-image.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hidden md:block object-cover hero-bg-bounce"
                />
                <Image
                    src="/images/hero-mobile.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="block md:hidden object-cover hero-bg-bounce"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/85 via-[var(--color-deep-plum)]/45 to-[var(--color-deep-plum)]/10" />

                <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 py-32 md:py-40">
                    <div className="max-w-xl">
                        <span
                            className="section-eyebrow mb-4"
                            style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
                        >
                            Launching with Valentine gifting
                        </span>
                        <h1 className="font-display text-3xl md:text-5xl font-bold leading-[1.05] mt-4 mb-5">
                            Find the right gift.
                            <br />
                            Make the moment happen.
                        </h1>
                        <p className="text-white/85 text-lg md:text-xl max-w-md mb-10">
                            Evivi is a marketplace for gifts and celebrations. It connects people looking for gifts with local gift sellers, making it easier to find and buy gifts today. As Evivi grows, we plan to bring Event Planners & Coordinators and Event Suppliers onto the platform as well.
                        </p>
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                            <Link href={CTA.buyer.href} className="btn-primary text-lg px-9 py-4">
                                {CTA.buyer.label}
                            </Link>
                            <Link
                                href={CTA.seller.href}
                                className="btn-secondary text-lg px-9 py-4 bg-transparent border-white/40 text-white hover:bg-white/10"
                            >
                                {CTA.seller.label}
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. How it works — embedded directly here, includes its own Valentine CTA card */}
            <section id="how-it-works" data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p
                            className="text-sm font-semibold text-magenta uppercase"
                            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
                        >
                            How Evivi works
                        </p>
                        <h2 className="font-display mt-3 text-3xl md:text-5xl font-bold leading-[1.2] text-plum-deep">
                            Find, choose and send the perfect gift.{" "}
                            <Heart
                                size={30}
                                fill="currentColor"
                                className="inline text-[#ff8fa3] align-middle"
                                aria-hidden="true"
                            />
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            From discovery to delivery, Evivi makes gifting easy and stress-free
                        </p>
                    </div>

                    {/* Mobile: numbered rail with dashed connector */}
                    <div className="mt-10 max-w-2xl md:hidden">
                        {steps.map((item, i) => (
                            <div key={item.title} className="relative flex gap-4 pb-5 last:pb-0">
                                {i < steps.length - 1 && (
                                    <span
                                        className="absolute left-[26px] top-12 bottom-0 border-l-2 border-dashed"
                                        style={{ borderColor: "#F2B6CC" }}
                                        aria-hidden="true"
                                    />
                                )}
                                <span
                                    className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-base font-semibold"
                                    style={{ backgroundColor: "#FDE7EF", color: HOW_IT_WORKS_ACCENT }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-1 rounded-2xl border border-border/70 bg-card px-4 py-4">
                                    <span
                                        className="flex size-12 items-center justify-center rounded-xl bg-secondary"
                                        style={{ color: HOW_IT_WORKS_ACCENT }}
                                    >
                                        <item.icon className="size-7" aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display mt-5 text-2xl leading-[1.3] text-plum-deep">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.copy}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Desktop: 4-column grid with badge-on-icon-corner numbering */}
                    <div className="mt-10 hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((item, i) => (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft"
                            >
                                <div className="relative inline-flex">
                                    <span
                                        className="flex size-12 items-center justify-center rounded-xl bg-secondary"
                                        style={{ color: HOW_IT_WORKS_ACCENT }}
                                    >
                                        <item.icon className="size-7" aria-hidden="true" />
                                    </span>
                                    <span
                                        className="absolute -left-2 -top-2 flex size-7 items-center justify-center rounded-full text-sm font-bold text-white"
                                        style={{ backgroundColor: HOW_IT_WORKS_ACCENT }}
                                        aria-hidden="true"
                                    >
                                        {i + 1}
                                    </span>
                                </div>
                                <h3 className="font-display mt-5 text-2xl leading-[1.3] text-plum-deep">
                                    {item.title}
                                </h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{item.copy}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 flex flex-col items-start gap-4 rounded-2xl border border-[#f6c9d6] bg-gradient-to-br from-[#fdf1f5] to-[#fbe4ec] p-6 sm:flex-row sm:items-center md:p-8">
                        <span
                            className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-white"
                            style={{ color: HOW_IT_WORKS_ACCENT }}
                        >
                            <Gift className="size-7" aria-hidden="true" />
                        </span>
                        <div className="flex-1">
                            <h3 className="font-display text-2xl text-plum-deep">Valentine's Day doesn't wait.</h3>
                            <p className="mt-1 text-base leading-relaxed text-muted-foreground">
                                Find your gift early, choose how you want it delivered, and avoid the last-minute rush.
                            </p>
                        </div>
                        <div className="flex w-full flex-col items-start gap-2 sm:w-auto sm:items-end">
                            <Link
                                href={CTA.buyer.href}
                                className="btn-primary inline-flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-semibold sm:w-auto focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--color-deep-plum,#3B0D5C)]/40"
                            >
                                {CTA.buyer.label}
                                <span aria-hidden="true">
                                    <ChevronRight size={16} />
                                </span>
                            </Link>
                            <p className="text-xs leading-snug text-muted-foreground px-6">
                                Be the first to shop and enjoy early offers.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Who Evivi is for — same mobile numbered-rail / desktop grid pattern as How it Works,
                   embedded directly here rather than a separate component. */}
            <section data-navbar-theme="light" className="bg-white px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p
                            className="text-sm font-semibold text-magenta uppercase"
                            style={{ letterSpacing: "1.2px", lineHeight: 1.2 }}
                        >
                            Who it's for
                        </p>
                        <h2 className="font-display mt-3 text-3xl md:text-5xl font-bold leading-[1.2] text-plum-deep">
                            Who Evivi is for
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            One marketplace, five ways to be part of it.
                        </p>
                    </div>

                    {/* Mobile: numbered rail with dashed connector, same pattern as How it Works */}
                    <div className="mt-10 max-w-2xl md:hidden">
                        {PERSONAS.map((p, i) => (
                            <Link key={p.title} href={p.href} className="relative flex gap-4 pb-5 last:pb-0">
                                {i < PERSONAS.length - 1 && (
                                    <span
                                        className="absolute left-[26px] top-12 bottom-0 border-l-2 border-dashed"
                                        style={{ borderColor: "var(--color-lavender-border)" }}
                                        aria-hidden="true"
                                    />
                                )}
                                <span
                                    className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full text-base font-semibold"
                                    style={{ backgroundColor: `${p.accent}1A`, color: p.accent }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <div className="flex-1 rounded-2xl border border-border/70 bg-card px-4 py-4">
                                    <span
                                        className="flex size-12 items-center justify-center rounded-xl bg-secondary"
                                        style={{ color: p.accent }}
                                    >
                                        <p.icon className="size-7" aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display mt-5 text-2xl leading-[1.3] text-plum-deep">
                                        {p.title}
                                    </h3>
                                    <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                        {p.description}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop: 5-column grid with badge-on-icon-corner numbering */}
                    <div className="mt-10 hidden gap-5 md:grid md:grid-cols-3 lg:grid-cols-5">
                        {PERSONAS.map((p, i) => (
                            <Link
                                key={p.title}
                                href={p.href}
                                className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft"
                            >
                                <div className="relative inline-flex">
                                    <span
                                        className="flex size-12 items-center justify-center rounded-xl bg-secondary"
                                        style={{ color: p.accent }}
                                    >
                                        <p.icon className="size-7" aria-hidden="true" />
                                    </span>
                                    <span
                                        className="absolute -left-2 -top-2 flex size-7 items-center justify-center rounded-full text-sm font-bold text-white"
                                        style={{ backgroundColor: p.accent }}
                                        aria-hidden="true"
                                    >
                                        {i + 1}
                                    </span>
                                </div>
                                <h3 className="font-display mt-5 text-2xl leading-[1.3] text-plum-deep">
                                    {p.title}
                                </h3>
                                <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                    {p.description}
                                </p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Vision teaser — one line, links to /about */}
            <section data-navbar-theme="light" className="bg-white">
                <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-10">
                    <div
                        className="border-l-2 pl-4"
                        style={{ borderColor: "var(--color-lavender-border)" }}
                    >
                        <Link
                            href="/about"
                            className="text-[var(--color-muted-purple)] hover:text-[var(--color-vibrant-magenta)] transition-colors"
                        >
                            Valentine is where we start. Celebrations are where we're going. →
                        </Link>
                    </div>
                </div>
            </section>

            {/* 5. Closing CTA */}
            <section data-navbar-theme="light" className="bg-white pb-20">
                <div className="mx-auto max-w-[1280px] px-5 md:px-8">
                    <div className="bg-soft-gradient rounded-[var(--radius-card)] px-6 py-12 text-center">
                        <h3 className="font-display text-3xl md:text-4xl font-bold text-[var(--color-deep-plum)] mb-4">
                            Be there from the beginning.
                        </h3>
                        <p className="text-[var(--color-muted-purple)] text-lg mb-6 max-w-lg mx-auto">
                            Join Evivi early to discover what's coming and shape a better way to celebrate.
                        </p>
                        <Link href={CTA.buyer.href} className="btn-primary text-lg px-9 py-4">
                            {CTA.buyer.label}
                        </Link>
                        <Link
                            href={CTA.seller.href}
                            className="btn-secondary text-lg px-9 py-4 bg-transparent border-white/40 text-white hover:bg-white/10"
                        >
                            {CTA.seller.label}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
}