"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronRight, CheckCircle2, Loader2 } from "lucide-react";

import { ROUTES } from "@/constants/copy";
import {
    SHARED_FIELDS,
    ROLE_FIELDS,
    ROLE_CONFIG,
    PROVINCES_AND_CITIES,
} from "@/data/registration";

import {
    Field,
    CustomSelect,
    MultiSelect,
    RadioGroup,
} from "./FormControls";

const OTHER_AREA = "My area isn't listed";

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

function createInitialState(fields) {
    return fields.reduce((state, field) => {
        state[field.name] = field.type === "multiselect" ? [] : false;

        if (field.type !== "multiselect" && field.type !== "checkbox") {
            state[field.name] = "";
        }

        return state;
    }, {});
}

export default function RegistrationForm({ role }) {
    const config = ROLE_CONFIG[role];
    const roleFields = ROLE_FIELDS[role] || [];

    const fields = useMemo(
        () => [...SHARED_FIELDS, ...roleFields],
        [roleFields]
    );

    const [form, setForm] = useState(() => createInitialState(fields));
    const [errors, setErrors] = useState({});
    const [formError, setFormError] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    // Terms & Conditions consent
    const [acceptedTerms, setAcceptedTerms] = useState(false);
    const [termsError, setTermsError] = useState(false);

    const update = (name, value) => {
        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        setErrors((previous) => ({ ...previous, [name]: undefined }));
    };

    const availableOptions = (field) => {
        if (field.dependsOn === "province") {
            return form.province
                ? [...(PROVINCES_AND_CITIES[form.province] || []), OTHER_AREA]
                : [];
        }

        return field.options || [];
    };

    const isFieldValid = (field) => {
        const value = form[field.name];

        if (!field.required) {
            return true;
        }

        if (field.type === "checkbox") {
            return value === true;
        }

        if (field.type === "multiselect") {
            return Array.isArray(value) && value.length > 0;
        }

        return Boolean(value && String(value).trim());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const nextErrors = {};
        fields.forEach((field) => {
            if (!isFieldValid(field)) {
                nextErrors[field.name] = `${field.label.replace(/\?$/, "")} is required.`;
            }
        });

        const termsMissing = !acceptedTerms;

        if (Object.keys(nextErrors).length > 0 || termsMissing) {
            setErrors(nextErrors);
            setTermsError(termsMissing);
            setFormError("Please complete the highlighted fields before submitting.");
            return;
        }

        setTermsError(false);
        setFormError("");
        setIsSubmitting(true);

        try {
            // TODO: confirm/adjust this endpoint once the backend exists —
            // `role` is included so one endpoint can route buyer / seller /
            // delivery / planner / supplier submissions differently if needed.
            // The server should reject submissions where acceptedTerms !== true
            // and set its own acceptance timestamp.
            const response = await fetch("/api/registrations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    role,
                    ...form,
                    acceptedTerms: true,
                    termsAcceptedAt: new Date().toISOString(),
                }),
            });

            if (!response.ok) throw new Error("Request failed");

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            setFormError("Something went wrong submitting your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setForm(createInitialState(fields));
        setErrors({});
        setFormError("");
        setAcceptedTerms(false);
        setTermsError(false);
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-warm-lilac)]">
                        <CheckCircle2
                            size={34}
                            className="text-[var(--color-vibrant-magenta)]"
                        />
                    </div>

                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-[var(--color-vibrant-magenta)]">
                        Registration received
                    </p>

                    <h2 className="font-display text-3xl font-bold text-[var(--color-deep-plum)] sm:text-4xl">
                        {config.successTitle}
                    </h2>

                    <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-black/60">
                        {config.successMessage}
                    </p>

                    <button
                        type="button"
                        onClick={resetForm}
                        className="mt-8 text-sm font-semibold text-[var(--color-vibrant-magenta)] transition hover:opacity-80"
                    >
                        Register another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="mb-8">
                <h2 className="font-display text-2xl font-bold text-[var(--color-deep-plum)]">
                    {config.heading}
                </h2>

                <p className="mt-2 text-sm leading-6 text-black/55">
                    {config.description}
                </p>
            </div>

            {formError && (
                <div
                    role="alert"
                    className="mb-6 rounded-xl border px-4 py-3 text-sm"
                    style={{
                        borderColor: "var(--color-vibrant-magenta)",
                        background: "#FFF5F9",
                        color: "var(--color-vibrant-magenta)",
                    }}
                >
                    {formError}
                </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                    {fields.map((field) => {
                        const options = availableOptions(field);
                        const error = errors[field.name];

                        if (field.type === "checkbox") {
                            return (
                                <label
                                    key={field.name}
                                    className="flex items-start gap-3 pt-2 md:col-span-2"
                                >
                                    <input
                                        type="checkbox"
                                        checked={Boolean(form[field.name])}
                                        onChange={(event) =>
                                            update(field.name, event.target.checked)
                                        }
                                        className="mt-1 h-5 w-5 rounded border-[#C9D4E5] text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
                                    />

                                    <span className="text-sm leading-6 text-black/60">
                                        {field.label}
                                    </span>
                                </label>
                            );
                        }

                        if (field.type === "radio") {
                            return (
                                <div key={field.name} className="md:col-span-2">
                                    <Field
                                        label={field.label}
                                        required={field.required}
                                        error={error}
                                    >
                                        <RadioGroup
                                            id={field.name}
                                            value={form[field.name]}
                                            onChange={(value) => update(field.name, value)}
                                            options={field.options}
                                            error={Boolean(error)}
                                        />
                                    </Field>
                                </div>
                            );
                        }

                        if (field.type === "select") {
                            return (
                                <Field
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                    error={error}
                                >
                                    <CustomSelect
                                        id={field.name}
                                        value={form[field.name]}
                                        onChange={(value) => {
                                            update(field.name, value);

                                            if (field.name === "province") {
                                                update("city", "");
                                            }
                                        }}
                                        options={options}
                                        disabled={
                                            Boolean(field.dependsOn) &&
                                            !form[field.dependsOn]
                                        }
                                        error={Boolean(error)}
                                        placeholder={
                                            field.dependsOn && !form[field.dependsOn]
                                                ? "Select province first"
                                                : `Select ${field.label.toLowerCase()}`
                                        }
                                    />
                                </Field>
                            );
                        }

                        if (field.type === "multiselect") {
                            return (
                                <Field
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                    error={error}
                                >
                                    <MultiSelect
                                        id={field.name}
                                        value={form[field.name]}
                                        onChange={(value) => update(field.name, value)}
                                        options={options}
                                        error={Boolean(error)}
                                        placeholder={`Select ${field.label.toLowerCase()}`}
                                    />
                                </Field>
                            );
                        }

                        if (field.type === "textarea") {
                            return (
                                <div key={field.name} className="md:col-span-2">
                                    <Field
                                        label={field.label}
                                        required={field.required}
                                        error={error}
                                    >
                                        <textarea
                                            value={form[field.name]}
                                            onChange={(event) =>
                                                update(field.name, event.target.value)
                                            }
                                            rows={5}
                                            className={`${inputClass} resize-none`}
                                            placeholder={field.placeholder || ""}
                                            style={
                                                error
                                                    ? { borderColor: "var(--color-vibrant-magenta)" }
                                                    : undefined
                                            }
                                        />
                                    </Field>
                                </div>
                            );
                        }

                        return (
                            <Field
                                key={field.name}
                                label={field.label}
                                required={field.required}
                                error={error}
                            >
                                <input
                                    type={
                                        field.type === "tel"
                                            ? "tel"
                                            : field.type === "url"
                                            ? "url"
                                            : field.type
                                    }
                                    value={form[field.name]}
                                    onChange={(event) =>
                                        update(field.name, event.target.value)
                                    }
                                    className={inputClass}
                                    placeholder={field.placeholder || ""}
                                    style={
                                        error
                                            ? { borderColor: "var(--color-vibrant-magenta)" }
                                            : undefined
                                    }
                                />
                            </Field>
                        );
                    })}
                </div>

                {/* Terms & Conditions */}
                <div className="mt-8">
                    <label className="flex items-start gap-3">
                        <input
                            type="checkbox"
                            checked={acceptedTerms}
                            onChange={(event) => {
                                setAcceptedTerms(event.target.checked);
                                if (event.target.checked) setTermsError(false);
                            }}
                            aria-invalid={termsError}
                            aria-describedby={termsError ? "terms-error" : undefined}
                            className="mt-1 h-5 w-5 shrink-0 rounded border-[#C9D4E5] text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
                        />

                        <span className="text-sm leading-6 text-black/60">
                            I have read and agree to the{" "}
                            <Link
                                href={ROUTES.terms}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="font-semibold text-[var(--color-vibrant-magenta)] underline underline-offset-2 hover:opacity-80"
                            >
                                Terms &amp; Conditions
                            </Link>
                            .
                        </span>
                    </label>

                    {termsError && (
                        <p
                            id="terms-error"
                            role="alert"
                            className="mt-2 text-sm text-[var(--color-vibrant-magenta)]"
                        >
                            You need to accept the Terms &amp; Conditions to continue.
                        </p>
                    )}
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-6 flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60 md:w-auto"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 size={18} className="animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        <>
                            {config.submitLabel}
                            <ChevronRight size={18} />
                        </>
                    )}
                </button>
            </form>
        </div>
    );
}