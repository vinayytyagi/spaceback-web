import { LegalPage } from "@/components/legal/LegalPage";

export default function ThirdPartyNoticesPage() {
  return (
    <LegalPage title="Open Source & Third-Party Notices" lastUpdated="October 18, 2026">
      <p>Spaceback incorporates open-source components under permissive licenses:</p>
      <ul>
        <li><strong>Electron:</strong> MIT License</li>
        <li><strong>Lucide Icons:</strong> ISC License</li>
      </ul>
    </LegalPage>
  );
}
