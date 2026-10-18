import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

interface LegalPageProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export function LegalPage({ title, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="container" style={{ maxWidth: "840px", padding: "64px 24px" }}>
      <div style={{ marginBottom: "36px", borderBottom: "1.5px solid var(--border)", paddingBottom: "24px" }}>
        <Link href="/" style={{ color: "var(--accent)", fontSize: "14px", fontWeight: 700, display: "inline-block", marginBottom: "16px" }}>
          ← Back to Spaceback Home
        </Link>
        <h1 style={{ fontSize: "36px", fontWeight: 800, color: "var(--text)", marginBottom: "8px" }}>{title}</h1>
        <div style={{ fontSize: "13px", color: "var(--muted)" }}>
          Effective Date: {lastUpdated} • {siteConfig.company.legalName}
        </div>
      </div>
      <div style={{
        lineHeight: 1.7,
        fontSize: "15px",
        color: "#334155"
      }}>
        {children}
      </div>
    </div>
  );
}
