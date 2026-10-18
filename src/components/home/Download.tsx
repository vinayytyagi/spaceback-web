import { releaseConfig } from "@/config/release";
import { Download, CheckCircle2 } from "lucide-react";

export function DownloadSection() {
  return (
    <section id="download" className="section" style={{ background: "#ffffff", borderTop: "1.5px solid var(--border)", borderBottom: "1.5px solid var(--border)" }}>
      <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
        <h2 className="section-title">Install Spaceback on Windows</h2>
        <p className="section-desc" style={{ margin: "0 auto 36px" }}>
          Single self-contained Windows executable. Runs portable or installs with standard desktop shortcuts.
        </p>

        <div style={{
          background: "var(--bg)",
          border: "1.5px solid var(--border)",
          borderRadius: "var(--radius-lg)",
          padding: "36px",
          textAlign: "left",
          marginBottom: "32px"
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", marginBottom: "24px" }}>
            <div>
              <div style={{ fontSize: "20px", fontWeight: 800, color: "var(--text)" }}>{releaseConfig.installerName}</div>
              <div style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>
                Version {releaseConfig.version} • {releaseConfig.installerSize} • Windows 10 & 11 (64-bit)
              </div>
            </div>
            <a
              href={releaseConfig.downloadUrl}
              className="btn btn-primary"
              style={{ fontSize: "15px", padding: "14px 28px" }}
            >
              <Download size={16} /> Download Installer (.exe)
            </a>
          </div>

          <div style={{ background: "#ffffff", padding: "16px", borderRadius: "8px", border: "1.5px solid var(--border)" }}>
            <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--muted)", fontWeight: 800, marginBottom: "6px" }}>
              SHA-256 Checksum (Integrity Verification)
            </div>
            <code style={{ fontSize: "12px", color: "var(--accent)", fontFamily: "var(--font-mono)", wordBreak: "break-all" }}>
              {releaseConfig.sha256}
            </code>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px", color: "var(--muted)", fontSize: "13px", flexWrap: "wrap", fontWeight: 600 }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle2 size={16} color="#2BC48A" /> Digitally Signed
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle2 size={16} color="#2BC48A" /> Zero Telemetry or Analytics
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <CheckCircle2 size={16} color="#2BC48A" /> Windows Defender Verified
          </span>
        </div>
      </div>
    </section>
  );
}
