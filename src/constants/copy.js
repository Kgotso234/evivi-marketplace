export const ROUTES = {
    home: "/",
    buyer: "/buyer",
    seller: "/seller",
    deliveryPartner: "/delivery-partner",
    eventPlanner: "/event-planner", 
    eventSupplier: "/event-supplier",
    about: "/about",
    faq: "/faq",
};

// Primary navbar CTAs
export const CTA = {
    buyer: {
        label: "Get Valentine Early Access",
        href: ROUTES.buyer, 
    },
    seller: {
        label: "Sell Gifts on Evivi",
        href: ROUTES.seller, 
    },
};

/**
 * Main nav links
 */
export const NAV_LINKS = [
    { href: ROUTES.about, label: "About" }, 
    {
        label: "For Partners",
        children: [
            { href: ROUTES.deliveryPartner, label: "Delivery Partner" },
            { href: ROUTES.eventPlanner, label: "Event Planner & Coordinator" },
            { href: ROUTES.eventSupplier, label: "Event Suppliers" },
        ],
    },   
    { href: ROUTES.faq, label: "FAQ" },
];

export function selectSellerRole() {
    // Check if running on the client (browser) before accessing localStorage/window
    if (typeof window === "undefined") return;

    try {
        window.localStorage.setItem("evivi:selectRole", "seller");
    } catch (error) {
        // ignore storage errors
    }
}