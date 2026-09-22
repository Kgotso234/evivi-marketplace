"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown } from "lucide-react";

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

export function Field({ label, children, required = false }) {
    return (
        <div className="block">
            <span className="mb-2 block text-sm font-medium text-[var(--color-deep-plum)]">
                {label}

                {required && (
                    <span className="ml-1 text-[var(--color-vibrant-magenta)]">
                        *
                    </span>
                )}
            </span>

            {children}
        </div>
    );
}

export function CustomSelect({
    value,
    onChange,
    options = [],
    placeholder = "Select an option",
    disabled = false,
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen((prev) => !prev)}
                className={`${inputClass} flex items-center justify-between text-left ${
                    disabled ? "cursor-not-allowed opacity-50" : ""
                }`}
            >
                <span className={value ? "" : "text-black/35"}>
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {open && !disabled && (
                <div className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border bg-white p-1 shadow-xl">
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            onClick={() => {
                                onChange(option);
                                setOpen(false);
                            }}
                            className="flex w-full items-center rounded-lg px-3 py-2.5 text-left text-sm text-[var(--color-deep-plum)] hover:bg-[var(--color-soft-lilac)]"
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
    value = [],
    onChange,
    options = [],
    placeholder = "Select options",
}) {
    const [open, setOpen] = useState(false);

    const toggle = (option) => {
        if (value.includes(option)) {
            onChange(value.filter((item) => item !== option));
        } else {
            onChange([...value, option]);
        }
    };

    return (
        <div className="relative">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className={`${inputClass} flex min-h-[50px] items-center justify-between text-left`}
            >
                <div className="flex flex-wrap gap-2">
                    {value.length > 0 ? (
                        value.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-[var(--color-soft-lilac)] px-2.5 py-1 text-xs font-medium text-[var(--color-deep-plum)]"
                            >
                                {item}
                            </span>
                        ))
                    ) : (
                        <span className="text-black/35">
                            {placeholder}
                        </span>
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
                <div className="absolute z-20 mt-2 w-full rounded-xl border bg-white p-2 shadow-xl">
                    {options.map((option) => {
                        const selected = value.includes(option);

                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => toggle(option)}
                                className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-sm text-[var(--color-deep-plum)] hover:bg-[var(--color-soft-lilac)]"
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