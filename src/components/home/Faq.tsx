import { HelpCircle } from "lucide-react";

const FAQS = [
  {
    q: "How does Spaceback guarantee it won't delete my uncommitted code?",
    a: "Spaceback runs strict checks before suggesting any deletion. It checks the directory against .gitignore, verifies the presence of standard lockfiles (package-lock.json, pnpm-lock.yaml, Cargo.lock), and queries the local git repository status to confirm that no tracked or uncommitted source files reside inside the target folder."
  },
  {
    q: "Can I recover files if I accidentally clean something?",
    a: "Yes. By default, Spaceback uses Windows Shell APIs to move deleted folders directly into your Windows Recycle Bin. You can open the Recycle Bin and click 'Restore' at any time."
  },
  {
    q: "How fast is the scan across multiple drives?",
    a: "Spaceback scans your entire drive in 1 to 3 seconds by directly reading the NTFS Master File Table (MFT) when run with administrative rights, or uses parallel worker threads to traverse project folders without hanging your machine."
  },
  {
    q: "What is your refund policy?",
    a: "We offer an unconditional 30-day money-back guarantee. If Spaceback does not reclaim the gigabytes you expect, contact support@valentir.com for a full refund."
  }
];

export function Faq() {
  return (
    <section id="faq" className="section">
      <div className="container" style={{ maxWidth: "800px" }}>
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Answers about safety rules, Recycle Bin restoration, and filesystem scanners.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="card" style={{ padding: "24px" }}>
              <h3 style={{ fontSize: "17px", fontWeight: 800, marginBottom: "8px", color: "var(--text)", display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <HelpCircle size={18} color="var(--accent)" style={{ flexShrink: 0, marginTop: "2px" }} />
                {faq.q}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6, paddingLeft: "28px" }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
