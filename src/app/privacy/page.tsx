import { LegalPage } from "@/components/legal/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy (Zero Data Collection)" lastUpdated="October 18, 2026">
      <h2>1. The Zero-Upload Guarantee</h2>
      <p>Spaceback inspects local directory paths and file sizes strictly in-process on your local machine. No file lists, directory paths, or disk metrics are uploaded to external servers.</p>

      <h2>2. Offline Architecture</h2>
      <p>Spaceback runs 100% offline without network analytics.</p>
    </LegalPage>
  );
}
