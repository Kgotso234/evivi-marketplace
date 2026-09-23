import Link from "next/link";
import {
    Cake,
    HeartHandshake,
    Baby,
    Gem,
    GraduationCap,
    Sparkles,
    Compass,
    Users2,
    Store,
} from "lucide-react";

export const metadata = {
    title: "About Evivi | Our Vision",
    description:
        "Evivi is starting with Valentine gifting, and building toward a full celebration marketplace. Learn about our vision for what's next.",
};

const moments = [
    { icon: Cake, label: "Birthdays" },
    { icon: HeartHandshake, label: "Anniversaries" },
    { icon: Baby, label: "Baby Showers" },
    { icon: Gem, label: "Proposals" },
    { icon: GraduationCap, label: "Graduations" },
    { icon: Sparkles, label: "Other Celebrations" },
];

const moreWaysToHelp = [
    {
        icon: Compass,
        title: "Plan a celebration",
        text: "Find support to organise meaningful moments and special occasions.",
        href: "/",
    },
    {
        icon: Users2,
        title: "Event Planners & Coordinators",
        text: "Connect with professionals who help customers design and coordinate unforgettable events.",
        href: "/event-planners",
    },
    {
        icon: Store,
        title: "Event Suppliers",
        text: "Discover businesses that provide products, services and styling for events.",
        href: "/event-suppliers",
    },
];

export default function AboutPage() {
    return (
        <>
            {/* Hero — mission statement, no CTA needed here */}
            <section
                id="hero"
                className="relative overflow-hidden min-h-screen flex items-center bg-brand-gradient text-white"
            >
                <div className="mx-auto max-w-6xl px-5 sm:px-8 py-28 md:py-36 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                        Beyond Valentine
                    </p>
                    <h1 className="mt-4 mx-auto max-w-3xl font-display text-4xl md:text-6xl font-bold leading-[1.1]">
                        Valentine is where we start. Celebrations are where we're going.
                    </h1>
                    <p className="mt-6 mx-auto max-w-2xl text-lg text-white/85">
                        Evivi is being built to connect gift buyers, sellers and event
                        professionals with the businesses and services that help meaningful
                        moments happen.
                    </p>
                </div>
            </section>

            {/* Our vision — more moments to celebrate */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            Our vision
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            More moments to celebrate
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Valentine's Day is where Evivi starts, but it's only the beginning.
                            We're building toward a marketplace for every occasion worth
                            celebrating.
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
                        {moments.map((item) => (
                            <div
                                key={item.label}
                                className="flex flex-col items-center text-center gap-3 rounded-2xl border border-border/70 bg-card p-5"
                            >
                                <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta">
                                    <item.icon size={22} aria-hidden="true" />
                                </span>
                                <span className="text-sm font-medium text-plum-deep">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* More ways Evivi can help */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            More ways Evivi can help
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            From a single gift to a full celebration
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Evivi is being built to bring the whole journey together — the gift,
                            the planning, and everything in between.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {moreWaysToHelp.map((item) => (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-soft"
                            >
                                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta">
                                    <item.icon size={20} aria-hidden="true" />
                                </span>
                                <h3 className="font-display mt-5 text-xl text-plum-deep">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-magenta">
                                    Learn more
                                    <span className="transition-transform group-hover:translate-x-1">→</span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our story */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)] px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                        Our story
                    </p>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                        Built to make celebrations easier to create
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Evivi is a product of Innerchild Events, built with a simple goal: make
                        it easier to find and share the right gift for the moments that matter,
                        and to grow into the platform people turn to for every kind of
                        celebration.
                    </p>
                </div>
            </section>

            {/* Closing CTA */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] evivi-gradient px-7 py-12 text-center text-white md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Be there from the beginning.
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                        Evivi launches with Valentine gifting. Join early to discover what's
                        coming and help shape a better way to celebrate.
                    </p>
                    <Link
                        href="/#early-access"
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-vibrant-magenta)] transition-transform hover:-translate-y-0.5"
                    >
                        Get Valentine Early Access
                    </Link>
                </div>
            </section>
        </>
    );
}