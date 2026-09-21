"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Gift,
    Truck,
    Users2,
    MapPin,
    TrendingUp,
    Bike,
    Check,
    ChevronDown,
    ChevronRight,
    ShieldCheck,
    Clock3,
    Car,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

/* =========================================================
   DATA
========================================================= */

const PROVINCES_AND_CITIES = {
    Gauteng: [
        "Johannesburg",
        "Pretoria",
        "Sandton",
        "Centurion",
        "Soweto",
        "Randburg",
        "Midrand",
        "Benoni",
    ],

    "Western Cape": [
        "Cape Town",
        "Stellenbosch",
        "Somerset West",
        "Bellville",
        "Paarl",
        "George",
    ],

    "KwaZulu-Natal": [
        "Durban",
        "Umhlanga",
        "Pietermaritzburg",
        "Ballito",
        "Hillcrest",
    ],

    "Eastern Cape": [
        "Gqeberha (Port Elizabeth)",
        "East London",
        "Mthatha",
    ],

    "Free State": [
        "Bloemfontein",
        "Welkom",
    ],

    Limpopo: [
        "Polokwane",
        "Tzaneen",
        "Thohoyandou",
    ],

    Mpumalanga: [
        "Nelspruit (Mbombela)",
        "Witbank (eMalahleni)",
        "Secunda",
    ],

    "North West": [
        "Rustenburg",
        "Potchefstroom",
        "Mahikeng",
    ],

    "Northern Cape": [
        "Kimberley",
        "Upington",
    ],
};

const VEHICLE_OPTIONS = [
    "Motorcycle",
    "Scooter",
    "Car",
    "Bakkie",
    "Van",
    "Other",
];

const AVAILABILITY_OPTIONS = [
    "Weekday mornings",
    "Weekday afternoons",
    "Weekday evenings",
    "Weekends",
    "Public holidays",
];

const JOURNEY_STEPS = [
    {
        num: "01",
        title: "Join the waitlist",
        copy: "Tell Evivi about yourself, your transport and the areas where you can provide delivery support.",
    },
    {
        num: "02",
        title: "We review your details",
        copy: "We will review the information you provide as we build the early delivery partner network.",
    },
    {
        num: "03",
        title: "Get ready",
        copy: "If selected, we will share the relevant next steps and expectations before you begin supporting deliveries.",
    },
    {
        num: "04",
        title: "Receive eligible opportunities",
        copy: "As the network develops, participating sellers may have local delivery opportunities that match your availability and coverage.",
    },
    {
        num: "05",
        title: "Collect and deliver",
        copy: "Collect eligible orders from participating sellers and help get them safely to the intended customer or recipient.",
    },
    {
        num: "06",
        title: "Grow with Evivi",
        copy: "As Evivi expands, reliable delivery partners can become part of the wider celebration marketplace network.",
    },
];

const DELIVERY_TYPES = [
    {
        title: "Local gift deliveries",
        copy: "Help participating sellers get eligible gifts and celebration packages to customers within supported areas.",
    },
    {
        title: "Scheduled deliveries",
        copy: "Some orders may have specific delivery dates or time requirements. Availability will matter when matching opportunities.",
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

/* =========================================================
   FORM FIELD
========================================================= */

function Field({ label, children, required = false }) {
    return (
        <div>
            <label
                className="mb-2 block text-sm font-medium"
                style={{
                    color: "var(--color-near-black, #1A1A1A)",
                }}
            >
                {label}

                {required && (
                    <span
                        className="ml-1"
                        style={{
                            color: "var(--color-vibrant-magenta, #C2185B)",
                        }}
                    >
                        *
                    </span>
                )}
            </label>

            {children}
        </div>
    );
}

/* =========================================================
   CUSTOM SELECT
========================================================= */

function CustomSelect({
    value,
    onChange,
    options,
    placeholder,
    disabled = false,
    required = false,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                type="button"
                disabled={disabled}
                onClick={() => {
                    if (!disabled) {
                        setIsOpen((current) => !current);
                    }
                }}
                className={`flex min-h-[48px] w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm outline-none transition-all ${
                    disabled
                        ? "cursor-not-allowed bg-gray-50 opacity-60"
                        : "hover:border-[var(--color-vibrant-magenta,#C2185B)]"
                }`}
                style={{
                    borderColor:
                        "var(--color-lavender-border, #E4D8F0)",
                }}
            >
                <span
                    className={
                        value
                            ? "text-gray-900"
                            : "text-gray-400"
                    }
                >
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={17}
                    className={`shrink-0 text-gray-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && !disabled && (
                <div
                    className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-xl"
                    style={{
                        borderColor:
                            "var(--color-lavender-border, #E4D8F0)",
                    }}
                >
                    {options.map((option) => {
                        const selected = value === option;

                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => {
                                    onChange(option);
                                    setIsOpen(false);
                                }}
                                className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm transition-colors ${
                                    selected
                                        ? "bg-pink-50 font-medium"
                                        : "text-gray-700 hover:bg-gray-50"
                                }`}
                                style={{
                                    color: selected
                                        ? "var(--color-vibrant-magenta,#C2185B)"
                                        : undefined,
                                }}
                            >
                                <span>{option}</span>

                                {selected && (
                                    <Check
                                        size={16}
                                        style={{
                                            color:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                        }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            )}

            {required && (
                <input
                    type="text"
                    value={value}
                    readOnly
                    required
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute h-0 w-0 opacity-0"
                />
            )}
        </div>
    );
}

/* =========================================================
   CUSTOM MULTI SELECT
========================================================= */

function MultiSelect({
    value,
    onChange,
    options,
    placeholder,
    required = false,
}) {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleOption = (option) => {
        if (value.includes(option)) {
            onChange(
                value.filter((item) => item !== option)
            );
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <div
            ref={dropdownRef}
            className="relative"
        >
            <button
                type="button"
                onClick={() => setIsOpen((current) => !current)}
                className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-2.5 text-left outline-none transition-all hover:border-[var(--color-vibrant-magenta,#C2185B)]"
                style={{
                    borderColor:
                        "var(--color-lavender-border, #E4D8F0)",
                }}
            >
                {value.length === 0 ? (
                    <span className="text-sm text-gray-400">
                        {placeholder}
                    </span>
                ) : (
                    <span className="flex flex-wrap gap-1.5">
                        {value.map((item) => (
                            <span
                                key={item}
                                className="rounded-full px-2.5 py-1 text-xs font-medium"
                                style={{
                                    background:
                                        "var(--color-warm-lilac,#F3E9F7)",
                                    color:
                                        "var(--color-vibrant-magenta,#C2185B)",
                                }}
                            >
                                {item}
                            </span>
                        ))}
                    </span>
                )}

                <ChevronDown
                    size={17}
                    className={`shrink-0 text-gray-400 transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                />
            </button>

            {isOpen && (
                <div
                    className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-xl"
                    style={{
                        borderColor:
                            "var(--color-lavender-border, #E4D8F0)",
                    }}
                >
                    {options.map((option) => {
                        const selected = value.includes(option);

                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => toggleOption(option)}
                                className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm transition-colors ${
                                    selected
                                        ? "bg-pink-50"
                                        : "text-gray-700 hover:bg-gray-50"
                                }`}
                                style={{
                                    color: selected
                                        ? "var(--color-vibrant-magenta,#C2185B)"
                                        : undefined,
                                }}
                            >
                                <span
                                    className="flex h-4 w-4 shrink-0 items-center justify-center rounded border-2"
                                    style={{
                                        borderColor: selected
                                            ? "var(--color-vibrant-magenta,#C2185B)"
                                            : "var(--color-lavender-border,#E4D8F0)",
                                        background: selected
                                            ? "var(--color-vibrant-magenta,#C2185B)"
                                            : "transparent",
                                    }}
                                >
                                    {selected && (
                                        <Check
                                            size={10}
                                            color="#fff"
                                            strokeWidth={3}
                                        />
                                    )}
                                </span>

                                {option}
                            </button>
                        );
                    })}
                </div>
            )}

            {required && (
                <input
                    type="text"
                    value={
                        value.length > 0
                            ? "selected"
                            : ""
                    }
                    readOnly
                    required
                    tabIndex={-1}
                    aria-hidden="true"
                    className="pointer-events-none absolute h-0 w-0 opacity-0"
                />
            )}
        </div>
    );
}

/* =========================================================
   PAGE
========================================================= */

export default function DeliveryPartnersPage() {
    const [submitted, setSubmitted] = useState(false);

    const [form, setForm] = useState({
        fullName: "",
        email: "",
        mobile: "",
        province: "",
        city: "",
        vehicleType: "",
        availability: [],
        hasSmartphone: "",
        hasDriversLicence: "",
        hasVehicleLicence: "",
        verificationConsent: "",
        consent: false,
    });

    const update = (key, value) => {
        setForm((current) => {
            if (key === "province") {
                return {
                    ...current,
                    province: value,
                    city: "",
                };
            }

            return {
                ...current,
                [key]: value,
            };
        });
    };

    const updateInput = (key) => (event) => {
        const value =
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value;

        setForm((current) => ({
            ...current,
            [key]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    const resetForm = () => {
        setForm({
            fullName: "",
            email: "",
            mobile: "",
            province: "",
            city: "",
            vehicleType: "",
            availability: [],
            hasSmartphone: "",
            hasDriversLicence: "",
            hasVehicleLicence: "",
            verificationConsent: "",
            consent: false,
        });

        setSubmitted(false);
    };

    const inputClass =
        "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-vibrant-magenta,#C2185B)]";

    const inputStyle = {
        borderColor:
            "var(--color-lavender-border, #E4D8F0)",
    };

    return (
        <main
            className="min-h-screen"
            style={{
                background:
                    "var(--color-blush-white,#FFF9FC)",
                color:
                    "var(--color-near-black,#1A1A1A)",
            }}
        >
            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="px-6 pb-16 pt-10 lg:px-8 lg:pb-24 lg:pt-16">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <span
                            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                                background:
                                    "var(--color-warm-lilac,#F3E9F7)",
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Delivery partners
                        </span>

                        <h1
                            className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            Help local gifts get where they need to go.
                        </h1>

                        <p
                            className="mt-6 max-w-xl text-base leading-7 sm:text-lg"
                            style={{
                                color:
                                    "var(--color-muted-purple,#6B5B7B)",
                            }}
                        >
                            Evivi is building a network of independent
                            delivery partners who can help participating
                            sellers fulfil eligible local orders.
                        </p>

                        <p
                            className="mt-4 max-w-xl text-base leading-7 sm:text-lg"
                            style={{
                                color:
                                    "var(--color-muted-purple,#6B5B7B)",
                            }}
                        >
                            If you have reliable transport and want to
                            support local gift deliveries, join the Evivi
                            delivery partner waitlist.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <a
                                href="#register"
                                className="btn-primary inline-flex items-center gap-2"
                            >
                                Join the Delivery Partner Waitlist
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
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
                                />
                                Delivery network
                            </span>

                            <span className="flex items-center gap-2">
                                <Heart
                                    size={17}
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
                                />
                                Help celebrations arrive
                            </span>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden rounded-[2rem] shadow-soft">
                            <Image
                                src="/images/delivery-hero.png"
                                alt="Evivi delivery partner"
                                width={900}
                                height={700}
                                priority
                                className="h-auto w-full object-cover"
                            />
                        </div>

                        <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-lg sm:left-8">
                            <div className="flex items-center gap-3">
                                <span
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{
                                        background:
                                            "var(--color-warm-lilac,#F3E9F7)",
                                    }}
                                >
                                    <Truck
                                        size={20}
                                        style={{
                                            color:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                        }}
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

            {/* =====================================================
                WHAT IS AN EVIVI DELIVERY PARTNER
            ===================================================== */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-20"
                style={{
                    background:
                        "var(--color-deep-plum,#3B0D5C)",
                }}
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
                            <div
                                key={item.label}
                                className="relative"
                            >
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-6 text-center backdrop-blur">
                                    <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                                        <Icon
                                            size={22}
                                            color="#fff"
                                        />
                                    </span>

                                    <h3 className="mt-4 font-semibold text-white">
                                        {item.label}
                                    </h3>

                                    <p className="mt-1 text-sm text-purple-100">
                                        {item.copy}
                                    </p>
                                </div>

                                {index <
                                    ECOSYSTEM_FLOW.length - 1 && (
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

            {/* =====================================================
                DELIVERY JOURNEY
            ===================================================== */}

            <section
                id="delivery-journey"
                className="scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            The delivery journey
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            From joining the network to delivering the gift.
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
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border,#E4D8F0)",
                                }}
                            >
                                <span
                                    className="text-sm font-bold"
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
                                >
                                    {step.num}
                                </span>

                                <h3
                                    className="mt-3 text-lg font-semibold"
                                    style={{
                                        color:
                                            "var(--color-deep-plum,#3B0D5C)",
                                    }}
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

            {/* =====================================================
                WHAT YOU MAY DELIVER
            ===================================================== */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/delivery-bag.png"
                            alt="Gift delivery package"
                            width={800}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            What you may deliver
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            Help gifts complete their final journey.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Delivery opportunities can vary depending on the
                            seller, order and supported delivery area.
                        </p>

                        <div className="mt-8 space-y-5">
                            {DELIVERY_TYPES.map((item) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4"
                                >
                                    <span
                                        className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
                                        style={{
                                            background:
                                                "var(--color-warm-lilac,#F3E9F7)",
                                        }}
                                    >
                                        <Check
                                            size={17}
                                            style={{
                                                color:
                                                    "var(--color-vibrant-magenta,#C2185B)",
                                            }}
                                        />
                                    </span>

                                    <div>
                                        <h3
                                            className="font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
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

            {/* =====================================================
                WHO CAN APPLY
            ===================================================== */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-24"
                style={{
                    background:
                        "var(--color-soft-lavender,#FAF7FC)",
                }}
            >
                <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Who can apply?
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
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
                            Apply to the waitlist
                            <ChevronRight size={18} />
                        </a>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                        {PARTNER_REQUIREMENTS.map(
                            (requirement) => (
                                <div
                                    key={requirement}
                                    className="flex gap-3 rounded-2xl border bg-white p-5"
                                    style={{
                                        borderColor:
                                            "var(--color-lavender-border,#E4D8F0)",
                                    }}
                                >
                                    <Check
                                        size={19}
                                        className="mt-0.5 shrink-0"
                                        style={{
                                            color:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                        }}
                                    />

                                    <span className="text-sm leading-6 text-gray-700">
                                        {requirement}
                                    </span>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </section>

            {/* =====================================================
                AVAILABILITY AND TRANSPORT
            ===================================================== */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Availability and transport
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
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
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
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
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
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

                    <div className="overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/delivery-car.png"
                            alt="Delivery vehicle"
                            width={850}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* =====================================================
                PARTNER BENEFITS
            ===================================================== */}

            <section
                className="px-6 py-16 lg:px-8 lg:py-24"
                style={{
                    background:
                        "var(--color-deep-plum,#3B0D5C)",
                }}
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

            {/* =====================================================
                AFTER APPLYING
            ===================================================== */}

            <section className="px-6 py-16 lg:px-8 lg:py-24">
                <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
                    <div className="overflow-hidden rounded-[2rem]">
                        <Image
                            src="/images/delivery-city.png"
                            alt="City delivery network"
                            width={850}
                            height={700}
                            className="h-full w-full object-cover"
                        />
                    </div>

                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            After applying
                        </span>

                        <h2
                            className="mt-3 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            Your application helps us build the network.
                        </h2>

                        <div className="mt-8 space-y-6">
                            {AFTER_APPLICATION.map((step) => (
                                <div
                                    key={step.num}
                                    className="flex gap-4"
                                >
                                    <span
                                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold"
                                        style={{
                                            background:
                                                "var(--color-warm-lilac,#F3E9F7)",
                                            color:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                        }}
                                    >
                                        {step.num}
                                    </span>

                                    <div>
                                        <h3
                                            className="font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
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

            {/* =====================================================
                SELLER CROSS LINK
            ===================================================== */}

            <section className="px-6 pb-16 lg:px-8">
                <div
                    className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-[2rem] p-8 sm:p-10 lg:flex-row lg:items-center"
                    style={{
                        background:
                            "var(--color-soft-lavender,#FAF7FC)",
                    }}
                >
                    <div>
                        <span
                            className="text-sm font-semibold uppercase tracking-[0.18em]"
                            style={{
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Are you a gift seller?
                        </span>

                        <h2
                            className="mt-2 font-display text-2xl font-semibold sm:text-3xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
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

            {/* =====================================================
                REGISTRATION
            ===================================================== */}

            <section
                id="register"
                className="scroll-mt-20 px-6 py-16 lg:px-8 lg:py-24"
                style={{
                    background:
                        "var(--color-soft-lavender,#FAF7FC)",
                }}
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mx-auto max-w-2xl text-center">
                        <span
                            className="inline-flex rounded-full px-4 py-2 text-sm font-semibold"
                            style={{
                                background:
                                    "var(--color-warm-lilac,#F3E9F7)",
                                color:
                                    "var(--color-vibrant-magenta,#C2185B)",
                            }}
                        >
                            Delivery Partner Registration
                        </span>

                        <h2
                            className="mt-5 font-display text-3xl font-semibold sm:text-4xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            Tell us a little about yourself.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Join the early Evivi delivery partner waitlist.
                            Your information will help us understand the
                            delivery network we are building.
                        </p>
                    </div>

                    <div className="mt-10 rounded-[2rem] border bg-white p-6 shadow-soft sm:p-8 lg:p-10">
                        {submitted ? (
                            <div className="flex flex-col items-center py-12 text-center">
                                <span
                                    className="mb-5 flex h-16 w-16 items-center justify-center rounded-full"
                                    style={{
                                        background:
                                            "var(--color-success-green,#2E7D32)",
                                    }}
                                >
                                    <Check
                                        size={28}
                                        color="#fff"
                                        strokeWidth={3}
                                    />
                                </span>

                                <h3
                                    className="font-display text-2xl font-semibold"
                                    style={{
                                        color:
                                            "var(--color-deep-plum,#3B0D5C)",
                                    }}
                                >
                                    You're on the list
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                                    Thanks for joining the Evivi delivery
                                    partner waitlist. We will be in touch with
                                    updates as the delivery network develops.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn-secondary mt-7"
                                >
                                    Submit another response
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                className="space-y-10"
                            >
                                {/* PERSONAL DETAILS */}

                                <div>
                                    <div className="mb-5">
                                        <h3
                                            className="font-display text-xl font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
                                        >
                                            Personal details
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Basic information we can use to
                                            contact you.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Field
                                            label="Full name"
                                            required
                                        >
                                            <input
                                                type="text"
                                                value={form.fullName}
                                                onChange={updateInput(
                                                    "fullName"
                                                )}
                                                placeholder="Enter your full name"
                                                className={inputClass}
                                                style={inputStyle}
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Email address"
                                            required
                                        >
                                            <input
                                                type="email"
                                                value={form.email}
                                                onChange={updateInput(
                                                    "email"
                                                )}
                                                placeholder="you@example.com"
                                                className={inputClass}
                                                style={inputStyle}
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Mobile number"
                                            required
                                        >
                                            <input
                                                type="tel"
                                                value={form.mobile}
                                                onChange={updateInput(
                                                    "mobile"
                                                )}
                                                placeholder="e.g. 082 123 4567"
                                                className={inputClass}
                                                style={inputStyle}
                                                required
                                            />
                                        </Field>
                                    </div>
                                </div>

                                {/* LOCATION */}

                                <div>
                                    <div className="mb-5">
                                        <h3
                                            className="font-display text-xl font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
                                        >
                                            Location
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Tell us where you would like to
                                            provide delivery support.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Field
                                            label="Province"
                                            required
                                        >
                                            <CustomSelect
                                                value={form.province}
                                                onChange={(value) =>
                                                    update(
                                                        "province",
                                                        value
                                                    )
                                                }
                                                options={Object.keys(
                                                    PROVINCES_AND_CITIES
                                                )}
                                                placeholder="Select province"
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="City / Area"
                                            required
                                        >
                                            <CustomSelect
                                                value={form.city}
                                                onChange={(value) =>
                                                    update(
                                                        "city",
                                                        value
                                                    )
                                                }
                                                options={
                                                    form.province
                                                        ? PROVINCES_AND_CITIES[
                                                              form.province
                                                          ]
                                                        : []
                                                }
                                                placeholder={
                                                    form.province
                                                        ? "Select city or area"
                                                        : "Select province first"
                                                }
                                                disabled={
                                                    !form.province
                                                }
                                                required
                                            />
                                        </Field>
                                    </div>
                                </div>

                                {/* TRANSPORT */}

                                <div>
                                    <div className="mb-5">
                                        <h3
                                            className="font-display text-xl font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
                                        >
                                            Transport and availability
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            Help us understand how and when
                                            you can support deliveries.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Field
                                            label="Vehicle type"
                                            required
                                        >
                                            <CustomSelect
                                                value={
                                                    form.vehicleType
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "vehicleType",
                                                        value
                                                    )
                                                }
                                                options={
                                                    VEHICLE_OPTIONS
                                                }
                                                placeholder="Select vehicle type"
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Typical availability"
                                            required
                                        >
                                            <MultiSelect
                                                value={
                                                    form.availability
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "availability",
                                                        value
                                                    )
                                                }
                                                options={
                                                    AVAILABILITY_OPTIONS
                                                }
                                                placeholder="Select availability"
                                                required
                                            />
                                        </Field>
                                    </div>
                                </div>

                                {/* REQUIREMENTS */}

                                <div>
                                    <div className="mb-5">
                                        <h3
                                            className="font-display text-xl font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
                                        >
                                            Partner requirements
                                        </h3>

                                        <p className="mt-1 text-sm text-gray-500">
                                            These questions help us
                                            understand your readiness for
                                            delivery work.
                                        </p>
                                    </div>

                                    <div className="grid gap-5 md:grid-cols-2">
                                        <Field
                                            label="Do you own a smartphone?"
                                            required
                                        >
                                            <CustomSelect
                                                value={
                                                    form.hasSmartphone
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "hasSmartphone",
                                                        value
                                                    )
                                                }
                                                options={[
                                                    "Yes",
                                                    "No",
                                                ]}
                                                placeholder="Select an option"
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Do you have a valid driver's licence?"
                                            required
                                        >
                                            <CustomSelect
                                                value={
                                                    form.hasDriversLicence
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "hasDriversLicence",
                                                        value
                                                    )
                                                }
                                                options={[
                                                    "Yes",
                                                    "No",
                                                    "Not applicable",
                                                ]}
                                                placeholder="Select an option"
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Does your vehicle have a valid licence?"
                                            required
                                        >
                                            <CustomSelect
                                                value={
                                                    form.hasVehicleLicence
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "hasVehicleLicence",
                                                        value
                                                    )
                                                }
                                                options={[
                                                    "Yes",
                                                    "No",
                                                    "Not applicable",
                                                ]}
                                                placeholder="Select an option"
                                                required
                                            />
                                        </Field>

                                        <Field
                                            label="Are you willing to complete identity and driver verification?"
                                            required
                                        >
                                            <CustomSelect
                                                value={
                                                    form.verificationConsent
                                                }
                                                onChange={(value) =>
                                                    update(
                                                        "verificationConsent",
                                                        value
                                                    )
                                                }
                                                options={[
                                                    "Yes",
                                                    "No",
                                                ]}
                                                placeholder="Select an option"
                                                required
                                            />
                                        </Field>
                                    </div>
                                </div>

                                {/* CONSENT */}

                                <div
                                    className="rounded-2xl border p-5"
                                    style={{
                                        borderColor:
                                            "var(--color-lavender-border,#E4D8F0)",
                                        background:
                                            "var(--color-soft-lavender,#FAF7FC)",
                                    }}
                                >
                                    <label className="flex cursor-pointer items-start gap-3">
                                        <input
                                            type="checkbox"
                                            checked={
                                                form.consent
                                            }
                                            onChange={updateInput(
                                                "consent"
                                            )}
                                            required
                                            className="mt-1 h-4 w-4 accent-[var(--color-vibrant-magenta,#C2185B)]"
                                        />

                                        <span className="text-sm leading-6 text-gray-600">
                                            I agree to the Evivi Terms and
                                            Privacy Policy and consent to
                                            Evivi contacting me about the
                                            Delivery Partner waitlist.
                                        </span>
                                    </label>
                                </div>

                                {/* SUBMIT */}

                                <div className="flex flex-col gap-5 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <ShieldCheck size={17} />
                                        Your information is submitted
                                        securely.
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary inline-flex items-center justify-center gap-2"
                                    >
                                        Join the Delivery Waitlist
                                        <ChevronRight size={18} />
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="px-6 pb-20 pt-8 lg:px-8 lg:pb-28">
                <div
                    className="mx-auto max-w-6xl rounded-[2rem] px-6 py-12 text-center sm:px-10 lg:py-16"
                    style={{
                        background:
                            "linear-gradient(135deg, var(--color-deep-plum,#3B0D5C), var(--color-vibrant-magenta,#C2185B))",
                    }}
                >
                    <Bike
                        size={32}
                        className="mx-auto text-white"
                    />

                    <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
                        Ready to help gifts get there?
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl leading-7 text-pink-100">
                        Join the early Evivi delivery partner network and
                        tell us where and when you can provide delivery
                        support.
                    </p>

                    <a
                        href="#register"
                        className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[var(--color-deep-plum,#3B0D5C)] transition hover:opacity-90"
                    >
                        Join the Delivery Partner Waitlist
                        <ChevronRight size={18} />
                    </a>
                </div>
            </section>
        </main>
    );
}