export const metadata = {
    title: "Become a Delivery Partner | Evivi",
    description:
        "Join Evivi as a delivery partner and help local sellers deliver gifts and celebration packages to customers across supported areas.",
    alternates: {
        canonical: "/delivery-partners",
    },
    openGraph: {
        title: "Become a Delivery Partner | Evivi",
        description:
            "Join Evivi as a delivery partner and help local sellers deliver gifts and celebration packages to customers across supported areas.",
        url: "/delivery-partners",
        siteName: "Evivi",
        images: [
            {
                url: "/images/delivery-hero.png",
                width: 1200,
                height: 630,
                alt: "Evivi delivery partner",
            },
        ],
        locale: "en_ZA",
        type: "website",
    },
};

export default function DeliveryPartnersLayout({ children }) {
    return children;
}