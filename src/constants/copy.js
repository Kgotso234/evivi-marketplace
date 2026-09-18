//primary navbar CTA
export const CTA = {
    buyer: {
        label: "Get Valentine Early Access",
        href: "/buyer"
    },
    seller: {
        label: "Sell Gifts on Evivi",
        href: "/sellers"
    },
};

/**
 * Main nav links, left to right
 * "children " create a dropdown
 */

export const NAV_LINKS = [
    { href: "/sellers", label: "Sell Gifts on Evivi"},
    {
        label: "For Partners",
        children: [
            { href: "/delivery-partners", label: "Delivery Partners"},
            { href: "/event-planners", label: "Event Planner & Coordinator"},
            { href: "/event-suppliers", label: "Event Suppliers"}
        ],
    }
];

export function selectSellerRole() {
    if (typeof window === "undefined") return;

    try {
        window.localStorage.setItem("evivi:selectRole", "seller");
    } catch (error) {
        //ignore storage errors
    }
}