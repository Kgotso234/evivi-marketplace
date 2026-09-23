import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Gift,
    Truck,
    Bike,
    Check,
    ChevronRight,
    ShieldCheck,
    Clock3,
    Car,
} from "lucide-react";

import RegistrationForm from "@/components/registration/RegistrationForm";

const JOURNEY_STEPS = [
    {
        num: "01",
        title: "Register",
        copy: "Tell Evivi about yourself, your transport and the areas where you can provide delivery support.",
    },
    {
        num: "02",
        title: "We review your details",
        copy: "We review the information you provide as we build the early delivery partner network.",
    },
    {
        num: "03",
        title: "Complete verification",
        copy: "If required, we will guide you through the relevant verification steps before delivery access is provided.",
    },
    {
        num: "04",
        title: "Get ready",
        copy: "If selected, we will share the relevant expectations and next steps before you begin supporting deliveries.",
    },
    {
        num: "05",
        title: "Receive opportunities",
        copy: "Eligible delivery opportunities can be considered based on availability, coverage and network requirements.",
    },
    {
        num: "06",
        title: "Deliver with Evivi",
        copy: "Collect eligible orders from participating sellers and help get them safely to customers or recipients.",
    },
];

const DELIVERY_TYPES = [
    {
        title: "Local gift deliveries",
        copy: "Help participating sellers get eligible gifts and celebration packages to customers within supported areas.",
    },
    {
        title: "Scheduled deliveries",
        copy: "Some orders may have specific delivery dates or time requirements.",
    },
    {
        title: "Seller collections",
        copy: "Collect prepared orders from participating sellers according to the fulfilment instructions provided.",
    },
    {
        title: "Recipient handover",
        copy: "Complete the final part of the journey by getting the order to the intended customer or recipient.",
    },
];

const PARTNER_REQUIREMENTS = [
    "Reliable transport",
    "A valid driver's licence where applicable",
    "Ability to safely handle gifts and packages",
    "Ability to indicate your service areas",
    "Ability to indicate when you can provide delivery support",
    "A reliable way for Evivi or participating sellers to contact you",
];

const PARTNER_BENEFITS = [
    {
        num: "01",
        title: "Flexible opportunities",
        copy: "Indicate the areas and times when you can support deliveries.",
    },
    {
        num: "02",
        title: "Local delivery work",
        copy: "Support participating sellers with eligible local orders in areas you can serve.",
    },
    {
        num: "03",
        title: "Be part of something growing",
        copy: "Join Evivi's early delivery network as the celebration marketplace develops.",
    },
    {
        num: "04",
        title: "Build a reliable reputation",
        copy: "Consistent, professional fulfilment can help establish trust within the Evivi network.",
    },
];

const ECOSYSTEM_FLOW = [
    {
        icon: Gift,
        label: "Gift Seller",
        copy: "prepares the order",
    },
    {
        icon: Truck,
        label: "Delivery Partner",
        copy: "helps get it there",
    },
    {
        icon: Heart,
        label: "Gift Buyer",
        copy: "receives the gift",
    },
];

const AFTER_APPLICATION = [
    {
        num: "01",
        title: "Submit your details",
        copy: "Tell us about yourself, your transport and where you can provide delivery support.",
    },
    {
        num: "02",
        title: "Application review",
        copy: "We review the information provided as the delivery partner network develops.",
    },
    {
        num: "03",
        title: "Verification",
        copy: "Relevant verification steps may be required before delivery access is provided.",
    },
    {
        num: "04",
        title: "Partner preparation",
        copy: "If selected, we will share the relevant expectations and next steps.",
    },
    {
        num: "05",
        title: "Delivery opportunities",
        copy: "Eligible opportunities can be considered based on availability, coverage and network requirements.",
    },
];

export const metadata = {
    title: "Delivery Partners | Evivi",
    description:
        "Become an Evivi delivery partner. Register to help local gift sellers deliver gifts and celebration packages.",
};

export default function DeliveryPartnersPage() {
    return (
        <div
            className="min-h-screen"
            style={{
                background: "var(--color-blush-white,#FFF9FC)",
                color: "var(--color-near-black,#1A1A1A)",
            }}
        >
            {/* HERO */}

            <section className="px-6 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-12">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span
                            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                                background: "var(--color-warm-lilac,#F3E9F7)",
                                color: "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Delivery partners
                        </span>

                        <h1
                            className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            Become an Evivi delivery partner.
                        </h1>

                        <p
                            className="mt-6 max-w-xl text-base leading-7 sm:text-lg"
                            style={{ color: "var(--color-muted-purple,#6B5B7B)" }}
                        >
                            Help local gift sellers deliver gifts and
                            celebration packages to customers across
                            supported areas.
                        </p>

                        <p
                            className="mt-4 max-w-xl text-base leading-7 sm:text-lg"
                            style={{ color: "var(--color-muted-purple,#6B5B7B)" }}
                        >
                            If you have reliable transport and want flexible
                            delivery opportunities, register to become part of
                            the Evivi delivery partner network.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#register"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Become a Delivery Partner
                                <ChevronRight size={18} />
                            </a>

                            <a
                                href="#delivery-journey"
                                className="btn-secondary inline-flex items-center gap-2"
                            >
                                See how it works
                            </a>
                        </div>

                        <div className="mt-7 flex flex-wrap gap-5 text-sm text-gray-600">
                            <span className="flex items-center gap-2">
                                <ShieldCheck
                                    size={17}
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                />
                                Secure registration
                            </span>

                            <span className="flex items-center gap-2">
                                <Heart
                                    size={17}
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                />
                                Help celebrations arrive
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem] shadow-soft">
                            <Image
                                src="/images/delivery-hero.png"
                                alt="Evivi delivery partner delivering gifts"
                                width={900}
                                height={600}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-8">
                            <div className="flex items-center gap-3">
                                <span
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{ background: "var(--color-warm-lilac,#F3E9F7)" }}
                                >
                                    <Truck
                                        size={20}
                                        style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                    />
                                </span>

                                <div>
                                    <p className="text-sm font-semibold text-gray-900">
                                        Delivery network
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        Help celebrations arrive
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECOSYSTEM */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-20"
                style={{ background: "var(--color-deep-plum,#3B0D5C)" }}
            >
                <div className="mx-auto max-w-4xl text-center">
                    <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-200">
                        What is an Evivi delivery partner?
                    </span>

                    <h2 className="mt-4 font-display text-3xl font-semibold leading-tight text-white sm:text-4xl">
                        You help move the celebration from the seller to the
                        recipient.
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-purple-100 sm:text-lg">
                        Delivery partners support participating sellers by
                        helping fulfil eligible local orders. You provide the
                        transport and delivery support while Evivi works
                        toward coordinating the marketplace experience.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-3">
                    {ECOSYSTEM_FLOW.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.label} className="relative">
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
                                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                        <Icon size={22} color="#fff" />
                                    </span>

                                    <h3 className="mt-4 font-semibold text-white">
                                        {item.label}
                                    </h3>

                                    <p className="mt-1 text-sm text-purple-100">
                                        {item.copy}
                                    </p>
                                </div>

                                {index < ECOSYSTEM_FLOW.length - 1 && (
                                    <ChevronRight
                                        size={20}
                                        className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-pink-200 md:block"
                                    />
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* JOURNEY */}

            <section
                id="delivery-journey"
                className="scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            The delivery journey
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            From registration to delivering the gift.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            The process helps Evivi understand where you can
                            provide delivery support and how your availability
                            fits into the developing network.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                        {JOURNEY_STEPS.map((step) => (
                            <div
                                key={step.num}
                                className="rounded-2xl border bg-white p-6 shadow-sm"
                                style={{ borderColor: "var(--color-lavender-border,#E4D8F0)" }}
                            >
                                <span
                                    className="text-sm font-bold"
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                >
                                    {step.num}
                                </span>

                                <h3
                                    className="mt-3 text-lg font-semibold"
                                    style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                                >
                                    {step.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-600">
                                    {step.copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DELIVERY TYPES */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-[2rem] lg:max-h-[480px]">
                        <Image
                            src="/images/delivery-bag.png"
                            alt="Gift package ready for local delivery"
                            width={800}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            What you may deliver
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            Help gifts complete their final journey.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Delivery opportunities can vary depending on the
                            seller, order and supported delivery area.
                        </p>

                        <div className="mt-8 space-y-5">
                            {DELIVERY_TYPES.map((item) => (
                                <div key={item.title} className="flex gap-4">
                                    <span
                                        className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                                        style={{ background: "var(--color-warm-lilac,#F3E9F7)" }}
                                    >
                                        <Check
                                            size={17}
                                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                        />
                                    </span>

                                    <div>
                                        <h3
                                            className="font-semibold"
                                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                                        >
                                            {item.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            {item.copy}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* REQUIREMENTS */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-24"
                style={{ background: "var(--color-soft-lavender,#FAF7FC)" }}
            >
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            Who can apply?
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            If you can move gifts safely, tell us about
                            yourself.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            We want to understand your transport, location and
                            availability so that delivery opportunities can
                            be considered as the network develops.
                        </p>

                        <a
                            href="#register"
                            className="btn-primary mt-7 inline-flex items-center gap-2"
                        >
                            Start registration
                            <ChevronRight size={18} />
                        </a>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {PARTNER_REQUIREMENTS.map((requirement) => (
                            <div
                                key={requirement}
                                className="flex gap-3 rounded-2xl border bg-white p-5"
                                style={{ borderColor: "var(--color-lavender-border,#E4D8F0)" }}
                            >
                                <Check
                                    size={19}
                                    className="mt-0.5 shrink-0"
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                />

                                <span className="text-sm leading-6 text-gray-700">
                                    {requirement}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AVAILABILITY */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            Availability and transport
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            Tell us when and where you can help.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Delivery support can look different for every
                            partner. Some partners may have a motorcycle,
                            while others may use a car, bakkie or van.
                        </p>

                        <p className="mt-4 leading-7 text-gray-600">
                            Your availability and service area will help us
                            understand where the developing delivery network
                            can support participating sellers.
                        </p>

                        <div className="mt-8 grid gap-4 sm:grid-cols-2">
                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <Clock3
                                    size={22}
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                />

                                <h3 className="mt-3 font-semibold text-gray-900">
                                    Flexible availability
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Share the times when you can provide
                                    delivery support.
                                </p>
                            </div>

                            <div className="rounded-2xl bg-white p-5 shadow-sm">
                                <Car
                                    size={22}
                                    style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                                />

                                <h3 className="mt-3 font-semibold text-gray-900">
                                    Different transport options
                                </h3>

                                <p className="mt-1 text-sm leading-6 text-gray-600">
                                    Tell us what type of transport you have
                                    available.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-[2rem] lg:max-h-[480px]">
                        <Image
                            src="/images/delivery-car.png"
                            alt="Vehicle used for local gift deliveries"
                            width={850}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* BENEFITS */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-24"
                style={{ background: "var(--color-deep-plum,#3B0D5C)" }}
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <span className="text-sm font-semibold uppercase tracking-[0.18em] text-pink-200">
                            Why become a partner?
                        </span>

                        <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
                            Become part of the delivery side of Evivi.
                        </h2>

                        <p className="mt-4 leading-7 text-purple-100">
                            Delivery partners help connect participating
                            sellers with customers and recipients across
                            supported areas.
                        </p>
                    </div>

                    <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                        {PARTNER_BENEFITS.map((benefit) => (
                            <div
                                key={benefit.num}
                                className="rounded-2xl border border-white/10 bg-white/10 p-6"
                            >
                                <span className="text-sm font-bold text-pink-200">
                                    {benefit.num}
                                </span>

                                <h3 className="mt-4 font-semibold text-white">
                                    {benefit.title}
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-purple-100">
                                    {benefit.copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AFTER APPLICATION */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-[2rem] lg:max-h-[460px]">
                        <Image
                            src="/images/delivery-city.png"
                            alt="Local gift delivery network in the city"
                            width={850}
                            height={600}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            After applying
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            Your application helps us build the network.
                        </h2>

                        <div className="mt-8 space-y-6">
                            {AFTER_APPLICATION.map((step) => (
                                <div key={step.num} className="flex gap-4">
                                    <span
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                                        style={{
                                            background: "var(--color-warm-lilac,#F3E9F7)",
                                            color: "var(--color-vibrant-magenta,#C2185B)",
                                        }}
                                    >
                                        {step.num}
                                    </span>

                                    <div>
                                        <h3
                                            className="font-semibold"
                                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                                        >
                                            {step.title}
                                        </h3>

                                        <p className="mt-1 text-sm leading-6 text-gray-600">
                                            {step.copy}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* SELLER CTA */}

            <section className="px-6 pb-16 lg:px-8">
                <div
                    className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:p-10 lg:flex-row lg:items-center"
                    style={{ background: "var(--color-soft-lavender,#FAF7FC)" }}
                >
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{ color: "var(--color-vibrant-magenta,#C2185B)" }}
                        >
                            Are you a gift seller?
                        </span>

                        <h2
                            className="mt-2 font-display text-2xl font-semibold sm:text-3xl"
                            style={{ color: "var(--color-deep-plum,#3B0D5C)" }}
                        >
                            Join Evivi on the seller side too.
                        </h2>

                        <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600">
                            If you create gifts or celebration products, you
                            can learn more about joining Evivi as a seller.
                        </p>
                    </div>

                    <Link
                        href="/seller"
                        className="btn-secondary inline-flex shrink-0 items-center gap-2"
                    >
                        Become a Seller
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </section>

            {/* REGISTRATION — now handled by the shared RegistrationForm, same
                pattern as /buyers, /seller, /event-planners and /suppliers */}

            <section
                id="register"
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Delivery Partner Registration
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Join the Evivi delivery network.
                        </h2>

                        <p className="mt-3 text-[var(--color-muted-purple)]">
                            Complete your registration and tell us where and
                            when you can support deliveries.
                        </p>
                    </div>

                    <div className="mt-10 rounded-[24px] border bg-white p-6 md:p-8">
                        <RegistrationForm role="delivery" />
                    </div>
                </div>
            </section>

            {/* FINAL CTA */}

            <section className="px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
                <div
                    className="mx-auto max-w-6xl rounded-[2rem] px-6 py-12 text-center sm:px-10 lg:py-16"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-deep-plum,#3B0D5C), var(--color-vibrant-magenta,#C2185B))",
                    }}
                >
                    <Bike size={32} className="mx-auto text-white" />

                    <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
                        Ready to help gifts get there?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-pink-100">
                        Register as an Evivi delivery partner and tell us where
                        and when you can provide delivery support.
                    </p>

                    <a
                        href="#register"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--color-deep-plum,#3B0D5C)] transition hover:opacity-90"
                    >
                        Start Registration
                        <ChevronRight size={18} />
                    </a>
                </div>
            </section>
        </div>
    );
}