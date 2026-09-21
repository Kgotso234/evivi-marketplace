import Image from "next/image";
import Link from "next/link";
import { CTA, selectSellerRole } from "@/constants/copy";

const IconInstagram = (props) => (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
);
const IconFacebook = (props) => (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
        <path d="M14 9h2.5V6.2h-2.5c-1.9 0-3.4 1.5-3.4 3.4V12H8.5v2.8H10.6V21h2.8v-6.2h2.3l.4-2.8h-2.7v-2c0-.6.4-1 1-1Z" />
    </svg>
);
const IconTikTok = (props) => (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
        <path d="M15 3v10.2a3.3 3.3 0 1 1-3.3-3.3c.3 0 .6 0 .9.1V7.4a6 6 0 1 0 5.1 5.9V9.6a7.6 7.6 0 0 0 4.3 1.3V8.2A4.6 4.6 0 0 1 15 3Z" />
    </svg>
);
const IconX = (props) => (
    <svg viewBox="0 0 24 24" width={15} height={15} fill="currentColor" stroke="none" {...props}>
        <path d="M4 4l7.2 9.5L4.4 20h1.9l6-6.6 4.7 6.6H20l-7.5-9.9L19 4h-1.9l-5.6 6.1L7 4H4Zm2.8 1.5h1.7l9.6 13H16.4l-9.6-13Z" />
    </svg>
);

const socials = [
    { Icon: IconInstagram, label: "Evivi on Instagram", href: "#" },
    { Icon: IconFacebook, label: "Evivi on Facebook", href: "#" },
    { Icon: IconTikTok, label: "Evivi on TikTok", href: "#" },
    { Icon: IconX, label: "Evivi on X", href: "#" },
];
const columns = [
    {
        title: "Shop",
        links: [
            { label: "Valentine Gifts", href: "/#valentine" },
            { label: "How it Works", href: "/#how-it-works" },
            { label: "Early Access", href: CTA.buyer.href },
            { label: "FAQs", href: "/faq" },
        ],
    },
    {
        title: "Sell",
        links: [
            { label: "Sell on Evivi", href: CTA.seller.href, onClick: selectSellerRole },
        ],
    },
    {
        title: "Partners",
        links: [
            { label: "Delivery Partners", href: "/delivery-partners" },
            { label: "Event Planners & Coordinators", href: "/event-planners" },
            { label: "Event Suppliers", href: "/event-suppliers" },
        ],
    },
    {
        title: "Company",
        links: [
            { label: "About Evivi", href: "/about" },
            { label: "FAQs", href: "/faq" },
        ],
    },
    {
        title: "Legal",
        links: [
            { label: "Terms & Conditions", href: "#" },
            { label: "Privacy Policy", href: "#" },
            { label: "Seller Agreement", href: "#" },
        ],
    },
];

export default function Footer() {
    return (
        <footer style={{ background: "var(--color-footer-plum, #130920)" }} className="pt-16 pb-8 text-white">
            <div className="mx-auto max-w-[1280px] px-5 md:px-8">
                <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.4fr_repeat(5,1fr)]">
                    <div>
                        <Image
                            src="/images/evivi-logo.png"
                            alt="Evivi"
                            width={140}
                            height={56}
                            className="h-10 w-auto md:h-12 object-contain"
                        />
                        <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-white/60">
                            A celebration marketplace. Launching with Valentine gifting.
                            Building the future of celebrations.
                        </p>
                        <div className="mt-5 flex items-center gap-3">
                            {socials.map(({ Icon, label, href }) => (
                                <a
                                    key={label}
                                    href={href}
                                    aria-label={label}
                                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-white/40 hover:text-white"
                                >
                                    <Icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {columns.map((col) => (
                        <div key={col.title}>
                            <h4 className="text-sm font-medium text-white/90">{col.title}</h4>
                            <ul className="mt-4 space-y-2.5">
                                {col.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            onClick={link.onClick}
                                            className="text-sm text-white/55 transition-colors hover:text-white"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-14 border-t border-white/10 pt-6 text-center text-xs text-white/45">
                    A product by Innerchild Events. © 2026 Innerchild Events (Pty) Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
}