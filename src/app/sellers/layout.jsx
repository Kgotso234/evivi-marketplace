export const metadata = {
    title: "Sell Your Gifts on Evivi | Grow Your Business",
    description:
        "Join Evivi as a gift seller. List flowers, hampers, chocolates, personalised gifts and Valentine gift packages and reach more customers.",
    alternates: {
        canonical: "/seller",
    },
    openGraph: {
        title: "Sell Your Gifts on Evivi | Grow Your Business",
        description:
            "Join Evivi as a gift seller. List flowers, hampers, chocolates, personalised gifts and Valentine gift packages and reach more customers.",
        url: "/seller",
        siteName: "Evivi",
        images: [
            {
                url: "/images/seller-hero.jpg",
                width: 1200,
                height: 630,
                alt: "Sell gifts on Evivi",
            },
        ],
        locale: "en_ZA",
        type: "website",
    },
};

export default function SellerLayout({ children }) {
    return children;
}