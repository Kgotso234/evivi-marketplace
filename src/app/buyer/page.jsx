import Image from "next/image";
import Link from "next/link";
import { Search, Gift, Truck, ClipboardCheck, Bell, Sparkles, CalendarClock } from "lucide-react";

export const metadata = {
    title: "Get Valentine Early Access | Evivi",
    description:
        "Be among the first to discover gifts and celebrations on Evivi for Valentine 2027.",
};

const steps = [
    { icon: Search, number: "01", title: "Discover", text: "Explore gifts and businesses available through Evivi." },
    { icon: Gift, number: "02", title: "Choose", text: "Find something that feels right for the person and occasion." },
    { icon: Truck, number: "03", title: "Arrange", text: "Choose the available delivery or collection option." },
    { icon: ClipboardCheck, number: "04", title: "Celebrate", text: "Let the gift become part of a meaningful moment." },
];

const whyJoin = [
    { icon: Bell, title: "Launch updates", text: "Receive important updates as Evivi gets closer to launch." },
    { icon: Sparkles, title: "Discover what is coming", text: "Follow the products, sellers and experiences being prepared for Valentine 2027." },
    { icon: CalendarClock, title: "Be ready for launch", text: "Get ready to explore Evivi when the marketplace becomes available." },
];

export default function BuyersPage() {
    return (
        <>
            {/* Hero — id="hero" so the Navbar treats it the same as the homepage hero (transparent over photo) */}
            <section id="hero" className="relative overflow-hidden min-h-[85vh] flex items-center text-white">
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
                        Valentine 2027
                    </span>
                    <h1 className="mt-5 max-w-xl font-display text-4xl md:text-6xl font-bold leading-[1.05]">
                        Find the right gift for the people who matter.
                    </h1>
                    <p className="mt-5 max-w-lg text-lg text-white/85">
                        Evivi brings gifts, local sellers and delivery partners together to make
                        meaningful moments easier to create.
                    </p>
                    <Link href="#early-access" className="btn-primary mt-8 inline-flex">
                        Get Valentine Early Access
                    </Link>
                </div>
            </section>

            {/* How Evivi works */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            How it works
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            A simpler way to find and send gifts
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Evivi connects you with local businesses and delivery partners so you
                            can focus on the moment, not the logistics.
                        </p>
                    </div>

                    <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {steps.map((step) => (
                            <div
                                key={step.number}
                                className="rounded-2xl border border-border/70 bg-card p-6 transition-all md:hover:-translate-y-1 md:hover:shadow-soft"
                            >
                                <div className="relative inline-flex">
                                    <span className="flex size-12 items-center justify-center rounded-xl bg-secondary text-magenta">
                                        <step.icon className="size-6" aria-hidden="true" />
                                    </span>
                                    <span
                                        className="absolute -left-2 -top-2 flex size-6 items-center justify-center rounded-full text-xs font-bold text-white"
                                        style={{ backgroundColor: "var(--color-vibrant-magenta)" }}
                                        aria-hidden="true"
                                    >
                                        {step.number.replace("0", "")}
                                    </span>
                                </div>
                                <h3 className="font-display mt-5 text-xl text-plum-deep">{step.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Valentine 2027 */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
                    <div className="relative min-h-[320px] overflow-hidden rounded-[var(--radius-card)] bg-soft-gradient flex items-center justify-center">
                        {/* Replace with a real Valentine-launch photo once available */}
                        <Gift size={56} className="text-magenta/50" aria-hidden="true" />
                    </div>

                    <div>
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                            Valentine 2027
                        </p>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            Be there when Evivi opens its doors
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            We are preparing Evivi for its first Valentine season. Early access
                            gives you a place in the community before the marketplace opens.
                        </p>
                        <Link href="#early-access" className="btn-primary mt-7 inline-flex">
                            Get Early Access
                        </Link>
                    </div>
                </div>
            </section>

            {/* Why join early */}
            <section data-navbar-theme="light" className="bg-[var(--color-warm-lilac)] px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-plum-deep">
                            Why join early?
                        </h2>
                        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                            Stay connected as Evivi prepares for the Valentine 2027 launch.
                        </p>
                    </div>

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

            <section id="register" data-navbar-theme="light" className="px-5 py-16 sm:px-8 md:py-24">
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Ready to join Evivi?
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Discover gifts and celebrations made for every occasion.
                        </h2>

                        <p className="mt-3 text-[var(--color-muted-purple)]">
                            Register your interest with Evivi and be among the first to discover gifts, experiences, and celebration services when we launch.
                        </p>
                    </div>

                    <div
                        className="mt-10 rounded-[24px] border bg-white p-6 md:p-8"
                    >
                        {/* <h3 className="mb-6 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                            Tell us about your business
                        </h3> */}

                        <RegistrationForm role="buyer" />
                    </div>

            </section>

            {/* Early access — CTA only, no registration form yet */}
            <section id="early-access" data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-4xl rounded-[var(--radius-card)] evivi-gradient px-7 py-12 text-center text-white md:px-12">
                    <h2 className="font-display text-3xl md:text-4xl font-bold">
                        Be there from the beginning
                    </h2>
                    <p className="mx-auto mt-4 max-w-xl text-lg text-white/90">
                        Join the Evivi early access list and stay informed about the Valentine
                        2027 launch.
                    </p>
                    {/* TODO: point to the real registration form once it's built, same
                        pattern as /sellers#register */}
                    <Link
                        href="#"
                        className="mt-7 inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-vibrant-magenta)] transition-transform hover:-translate-y-0.5"
                    >
                        Get Valentine Early Access
                    </Link>
                </div>
            </section>
        </>
    );
}