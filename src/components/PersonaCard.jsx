import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PersonaCard({ title, description, href, icon: Icon, accent }) {
    return (
        <Link
            href={href}
            className="group flex flex-col justify-between rounded-[var(--radius-card)] border p-5 h-full bg-white transition-transform hover:-translate-y-1"
            style={{ borderColor: "var(--color-lavender-border)" }}
        >
            <div>
                <div
                    className="mb-4 flex h-11 w-11 items-center justify-center rounded-full"
                    style={{ background: `${accent}1A`, color: accent }}
                >
                    {Icon && <Icon size={20} />}
                </div>
                <h4 className="font-display text-lg text-[var(--color-deep-plum)] mb-1">
                    {title}
                </h4>
                <p className="text-sm text-[var(--color-muted-purple)]">{description}</p>
            </div>
            <span
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium"
                style={{ color: accent }}
            >
                Learn more
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </span>
        </Link>
    );
}