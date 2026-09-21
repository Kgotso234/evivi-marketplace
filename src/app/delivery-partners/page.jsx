"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Gift,
    Truck,
    Bike,
    Check,
    ChevronDown,
    ChevronRight,
    ShieldCheck,
    Clock3,
    Car,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

function Field({ id, label, children, required = false }) {
    return (
        <div>
            <label
                htmlFor={id}
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

function CustomSelect({
    id,
    value,
    onChange,
    options,
    placeholder,
    disabled = false,
    error = false,
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
                id={id}
                type="button"
                disabled={disabled}
                aria-haspopup="listbox"
                aria-expanded={isOpen}
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
                    borderColor: error
                        ? "var(--color-vibrant-magenta,#C2185B)"
                        : "var(--color-lavender-border,#E4D8F0)",
                }}
            >
                <span
                    className={
                        value ? "text-gray-900" : "text-gray-400"
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
                    role="listbox"
                    aria-labelledby={id}
                    className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-xl"
                    style={{
                        borderColor:
                            "var(--color-lavender-border,#E4D8F0)",
                    }}
                >
                    {options.map((option) => {
                        const selected = value === option;

                        return (
                            <button
                                key={option}
                                type="button"
                                role="option"
                                aria-selected={selected}
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
        </div>
    );
}

function MultiSelect({
    id,
    value,
    onChange,
    options,
    placeholder,
    error = false,
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
                id={id}
                type="button"
                aria-haspopup="listbox"
                aria-expanded={isOpen}
                onClick={() => setIsOpen((current) => !current)}
                className="flex min-h-[48px] w-full items-center justify-between gap-3 rounded-xl border bg-white px-4 py-2.5 text-left outline-none transition-all hover:border-[var(--color-vibrant-magenta,#C2185B)]"
                style={{
                    borderColor: error
                        ? "var(--color-vibrant-magenta,#C2185B)"
                        : "var(--color-lavender-border,#E4D8F0)",
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
                    role="listbox"
                    aria-labelledby={id}
                    aria-multiselectable="true"
                    className="absolute left-0 top-full z-50 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border bg-white py-1 shadow-xl"
                    style={{
                        borderColor:
                            "var(--color-lavender-border,#E4D8F0)",
                    }}
                >
                    {options.map((option) => {
                        const selected = value.includes(option);

                        return (
                            <button
                                key={option}
                                type="button"
                                role="option"
                                aria-selected={selected}
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
        </div>
    );
}

export default function DeliveryPartnersPage() {
    const [registrationStep, setRegistrationStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formError, setFormError] = useState("");

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

        setFormError("");
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

        setFormError("");
    };

    const validateStep = () => {
        if (registrationStep === 1) {
            if (
                !form.fullName.trim() ||
                !form.email.trim() ||
                !form.mobile.trim() ||
                !form.province ||
                !form.city
            ) {
                setFormError(
                    "Please complete all required personal and location details."
                );
                return false;
            }
        }

        if (registrationStep === 2) {
            if (
                !form.vehicleType ||
                form.availability.length === 0
            ) {
                setFormError(
                    "Please select your vehicle type and at least one availability option."
                );
                return false;
            }
        }

        if (registrationStep === 3) {
            if (
                !form.hasSmartphone ||
                !form.hasDriversLicence ||
                !form.hasVehicleLicence ||
                !form.verificationConsent
            ) {
                setFormError(
                    "Please answer all partner requirement questions."
                );
                return false;
            }

            if (!form.consent) {
                setFormError(
                    "Please accept the terms and consent before submitting your application."
                );
                return false;
            }
        }

        setFormError("");
        return true;
    };

    const handleContinue = () => {
        if (!validateStep()) return;

        setRegistrationStep((current) =>
            Math.min(current + 1, 3)
        );

        setTimeout(() => {
            document
                .getElementById("register")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
    };

    const handleBack = () => {
        setFormError("");

        setRegistrationStep((current) =>
            Math.max(current - 1, 1)
        );
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!validateStep()) return;

        setSubmitted(true);

        setTimeout(() => {
            document
                .getElementById("register")
                ?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
        }, 50);
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

        setRegistrationStep(1);
        setFormError("");
        setSubmitted(false);
    };

    const inputClass =
        "w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-[var(--color-vibrant-magenta,#C2185B)]";

    const inputStyle = {
        borderColor:
            "var(--color-lavender-border,#E4D8F0)",
    };

    return (
        <div
            className="min-h-screen"
            style={{
                background:
                    "var(--color-blush-white,#FFF9FC)",
                color:
                    "var(--color-near-black,#1A1A1A)",
            }}
        >
            {/* HERO */}

            <section className="px-6 pb-12 pt-8 lg:px-8 lg:pb-16 lg:pt-12">
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
                            className="mt-5 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-5xl"
                            style={{
                                color:
                                    "var(--color-deep-plum,#3B0D5C)",
                            }}
                        >
                            Become an Evivi delivery partner.
                        </h1>

                        <p
                            className="mt-6 max-w-xl text-base leading-7 sm:text-lg"
                            style={{
                                color:
                                    "var(--color-muted-purple,#6B5B7B)",
                            }}
                        >
                            Help local gift sellers deliver gifts and
                            celebration packages to customers across
                            supported areas.
                        </p>

                        <p
                            className="mt-4 max-w-xl text-base leading-7 sm:text-lg"
                            style={{
                                color:
                                    "var(--color-muted-purple,#6B5B7B)",
                            }}
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
                                    style={{
                                        color:
                                            "var(--color-vibrant-magenta,#C2185B)",
                                    }}
                                />
                                Secure registration
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

            {/* ECOSYSTEM */}

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

            {/* JOURNEY */}

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

            {/* REQUIREMENTS */}

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
                            Start registration
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

            {/* AVAILABILITY */}

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

            {/* SELLER CTA */}

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

            {/* REGISTRATION */}

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
                            Join the Evivi delivery network.
                        </h2>

                        <p className="mt-4 leading-7 text-gray-600">
                            Complete your registration in a few simple steps.
                            We will use your information to understand where
                            and when you can support deliveries.
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
                                    Registration submitted
                                </h3>

                                <p className="mt-3 max-w-md text-sm leading-6 text-gray-600">
                                    Thank you for registering as an Evivi
                                    delivery partner. Your information has
                                    been received and can be reviewed as the
                                    delivery network develops.
                                </p>

                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="btn-secondary mt-7"
                                >
                                    Submit another registration
                                </button>
                            </div>
                        ) : (
                            <form
                                onSubmit={handleSubmit}
                                noValidate
                            >
                                {/* PROGRESS */}

                                <div className="mb-10">
                                    <div className="flex items-center justify-between text-sm">
                                        <span
                                            className="font-semibold"
                                            style={{
                                                color:
                                                    "var(--color-deep-plum,#3B0D5C)",
                                            }}
                                        >
                                            Step {registrationStep} of 3
                                        </span>

                                        <span className="text-gray-500">
                                            {registrationStep === 1 &&
                                                "Personal details"}

                                            {registrationStep === 2 &&
                                                "Transport & availability"}

                                            {registrationStep === 3 &&
                                                "Partner requirements"}
                                        </span>
                                    </div>

                                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-gray-100">
                                        <div
                                            className="h-full rounded-full transition-all duration-300"
                                            style={{
                                                width: `${
                                                    registrationStep * 33.333
                                                }%`,
                                                background:
                                                    "var(--color-vibrant-magenta,#C2185B)",
                                            }}
                                        />
                                    </div>

                                    <div className="mt-4 grid grid-cols-3 gap-2">
                                        {[1, 2, 3].map((step) => (
                                            <div
                                                key={step}
                                                className="text-center text-xs"
                                            >
                                                <span
                                                    className={`mx-auto flex h-8 w-8 items-center justify-center rounded-full font-semibold ${
                                                        registrationStep >=
                                                        step
                                                            ? "text-white"
                                                            : "text-gray-400"
                                                    }`}
                                                    style={{
                                                        background:
                                                            registrationStep >=
                                                            step
                                                                ? "var(--color-vibrant-magenta,#C2185B)"
                                                                : "#F1EDF4",
                                                    }}
                                                >
                                                    {registrationStep >
                                                    step ? (
                                                        <Check size={15} />
                                                    ) : (
                                                        step
                                                    )}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {formError && (
                                    <div
                                        role="alert"
                                        className="mb-7 rounded-xl border px-4 py-3 text-sm"
                                        style={{
                                            borderColor:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                            background:
                                                "#FFF5F9",
                                            color:
                                                "var(--color-vibrant-magenta,#C2185B)",
                                        }}
                                    >
                                        {formError}
                                    </div>
                                )}

                                {/* STEP 1 */}

                                {registrationStep === 1 && (
                                    <div className="space-y-10">
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
                                                    Basic information we can
                                                    use to contact you.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2">
                                                <Field
                                                    id="fullName"
                                                    label="Full name"
                                                    required
                                                >
                                                    <input
                                                        id="fullName"
                                                        type="text"
                                                        value={
                                                            form.fullName
                                                        }
                                                        onChange={updateInput(
                                                            "fullName"
                                                        )}
                                                        placeholder="Enter your full name"
                                                        className={inputClass}
                                                        style={inputStyle}
                                                        autoComplete="name"
                                                    />
                                                </Field>

                                                <Field
                                                    id="email"
                                                    label="Email address"
                                                    required
                                                >
                                                    <input
                                                        id="email"
                                                        type="email"
                                                        value={
                                                            form.email
                                                        }
                                                        onChange={updateInput(
                                                            "email"
                                                        )}
                                                        placeholder="you@example.com"
                                                        className={inputClass}
                                                        style={inputStyle}
                                                        autoComplete="email"
                                                    />
                                                </Field>

                                                <Field
                                                    id="mobile"
                                                    label="Mobile number"
                                                    required
                                                >
                                                    <input
                                                        id="mobile"
                                                        type="tel"
                                                        value={
                                                            form.mobile
                                                        }
                                                        onChange={updateInput(
                                                            "mobile"
                                                        )}
                                                        placeholder="e.g. 082 123 4567"
                                                        className={inputClass}
                                                        style={inputStyle}
                                                        autoComplete="tel"
                                                    />
                                                </Field>
                                            </div>
                                        </div>

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
                                                    Tell us where you would like
                                                    to provide delivery
                                                    support.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2">
                                                <Field
                                                    id="province"
                                                    label="Province"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="province"
                                                        value={
                                                            form.province
                                                        }
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
                                                    />
                                                </Field>

                                                <Field
                                                    id="city"
                                                    label="City / Area"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="city"
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
                                                    />
                                                </Field>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 2 */}

                                {registrationStep === 2 && (
                                    <div className="space-y-10">
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
                                                    Help us understand how and
                                                    when you can support
                                                    deliveries.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2">
                                                <Field
                                                    id="vehicleType"
                                                    label="Vehicle type"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="vehicleType"
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
                                                    />
                                                </Field>

                                                <Field
                                                    id="availability"
                                                    label="Typical availability"
                                                    required
                                                >
                                                    <MultiSelect
                                                        id="availability"
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
                                                    />
                                                </Field>
                                            </div>
                                        </div>

                                        <div
                                            className="rounded-2xl p-6"
                                            style={{
                                                background:
                                                    "var(--color-soft-lavender,#FAF7FC)",
                                            }}
                                        >
                                            <div className="flex gap-4">
                                                <Clock3
                                                    size={22}
                                                    className="mt-1 shrink-0"
                                                    style={{
                                                        color:
                                                            "var(--color-vibrant-magenta,#C2185B)",
                                                    }}
                                                />

                                                <div>
                                                    <h3
                                                        className="font-semibold"
                                                        style={{
                                                            color:
                                                                "var(--color-deep-plum,#3B0D5C)",
                                                        }}
                                                    >
                                                        Your availability matters
                                                    </h3>

                                                    <p className="mt-2 text-sm leading-6 text-gray-600">
                                                        Select all the periods
                                                        when you may be
                                                        available for delivery
                                                        support. You can select
                                                        more than one option.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* STEP 3 */}

                                {registrationStep === 3 && (
                                    <div className="space-y-10">
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
                                                    understand your readiness
                                                    for delivery work.
                                                </p>
                                            </div>

                                            <div className="grid gap-5 md:grid-cols-2">
                                                <Field
                                                    id="hasSmartphone"
                                                    label="Do you own a smartphone?"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="hasSmartphone"
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
                                                    />
                                                </Field>

                                                <Field
                                                    id="hasDriversLicence"
                                                    label="Do you have a valid driver's licence?"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="hasDriversLicence"
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
                                                    />
                                                </Field>

                                                <Field
                                                    id="hasVehicleLicence"
                                                    label="Does your vehicle have a valid licence?"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="hasVehicleLicence"
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
                                                    />
                                                </Field>

                                                <Field
                                                    id="verificationConsent"
                                                    label="Are you willing to complete identity and driver verification?"
                                                    required
                                                >
                                                    <CustomSelect
                                                        id="verificationConsent"
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
                                                    />
                                                </Field>
                                            </div>
                                        </div>

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
                                                    className="mt-1 h-4 w-4 accent-[var(--color-vibrant-magenta,#C2185B)]"
                                                />

                                                <span className="text-sm leading-6 text-gray-600">
                                                    I agree to the Evivi Terms
                                                    and Privacy Policy and
                                                    consent to Evivi contacting
                                                    me about the Delivery
                                                    Partner registration.
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                )}

                                {/* NAVIGATION */}

                                <div className="mt-10 flex flex-col gap-4 border-t pt-7 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <ShieldCheck size={17} />

                                        <span>
                                            Your information is submitted
                                            securely.
                                        </span>
                                    </div>

                                    <div className="flex flex-col-reverse gap-3 sm:flex-row">
                                        {registrationStep > 1 && (
                                            <button
                                                type="button"
                                                onClick={handleBack}
                                                className="btn-secondary inline-flex items-center justify-center"
                                            >
                                                Back
                                            </button>
                                        )}

                                        {registrationStep < 3 ? (
                                            <button
                                                type="button"
                                                onClick={handleContinue}
                                                className="btn-primary inline-flex items-center justify-center gap-2"
                                            >
                                                Continue
                                                <ChevronRight size={18} />
                                            </button>
                                        ) : (
                                            <button
                                                type="submit"
                                                className="btn-primary inline-flex items-center justify-center gap-2"
                                            >
                                                Complete Registration
                                                <Check size={18} />
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </form>
                        )}
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
                    <Bike
                        size={32}
                        className="mx-auto text-white"
                    />

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