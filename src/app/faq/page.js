import Link from "next/link";
import { getIcon } from "@/data/icons";
import { CONTENT } from "@/data/content";
import { ROUTES } from "@/constants/copy";

const c = CONTENT.faq;

export const metadata = {
    title: "FAQs - Evivi",
    description: "Answers to common questions about Evivi — what it is, when it launches, and how buyers, sellers and partners can get involved.",
};

export default function FaqPage() {
    const Plus = getIcon("Plus");

    return (
        <>
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">Support</p>
                    <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-plum-deep">{c.heading}</h1>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">{c.intro}</p>
                </div>
            </section>

            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-6xl space-y-16">
                    {c.groups.map((group) => (
                        <div key={group.title}>
                            <div className="mb-5">
                                <h2 className="font-display text-2xl font-semibold text-plum-deep md:text-3xl">{group.title}</h2>
                            </div>
                            <div className="grid gap-4 md:grid-cols-2">
                                {group.items.map((item, index) => (
                                    <details key={item.q} open={index === 0} className="group rounded-2xl border border-border/70 bg-card shadow-sm transition-shadow hover:shadow-md">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 font-medium text-plum-deep sm:px-6">
                                            <span>{item.q}</span>
                                            <Plus size={19} className="shrink-0 text-magenta transition-transform duration-200 group-open:rotate-45" aria-hidden="true" />
                                        </summary>
                                        <div className="px-5 pb-5 sm:px-6">
                                            <p className="text-sm leading-relaxed text-muted-foreground">{item.a}</p>
                                            {item.linkRouteKey && (
                                                <Link href={ROUTES[item.linkRouteKey]} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-magenta">
                                                    {item.linkLabel}<span aria-hidden="true">→</span>
                                                </Link>
                                            )}
                                        </div>
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted-foreground">
                    Can't find what you're looking for?{" "}
                    <a href="mailto:hello@evivi.com" className="font-medium text-magenta">Contact us</a>.
                </p>
            </section>
        </>
    );
}