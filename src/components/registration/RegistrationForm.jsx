"use client";

import { useMemo, useState } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Loader2,
} from "lucide-react";

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
    inputClass,
} from "./FormControls";

function createInitialState(fields) {
    return fields.reduce((state, field) => {
        if (field.type === "multiselect") {
            state[field.name] = [];
        } else if (field.type === "checkbox") {
            state[field.name] = false;
        } else {
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

    const [form, setForm] = useState(() =>
        createInitialState(fields)
    );

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const update = (name, value) => {
        setForm((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const availableOptions = (field) => {
        if (field.dependsOn === "province") {
            return form.province
                ? PROVINCES_AND_CITIES[form.province] || []
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

        return Boolean(value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const valid = fields.every(isFieldValid);

        if (!valid) {
            return;
        }

        setIsSubmitting(true);

        await new Promise((resolve) =>
            setTimeout(resolve, 700)
        );

        setIsSubmitting(false);
        setSubmitted(true);

        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const resetForm = () => {
        setForm(createInitialState(fields));
        setSubmitted(false);
    };

    if (submitted) {
        return (
            <div className="w-full">
                <div className="max-w-2xl">
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[var(--color-soft-lilac)]">
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

            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
                    {fields.map((field) => {
                        const options = availableOptions(field);

                        if (field.type === "checkbox") {
                            return (
                                <label
                                    key={field.name}
                                    className="flex items-start gap-3 pt-2 md:col-span-2"
                                >
                                    <input
                                        type="checkbox"
                                        checked={Boolean(
                                            form[field.name]
                                        )}
                                        onChange={(event) =>
                                            update(
                                                field.name,
                                                event.target.checked
                                            )
                                        }
                                        className="mt-1 h-5 w-5 rounded border-[#C9D4E5] text-[var(--color-vibrant-magenta)] focus:ring-[var(--color-vibrant-magenta)]"
                                        required={field.required}
                                    />

                                    <span className="text-sm leading-6 text-black/60">
                                        {field.label}
                                    </span>
                                </label>
                            );
                        }

                        if (field.type === "select") {
                            return (
                                <Field
                                    key={field.name}
                                    label={field.label}
                                    required={field.required}
                                >
                                    <CustomSelect
                                        value={form[field.name]}
                                        onChange={(value) => {
                                            update(
                                                field.name,
                                                value
                                            );

                                            if (
                                                field.name ===
                                                "province"
                                            ) {
                                                update(
                                                    "city",
                                                    ""
                                                );
                                            }
                                        }}
                                        options={options}
                                        disabled={
                                            Boolean(
                                                field.dependsOn
                                            ) &&
                                            !form[field.dependsOn]
                                        }
                                        placeholder={
                                            field.dependsOn &&
                                            !form[field.dependsOn]
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
                                >
                                    <MultiSelect
                                        value={
                                            form[field.name]
                                        }
                                        onChange={(value) =>
                                            update(
                                                field.name,
                                                value
                                            )
                                        }
                                        options={options}
                                        placeholder={`Select ${field.label.toLowerCase()}`}
                                    />
                                </Field>
                            );
                        }

                        if (field.type === "textarea") {
                            return (
                                <div
                                    key={field.name}
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
                            );
                        }

                        return (
                            <Field
                                key={field.name}
                                label={field.label}
                                required={field.required}
                            >
                                <input
                                    type={field.type}
                                    value={form[field.name]}
                                    onChange={(event) =>
                                        update(
                                            field.name,
                                            event.target.value
                                        )
                                    }
                                    className={inputClass}
                                    required={field.required}
                                    placeholder={
                                        field.placeholder || ""
                                    }
                                />
                            </Field>
                        );
                    })}
                </div>

                <div className="mt-8">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--color-deep-plum)] px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
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
                                {config.submitLabel}
                                <ArrowRight size={18} />
                            </>
                        )}
                    </button>
                </div>
            </form>
        </div>
    );
}