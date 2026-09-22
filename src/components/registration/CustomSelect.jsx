"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const inputClass =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[var(--color-deep-plum)] outline-none transition focus:border-[var(--color-vibrant-magenta)] focus:ring-2 focus:ring-[var(--color-vibrant-magenta)]/10";

export default function CustomSelect({
    value = "",
    onChange,
    options = [],
    placeholder = "Select an option",
    disabled = false,
}) {
    const [open, setOpen] = useState(false);

    const selectOption = (option) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <div className="relative">
            <button
                type="button"
                disabled={disabled}
                onClick={() => setOpen((prev) => !prev)}
                className={`${inputClass} flex items-center justify-between text-left ${
                    disabled ? "cursor-not-allowed opacity-50" : ""
                }`}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                <span className={value ? "" : "text-black/35"}>
                    {value || placeholder}
                </span>

                <ChevronDown
                    size={18}
                    className={`shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                    }`}
                />
            </button>

            {open && !disabled && (
                <div
                    className="absolute z-20 mt-2 max-h-60 w-full overflow-auto rounded-xl border bg-white p-1 shadow-xl"
                    role="listbox"
                >
                    {options.map((option) => (
                        <button
                            key={option}
                            type="button"
                            role="option"
                            aria-selected={value === option}
                            onClick={() => selectOption(option)}
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