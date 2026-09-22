import Image from "next/image";
import Link from "next/link";
import { Users2, Handshake, TrendingUp, CalendarHeart, PartyPopper, Gift } from "lucide-react";

export const metadata = {
    title: "Event Planners and Coordinators | Evivi",
    description:
        "Discover what Evivi is building for event planners and coordinators. Join the waitlist for future availability.",
};

const whyJoin = [
    { icon: Users2, title: "Connect with clients", text: "Create opportunities to connect with people looking for event planning support." },
    { icon: Handshake, title: "Work with suppliers", text: "Build relationships with venues, suppliers and other event professionals." },
    { icon: TrendingUp, title: "Grow your presence", text: "Create a future presence on a marketplace built around celebrations." },
];

const futurePreviews = [
    { icon: CalendarHeart, label: "Planner" },
    { icon: PartyPopper, label: "Event" },
    { icon: Gift, label: "Celebration" },
];

export default function EventPlannersPage() {
    return (
        <>
            {/* Hero — id="hero" so the Navbar treats it the same as other persona page heroes */}
            <section id="hero" className="relative overflow-hidden min-h-[80vh] flex items-center text-white">
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

                <div className="relative z-10 mx-auto max-w-6xl w-full px-5 sm:px-8 py-24">
                    <span
                        className="section-eyebrow"
                        style={{ background: "rgba(255,255,255,0.12)", color: "#fff", borderColor: "rgba(255,255,255,0.25)" }}
                    >
                        Coming later
                    </span>
                    <h1 className="mt-5 max-w-xl font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                        Bring your event expertise to Evivi.
                    </h1>
                    <p className="mt-5 max-w-lg text-lg text-white/85">
                        Evivi is building a future space for event planners and coordinators to
                        connect with clients, suppliers and opportunities.
                    </p>
                    <p className="mt-3 max-w-lg text-white/70">
                        Event planning and coordination will not be part of the Valentine 2027
                        launch.
                    </p>
                    <Link href="#waitlist" className="btn-primary mt-8 inline-flex">
                        Join the Waitlist
                    </Link>
                </div>
            </section>

            {/* Why planners may join */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">
                        Why planners may join Evivi
                    </h2>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {whyJoin.map((item) => (
                            <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-6">
                                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-magenta">
                                    <item.icon size={20} aria-hidden="true" />
                                </span>
                                <h3 className="font-display mt-5 text-xl text-plum-deep">{item.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The future of Evivi */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            The future of Evivi
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            A space for celebrations beyond gifts
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Evivi is starting with Valentine 2027. Event planning and coordination
                            are part of the longer term vision for the platform.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-3">
                        {futurePreviews.map((item) => (
                            <div
                                key={item.label}
                                className="relative min-h-[220px] overflow-hidden rounded-2xl bg-soft-gradient flex flex-col items-center justify-center gap-2"
                            >
                                {/* Replace with a real photo once available */}
                                <item.icon size={36} className="text-magenta/50" aria-hidden="true" />
                                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Availability notice */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-24">
                <div className="mx-auto max-w-5xl rounded-[var(--radius-card)] bg-[var(--color-warm-lilac)] px-7 py-12 text-center md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">
                        Not available during the Valentine 2027 launch
                    </h2>
                    <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
                        We are focusing the initial launch on gifts and Valentine celebrations.
                        Event planning and coordination will become available at a later stage.
                    </p>
                </div>
            </section>

            {/* Waitlist — CTA only, no registration form yet */}
            <section id="waitlist" data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-24">
                <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] evivi-gradient px-7 py-12 text-center text-white md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Want to know when planners can join?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                        Join the waitlist and we will let you know when event planner and
                        coordinator applications become available.
                    </p>
                    {/* TODO: point to the real waitlist form once it's built */}
                    <Link
                        href="#"
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-vibrant-magenta)] transition-transform hover:-translate-y-0.5"
                    >
                        Join the Waitlist
                    </Link>
                </div>
            </section>
        </>
    );
}