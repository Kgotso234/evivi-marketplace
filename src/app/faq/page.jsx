import Link from "next/link";
import { Plus } from "lucide-react";

export const metadata = {
    title: "FAQs | Evivi",
    description:
        "Answers to common questions about Evivi — what it is, when it launches, and how buyers, sellers and partners can get involved.",
};

const faqGroups = [
    {
        title: "General",
        items: [
            {
                q: "What is Evivi?",
                a: "Evivi is a marketplace for gifts and celebrations. We're launching with Valentine gifting, connecting gift buyers with local sellers, delivery partners, and — over time — event planners and suppliers.",
            },
            {
                q: "When does Evivi launch?",
                a: "Evivi is preparing for its first Valentine season. Early access lets you join the community and be first to know as launch gets closer.",
            },
            {
                q: "Is Evivi free to use?",
                a: "Browsing and registering for early access is free. Sellers and partners will see fee details as part of onboarding, before anything goes live.",
            },
            {
                q: "Which areas does Evivi serve?",
                a: "We're starting in South Africa and building out coverage by province and city as sellers and delivery partners join. You can select your area when you register.",
            },
            {
                q: "How do I contact support?",
                a: "A dedicated support channel is coming soon. In the meantime, register for early access and we'll be in touch with the best way to reach us.",
            },
        ],
    },
    {
        title: "For Buyers",
        items: [
            {
                q: "How do I get early access?",
                a: "Use the \"Get Valentine Early Access\" button on the homepage to join the list — we'll let you know as soon as you can start browsing and ordering.",
            },
            {
                q: "How will delivery work?",
                a: "Depending on the seller, you'll be able to choose delivery or collection for your gift. Options are shown per listing once the marketplace is live.",
            },
            {
                q: "When can I actually place an order?",
                a: "Ordering opens once the marketplace launches for Valentine 2027. Early access members will be notified first.",
            },
        ],
    },
    {
        title: "For Sellers & Partners",
        items: [
            {
                q: "How do I apply to sell on Evivi?",
                a: "Head to our Sellers page and fill in the application form with your business details. We'll follow up with next steps if you're selected.",
                link: { href: "/sellers", label: "Apply to sell" },
            },
            {
                q: "What fees does Evivi charge sellers?",
                a: "Fee details will be shared with selected sellers as part of onboarding, before you list anything on the marketplace.",
            },
            {
                q: "How do I become a delivery partner?",
                a: "Delivery partner applications open as Evivi grows. Join the waitlist to be notified when applications become available.",
                link: { href: "/delivery-partners", label: "Join the waitlist" },
            },
            {
                q: "When can event planners and suppliers join?",
                a: "Event planning, coordination and supplier onboarding are part of Evivi's longer-term vision, beyond the Valentine 2027 launch. Join the relevant waitlist to be notified.",
                link: { href: "/event-planners", label: "Event Planners waitlist" },
            },
        ],
    },
];

export default function FaqPage() {
    return (
        <>
            {/* Simple header — no photo hero, no id="hero", so the Navbar defaults to its light theme on this page */}
            <section data-navbar-theme="light" className="bg-soft-gradient px-5 sm:px-8 pt-32 pb-16 md:pt-40 md:pb-20">
                <div className="mx-auto max-w-3xl text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-magenta">
                        Support
                    </p>
                    <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-plum-deep">
                        Frequently asked questions
                    </h1>
                    <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                        Everything you need to know about Evivi, whether you're here to buy,
                        sell, or partner with us.
                    </p>
                </div>
            </section>

            {/* FAQ groups */}
            <section data-navbar-theme="light" className="px-5 sm:px-8 py-16 md:py-24">
                <div className="mx-auto max-w-3xl space-y-12">
                    {faqGroups.map((group) => (
                        <div key={group.title}>
                            <h2 className="font-display text-2xl text-plum-deep mb-4">
                                {group.title}
                            </h2>
                            <div className="rounded-[var(--radius-card)] border border-border/70 bg-card divide-y divide-border/70 overflow-hidden">
                                {group.items.map((item) => (
                                    <details key={item.q} className="group px-5 py-4 sm:px-6">
                                        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium text-plum-deep">
                                            {item.q}
                                            <Plus
                                                size={18}
                                                className="shrink-0 text-magenta transition-transform duration-200 group-open:rotate-45"
                                                aria-hidden="true"
                                            />
                                        </summary>
                                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                                            {item.a}
                                        </p>
                                        {item.link && (
                                            <Link
                                                href={item.link.href}
                                                className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-magenta"
                                            >
                                                {item.link.label} →
                                            </Link>
                                        )}
                                    </details>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mx-auto mt-12 max-w-3xl text-center text-sm text-muted-foreground">
                    Can't find what you're looking for?{" "}
                    <Link href="/about" className="font-medium text-magenta">
                        Learn more about Evivi
                    </Link>
                    .
                </p>
            </section>
        </>
    );
}