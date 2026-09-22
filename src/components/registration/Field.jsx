export default function Field({
    label,
    children,
    required = false,
}) {
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