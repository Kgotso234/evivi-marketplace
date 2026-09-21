"use client";

import Image from "next/image";
import Link from "next/link";
import {
    Heart,
    Users,
    ClipboardList,
    ShieldCheck,
    Star,
    TrendingUp,
    Sparkles,
    Check,
    ChevronDown,
} from "lucide-react";
import { useState } from "react";

const sellerBenefits = [
    {
        icon: Users,
        title: "Reach more gift buyers",
        copy: "Put your products in front of people actively looking for Valentine gifts.",
    },
    {
        icon: ClipboardList,
        title: "Manage orders easily",
        copy: "Receive customer orders through Evivi instead of relying on scattered messages and manual tracking.",
    },
    {
        icon: ShieldCheck,
        title: "Get paid securely",
        copy: "Customer payments are processed through Evivi's payment system.",
    },
    {
        icon: Star,
        title: "Build your reputation",
        copy: "Earn ratings and reviews that help future buyers choose your business.",
    },
    {
        icon: TrendingUp,
        title: "Create more opportunities to sell",
        copy: "Reach customers beyond your existing audience and add another sales channel for your gift business.",
    },
];

const journeySteps = [
    {
        num: "01",
        title: "Apply to join",
        copy: "Tell us about your business, what you sell and where you operate.",
    },
    {
        num: "02",
        title: "Share your offerings",
        copy: "Let Evivi know what types of gifts or Valentine packages you offer.",
    },
    {
        num: "03",
        title: "Get ready for customers",
        copy: "Once selected, prepare your eligible offerings for the Evivi marketplace.",
    },
    {
        num: "04",
        title: "Receive structured orders",
        copy: "Customers discover your offerings and place orders through Evivi.",
    },
    {
        num: "05",
        title: "Fulfil the order",
        copy: "Support delivery, collection, or both based on your business model.",
    },
    {
        num: "06",
        title: "Grow with Evivi",
        copy: "Build your presence, customer trust and reputation as the marketplace develops.",
    },
];

const sellerCategories = [
    "Florists",
    "Gift & hamper businesses",
    "Bakeries & sweet treats",
    "Personalised gift creators",
    "Chocolatiers & confectionery",
    "Balloons & décor",
    "Jewellery & accessories",
    "Other eligible gift businesses",
];

const provincesAndCities = {
    "Eastern Cape": [
        "Gqeberha",
        "East London",
        "Makhanda",
        "Mthatha",
        "Komani",
    ],
    "Free State": [
        "Bloemfontein",
        "Welkom",
        "Bethlehem",
        "Phuthaditjhaba",
    ],
    "Gauteng": [
        "Johannesburg",
        "Pretoria",
        "Soweto",
        "Centurion",
        "Midrand",
        "Sandton",
    ],
    "KwaZulu-Natal": [
        "Durban",
        "Pietermaritzburg",
        "Richards Bay",
        "Ballito",
        "Newcastle",
    ],
    "Limpopo": [
        "Polokwane",
        "Thohoyandou",
        "Tzaneen",
        "Mokopane",
    ],
    "Mpumalanga": [
        "Mbombela",
        "Emalahleni",
        "Secunda",
        "Middelburg",
    ],
    "Northern Cape": [
        "Kimberley",
        "Upington",
        "Kuruman",
        "Springbok",
    ],
    "North West": [
        "Mahikeng",
        "Rustenburg",
        "Potchefstroom",
        "Klerksdorp",
    ],
    "Western Cape": [
        "Cape Town",
        "Stellenbosch",
        "Paarl",
        "George",
        "Knysna",
    ],
};

const initialForm = {
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    province: "",
    city: "",
    businessType: "",
    categories: [],
    description: "",
    website: "",
    instagram: "",
    acceptsTerms: false,
};

const businessTypes = [
    "Registered business",
    "Sole proprietor",
    "Independent creator",
    "Small business",
];

const categoryOptions = [
    "Flowers",
    "Gift hampers",
    "Baked goods",
    "Chocolates",
    "Personalised gifts",
    "Balloons & décor",
    "Jewellery & accessories",
    "Other",
];

function Field({ label, children, required = false }) {
    return (
        <label className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--color-deep-plum)]">
                {label}
                {required && (
                    <span className="ml-1 text-[var(--color-vibrant-magenta)]">
                        *
                    </span>
                )}
            </span>

            {children}
        </label>
    );
}

function SelectField({
    label,
    value,
    onChange,
    options,
    placeholder,
    required = false,
    disabled = false,
}) {
    const [open, setOpen] = useState(false);

    const selectedLabel = value || placeholder;

    const handleSelect = (option) => {
        if (disabled) return;

        onChange(option);
        setOpen(false);
    };

    return (
        <Field label={label} required={required}>
            <div className="relative">
                <button
                    type="button"
                    disabled={disabled}
                    onClick={() => setOpen((current) => !current)}
                    className={`flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm transition ${
                        disabled
                            ? "cursor-not-allowed bg-gray-50 text-gray-400"
                            : "text-[var(--color-deep-plum)] hover:border-[var(--color-vibrant-magenta)]"
                    }`}
                    style={{
                        borderColor:
                            "var(--color-lavender-border)",
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                >
                    <span
                        className={
                            value
                                ? "text-[var(--color-deep-plum)]"
                                : "text-[var(--color-muted-purple)]"
                        }
                    >
                        {selectedLabel}
                    </span>

                    <ChevronDown
                        size={17}
                        className={`shrink-0 text-[var(--color-muted-purple)] transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                    />
                </button>

                {open && !disabled && (
                    <div
                        className="absolute left-0 right-0 z-40 mt-2 max-h-64 overflow-y-auto rounded-xl border bg-white py-2 shadow-lg"
                        style={{
                            borderColor:
                                "var(--color-lavender-border)",
                        }}
                        role="listbox"
                    >
                        {options.map((option) => {
                            const selected = value === option;

                            return (
                                <button
                                    key={option}
                                    type="button"
                                    onClick={() =>
                                        handleSelect(option)
                                    }
                                    className={`flex w-full items-center justify-between px-4 py-2.5 text-left text-sm transition ${
                                        selected
                                            ? "bg-[var(--color-soft-lavender)] text-[var(--color-deep-plum)]"
                                            : "text-[var(--color-deep-plum)] hover:bg-[var(--color-soft-lavender)]"
                                    }`}
                                    role="option"
                                    aria-selected={selected}
                                >
                                    <span>{option}</span>

                                    {selected && (
                                        <Check
                                            size={16}
                                            className="text-[var(--color-vibrant-magenta)]"
                                            strokeWidth={2.5}
                                        />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <input
                type="text"
                value={value}
                required={required}
                readOnly
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0 opacity-0"
            />
        </Field>
    );
}

function CategorySelect({ value, onChange, required = false }) {
    const [open, setOpen] = useState(false);

    const toggleCategory = (category) => {
        const exists = value.includes(category);

        if (exists) {
            onChange(value.filter((item) => item !== category));
        } else {
            onChange([...value, category]);
        }
    };

    return (
        <Field label="What do you sell?" required={required}>
            <div className="relative">
                <button
                    type="button"
                    onClick={() => setOpen((current) => !current)}
                    className="flex w-full items-center justify-between rounded-xl border bg-white px-4 py-3 text-left text-sm text-[var(--color-deep-plum)]"
                    style={{
                        borderColor:
                            "var(--color-lavender-border)",
                    }}
                >
                    <span
                        className={
                            value.length
                                ? "text-[var(--color-deep-plum)]"
                                : "text-[var(--color-muted-purple)]"
                        }
                    >
                        {value.length
                            ? `${value.length} selected`
                            : "Select your categories"}
                    </span>

                    <ChevronDown
                        size={17}
                        className={`transition-transform ${
                            open ? "rotate-180" : ""
                        }`}
                    />
                </button>

                {open && (
                    <div
                        className="absolute z-30 mt-2 max-h-64 w-full overflow-y-auto rounded-xl border bg-white py-2 shadow-lg"
                        style={{
                            borderColor:
                                "var(--color-lavender-border)",
                        }}
                    >
                        {categoryOptions.map((category) => {
                            const selected = value.includes(category);

                            return (
                                <button
                                    key={category}
                                    type="button"
                                    onClick={() =>
                                        toggleCategory(category)
                                    }
                                    className="flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition hover:bg-[var(--color-soft-lavender)]"
                                >
                                    <span
                                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded border"
                                        style={{
                                            borderColor: selected
                                                ? "var(--color-vibrant-magenta)"
                                                : "var(--color-lavender-border)",
                                            background: selected
                                                ? "var(--color-vibrant-magenta)"
                                                : "transparent",
                                        }}
                                    >
                                        {selected && (
                                            <Check
                                                size={11}
                                                color="#fff"
                                                strokeWidth={3}
                                            />
                                        )}
                                    </span>

                                    {category}
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>

            <input
                type="text"
                value={value.length ? "selected" : ""}
                required={required}
                onChange={() => {}}
                tabIndex={-1}
                aria-hidden="true"
                className="pointer-events-none absolute h-0 w-0 opacity-0"
            />
        </Field>
    );
}

function SellerRegistrationForm() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);

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

    const goToStepTwo = (event) => {
        event.preventDefault();
        setStep(2);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (isSubmitting) return;

        setIsSubmitting(true);

        // Simulates the submission while the real backend is not connected.
        await new Promise((resolve) => setTimeout(resolve, 1200));

        setIsSubmitting(false);
        setStep(3);
    };

    const resetForm = () => {
        setForm(initialForm);
        setStep(1);
        setIsSubmitting(false);
    };

    const availableCities = form.province
        ? provincesAndCities[form.province] || []
        : [];

    /*
     * STEP 3
     * Success state
     */
    if (step === 3) {
        return (
            <div className="flex flex-col items-center py-12 text-center">
                <div
                    className="mb-5 flex size-16 items-center justify-center rounded-full"
                    style={{
                        background: "var(--color-success)",
                        animation: "sellerSuccessPop 0.45s ease-out",
                    }}
                >
                    <Check
                        size={28}
                        color="#fff"
                        strokeWidth={3}
                        style={{
                            animation: "sellerCheck 0.35s ease-out 0.15s both",
                        }}
                    />
                </div>

                <h4 className="font-display text-2xl font-semibold text-[var(--color-deep-plum)]">
                    You're on the list
                </h4>

                <p className="mt-3 max-w-md text-sm leading-6 text-[var(--color-muted-purple)]">
                    Thanks for applying to sell on Evivi. We'll be in touch with
                    next steps as launch gets closer.
                </p>

                <button
                    type="button"
                    onClick={resetForm}
                    className="btn-secondary mt-7"
                >
                    Submit another response
                </button>
            </div>
        );
    }

    return (
        <>
            {/* Step indicator */}
            <div className="mb-8 flex items-center justify-center">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <span
                            className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                                step >= 1
                                    ? "bg-[var(--color-vibrant-magenta)] text-white"
                                    : "border text-[var(--color-muted-purple)]"
                            }`}
                            style={
                                step >= 1
                                    ? {}
                                    : {
                                          borderColor:
                                              "var(--color-lavender-border)",
                                      }
                            }
                        >
                            {step > 1 ? (
                                <Check size={16} strokeWidth={3} />
                            ) : (
                                "1"
                            )}
                        </span>

                        <span
                            className={`hidden text-sm font-medium sm:block ${
                                step === 1
                                    ? "text-[var(--color-deep-plum)]"
                                    : "text-[var(--color-muted-purple)]"
                            }`}
                        >
                            General details
                        </span>
                    </div>

                    <div
                        className="mx-3 h-px w-12 transition-all duration-500 sm:w-20"
                        style={{
                            background:
                                step >= 2
                                    ? "var(--color-vibrant-magenta)"
                                    : "var(--color-lavender-border)",
                        }}
                    />

                    <div className="flex items-center gap-2">
                        <span
                            className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold transition-all duration-300 ${
                                step >= 2
                                    ? "bg-[var(--color-vibrant-magenta)] text-white"
                                    : "border text-[var(--color-muted-purple)]"
                            }`}
                            style={
                                step >= 2
                                    ? {}
                                    : {
                                          borderColor:
                                              "var(--color-lavender-border)",
                                      }
                            }
                        >
                            2
                        </span>

                        <span
                            className={`hidden text-sm font-medium sm:block ${
                                step === 2
                                    ? "text-[var(--color-deep-plum)]"
                                    : "text-[var(--color-muted-purple)]"
                            }`}
                        >
                            Business details
                        </span>
                    </div>
                </div>
            </div>

            {/* Step 1 */}
            {step === 1 && (
                <form
                    onSubmit={goToStepTwo}
                    className="seller-step-enter space-y-6"
                >
                    <div>
                        <h4 className="font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                            Tell us about yourself
                        </h4>

                        <p className="mt-1 text-sm text-[var(--color-muted-purple)]">
                            Start with your basic contact information.
                        </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Business name" required>
                            <input
                                type="text"
                                value={form.businessName}
                                onChange={updateInput("businessName")}
                                required
                                placeholder="Your business name"
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>

                        <Field label="Contact name" required>
                            <input
                                type="text"
                                value={form.contactName}
                                onChange={updateInput("contactName")}
                                required
                                placeholder="Your full name"
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>

                        <Field label="Email address" required>
                            <input
                                type="email"
                                value={form.email}
                                onChange={updateInput("email")}
                                required
                                placeholder="you@example.com"
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>

                        <Field label="Phone number" required>
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={updateInput("phone")}
                                required
                                placeholder="+27 ..."
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>
                    </div>

                    <div className="flex justify-end border-t pt-6">
                        <button
                            type="submit"
                            className="btn-primary inline-flex min-w-[140px] items-center justify-center gap-2"
                        >
                            Next
                            <span aria-hidden="true">→</span>
                        </button>
                    </div>
                </form>
            )}

            {/* Step 2 */}
            {step === 2 && (
                <form
                    onSubmit={handleSubmit}
                    className="seller-step-enter space-y-6"
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <h4 className="font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                                Tell us about your business
                            </h4>

                            <p className="mt-1 text-sm text-[var(--color-muted-purple)]">
                                Help us understand what you create and where you operate.
                            </p>
                        </div>

                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            className="text-sm font-medium text-[var(--color-vibrant-magenta)] transition hover:opacity-70"
                        >
                            Back
                        </button>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <SelectField
                            label="Business type"
                            value={form.businessType}
                            onChange={(value) =>
                                update("businessType", value)
                            }
                            options={businessTypes}
                            placeholder="Select business type"
                            required
                        />

                        <SelectField
                            label="Province"
                            value={form.province}
                            onChange={(value) =>
                                update("province", value)
                            }
                            options={Object.keys(provincesAndCities)}
                            placeholder="Select province"
                            required
                        />

                        <SelectField
                            label="City"
                            value={form.city}
                            onChange={(value) =>
                                update("city", value)
                            }
                            options={availableCities}
                            placeholder={
                                form.province
                                    ? "Select city"
                                    : "Select province first"
                            }
                            required
                            disabled={!form.province}
                        />

                        <CategorySelect
                            value={form.categories}
                            onChange={(value) =>
                                update("categories", value)
                            }
                            required
                        />
                    </div>

                    <Field
                        label="Tell us about your business"
                        required
                    >
                        <textarea
                            value={form.description}
                            onChange={updateInput("description")}
                            required
                            rows={5}
                            placeholder="Tell us about your products, customers and what makes your business special."
                            className="w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                            style={{
                                borderColor:
                                    "var(--color-lavender-border)",
                            }}
                        />
                    </Field>

                    <div className="grid gap-5 sm:grid-cols-2">
                        <Field label="Website">
                            <input
                                type="url"
                                value={form.website}
                                onChange={updateInput("website")}
                                placeholder="https://..."
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>

                        <Field label="Instagram">
                            <input
                                type="text"
                                value={form.instagram}
                                onChange={updateInput("instagram")}
                                placeholder="@yourbusiness"
                                className="w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-vibrant-magenta)]"
                                style={{
                                    borderColor:
                                        "var(--color-lavender-border)",
                                }}
                            />
                        </Field>
                    </div>

                    <label className="flex items-start gap-3 rounded-xl border p-4">
                        <input
                            type="checkbox"
                            checked={form.acceptsTerms}
                            onChange={updateInput("acceptsTerms")}
                            required
                            className="mt-1 h-4 w-4 accent-[var(--color-vibrant-magenta)]"
                        />

                        <span className="text-sm leading-relaxed text-[var(--color-muted-purple)]">
                            I confirm that the information provided is accurate
                            and I would like to be considered for selling on Evivi.
                        </span>
                    </label>

                    <div className="flex flex-col-reverse gap-3 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            disabled={isSubmitting}
                            className="text-sm font-medium text-[var(--color-muted-purple)] transition hover:text-[var(--color-deep-plum)] disabled:opacity-50"
                        >
                            ← Back
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="btn-primary relative inline-flex min-h-[50px] min-w-[210px] items-center justify-center gap-2 overflow-hidden"
                        >
                            {isSubmitting ? (
                                <>
                                    <span
                                        className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                                        aria-hidden="true"
                                    />
                                    <span>Submitting...</span>
                                </>
                            ) : (
                                <>
                                    <span>Apply to Sell on Evivi</span>
                                    <span aria-hidden="true">→</span>
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}

            <style jsx>{`
                @keyframes sellerStepEnter {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes sellerSuccessPop {
                    0% {
                        opacity: 0;
                        transform: scale(0.7);
                    }

                    70% {
                        transform: scale(1.08);
                    }

                    100% {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                @keyframes sellerCheck {
                    from {
                        opacity: 0;
                        transform: scale(0.5);
                    }

                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .seller-step-enter {
                    animation: sellerStepEnter 0.3s ease-out;
                }
            `}</style>
        </>
    );
}

export default function SellersPage() {
    return (
        <>
            <section
                id="hero"
                className="relative flex min-h-[78vh] items-center overflow-hidden text-white"
            >
                <Image
                    src="/images/seller-hero.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover hero-bg-bounce"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/90 via-[var(--color-deep-plum)]/50 to-[var(--color-deep-plum)]/20" />

                <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-20 sm:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                        How to sell on Evivi
                    </p>

                    <h1 className="mt-2 max-w-xl font-display text-3xl font-bold leading-[1.05] sm:text-5xl">
                        Turn what you create into something worth celebrating.
                    </h1>

                    <p className="mt-4 max-w-xl text-lg text-white/85">
                        Bring your gifts, flowers and Valentine packages to
                        customers looking for meaningful ways to celebrate.
                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <Link
                            href="#register"
                            className="btn-primary"
                        >
                            Apply to Sell on Evivi
                        </Link>

                        <a
                            href="#seller-journey"
                            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-white/10"
                        >
                            Explore how it works
                        </a>
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="dark"
                className="bg-[var(--color-deep-plum)] px-5 py-16 text-white sm:px-8"
            >
                <div className="mx-auto max-w-4xl text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                        Your craft deserves to be discovered
                    </p>

                    <h2 className="mt-3 font-display text-3xl leading-tight sm:text-4xl">
                        Whether you create bouquets, hampers, baked treats or
                        personalised gifts, there may be a place for you on Evivi.
                    </h2>

                    <p className="mx-auto mt-4 max-w-2xl text-white/70">
                        We're inviting selected sellers to join early, create
                        real Valentine offerings and help shape the marketplace
                        before launch.
                    </p>
                </div>
            </section>

            <section
                id="seller-journey"
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            The seller journey
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            A simple path from application to selling.
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-0 border-t border-[var(--color-lavender-border)] md:grid-cols-2 lg:grid-cols-3">
                        {journeySteps.map((step, index) => (
                            <div
                                key={step.num}
                                className={`border-b border-[var(--color-lavender-border)] p-5 ${
                                    index % 3 !== 2
                                        ? "lg:border-r"
                                        : ""
                                } ${
                                    index % 2 !== 1
                                        ? "md:border-r lg:border-r-0"
                                        : ""
                                }`}
                            >
                                <span className="font-display text-2xl text-[var(--color-vibrant-magenta)]/70">
                                    {step.num}
                                </span>

                                <h3 className="mt-2 font-display text-lg font-semibold text-[var(--color-deep-plum)]">
                                    {step.title}
                                </h3>

                                <p className="mt-1 text-sm text-[var(--color-muted-purple)]">
                                    {step.copy}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-8 sm:px-8"
            >
                <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-white shadow-soft lg:grid-cols-2">
                    <div className="relative hidden h-[360px] lg:block">
                        <Image
                            src="/images/seller-craft.png"
                            alt="A gift seller creating and preparing a celebration gift"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex flex-col justify-center p-8 md:p-12">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Made for creators
                        </p>

                        <h2 className="mt-2 font-display text-2xl text-[var(--color-deep-plum)] md:text-3xl">
                            Your products tell a story. Evivi helps customers find it.
                        </h2>

                        <p className="mt-3 text-sm text-[var(--color-muted-purple)]">
                            From a carefully arranged bouquet to a personalised
                            gift box, the things you create are part of how
                            people celebrate the moments that matter to them.
                        </p>
                    </div>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8"
            >
                <div className="mx-auto max-w-6xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Who can sell
                        </p>

                        <h2 className="mt-1 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Made for the people who make celebrations special.
                        </h2>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:items-center">
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] shadow-soft">
                            <Image
                                src="/images/seller-gifts.png"
                                alt="Beautifully prepared Valentine's gift packages"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="grid gap-2 sm:grid-cols-2">
                            {sellerCategories.map((category) => (
                                <div
                                    key={category}
                                    className="rounded-xl border bg-white px-4 py-3 text-sm font-medium text-[var(--color-deep-plum)]"
                                    style={{
                                        borderColor:
                                            "var(--color-lavender-border)",
                                    }}
                                >
                                    {category}
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="mt-4 text-center text-sm text-[var(--color-muted-purple)]">
                        Don't see your category? Tell us what you create when you apply.
                    </p>
                </div>
            </section>

            <section
                data-navbar-theme="light"
                className="px-5 py-8 sm:px-8 md:py-12"
            >
                <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-brand-gradient p-8 text-white sm:p-12">
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                            For gift sellers
                        </p>

                        <h2 className="mt-3 font-display text-3xl md:text-4xl">
                            Sell your gifts. Reach more customers. Grow with Evivi.
                            <Heart
                                size={26}
                                fill="currentColor"
                                className="ml-1 inline align-middle text-[#ff8fa3]"
                                aria-hidden="true"
                            />
                        </h2>

                        <p className="mt-4 text-white/80">
                            If you sell flowers, hampers, chocolates, balloons
                            or Valentine gift packages, we're inviting selected
                            gift sellers to join Evivi early.
                        </p>
                    </div>

                    <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                        {sellerBenefits.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <li
                                    key={item.title}
                                    className={`rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm ${
                                        index === sellerBenefits.length - 1
                                            ? "sm:col-span-2"
                                            : ""
                                    }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#ff8fa3]">
                                            <Icon
                                                size={22}
                                                aria-hidden="true"
                                            />
                                        </span>

                                        <h3 className="text-lg font-medium">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-2 text-sm text-white/75">
                                        {item.copy}
                                    </p>
                                </li>
                            );
                        })}
                    </ul>

                    <div className="mt-10 flex items-start gap-4 rounded-2xl bg-white/10 p-5 sm:p-6">
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--color-vibrant-magenta)]">
                            <Sparkles
                                size={20}
                                aria-hidden="true"
                            />
                        </span>

                        <div>
                            <span className="font-medium">
                                Early sellers help shape Evivi.
                            </span>

                            <p className="mt-1 text-sm text-white/75">
                                Share feedback, suggest improvements and be part
                                of building the best way to buy and sell gifts.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section
                id="register"
                data-navbar-theme="light"
                className="px-5 py-16 sm:px-8 md:py-24"
            >
                <div className="mx-auto max-w-3xl">
                    <div className="mx-auto max-w-xl text-center">
                        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-vibrant-magenta)]">
                            Ready to join Evivi?
                        </p>

                        <h2 className="mt-2 font-display text-3xl font-bold text-[var(--color-deep-plum)] md:text-4xl">
                            Your next customer could be looking for exactly what you create.
                        </h2>

                        <p className="mt-3 text-[var(--color-muted-purple)]">
                            Join the early Evivi seller network and help us shape
                            the future of celebration.
                        </p>
                    </div>

                    <div
                        className="mt-10 rounded-[24px] border bg-white p-6 md:p-8"
                        style={{
                            borderColor:
                                "var(--color-lavender-border)",
                        }}
                    >
                        <h3 className="mb-6 font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                            Tell us about your business
                        </h3>

                        <SellerRegistrationForm />
                    </div>

                    <p className="mx-auto mt-4 max-w-2xl text-center text-xs text-[var(--color-muted-purple)]">
                        Submitting an application does not automatically
                        guarantee marketplace approval or placement.
                    </p>
                </div>
            </section>
        </>
    );
}