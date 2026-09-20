import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
    title: "Evivi - Valentine Gifting & celebration Marketplace",
    description: "Find the right gift, make the moment happen.",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
                {/* <Footer /> */}
            </body>
        </html>
    );
}