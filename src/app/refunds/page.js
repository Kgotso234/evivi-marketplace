import LegalPage from "@/components/LegalPage";
import { CONTENT } from "@/data/content";

export const metadata = {
    title: "Refund Policy | Evivi",
    description: "Cancellations, returns and refunds on Evivi.",
};

export default function RefundsPage() {
    return <LegalPage content={CONTENT.refunds} crumb="Refunds" />;
}