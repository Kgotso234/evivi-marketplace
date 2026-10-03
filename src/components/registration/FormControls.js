"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

// NEW: shared helper — outside-click-to-close for both dropdown components,
// so CustomSelect and MultiSelect don't each reimplement the same listener.
function useCloseOnOutsideClick(onClose) {
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onClose]);

    return ref;
}

export function Field({ label, children, required = false, error }) {
    return (
        <div className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--color-deep-plum)]">
                {label}
                {required && (
                    <span className="ml-1 text-[var(--color-vibrant-magenta)]">*</span>
                )}
            </span>

            {children}

            {/* NEW: per-field error message. RegistrationForm.jsx passes this
                in when a required field fails validation on submit, so a
                person actually sees why nothing happened instead of the
                form silently doing nothing. */}
            {error && (
                <p className="mt-1.5 text-sm text-[var(--color-vibrant-magenta)]">
                    {error}
                </p>
            )}
        </div>
    );
}

export function CustomSelect({
    id, // NEW: ties the button to its listbox via aria-labelledby
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    disabled = false,
    error = false, // NEW
}) {
    const [open, setOpen] = useState(false);
    const ref = useCloseOnOutsideClick(() => setOpen(false)); // NEW

    return (
        <div ref={ref} className="relative">
            <button
                id={id}
                type="button"
                disabled={disabled}
                aria-haspopup="listbox" // NEW
                aria-expanded={open} // NEW
                onClick={() => !disabled && setOpen((prev) => !prev)}
                className={`${inputClass} flex items-center justify-between text-left ${
                    disabled ? "cursor-not-allowed opacity-50" : ""
                }`}
                style={
                    error
                        ? { borderColor: "var(--color-vibrant-magenta)" } // NEW
                        : undefined
                }
            >
                <span className={value ? "" : "text-black/35"}>
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && !disabled && (
                <div
                    role="listbox" // NEW
                    aria-labelledby={id} // NEW
                    className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border bg-white p-1 shadow-xl"
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            role="option" // NEW
                            aria-selected={value === option} // NEW
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            // CHANGED: --color-soft-lilac is undefined in
                            // globals.css (only --color-warm-lilac exists),
                            // so hover state rendered transparent before this fix
                            className="flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm text-[var(--color-deep-plum)] hover:bg-[var(--color-warm-lilac)]"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}

export function MultiSelect({
    id, // NEW
    value = [],
    onChange,
    options = [],
    placeholder = "Select options",
    error = false, // NEW
}) {
    const [open, setOpen] = useState(false);
    const ref = useCloseOnOutsideClick(() => setOpen(false)); // NEW

    const toggle = (option) => {
        if (value.includes(option)) {
            onChange(value.filter((item) => item !== option));
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <div ref={ref} className="relative">
            <button
                id={id}
                type="button"
                aria-haspopup="listbox" // NEW
                aria-expanded={open} // NEW
                onClick={() => setOpen((prev) => !prev)}
                className={`${inputClass} flex min-h-[50px] items-center justify-between text-left`}
                style={
                    error
                        ? { borderColor: "var(--color-vibrant-magenta)" } // NEW
                        : undefined
                }
            >
                <div className="flex flex-wrap gap-2">
                    {value.length > 0 ? (
                        value.map((item) => (
                            <span
                                key={item}
                                // CHANGED: --color-soft-lilac → --color-warm-lilac
                                className="rounded-full bg-[var(--color-warm-lilac)] px-2.5 py-1 text-xs font-medium text-[var(--color-deep-plum)]"
                            >
                                {item}
                            </span>
                        ))
                    ) : (
                        <span className="text-black/35">{placeholder}</span>
                    )}
                </div>

                <ChevronDown
                    size={18}
                    className={`ml-3 shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {open && (
                <div
                    role="listbox" // NEW
                    aria-labelledby={id} // NEW
                    aria-multiselectable="true" // NEW
                    className="absolute z-20 mt-2 w-full rounded-xl border bg-white p-2 shadow-xl"
                >
                    {options.map((option) => {
                        const selected = value.includes(option);

                        return (
                            <button
                                key={option}
                                type="button"
                                role="option" // NEW
                                aria-selected={selected} // NEW
                                onClick={() => toggle(option)}
                                // CHANGED: --color-soft-lilac → --color-warm-lilac
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-[var(--color-deep-plum)] hover:bg-[var(--color-warm-lilac)]"
                            >
                                <span>{option}</span>

                                {selected && (
                                    <CheckCircle2
                                        size={17}
                                        className="text-[var(--color-vibrant-magenta)]"
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

// NEW: replaces a "select" dropdown for binary/short-choice questions
// (yes/no, yes/no/not-applicable). Used by data/registration.js fields
// with type: "radio" — offersDelivery, offersCollection, hasSmartphone,
// hasDriversLicence, hasVehicleLicence, verificationConsent.
export function RadioGroup({ id, value, onChange, options = [], error = false }) {
    return (
        <div id={id} role="radiogroup" className="flex flex-wrap gap-2">
            {options.map((option) => {
                const selected = value === option;

                return (
                    <button
                        key={option}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => onChange(option)}
                        className="min-w-[100px] flex-1 rounded-xl border px-4 py-3 text-sm font-medium transition-colors"
                        style={{
                            borderColor: error
                                ? "var(--color-vibrant-magenta)"
                                : selected
                                ? "var(--color-vibrant-magenta)"
                                : "var(--color-lavender-border, #E4D8F0)",
                            background: selected
                                ? "var(--color-vibrant-magenta)"
                                : "#fff",
                            color: selected ? "#fff" : "var(--color-deep-plum)",
                        }}
                    >
                        {option}
                    </button>
                );
            })}
        </div>
    );
}