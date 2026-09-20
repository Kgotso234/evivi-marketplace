import Image from "next/image";
import Link from "next/link";
import { Search, Gift, Truck, ClipboardCheck, Store, Bike, CalendarCheck, Package } from "lucide-react";
import CTASection from "@/components/CTASection";
import PersonaCard from "@/components/PersonaCard";

export const metadata = {
    title: "Evivi — Find the Right Gift, Make the Moment Happen",
    description:
        "Evivi is a marketplace for gifts and celebrations, connecting buyers with local sellers, delivery partners, and event professionals.",
};

const STEPS = [
    { icon: Search, title: "Discover", text: "Browse gifts from local sellers near you." },
    { icon: Gift, title: "Choose", text: "Pick the gift that feels right, and review the details." },
    { icon: Truck, title: "Choose delivery or collection", text: "Pick the option that works for you and your gift." },
    { icon: ClipboardCheck, title: "Pay & follow your order", text: "Track your order until it's delivered or ready." },
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
                {/* Background image — desktop */}
                <Image
                    src="/images/hero-image.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="hidden md:block object-cover hero-bg-bounce"
                />
                {/* Background image — mobile */}
                <Image
                    src="/images/hero-mobile.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="block md:hidden object-cover hero-bg-bounce"
                />

                {/* Gradient scrim over the photo so the headline/CTA stay readable */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/85 via-[var(--color-deep-plum)]/45 to-[var(--color-deep-plum)]/10" />

                <div className="relative z-10 mx-auto max-w-[1280px] w-full px-5 md:px-8 py-32 md:py-40">
                    <div className="max-w-xl">
                        <span
                            className="section-eyebrow mb-4"
                            style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
                        >
                            Launching with Valentine gifting
                        </span>
                        <h1 className="font-display text-4xl md:text-5xl leading-tight mt-4 mb-4">
                            Find the right gift.
                            <br />
                            Make the moment happen.
                        </h1>
                        <p className="text-white/80 max-w-md mb-8">
                            Evivi is a marketplace for gifts and celebrations. It connects people looking for gifts with local gift sellers, making it easier to find and buy gifts today. As Evivi grows, we plan to bring Event Planners & Coordinators and Event Suppliers onto the platform as well.
                        </p>
                        <Link href="/#register" className="btn-primary">
                            Get Valentine Early Access
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. How it works — ONE version only */}
            <section data-navbar-theme="light" className="bg-white">
                <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20">
                    <h2 className="font-display text-3xl text-[var(--color-deep-plum)] mb-10">
                        How it works
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                        {STEPS.map(({ icon: Icon, title, text }) => (
                            <div
                                key={title}
                                className="rounded-[var(--radius-card)] border p-5"
                                style={{ borderColor: "var(--color-lavender-border)" }}
                            >
                                <Icon size={22} className="mb-3 text-[var(--color-vibrant-magenta)]" />
                                <h3 className="font-medium text-[var(--color-deep-plum)] mb-1">{title}</h3>
                                <p className="text-sm text-[var(--color-muted-purple)]">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Valentine 2027 feature banner */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)] py-16">
                <CTASection
                    eyebrow="Valentine 2027"
                    heading="Valentine's Day doesn't wait."
                    subtext="Find your gift early, choose how it's delivered, and avoid the last-minute rush."
                    buttonLabel="Get Valentine Early Access"
                    buttonHref="/#register"
                    variant="banner"
                />
            </section>

            {/* 4. Who Evivi is for — persona strip */}
            <section data-navbar-theme="light" className="bg-white">
                <div className="mx-auto max-w-[1280px] px-5 md:px-8 py-20">
                    <h2 className="font-display text-3xl text-[var(--color-deep-plum)] mb-10">
                        Who Evivi is for
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                        {PERSONAS.map((p) => (
                            <PersonaCard key={p.title} {...p} />
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Vision teaser — one line, links to /about */}
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

            {/* 6. Closing CTA */}
            <section data-navbar-theme="light" className="bg-white pb-20">
                <CTASection
                    heading="Be there from the beginning."
                    subtext="Join Evivi early to discover what's coming and shape a better way to celebrate."
                    buttonLabel="Get Valentine Early Access"
                    buttonHref="/#register"
                    variant="plain"
                />
            </section>
        </>
    );
}