import Link from "next/link";

/**
 * variant="banner" -> full-bleed gradient card (Valentine feature strip)
 * variant="plain"  -> soft lilac card, centered text (closing CTA)
 */
export default function CTASection({
    eyebrow,
    heading,
    subtext,
    buttonLabel,
    buttonHref,
    variant = "banner",
}) {
    if (variant === "banner") {
        return (
            <section className="mx-auto max-w-[1280px] px-5 md:px-8">
                <div className="evivi-gradient rounded-[var(--radius-card)] px-6 py-8 md:px-10 md:py-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-white">
                    <div>
                        {eyebrow && (
                            <p className="text-sm uppercase tracking-wide text-white/70 mb-2">
                                {eyebrow}
                            </p>
                        )}
                        <h3 className="font-display text-2xl md:text-3xl">{heading}</h3>
                        {subtext && (
                            <p className="text-white/80 mt-2 max-w-md">{subtext}</p>
                        )}
                    </div>
                    <Link
                        href={buttonHref}
                        className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-medium text-[var(--color-vibrant-magenta)] transition-transform hover:-translate-y-0.5 shrink-0"
                    >
                        {buttonLabel}
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="mx-auto max-w-[1280px] px-5 md:px-8">
            <div className="bg-soft-gradient rounded-[var(--radius-card)] px-6 py-12 text-center">
                <h3 className="font-display text-2xl md:text-3xl text-[var(--color-deep-plum)] mb-4">
                    {heading}
                </h3>
                {subtext && (
                    <p className="text-[var(--color-muted-purple)] mb-6 max-w-lg mx-auto">
                        {subtext}
                    </p>
                )}
                <Link href={buttonHref} className="btn-primary">
                    {buttonLabel}
                </Link>
            </div>
        </section>
    );
}