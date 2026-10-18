"use client";

import React, { useState } from "react";
import { HardDrive, Trash2, CheckCircle2, ShieldCheck, RefreshCw, AlertTriangle, ArrowRight } from "lucide-react";

const INITIAL_TREES = [
  { id: "node", label: "node_modules (42 abandoned repos)", sizeGb: 68.4, color: "#1E6B4F", safe: true },
  { id: "docker", label: "Docker dangling images & build cache", sizeGb: 34.8, color: "#14B8A6", safe: true },
  { id: "build", label: ".next / .nuxt / target build caches", sizeGb: 24.1, color: "#2BC48A", safe: true },
  { id: "pkg", label: "pnpm & npm global store duplicate files", sizeGb: 18.2, color: "#D97706", safe: true },
  { id: "python", label: "Python .venv & __pycache__ folders", sizeGb: 8.9, color: "#5A6F61", safe: true },
];

export function DiskReclaimTreemapDemo() {
  const [items, setItems] = useState(INITIAL_TREES);
  const [reclaimedGb, setReclaimedGb] = useState(0);
  const [isCleaning, setIsCleaning] = useState(false);

  const totalReclaimable = items.reduce((acc, curr) => acc + curr.sizeGb, 0);

  const handleCleanAll = () => {
    setIsCleaning(true);
    setTimeout(() => {
      setReclaimedGb(Number(totalReclaimable.toFixed(1)));
      setItems([]);
      setIsCleaning(false);
    }, 800);
  };

  const handleReset = () => {
    setItems(INITIAL_TREES);
    setReclaimedGb(0);
  };

  return (
    <div id="demo" style={{
      background: "var(--surface)",
      border: "2px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "0 24px 64px rgba(30, 107, 79, 0.08)"
    }}>
      {/* Studio Header Strip */}
      <div style={{
        padding: "18px 28px",
        background: "var(--surface-raised)",
        borderBottom: "1.5px solid var(--border)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "16px"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <HardDrive size={18} color="var(--accent)" />
          <span style={{ fontWeight: 800, fontSize: "15px", color: "var(--text)" }}>
            Developer Storage Treemap Scanner (C: & D: Drives)
          </span>
          <span style={{
            fontSize: "12px",
            padding: "3px 10px",
            background: "#ffffff",
            color: "var(--accent)",
            borderRadius: "6px",
            fontWeight: 800,
            border: "1px solid var(--border)"
          }}>
            MFT SCAN COMPLETED IN 1.4s
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {items.length === 0 ? (
            <button
              onClick={handleReset}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "6px",
                fontSize: "13px",
                color: "var(--accent)",
                fontWeight: 700
              }}
            >
              <RefreshCw size={14} /> Scan Again
            </button>
          ) : (
            <button
              onClick={handleCleanAll}
              className="btn btn-primary"
              style={{ padding: "8px 18px", fontSize: "13px" }}
            >
              <Trash2 size={14} /> {isCleaning ? "Safely Cleaning to Trash..." : `Clean ${totalReclaimable.toFixed(1)} GB Safely`}
            </button>
          )}
        </div>
      </div>

      {/* Main Studio Viewport */}
      <div style={{ padding: "36px" }}>
        {items.length > 0 ? (
          <div>
            {/* Visual Treemap Blocks */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1.5fr 1fr",
              gap: "12px",
              minHeight: "220px",
              marginBottom: "24px"
            }}>
              {/* Big Left Box */}
              <div style={{
                background: items[0].color,
                color: "#ffffff",
                borderRadius: "14px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontWeight: 800, fontSize: "16px" }}>{items[0].label}</span>
                  <span style={{ fontSize: "11px", background: "rgba(255,255,255,0.2)", padding: "2px 8px", borderRadius: "4px" }}>
                    SAFE (GIT IGNORED)
                  </span>
                </div>
                <div style={{ fontSize: "36px", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                  {items[0].sizeGb} GB
                </div>
              </div>

              {/* Stacked Right Boxes */}
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {items.slice(1).map((item) => (
                  <div
                    key={item.id}
                    style={{
                      background: item.color,
                      color: "#ffffff",
                      borderRadius: "12px",
                      padding: "12px 18px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flex: 1
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "13px" }}>{item.label}</div>
                      <div style={{ fontSize: "11px", opacity: 0.85 }}>Recyclable without project loss</div>
                    </div>
                    <div style={{ fontSize: "20px", fontWeight: 800, fontFamily: "var(--font-mono)" }}>
                      {item.sizeGb} GB
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Safety Verification Strip */}
            <div style={{
              background: "var(--surface-raised)",
              border: "1px solid var(--border)",
              borderRadius: "10px",
              padding: "16px 20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "12px",
              fontSize: "13px"
            }}>
              <span style={{ display: "flex", alignItems: "center", gap: "8px", fontWeight: 700, color: "var(--accent)" }}>
                <ShieldCheck size={16} /> 5-Step Safety Check: Git status verified • No uncommitted code touched • Sinks to Windows Trash
              </span>
              <span style={{ fontFamily: "var(--font-mono)", color: "var(--muted)" }}>
                Total Reclaimable: <strong>{totalReclaimable.toFixed(1)} GB</strong>
              </span>
            </div>
          </div>
        ) : (
          <div style={{
            textAlign: "center",
            padding: "48px 24px",
            background: "#f0fdf4",
            borderRadius: "16px",
            border: "2px solid #bbf7d0"
          }}>
            <CheckCircle2 size={48} color="#2BC48A" style={{ margin: "0 auto 16px" }} />
            <h3 style={{ fontSize: "24px", fontWeight: 800, color: "var(--accent)", marginBottom: "8px" }}>
              {reclaimedGb} GB of Waste Successfully Cleaned!
            </h3>
            <p style={{ color: "var(--muted)", maxWidth: "500px", margin: "0 auto 20px", fontSize: "15px" }}>
              All folders were safely moved to your Windows Recycle Bin. Nothing was permanently deleted without your explicit consent.
            </p>
            <button onClick={handleReset} className="btn btn-secondary" style={{ padding: "10px 24px", fontSize: "13px" }}>
              Run Another Diagnostic Scan
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
