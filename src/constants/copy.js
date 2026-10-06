// constants/copy.js

// ---------------------------------------------------------------------------
// LAUNCH PHASE
// ---------------------------------------------------------------------------
// "prelaunch" → waitlist wording, nothing is orderable yet
// "live"      → the marketplace is open, present-tense wording everywhere
//
// CHANGED: trimmed + lowercased so a stray space or "Live" in an env file
// doesn't silently fall through to prelaunch.
export const LAUNCH_PHASE = (
    process.env.NEXT_PUBLIC_LAUNCH_PHASE ?? "prelaunch"
)
    .trim()
    .toLowerCase();

// NEW: every ternary below reads this instead of repeating
// `LAUNCH_PHASE === "live"` six separate times.
export const IS_LIVE = LAUNCH_PHASE === "live";

// ---------------------------------------------------------------------------
// ROUTES
// ---------------------------------------------------------------------------
export const ROUTES = {
    home: "/",
    buyer: "/buyer",
    seller: "/seller",
    deliveryPartner: "/delivery-partner",
    eventPlanner: "/event-planner",
    eventSupplier: "/event-supplier",
    about: "/about",
    faq: "/faq",
    terms: "/terms",
    privacy: "#",          // TODO: "/privacy" when the page exists
    sellerAgreement: "#",  // TODO: "/seller-agreement" when the page exists
    contact: "#",   
    shop: "/shop",
};

// ---------------------------------------------------------------------------
// PRIMARY CTA COPY
// ---------------------------------------------------------------------------
export const CTA = {
    buyer: {
        // CHANGED: now phase-aware. Pre-launch it's the early-access pitch;
        // once live, it invites people to actually shop.
        label: IS_LIVE ? "Shop Valentine Gifts" : "Get Valentine Early Access",
        href: IS_LIVE ? ROUTES.shop : ROUTES.buyer,
    },

    seller: {
        label: "Sell Gifts on Evivi",
        href: ROUTES.seller,
    },

    // Used by the global/page closing bands
    shop: {
        label: IS_LIVE ? "Shop Gifts" : "Join the Early Access List",
        href: IS_LIVE ? ROUTES.shop : ROUTES.buyer,
    },

    // Used by Planner/Supplier (and optionally Buyer) forms — anything
    // that's pure waitlist pre-launch and opens up once live.
    submitPartner: IS_LIVE ? "Register" : "Join the waitlist",
};

// ---------------------------------------------------------------------------
// CLOSING BAND COPY
// ---------------------------------------------------------------------------
export const CLOSING_BAND = {
    body: IS_LIVE
        ? "Discover meaningful gifts, support local sellers and bring celebrations together."
        : "Evivi launches with Valentine 2027. Join early to be first to discover meaningful gifts from local sellers.",
};

// ---------------------------------------------------------------------------
// LAUNCH-STATE MESSAGING
// ---------------------------------------------------------------------------
export const LAUNCH_COPY = {
    badge: IS_LIVE ? "Now live" : "Launching Valentine 2027",

    marketplace: IS_LIVE
        ? "Shop meaningful gifts from local sellers."
        : "You'll be able to discover meaningful gifts from local sellers.",

    ordering: IS_LIVE
        ? "Pay securely and track your gift."
        : "You'll be able to pay securely and track your gift.",

    supplierStatus: IS_LIVE
        ? "Supplier registration is open."
        : "Supplier opportunities are coming after the Valentine 2027 launch.",

    plannerStatus: IS_LIVE
        ? "Event planning services are available."
        : "Event planning services are coming later.",
};

// ---------------------------------------------------------------------------
// HOME PAGE COPY
// ---------------------------------------------------------------------------
// NEW: this was referenced by app/page.jsx in an earlier pass but never
// actually lived in copy.js — adding it here so Home's hero note, "How it
// works" section, and Valentine banner all switch correctly with IS_LIVE.
export const HOME_COPY = {
    metaDescription: IS_LIVE
        ? "Discover Valentine gifts from local sellers on Evivi. Find the right gift, choose delivery or collection, and make the moment happen."
        : "Evivi launches with Valentine 2027. Join the early-access list to be first to discover gifts from local sellers.",

    heroBadge: IS_LIVE
        ? "Now live for Valentine gifting"
        : "Launching with Valentine gifting",

    heroNote: IS_LIVE
        ? "Now live. Find the right gift today."
        : "Launching Valentine 2027. Join the early-access list today.",

    howEyebrow: IS_LIVE ? "How Evivi works" : "How Evivi will work",

    howIntro: IS_LIVE
        ? "From discovery to delivery, Evivi makes gifting easy and stress-free."
        : "From discovery to delivery, this is how gifting on Evivi will work when we open.",

    stepDiscover: IS_LIVE
        ? "Browse Valentine gifts from local sellers near you or near where the gift needs to go."
        : "You'll be able to browse Valentine gifts from local sellers near you or near where the gift needs to go.",

    stepPay: IS_LIVE
        ? "Complete your purchase and follow your gift until it is delivered or ready for collection."
        : "Pay securely, then follow your gift until it is delivered or ready for collection.",

    bannerBody: IS_LIVE
        ? "Find your gift early, choose how you want it delivered, and avoid the last-minute rush."
        : "Evivi opens for Valentine 2027. Join the early-access list and avoid the last-minute rush.",

    bannerNote: IS_LIVE
        ? "Order early and choose delivery or collection."
        : "Be the first to know when we open.",

    buyerAction: IS_LIVE ? "Shop gifts" : "Get early access",
};

// ---------------------------------------------------------------------------
// MAIN NAV LINKS
// ---------------------------------------------------------------------------
export const NAV_LINKS = [
    {
        href: ROUTES.about,
        label: "About",
    },

    {
        label: "For Partners",
        children: [
            {
                href: ROUTES.deliveryPartner,
                label: "Delivery Partner",
            },
            {
                href: ROUTES.eventPlanner,
                label: "Event Planner & Coordinator",
            },
            {
                href: ROUTES.eventSupplier,
                label: "Event Suppliers",
            },
        ],
    },

    {
        href: ROUTES.faq,
        label: "FAQ",
    },
];

// ---------------------------------------------------------------------------
// HELPERS
// ---------------------------------------------------------------------------
export function selectSellerRole() {
    // Check if running on the client (browser) before accessing localStorage
    if (typeof window === "undefined") return;

    try {
        window.localStorage.setItem("evivi:selectRole", "seller");
    } catch (error) {
        // ignore storage errors
    }
}