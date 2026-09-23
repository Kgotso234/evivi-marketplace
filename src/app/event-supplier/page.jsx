import Image from "next/image";
import Link from "next/link";
import { Users2, Store, HeartHandshake, Package, Wrench, Rocket } from "lucide-react";

export const metadata = {
    title: "Event Suppliers | Evivi",
    description:
        "Discover what Evivi is building for event suppliers. Join the waitlist for future supplier opportunities.",
};

const whyJoin = [
    { icon: Users2, title: "Reach event planners", text: "Make your products and services discoverable to planners looking for event support." },
    { icon: Store, title: "Showcase your offering", text: "Create a future presence where customers can discover what your business provides." },
    { icon: HeartHandshake, title: "Support celebrations", text: "Become part of an ecosystem built around events, gifts and meaningful occasions." },
];

const futureOpportunities = [
    { icon: Package, title: "Event products", text: "Products that help bring events and celebrations together." },
    { icon: Wrench, title: "Event services", text: "Services that support planners and event hosts." },
    { icon: Rocket, title: "Future marketplace", text: "A future space to showcase your business through Evivi." },
];

export default function SuppliersPage() {
    return (
        <>
            {/* Hero — id="hero" so the Navbar treats it the same as other persona page heroes */}
            <section id="hero" className="relative overflow-hidden min-h-[100vh] flex items-center text-white">
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
                        Bring your event products and services to Evivi.
                    </h1>
                    <p className="mt-5 max-w-lg text-lg text-white/85">
                        Evivi is building a future marketplace where event suppliers can connect
                        with planners and people creating special occasions.
                    </p>
                    <p className="mt-3 max-w-lg text-white/70">
                        Event suppliers will not be part of the Valentine 2027 launch.
                    </p>
                    <Link href="#waitlist" className="btn-primary mt-8 inline-flex">
                        Join the Waitlist
                    </Link>
                </div>
            </section>

            {/* Why suppliers may join */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">
                        Why suppliers may join Evivi
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

            {/* What Evivi is building */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            What Evivi is building
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            More than a Valentine marketplace
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            The initial Evivi launch focuses on Valentine 2027. The platform will
                            expand into more celebration and event services over time.
                        </p>
                    </div>

                    <div className="mt-10 rounded-[var(--radius-card)] border border-border/70 bg-card p-8 md:p-10">
                        <h3 className="font-display text-2xl text-plum-deep">
                            Future supplier opportunities
                        </h3>

                        <div className="mt-7 grid gap-5 md:grid-cols-3">
                            {futureOpportunities.map((item) => (
                                <div key={item.title} className="rounded-2xl bg-secondary p-6">
                                    <span className="flex size-10 items-center justify-center rounded-lg bg-white text-magenta">
                                        <item.icon size={18} aria-hidden="true" />
                                    </span>
                                    <h4 className="mt-4 font-medium text-plum-deep">{item.title}</h4>
                                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                                </div>
                            ))}
                        </div>
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
                        Evivi is currently preparing its Valentine 2027 launch. Event supplier
                        onboarding will be introduced at a later stage.
                    </p>
                </div>
            </section>

            {/* Waitlist — CTA only, no registration form yet */}
            <section id="waitlist" data-navbar-theme="light" className="px-5 sm:px-8 pb-16 md:pb-24">
                <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] evivi-gradient px-7 py-12 text-center text-white md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Want to know when suppliers can join?
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                        Join the waitlist and we will let you know when supplier applications
                        become available.
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
            <section id="register" data-navbar-theme="light" className="px-5 py-16 sm:px-8 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Event suppliers
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Put your event products and services in front of more opportunities.
                        </h2>

                        <p className="mt-3 text-[var(--color-muted-purple)]">
                            Register your interest with Evivi and become part of a growing network of suppliers supporting celebrations and events.
                        </p>
                    </div>

                    <div
                        className="mt-10 rounded-[24px] border bg-white p-6 md:p-8"
                    >
                        {/* <h3 className="mb-6 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                            Tell us about your business
                        </h3> */}

                        <RegistrationForm role="supplier" />
                    </div>

            </section>
        </>
    );
}