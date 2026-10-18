import Link from "next/link";
import { Check, Download } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Pricing() {
  return (
    <section id="pricing" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 className="section-title">Buy once. Keep your SSD clean forever.</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            No subscriptions. One perpetual license covers up to 3 PCs with all future ecosystem rule updates included.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "32px",
          maxWidth: "840px",
          margin: "0 auto"
        }}>
          {/* Free Evaluation Tier */}
          <div className="card" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontWeight: 800, fontSize: "13px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>
                14-Day Free Evaluation
              </div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "var(--text)", marginBottom: "16px" }}>
                Free <span style={{ fontSize: "16px", color: "var(--muted)", fontWeight: 500 }}>/ 14 days</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "24px", lineHeight: 1.6 }}>
                Full scanning and safe cleaning across all local and external drives.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Unlimited gigabytes reclaimed</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Full Treemap visualization</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Recycle Bin trash support</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> No credit card required</li>
              </ul>
            </div>

            <div style={{ marginTop: "32px" }}>
              <Link href="#download" className="btn btn-secondary" style={{ width: "100%" }}>
                <Download size={16} /> Download Free Evaluation
              </Link>
            </div>
          </div>

          {/* Developer Perpetual Tier */}
          <div className="card" style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            borderColor: "var(--accent)",
            background: "#ffffff",
            boxShadow: "0 16px 40px rgba(30, 107, 79, 0.12)"
          }}>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <div style={{ fontWeight: 800, fontSize: "13px", color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Developer Perpetual
                </div>
                <span className="badge" style={{ fontSize: "11px", padding: "2px 8px" }}>POPULAR</span>
              </div>
              <div style={{ fontSize: "38px", fontWeight: 800, color: "var(--text)", marginBottom: "16px" }}>
                ₹{siteConfig.pricing.perpetualInr} <span style={{ fontSize: "16px", color: "var(--muted)", fontWeight: 500 }}>/ $29 one-time</span>
              </div>
              <p style={{ fontSize: "14px", color: "var(--muted)", marginBottom: "24px", lineHeight: 1.6 }}>
                Perpetual license for commercial software development workstations.
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px", fontSize: "14px" }}>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> <strong>Install on up to 3 PCs</strong></li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Scheduled automatic scans & low-disk tray alert</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Docker & WSL2 disk compaction tools</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> Lifetime offline operation guarantee</li>
                <li style={{ display: "flex", gap: "10px", alignItems: "center" }}><Check size={16} color="#2BC48A" /> 30-day unconditional money-back guarantee</li>
              </ul>
            </div>

            <div style={{ marginTop: "32px" }}>
              <Link href="https://valentir.com/checkout?product=spaceback" className="btn btn-primary" style={{ width: "100%" }}>
                Buy Perpetual License
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
