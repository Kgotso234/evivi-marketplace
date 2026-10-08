"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const INITIAL_MS = 900;       // splash on first visit
const MIN_VISIBLE_MS = 500;   // every navigation shows the loader at least this long
const FADE_MS = 350;          // fade-out duration
const MAX_WAIT_MS = 8000;     // safety: never stay stuck on screen

export default function PageLoader() {
    const pathname = usePathname();

    // Starts visible so the server HTML covers the page (no flash of content)
    const [visible, setVisible] = useState(true);
    const [fading, setFading] = useState(false);

    const shownAt = useRef(0);
    const isFirst = useRef(true);
    const hideTimer = useRef(null);
    const safetyTimer = useRef(null);

    const hide = useCallback((minMs) => {
        clearTimeout(safetyTimer.current);

        // Overlay isn't showing: nothing to hide
        if (!shownAt.current) return;

        const elapsed = Date.now() - shownAt.current;
        const wait = Math.max(0, minMs - elapsed);

        clearTimeout(hideTimer.current);
        hideTimer.current = setTimeout(() => {
            setFading(true);
            hideTimer.current = setTimeout(() => {
                setVisible(false);
                setFading(false);
                shownAt.current = 0;
            }, FADE_MS);
        }, wait);
    }, []);

    const show = useCallback(() => {
        clearTimeout(safetyTimer.current);
        safetyTimer.current = setTimeout(() => hide(0), MAX_WAIT_MS);

        // Cancel any pending hide/fade and show right away
        clearTimeout(hideTimer.current);
        setFading(false);
        setVisible(true);
        shownAt.current = Date.now();
    }, [hide]);

    // First load: the overlay is already visible, so start the clock
    useEffect(() => {
        shownAt.current = Date.now();
    }, []);

    // Route changed: the new page is ready, so hide the overlay
    useEffect(() => {
        hide(isFirst.current ? INITIAL_MS : MIN_VISIBLE_MS);
        isFirst.current = false;
    }, [pathname, hide]);

    // Show the overlay as soon as an internal link is clicked
    useEffect(() => {
        const onClick = (event) => {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const link = event.target.closest?.("a");
            if (!link || !link.href) return;
            if (link.target && link.target !== "_self") return;
            if (link.hasAttribute("download")) return;

            const url = new URL(link.href, window.location.href);
            if (url.origin !== window.location.origin) return;

            // Same page (including hash-only or query-only links such as
            // "#register"): the pathname won't change, so no loader
            if (url.pathname === window.location.pathname) return;

            show();
        };

        // Capture phase: runs before Next's Link calls preventDefault()
        document.addEventListener("click", onClick, true);
        return () => document.removeEventListener("click", onClick, true);
    }, [show]);

    // Clean up timers on unmount
    useEffect(() => {
        return () => {
            clearTimeout(hideTimer.current);
            clearTimeout(safetyTimer.current);
        };
    }, []);

    if (!visible) return null;

    return (
        <div
            role="status"
            aria-live="polite"
            aria-label="Loading"
            className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-soft-gradient transition-opacity ease-out ${
                fading ? "opacity-0" : "opacity-100"
            }`}
            style={{
                transitionDuration: `${FADE_MS}ms`,
                pointerEvents: fading ? "none" : "auto",
            }}
        >
            <Image
                src="/images/evivi-logo.png"
                alt="Evivi"
                width={180}
                height={72}
                priority
                className="loader-pulse h-14 w-auto object-contain sm:h-16"
            />
            <div className="loader-bar mt-8 h-1 w-32 rounded-full bg-[var(--color-lavender-border)]" />
        </div>
    );
}