"use client";

import { useMemo, useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Loader2,
} from "lucide-react";

import Field from "./Field";
import CustomSelect from "./CustomSelect";
import MultiSelect from "./MultiSelect";

import {
    PROVINCES_AND_CITIES,
    SELLER_BUSINESS_TYPES,
    SELLER_BUSINESS_CATEGORIES,
} from "@/data/registration";

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

const initialForm = {
    businessName: "",
    contactName: "",
    email: "",
    phone: "",
    businessType: "",
    province: "",
    city: "",
    categories: [],
    description: "",
    website: "",
    instagram: "",
    agree: false,
};

export default function SellerRegistrationForm() {
    const [step, setStep] = useState(1);
    const [form, setForm] = useState(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const update = (field, value) => {
        setForm((prev) => ({
            ...prev,
            [field]: value,
        }));
    };

    const availableCities = useMemo(() => {
        return form.province
            ? PROVINCES_AND_CITIES[form.province] || []
            : [];
    }, [form.province]);

    const goToStepTwo = (event) => {
        event.preventDefault();

        if (
            !form.businessName ||
            !form.contactName ||
            !form.email ||
            !form.phone
        ) {
            return;
        }

        setStep(2);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (
            !form.businessType ||
            !form.province ||
            !form.city ||
            form.categories.length === 0 ||
            !form.agree
        ) {
            return;
        }

        setIsSubmitting(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 700)
        );

        setIsSubmitting(false);
        setStep(3);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const resetForm = () => {
        setForm(initialForm);
        setStep(1);
    };

    /*
     * STEP 3
     * Success state
     */
    if (step === 3) {
        return (
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-soft-lilac)]">
                        <CheckCircle2
                            size={34}
                            className="text-[var(--color-vibrant-magenta)]"
                        />
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-vibrant-magenta)]">
                        Registration received
                    </p>

                    <h2 className="font-display text-3xl font-bold text-[var(--color-deep-plum)] sm:text-4xl">
                        You&apos;re on the list!
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-black/60">
                        Thanks for registering your business with Evivi.
                        We&apos;ll keep you updated as we prepare the
                        marketplace for launch.
                    </p>

                    <div className="mt-8 rounded-2xl bg-[var(--color-soft-lilac)] p-6 text-left">
                        <h3 className="text-base font-semibold text-[var(--color-deep-plum)]">
                            What happens next
                        </h3>

                        <div className="mt-4 space-y-4">
                            <div className="flex gap-3">
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0 text-[var(--color-vibrant-magenta)]"
                                />

                                <p className="text-sm leading-6 text-black/65">
                                    We&apos;ll review the information you
                                    submitted.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0 text-[var(--color-vibrant-magenta)]"
                                />

                                <p className="text-sm leading-6 text-black/65">
                                    We&apos;ll keep you informed about
                                    important seller updates.
                                </p>
                            </div>

                            <div className="flex gap-3">
                                <CheckCircle2
                                    size={20}
                                    className="mt-0.5 shrink-0 text-[var(--color-vibrant-magenta)]"
                                />

                                <p className="text-sm leading-6 text-black/65">
                                    You&apos;ll hear from us as Evivi gets
                                    closer to launch.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        type="button"
                        onClick={resetForm}
                        className="mt-8 text-sm font-semibold text-[var(--color-vibrant-magenta)] transition hover:opacity-80"
                    >
                        Register another business
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Progress */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[var(--color-deep-plum)]">
                        Step {step} of 2
                    </span>

                    <span className="text-sm text-black/45">
                        {step === 1
                            ? "Business details"
                            : "Seller details"}
                    </span>
                </div>

                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-[var(--color-soft-lilac)]">
                    <div
                        className="h-full rounded-full bg-[var(--color-vibrant-magenta)] transition-all duration-300"
                        style={{
                            width: step === 1 ? "50%" : "100%",
                        }}
                    />
                </div>
            </div>

            {step === 1 && (
                <form onSubmit={goToStepTwo}>
                    <div className="mb-8">
                        <h2 className="font-display text-2xl font-bold text-[var(--color-deep-plum)]">
                            Tell us about your business
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-black/55">
                            Start with your basic business and contact
                            details.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <Field
                            label="Business name"
                            required
                        >
                            <input
                                type="text"
                                value={form.businessName}
                                onChange={(event) =>
                                    update(
                                        "businessName",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="Enter your business name"
                                required
                            />
                        </Field>

                        <Field
                            label="Contact name"
                            required
                        >
                            <input
                                type="text"
                                value={form.contactName}
                                onChange={(event) =>
                                    update(
                                        "contactName",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="Enter your full name"
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
                                onChange={(event) =>
                                    update(
                                        "email",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="you@example.com"
                                required
                            />
                        </Field>

                        <Field
                            label="Phone number"
                            required
                        >
                            <input
                                type="tel"
                                value={form.phone}
                                onChange={(event) =>
                                    update(
                                        "phone",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="Enter your phone number"
                                required
                            />
                        </Field>
                    </div>

                    <button
                        type="submit"
                        className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-deep-plum)] px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                    >
                        Continue
                        <ArrowRight size={18} />
                    </button>
                </form>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit}>
                    <div className="mb-8">
                        <h2 className="font-display text-2xl font-bold text-[var(--color-deep-plum)]">
                            Tell us more about what you sell
                        </h2>

                        <p className="mt-2 text-sm leading-6 text-black/55">
                            These details help us understand your business
                            and what you offer.
                        </p>
                    </div>

                    <div className="space-y-5">
                        <Field
                            label="Business type"
                            required
                        >
                            <CustomSelect
                                value={form.businessType}
                                onChange={(value) =>
                                    update(
                                        "businessType",
                                        value
                                    )
                                }
                                options={SELLER_BUSINESS_TYPES}
                                placeholder="Select business type"
                            />
                        </Field>

                        <Field
                            label="Province"
                            required
                        >
                            <CustomSelect
                                value={form.province}
                                onChange={(value) => {
                                    update("province", value);
                                    update("city", "");
                                }}
                                options={Object.keys(
                                    PROVINCES_AND_CITIES
                                )}
                                placeholder="Select province"
                            />
                        </Field>

                        <Field
                            label="City"
                            required
                        >
                            <CustomSelect
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
                                disabled={!form.province}
                            />
                        </Field>

                        <Field
                            label="What do you sell?"
                            required
                        >
                            <MultiSelect
                                value={form.categories}
                                onChange={(value) =>
                                    update(
                                        "categories",
                                        value
                                    )
                                }
                                options={
                                    SELLER_BUSINESS_CATEGORIES
                                }
                                placeholder="Select your categories"
                            />
                        </Field>

                        <Field label="Short business description">
                            <textarea
                                value={form.description}
                                onChange={(event) =>
                                    update(
                                        "description",
                                        event.target.value
                                    )
                                }
                                rows={4}
                                className={`${inputClass} resize-none`}
                                placeholder="Tell us a little about your business and what you offer."
                            />
                        </Field>

                        <Field label="Website">
                            <input
                                type="url"
                                value={form.website}
                                onChange={(event) =>
                                    update(
                                        "website",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="https://yourwebsite.com"
                            />
                        </Field>

                        <Field label="Instagram">
                            <input
                                type="text"
                                value={form.instagram}
                                onChange={(event) =>
                                    update(
                                        "instagram",
                                        event.target.value
                                    )
                                }
                                className={inputClass}
                                placeholder="@yourbusiness"
                            />
                        </Field>

                        <label className="flex items-start gap-3 pt-2">
                            <input
                                type="checkbox"
                                checked={form.agree}
                                onChange={(event) =>
                                    update(
                                        "agree",
                                        event.target.checked
                                    )
                                }
                                className="mt-1 h-4 w-4 rounded border-gray-300 text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
                                required
                            />

                            <span className="text-sm leading-6 text-black/60">
                                I agree to the Evivi terms and privacy
                                policy.
                            </span>
                        </label>
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            type="button"
                            onClick={() => setStep(1)}
                            disabled={isSubmitting}
                            className="w-full rounded-xl border border-black/10 px-5 py-3.5 text-sm font-semibold text-[var(--color-deep-plum)] transition hover:bg-black/[0.02] disabled:opacity-50"
                        >
                            Back
                        </button>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[var(--color-deep-plum)] px-5 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2
                                        size={18}
                                        className="animate-spin"
                                    />
                                    Submitting...
                                </>
                            ) : (
                                <>
                                    Join as a Seller
                                    <ArrowRight size={18} />
                                </>
                            )}
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
}