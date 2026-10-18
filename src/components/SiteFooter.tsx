import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Logo } from "./Logo";
import { ShieldCheck, HardDrive, Trash2, CheckCircle2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer style={{
      background: "#ffffff",
      borderTop: "1.5px solid var(--border)",
      padding: "64px 0 36px 0",
      marginTop: "96px"
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: "48px",
          marginBottom: "56px"
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Logo />
              <span style={{ fontWeight: 800, fontSize: "19px", color: "var(--text)" }}>{siteConfig.name}</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "14px", maxWidth: "340px", lineHeight: 1.6, marginBottom: "20px" }}>
              {siteConfig.description}
            </p>
            <div style={{ display: "flex", gap: "16px", color: "var(--accent)", fontSize: "13px", fontWeight: 700 }}>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <ShieldCheck size={15} color="#2BC48A" /> Git-Safety Checked
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <Trash2 size={15} color="#2BC48A" /> Recycle Bin First
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <HardDrive size={15} color="#2BC48A" /> MFT Fast Scanner
              </span>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "18px" }}>
              Product
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <li><Link href="#demo" style={{ color: "var(--muted)" }}>Interactive Treemap Demo</Link></li>
              <li><Link href="#features" style={{ color: "var(--muted)" }}>Junction & Symlink Safety</Link></li>
              <li><Link href="#features" style={{ color: "var(--muted)" }}>Docker & WSL2 Compact</Link></li>
              <li><Link href="#download" style={{ color: "var(--muted)" }}>Windows Installer (.exe)</Link></li>
              <li><Link href="#pricing" style={{ color: "var(--muted)" }}>Perpetual License</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "18px" }}>
              Legal & Policy
            </div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "14px" }}>
              <li><Link href="/privacy" style={{ color: "var(--muted)" }}>Privacy (Zero Uploads)</Link></li>
              <li><Link href="/terms" style={{ color: "var(--muted)" }}>Terms of Sale</Link></li>
              <li><Link href="/eula" style={{ color: "var(--muted)" }}>End User License (EULA)</Link></li>
              <li><Link href="/refunds" style={{ color: "var(--muted)" }}>30-Day Money-Back Guarantee</Link></li>
              <li><Link href="/acceptable-use" style={{ color: "var(--muted)" }}>Acceptable Use Policy</Link></li>
              <li><Link href="/third-party-notices" style={{ color: "var(--muted)" }}>Third-Party Notices</Link></li>
            </ul>
          </div>

          <div>
            <div style={{ fontWeight: 800, fontSize: "12px", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--muted)", marginBottom: "18px" }}>
              Publisher
            </div>
            <div style={{ fontSize: "13px", color: "var(--muted)", lineHeight: 1.7, marginBottom: "12px" }}>
              <strong>{siteConfig.company.legalName}</strong><br />
              {siteConfig.company.address}<br />
              CIN: {siteConfig.company.cin}
            </div>
            <Link href="/support" style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 700 }}>
              Support Desk →
            </Link>
          </div>
        </div>

        <div style={{
          borderTop: "1.5px solid var(--border)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "13px",
          color: "var(--muted)"
        }}>
          <div>© {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</div>
          <div>Built for Software Developers • Windows 10 & 11</div>
        </div>
      </div>
    </footer>
  );
}
