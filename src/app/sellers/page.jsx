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

// export const metadata = {
//     title: "Sell Your Gifts on Evivi | Grow Your Business",
//     description:
//         "List your flowers, hampers, chocolates and Valentine gift packages on Evivi.",
// };

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
    return (
        <Field label={label} required={required}>
            <div className="relative">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    required={required}
                    disabled={disabled}
                    className="w-full appearance-none rounded-xl border bg-white px-4 py-3 pr-10 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400"
                    style={{
                        borderColor:
                            "var(--color-lavender-border)",
                    }}
                >
                    <option value="">{placeholder}</option>

                    {options.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>

                <ChevronDown
                    size={17}
                    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--color-muted-purple)]"
                    aria-hidden="true"
                />
            </div>
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

        // Connect this to the real seller registration endpoint later.
        setStep(2);
    };

    const availableCities = form.province
        ? provincesAndCities[form.province] || []
        : [];

    if (step === 2) {
        return (
            <div className="flex flex-col items-center py-10 text-center">
                <span
                    className="mb-4 flex h-14 w-14 items-center justify-center rounded-full"
                    style={{
                        background:
                            "var(--color-success)",
                    }}
                >
                    <Check
                        size={24}
                        color="#fff"
                        strokeWidth={3}
                    />
                </span>

                <h4 className="font-display text-xl font-semibold text-[var(--color-deep-plum)]">
                    You're on the list
                </h4>

                <p className="mt-2 max-w-[340px] text-sm text-[var(--color-muted-purple)]">
                    Thanks for applying to sell on Evivi. We'll be in touch with
                    next steps as launch gets closer.
                </p>

                <button
                    type="button"
                    onClick={() => {
                        setForm(initialForm);
                        setStep(1);
                    }}
                    className="btn-secondary mt-6"
                >
                    Submit another response
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-6"
        >
            <div className="grid gap-5 sm:grid-cols-2">
                <Field
                    label="Business name"
                    required
                >
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

                <Field
                    label="Contact name"
                    required
                >
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
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
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
                    options={Object.keys(
                        provincesAndCities
                    )}
                    placeholder="Select province"
                    required
                />
            </div>

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

            <label className="flex items-start gap-3">
                <input
                    type="checkbox"
                    checked={form.acceptsTerms}
                    onChange={updateInput("acceptsTerms")}
                    required
                    className="mt-1 h-4 w-4 accent-[var(--color-vibrant-magenta)]"
                />

                <span className="text-sm leading-relaxed text-[var(--color-muted-purple)]">
                    I confirm that the information provided is
                    accurate and I would like to be considered
                    for selling on Evivi.
                </span>
            </label>

            <button
                type="submit"
                className="btn-primary w-full"
            >
                Apply to Sell on Evivi
            </button>
        </form>
    );
}

export default function SellersPage() {
    return (
        <>
            <section
                id="hero"
                className="relative flex min-h-[80vh] items-center overflow-hidden text-white"
            >
                <Image
                    src="/images/seller-hero.jpg"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover hero-bg-bounce"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-deep-plum)]/90 via-[var(--color-deep-plum)]/50 to-[var(--color-deep-plum)]/20" />

                <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/70">
                        How to sell on Evivi
                    </p>

                    <h1 className="mt-2 max-w-xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl">
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
                    <div className="relative hidden h-[440px] lg:block">
                        <Image
                            src="/images/seller-craft.jpg"
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
                        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-soft">
                            <Image
                                src="/images/seller-gifts.jpg"
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