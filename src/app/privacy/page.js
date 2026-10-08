import LegalPage from "@/components/LegalPage";
import { CONTENT } from "@/data/content";

export const metadata = {
    title: "Privacy Policy | Evivi",
    description: "How Evivi collects, uses and protects your personal information.",
};

export default function PrivacyPage() {
    return <LegalPage content={CONTENT.privacy} crumb="Privacy" />;
}