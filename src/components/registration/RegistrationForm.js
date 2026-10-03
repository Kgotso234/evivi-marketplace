"use client";

import { useMemo, useState } from "react";
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
import {
    CheckCircle2,
    Loader2,
} from "lucide-react";
=======
import { ChevronRight, CheckCircle2, Loader2 } from "lucide-react";
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js

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
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
    inputClass,
} from "./FormControls";

function createInitialState(fields) {
    return fields.reduce((state, field) => {
        if (field.type === "multiselect") {
            state[field.name] = [];
        } else if (field.type === "checkbox") {
            state[field.name] = false;
        } else {
=======
    RadioGroup, // NEW
} from "./FormControls";

const OTHER_AREA = "My area isn't listed"; // NEW

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

function createInitialState(fields) {
    return fields.reduce((state, field) => {
        state[field.name] = field.type === "multiselect" ? [] : false;

        if (field.type !== "multiselect" && field.type !== "checkbox") {
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
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
    const [errors, setErrors] = useState({}); // NEW: per-field error map
    const [formError, setFormError] = useState(""); // NEW: top-level banner
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const update = (name, value) => {
        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));

        // NEW: clear that field's error as soon as the person fixes it
        setErrors((previous) => ({ ...previous, [name]: undefined }));
    };

    const availableOptions = (field) => {
        if (field.dependsOn === "province") {
            // NEW: always append a fallback so nobody is blocked by a
            // missing town/suburb in the province/city dataset
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

        // CHANGED: trims whitespace so " " doesn't count as a valid answer
        return Boolean(value && String(value).trim());
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // CHANGED: was `fields.every(isFieldValid)` with a silent early
        // return. Now builds a real error map so CustomSelect/MultiSelect/
        // RadioGroup fields (which are buttons, not native inputs, so HTML5
        // `required` never fires on them) actually tell the person what's
        // missing instead of doing nothing on click.
        const nextErrors = {};
        fields.forEach((field) => {
            if (!isFieldValid(field)) {
                nextErrors[field.name] = `${field.label.replace(/\?$/, "")} is required.`;
            }
        });

        if (Object.keys(nextErrors).length > 0) {
            setErrors(nextErrors);
            setFormError("Please complete the highlighted fields before submitting.");
            return;
        }

        setFormError("");
        setIsSubmitting(true);

        try {
            // CHANGED: was a fake `setTimeout`. Now a real submission.
            // TODO: confirm/adjust this endpoint once the backend exists —
            // `role` is included so one endpoint can route buyer / seller /
            // delivery / planner / supplier submissions differently if needed.
            const response = await fetch("/api/registrations", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ role, ...form }),
            });

            if (!response.ok) throw new Error("Request failed");

            setSubmitted(true);
            window.scrollTo({ top: 0, behavior: "smooth" });
        } catch {
            // NEW: submission failures now show something instead of
            // failing silently or throwing an unhandled promise rejection
            setFormError("Something went wrong submitting your application. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setForm(createInitialState(fields));
        setErrors({});
        setFormError("");
        setSubmitted(false);
    };

    if (submitted) {
        return (
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
            <div className="w-full">
                <div className="max-w-2xl">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-soft-lilac)]">
=======
            <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
                <div className="mx-auto max-w-2xl text-center">
                    {/* CHANGED: --color-soft-lilac → --color-warm-lilac (undefined var) */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-warm-lilac)]">
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
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

                    <p className="mt-4 max-w-xl text-base leading-7 text-black/60">
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
        <div className="w-full">
            <div className="mb-10">
                <h2 className="font-display text-2xl font-bold text-[var(--color-deep-plum)] sm:text-3xl">
                    {config.heading}
                </h2>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-black/55">
                    {config.description}
                </p>
            </div>

<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
=======
            {/* NEW: top-level error banner — matches the pattern already
                used on the standalone Delivery Partner page's form */}
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
                <div className="space-y-5">
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                    {fields.map((field) => {
                        const options = availableOptions(field);
                        const error = errors[field.name]; // NEW

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
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                        className="mt-1 h-5 w-5 rounded border-[#C9D4E5] text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
                                        required={field.required}
=======
                                        className="mt-1 h-4 w-4 rounded border-gray-300 text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                                    />

                                    <span className="text-sm leading-6 text-black/60">
                                        {field.label}
                                    </span>
                                </label>
                            );
                        }

                        // NEW: renders type: "radio" fields from
                        // data/registration.js (offersDelivery,
                        // offersCollection, hasSmartphone, hasDriversLicence,
                        // hasVehicleLicence, verificationConsent)
                        if (field.type === "radio") {
                            return (
                                <Field
                                    key={field.name}
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
                            );
                        }

                        if (field.type === "select") {
                            return (
                                <Field
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                    error={error} // NEW
                                >
                                    <CustomSelect
                                        id={field.name} // NEW
                                        value={form[field.name]}
                                        onChange={(value) => {
                                            update(field.name, value);

                                            if (field.name === "province") {
                                                update("city", "");
                                            }
                                        }}
                                        options={options}
                                        disabled={
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                            Boolean(
                                                field.dependsOn
                                            ) &&
                                            !form[field.dependsOn]
=======
                                            field.dependsOn && !form[field.dependsOn]
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                                        }
                                        error={Boolean(error)} // NEW
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
                                    error={error} // NEW
                                >
                                    <MultiSelect
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                        value={form[field.name]}
                                        onChange={(value) =>
                                            update(
                                                field.name,
                                                value
                                            )
                                        }
=======
                                        id={field.name} // NEW
                                        value={form[field.name]}
                                        onChange={(value) => update(field.name, value)}
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                                        options={options}
                                        error={Boolean(error)} // NEW
                                        placeholder={`Select ${field.label.toLowerCase()}`}
                                    />
                                </Field>
                            );
                        }

                        if (field.type === "textarea") {
                            return (
                                <div
                                    key={field.name}
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                    className="md:col-span-2"
                                >
                                    <Field
                                        label={field.label}
                                        required={
                                            field.required
                                        }
                                    >
                                        <textarea
                                            value={
                                                form[field.name]
                                            }
                                            onChange={(event) =>
                                                update(
                                                    field.name,
                                                    event.target.value
                                                )
                                            }
                                            rows={5}
                                            className={`${inputClass} resize-none`}
                                            required={
                                                field.required
                                            }
                                            placeholder={
                                                field.placeholder ||
                                                ""
                                            }
                                        />
                                    </Field>
                                </div>
=======
                                    label={field.label}
                                    required={field.required}
                                    error={error} // NEW
                                >
                                    <textarea
                                        value={form[field.name]}
                                        onChange={(event) =>
                                            update(field.name, event.target.value)
                                        }
                                        rows={4}
                                        className={`${inputClass} resize-none`}
                                        style={
                                            error
                                                ? { borderColor: "var(--color-vibrant-magenta)" } // NEW
                                                : undefined
                                        }
                                    />
                                </Field>
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                            );
                        }

                        return (
                            <Field
                                key={field.name}
                                label={field.label}
                                required={field.required}
                                error={error} // NEW
                            >
                                <input
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                    type={field.type}
=======
                                    type={
                                        field.type === "tel"
                                            ? "tel"
                                            : field.type === "url"
                                            ? "url"
                                            : field.type
                                    }
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                                    value={form[field.name]}
                                    onChange={(event) =>
                                        update(field.name, event.target.value)
                                    }
                                    className={inputClass}
<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                                    required={field.required}
                                    placeholder={
                                        field.placeholder || ""
=======
                                    style={
                                        error
                                            ? { borderColor: "var(--color-vibrant-magenta)" } // NEW
                                            : undefined
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
                                    }
                                />
                            </Field>
                        );
                    })}
                </div>

<<<<<<< HEAD:src/components/registration/RegistrationForm.jsx
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center justify-center rounded-lg bg-[var(--color-deep-plum)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                        {isSubmitting ? (
                            <>
                                <Loader2
                                    size={18}
                                    className="mr-2 animate-spin"
                                />
                                Submitting...
                            </>
                        ) : (
                            config.submitLabel
                        )}
                    </button>
                </div>
=======
                {/* CHANGED: flat bg-[var(--color-deep-plum)] → the shared
                    .btn-primary gradient used by every other CTA on the site */}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary mt-8 flex w-full items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-60"
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
>>>>>>> dedbfd8 (refactor: centralize content, fix prelaunch copy, align Seller & Delivery forms):src/components/registration/RegistrationForm.js
            </form>
        </div>
    );
}