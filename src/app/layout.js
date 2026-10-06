import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageLoader from "@/components/PageLoader";
import "./globals.css";

export const metadata = {
    title: "Evivi - ",
    description: "Valentine Gifting & celebration Marketplace",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <PageLoader />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}