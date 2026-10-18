import Link from "next/link";
import { Download, HardDrive, ShieldCheck, Trash2, Zap } from "lucide-react";
import { siteConfig } from "@/config/site";
import { releaseConfig } from "@/config/release";

export function Hero() {
  return (
    <section style={{ paddingTop: "72px", paddingBottom: "48px", textAlign: "center" }}>
      <div className="container" style={{ maxWidth: "920px" }}>
        <div style={{ display: "inline-flex", marginBottom: "20px" }}>
          <span className="badge">
            <HardDrive size={15} color="#2BC48A" /> Safe Dev Disk Cleaner • Reclaims 50GB–150GB in 1 Click
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(38px, 6vw, 64px)",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
          marginBottom: "24px",
          color: "var(--text)"
        }}>
          Get your disk back.{" "}
          <span style={{
            background: "linear-gradient(135deg, #1E6B4F 0%, #14B8A6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            Safely & without fear.
          </span>
        </h1>

        <p style={{
          fontSize: "clamp(17px, 2.2vw, 20px)",
          color: "var(--muted)",
          lineHeight: 1.6,
          marginBottom: "36px",
          maxWidth: "780px",
          margin: "0 auto 36px"
        }}>
          Every developer's drive slowly fills up with forgotten <code>node_modules</code>, gigabytes of Rust <code>target</code> folders, Docker build caches, and bloated WSL2 disks. 
          Spaceback finds them in seconds and cleans them into the Windows Recycle Bin with full git-status protection.
        </p>

        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", marginBottom: "32px" }}>
          <Link href="#download" className="btn btn-primary" style={{ fontSize: "16px", padding: "16px 36px" }}>
            <Download size={18} /> Download for Windows (v{releaseConfig.version})
          </Link>
          <Link href="#demo" className="btn btn-secondary" style={{ fontSize: "16px", padding: "16px 36px" }}>
            Try Interactive Treemap
          </Link>
        </div>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "28px",
          flexWrap: "wrap",
          fontSize: "14px",
          color: "var(--muted)",
          fontWeight: 600
        }}>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={16} color="var(--accent)" /> Never Deletes Uncommitted Git Work
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Trash2 size={16} color="var(--accent)" /> Recycled First, Never Hard-Deleted
          </span>
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <Zap size={16} color="var(--accent)" /> 1.4s Fast NTFS MFT Scan
          </span>
        </div>
      </div>
    </section>
  );
}
