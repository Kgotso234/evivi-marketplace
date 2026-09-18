"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import EviviLogo from "@/assets/images/evivi-logo.png";
import { CTA, NAV_LINKS, selectSellerRole } from "@/constants/copy";

export default function Navbar() {
    const pathname = usePathname();
    const [navTheme, setNavTheme] = useState("transparent");
    const [open, setOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const headerRef = useRef(null);

    useEffect(() => {
        const hero = document.getElementById("hero");
        if (hero) {
            const rect = hero.getBoundingClientRect();
            setNavTheme(rect.bottom > 0 ? "transparent" : "light");
        } else {
            // No hero on this page (e.g. /sellers, /about) — default to light.
            setNavTheme("light");
        }

        const sections = document.querySelectorAll("section");
        const headerHeight = headerRef.current?.offsetHeight ?? 80;

        const observerOptions = {
            root: null,
            rootMargin: `-${headerHeight}px 0px -70% 0px`,
            threshold: 0,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const theme = entry.target.getAttribute("data-navbar-theme");
                    if (theme) {
                        setNavTheme(theme);
                    } else {
                        const id = entry.target.id;
                        if (id === "hero") {
                            setNavTheme("transparent");
                        } else {
                            if (process.env.NODE_ENV !== "production") {
                                console.warn(
                                    `[Navbar] Section${id ? ` #${id}` : ""} has no data-navbar-theme attribute. ` +
                                    `Defaulting to "light" — set the attribute explicitly to avoid surprises.`
                                );
                            }
                            setNavTheme("light");
                        }
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, [pathname]);

    // Lock body scroll while the mobile menu is open, and close on Escape.
    useEffect(() => {
        if (!open) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [open]);

    // Close the mobile menu automatically on route change.
    useEffect(() => {
        setOpen(false);
        setPartnersOpen(false);
    }, [pathname]);

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const effectiveTheme = open ? "light" : navTheme;
    const isTransparent = effectiveTheme === "transparent";
    const isDark = effectiveTheme === "dark";
    const useLightForeground = isTransparent || isDark;

    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isTransparent
                    ? isScrolled
                        ? "bg-[var(--color-deep-plum,#3B0D5C)]/20 backdrop-blur-sm border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                    : isDark
                    ? "bg-[var(--color-deep-plum,#3B0D5C)]/90 backdrop-blur-md border-b border-white/10"
                    : "bg-white/94 backdrop-blur-md border-b border-[var(--color-lavender-border,#E4D8F0)] shadow-[0_4px_24px_rgba(59,13,92,0.08)]"
            }`}
        >
            <nav className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-8 md:py-0 md:h-20">
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <Image
                        src={EviviLogo}
                        alt="Evivi"
                        priority
                        className="h-12 w-auto md:h-14 object-contain"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {NAV_LINKS.map((link) =>
                        link.children ? (
                            <div
                                key={link.label}
                                className="relative"
                                onMouseEnter={() => setPartnersOpen(true)}
                                onMouseLeave={() => setPartnersOpen(false)}
                            >
                                <button
                                    className="text-sm font-medium transition-colors hover:opacity-70"
                                    style={{
                                        color: useLightForeground
                                            ? "var(--color-white-90, rgba(255,255,255,0.9))"
                                            : "var(--color-muted-purple, #4B2E6B)",
                                    }}
                                    aria-expanded={partnersOpen}
                                >
                                    {link.label}
                                </button>
                                {partnersOpen && (
                                    <div className="absolute left-0 top-full pt-3 min-w-[220px]">
                                        <div className="rounded-2xl border border-[var(--color-lavender-border)] bg-white py-2 shadow-[var(--shadow-soft)]">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block px-4 py-2.5 text-sm text-[var(--color-deep-plum)] hover:bg-[var(--color-warm-lilac)]"
                                                >
                                                    {child.label}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium transition-colors hover:opacity-70"
                                style={{
                                    color: useLightForeground
                                        ? "var(--color-white-90, rgba(255,255,255,0.9))"
                                        : "var(--color-muted-purple, #4B2E6B)",
                                }}
                            >
                                {link.label}
                            </Link>
                        )
                    )}

                    <Link
                        href={CTA.seller.href}
                        onClick={selectSellerRole}
                        className="text-sm font-medium transition-colors hover:opacity-70"
                        style={{
                            color: useLightForeground
                                ? "var(--color-white-90, rgba(255,255,255,0.9))"
                                : "var(--color-muted-purple, #4B2E6B)",
                        }}
                    >
                        {CTA.seller.label}
                    </Link>
                    <Link href={CTA.buyer.href} className="btn-primary text-sm py-3 px-6">
                        {CTA.buyer.label}
                    </Link>
                </div>

                {/* Mobile hamburger button */}
                <button
                    className="md:hidden p-2 -mr-2"
                    aria-label={open ? "Close menu" : "Open menu"}
                    aria-expanded={open}
                    aria-controls="mobile-nav-menu"
                    onClick={() => setOpen((v) => !v)}
                >
                    {open ? (
                        <X size={24} color={useLightForeground ? "#ffffff" : "var(--color-deep-plum)"} />
                    ) : (
                        <Menu size={24} color={useLightForeground ? "#ffffff" : "var(--color-deep-plum)"} />
                    )}
                </button>
            </nav>

            {/* Mobile dropdown menu */}
            {open && (
                <div
                    id="mobile-nav-menu"
                    className="md:hidden px-5 py-6 flex flex-col gap-3 bg-white shadow-2xl border-t max-h-[calc(100vh-80px)] overflow-y-auto"
                    style={{ borderColor: "var(--color-lavender-border, #E4D8F0)" }}
                >
                    {NAV_LINKS.flatMap((link) => (link.children ? link.children : [link])).map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium py-2 px-1"
                            style={{ color: "var(--color-deep-plum)" }}
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Link
                        href={CTA.buyer.href}
                        className="btn-primary text-sm py-3 px-6 w-full text-center block mt-2"
                    >
                        {CTA.buyer.label}
                    </Link>
                    <Link
                        href={CTA.seller.href}
                        onClick={selectSellerRole}
                        className="text-sm font-bold py-3 px-6 w-full text-center block rounded-full border transition-colors hover:bg-black/5"
                        style={{
                            color: "var(--color-muted-purple, #4B2E6B)",
                            borderColor: "var(--color-muted-purple, #4B2E6B)",
                        }}
                    >
                        {CTA.seller.label}
                    </Link>
                </div>
            )}
        </header>
    );
}