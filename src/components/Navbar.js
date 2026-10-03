"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import {
    CTA,
    NAV_LINKS,
    selectSellerRole,
} from "@/constants/copy";

export default function Navbar() {
    const pathname = usePathname();
    const headerRef = useRef(null);

    const [navTheme, setNavTheme] = useState("transparent");
    const [isScrolled, setIsScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [partnersOpen, setPartnersOpen] = useState(false);
    const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);

    /*
     * ---------------------------------------------------------
     * NAVBAR THEME
     * ---------------------------------------------------------
     *
     * Pages can control the navbar by adding:
     *
     * data-navbar-theme="transparent"
     * data-navbar-theme="light"
     * data-navbar-theme="dark"
     *
     * to a section.
     *
     * The navbar no longer assumes that #hero must be transparent.
     */
    useEffect(() => {
        if (typeof window === "undefined") return;

        const headerHeight =
            headerRef.current?.offsetHeight ?? 80;

        const getThemeFromSection = (section) => {
            if (!section) return null;

            const explicitTheme =
                section.getAttribute("data-navbar-theme");

            if (explicitTheme) {
                return explicitTheme;
            }

            return section.id === "hero"
                ? "transparent"
                : "light";
        };

        const updateInitialTheme = () => {
            const sections =
                document.querySelectorAll("section");

            if (!sections.length) {
                setNavTheme("light");
                return;
            }

            /*
             * Find the section currently underneath the navbar.
             */
            const currentSection = Array.from(sections).find(
                (section) => {
                    const rect =
                        section.getBoundingClientRect();

                    return (
                        rect.top <= headerHeight + 10 &&
                        rect.bottom > headerHeight
                    );
                }
            );

            if (currentSection) {
                setNavTheme(
                    getThemeFromSection(currentSection)
                );
                return;
            }

            /*
             * If nothing is currently under the navbar,
             * use the first section as the fallback.
             */
            setNavTheme(
                getThemeFromSection(sections[0]) || "light"
            );
        };

        updateInitialTheme();

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort(
                        (a, b) =>
                            a.boundingClientRect.top -
                            b.boundingClientRect.top
                    );

                if (!visibleSections.length) return;

                const section = visibleSections[0].target;

                setNavTheme(
                    getThemeFromSection(section)
                );
            },
            {
                root: null,
                rootMargin: `-${headerHeight}px 0px -65% 0px`,
                threshold: 0,
            }
        );

        document
            .querySelectorAll("section")
            .forEach((section) =>
                observer.observe(section)
            );

        return () => observer.disconnect();
    }, [pathname]);

    /*
     * ---------------------------------------------------------
     * SCROLL STATE
     * ---------------------------------------------------------
     */
    useEffect(() => {
        if (typeof window === "undefined") return;

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener(
                "scroll",
                handleScroll
            );
        };
    }, []);

    /*
     * ---------------------------------------------------------
     * MOBILE MENU
     * ---------------------------------------------------------
     */
    useEffect(() => {
        if (
            typeof window === "undefined" ||
            !open
        ) {
            return;
        }

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setOpen(false);
            }
        };

        document.body.style.overflow = "hidden";

        window.addEventListener(
            "keydown",
            handleKeyDown
        );

        return () => {
            document.body.style.overflow = "";

            window.removeEventListener(
                "keydown",
                handleKeyDown
            );
        };
    }, [open]);

    /*
     * Close menus whenever the route changes.
     */
    useEffect(() => {
        setOpen(false);
        setPartnersOpen(false);
        setMobilePartnersOpen(false);
    }, [pathname]);

    /*
     * Reset mobile submenu when the main menu closes.
     */
    useEffect(() => {
        if (!open) {
            setMobilePartnersOpen(false);
        }
    }, [open]);

    /*
     * ---------------------------------------------------------
     * ROUTE HELPERS
     * ---------------------------------------------------------
     */
    const isActiveRoute = (href) => {
        if (!href || href === "#") return false;

        return (
            pathname === href ||
            pathname.startsWith(`${href}/`)
        );
    };

    const isPartnerActive = (children = []) => {
        return children.some((child) =>
            isActiveRoute(child.href)
        );
    };

    /*
     * ---------------------------------------------------------
     * THEME
     * ---------------------------------------------------------
     */
    const effectiveTheme = open
        ? "light"
        : navTheme;

    const isTransparent =
        effectiveTheme === "transparent";

    const isDark =
        effectiveTheme === "dark";

    const useLightForeground =
        isTransparent || isDark;

    const defaultDesktopColor =
        useLightForeground
            ? "var(--color-white-90, rgba(255,255,255,0.9))"
            : "var(--color-muted-purple, #4B2E6B)";

    const activeColor =
        "var(--color-vibrant-magenta)";

    const mobileLinkColor =
        "var(--color-deep-plum)";

    /*
     * ---------------------------------------------------------
     * RENDER
     * ---------------------------------------------------------
     */
    return (
        <header
            ref={headerRef}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isTransparent
                    ? isScrolled
                        ? "bg-[var(--color-deep-plum,#3B0D5C)]/20 backdrop-blur-md border-b border-white/10"
                        : "bg-transparent border-b border-transparent"
                    : isDark
                    ? "bg-[var(--color-deep-plum,#3B0D5C)]/80 backdrop-blur-lg border-b border-white/10"
                    : "bg-white/80 backdrop-blur-lg border-b border-[var(--color-lavender-border,#E4D8F0)] shadow-[0_4px_24px_rgba(59,13,92,0.08)]"
            }`}
        >
            <nav
                className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:h-20 md:px-8 md:py-0"
                aria-label="Main navigation"
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex shrink-0 items-center gap-2"
                    aria-label="Evivi home"
                >
                    <Image
                        src="/images/evivi-logo.png"
                        alt="Evivi"
                        width={140}
                        height={56}
                        priority
                        className="h-12 w-auto object-contain md:h-14"
                    />
                </Link>

                {/* Desktop navigation */}
                <div className="hidden items-center gap-6 md:flex">
                    {NAV_LINKS.map((link) => {
                        const active = link.children
                            ? isPartnerActive(link.children)
                            : isActiveRoute(link.href);

                        /*
                         * Dropdown navigation
                         */
                        if (link.children) {
                            return (
                                <div
                                    key={link.label}
                                    className="relative"
                                    onMouseEnter={() =>
                                        setPartnersOpen(true)
                                    }
                                    onMouseLeave={() =>
                                        setPartnersOpen(false)
                                    }
                                >
                                    <button
                                        type="button"
                                        className={`relative flex items-center gap-1 text-base font-medium transition-opacity hover:opacity-70 ${
                                            active
                                                ? "font-semibold"
                                                : ""
                                        }`}
                                        style={{
                                            color: active
                                                ? activeColor
                                                : defaultDesktopColor,
                                        }}
                                        aria-expanded={
                                            partnersOpen
                                        }
                                        aria-haspopup="true"
                                    >
                                        {link.label}

                                        <ChevronDown
                                            size={18}
                                            aria-hidden="true"
                                            className={`transition-transform ${
                                                partnersOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />

                                        {active && (
                                            <span
                                                className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        activeColor,
                                                }}
                                            />
                                        )}
                                    </button>

                                    {partnersOpen && (
                                        <div className="absolute left-0 top-full min-w-[220px] pt-3">
                                            <div className="rounded-2xl border border-[var(--color-lavender-border)] bg-white py-2 shadow-[var(--shadow-soft)]">
                                                {link.children.map(
                                                    (child) => {
                                                        const childActive =
                                                            isActiveRoute(
                                                                child.href
                                                            );

                                                        return (
                                                            <Link
                                                                key={
                                                                    child.href
                                                                }
                                                                href={
                                                                    child.href
                                                                }
                                                                className={`block px-4 py-2.5 text-base transition-colors hover:bg-[var(--color-warm-lilac)] ${
                                                                    childActive
                                                                        ? "font-semibold"
                                                                        : ""
                                                                }`}
                                                                style={{
                                                                    color: childActive
                                                                        ? activeColor
                                                                        : "var(--color-deep-plum)",
                                                                }}
                                                            >
                                                                {
                                                                    child.label
                                                                }
                                                            </Link>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        }

                        /*
                         * Normal navigation link
                         */
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative text-base font-medium transition-opacity hover:opacity-70 ${
                                    active
                                        ? "font-semibold"
                                        : ""
                                }`}
                                style={{
                                    color: active
                                        ? activeColor
                                        : defaultDesktopColor,
                                }}
                            >
                                {link.label}

                                {active && (
                                    <span
                                        className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 rounded-full"
                                        style={{
                                            backgroundColor:
                                                activeColor,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* Seller CTA */}
                    <Link
                        href={CTA.seller.href}
                        onClick={selectSellerRole}
                        className={`relative text-base font-medium transition-opacity hover:opacity-70 ${
                            isActiveRoute(
                                CTA.seller.href
                            )
                                ? "font-semibold"
                                : ""
                        }`}
                        style={{
                            color: isActiveRoute(
                                CTA.seller.href
                            )
                                ? activeColor
                                : defaultDesktopColor,
                        }}
                    >
                        {CTA.seller.label}

                        {isActiveRoute(
                            CTA.seller.href
                        ) && (
                            <span
                                className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 rounded-full"
                                style={{
                                    backgroundColor:
                                        activeColor,
                                }}
                            />
                        )}
                    </Link>

                    {/* Buyer / Early Access CTA */}
                    <Link
                        href={CTA.buyer.href}
                        className="btn-primary px-6 py-3 text-base"
                    >
                        {CTA.buyer.label}
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    className="p-2 md:hidden"
                    aria-label={
                        open
                            ? "Close navigation menu"
                            : "Open navigation menu"
                    }
                    aria-expanded={open}
                    aria-controls="mobile-nav-menu"
                    onClick={() =>
                        setOpen((value) => !value)
                    }
                >
                    {open ? (
                        <X
                            size={24}
                            color={
                                useLightForeground
                                    ? "#ffffff"
                                    : "var(--color-deep-plum)"
                            }
                            aria-hidden="true"
                        />
                    ) : (
                        <Menu
                            size={24}
                            color={
                                useLightForeground
                                    ? "#ffffff"
                                    : "var(--color-deep-plum)"
                            }
                            aria-hidden="true"
                        />
                    )}
                </button>
            </nav>

            {/* Mobile navigation */}
            {open && (
                <div
                    id="mobile-nav-menu"
                    className="flex max-h-[calc(100vh-80px)] flex-col items-center gap-3 overflow-y-auto border-t bg-white px-5 py-6 shadow-2xl md:hidden"
                    style={{
                        borderColor:
                            "var(--color-lavender-border, #E4D8F0)",
                    }}
                >
                    {NAV_LINKS.map((link) => {
                        const active = link.children
                            ? isPartnerActive(link.children)
                            : isActiveRoute(link.href);

                        /*
                         * Mobile partner menu
                         */
                        if (link.children) {
                            return (
                                <div
                                    key={link.label}
                                    className="flex w-full flex-col items-center"
                                >
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setMobilePartnersOpen(
                                                (value) =>
                                                    !value
                                            )
                                        }
                                        aria-expanded={
                                            mobilePartnersOpen
                                        }
                                        className={`relative flex items-center justify-center gap-1 py-2 text-base font-medium ${
                                            active
                                                ? "font-semibold"
                                                : ""
                                        }`}
                                        style={{
                                            color: active
                                                ? activeColor
                                                : mobileLinkColor,
                                        }}
                                    >
                                        <span>
                                            {link.label}
                                        </span>

                                        <ChevronDown
                                            size={16}
                                            aria-hidden="true"
                                            className={`transition-transform duration-200 ${
                                                mobilePartnersOpen
                                                    ? "rotate-180"
                                                    : ""
                                            }`}
                                        />

                                        {active && (
                                            <span
                                                className="absolute -bottom-0.5 left-0 right-0 mx-auto h-0.5 rounded-full"
                                                style={{
                                                    backgroundColor:
                                                        activeColor,
                                                }}
                                            />
                                        )}
                                    </button>

                                    <div
                                        className="grid w-full overflow-hidden transition-[grid-template-rows] duration-200 ease-in-out"
                                        style={{
                                            gridTemplateRows:
                                                mobilePartnersOpen
                                                    ? "1fr"
                                                    : "0fr",
                                        }}
                                    >
                                        <div className="flex min-h-0 flex-col items-center gap-2">
                                            {link.children.map(
                                                (child) => {
                                                    const childActive =
                                                        isActiveRoute(
                                                            child.href
                                                        );

                                                    return (
                                                        <Link
                                                            key={
                                                                child.href
                                                            }
                                                            href={
                                                                child.href
                                                            }
                                                            className={`py-1.5 text-center text-base ${
                                                                childActive
                                                                    ? "font-semibold"
                                                                    : ""
                                                            }`}
                                                            style={{
                                                                color: childActive
                                                                    ? activeColor
                                                                    : "var(--color-muted-purple, #4B2E6B)",
                                                            }}
                                                        >
                                                            {
                                                                child.label
                                                            }
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        /*
                         * Mobile normal link
                         */
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`relative py-2 text-center text-base font-medium ${
                                    active
                                        ? "font-semibold"
                                        : ""
                                }`}
                                style={{
                                    color: active
                                        ? activeColor
                                        : mobileLinkColor,
                                }}
                            >
                                {link.label}

                                {active && (
                                    <span
                                        className="absolute -bottom-0.5 left-0 right-0 mx-auto h-0.5 rounded-full"
                                        style={{
                                            backgroundColor:
                                                activeColor,
                                        }}
                                    />
                                )}
                            </Link>
                        );
                    })}

                    {/* Mobile seller CTA */}
                    <Link
                        href={CTA.seller.href}
                        onClick={selectSellerRole}
                        className={`relative py-2 text-center text-base font-medium ${
                            isActiveRoute(
                                CTA.seller.href
                            )
                                ? "font-semibold"
                                : ""
                        }`}
                        style={{
                            color: isActiveRoute(
                                CTA.seller.href
                            )
                                ? activeColor
                                : mobileLinkColor,
                        }}
                    >
                        {CTA.seller.label}

                        {isActiveRoute(
                            CTA.seller.href
                        ) && (
                            <span
                                className="absolute -bottom-0.5 left-0 right-0 mx-auto h-0.5 rounded-full"
                                style={{
                                    backgroundColor:
                                        activeColor,
                                }}
                            />
                        )}
                    </Link>

                    {/* Mobile buyer CTA */}
                    <Link
                        href={CTA.buyer.href}
                        className="btn-primary mt-2 block w-full px-6 py-3 text-center text-base"
                    >
                        {CTA.buyer.label}
                    </Link>
                </div>
            )}
        </header>
    );
}