import { ShieldCheck, HardDrive, FolderSync, RefreshCw, Cpu, Layers, AlertCircle, Ban } from "lucide-react";

const FEATURES = [
  {
    icon: ShieldCheck,
    title: "The 5-Point Safety Engine",
    desc: "Before offering to delete any directory, Spaceback verifies that a recognized project manifest is present (package.json, Cargo.toml), confirms the directory is in .gitignore, and checks that git working tree has no uncommitted changes."
  },
  {
    icon: Ban,
    title: "Junction & Symlink Safe",
    desc: "Never traverses Windows directory junctions or symbolic links. Deletes only the isolated target junction without ever touching the source storage volume."
  },
  {
    icon: FolderSync,
    title: "Docker & WSL2 Disk Compaction",
    desc: "Detects oversized ext4.vhdx virtual disks and dangling Docker overlay2 layers. Provides 1-click safe compaction to return 40GB+ of unshrinkable disk space back to Windows."
  },
  {
    icon: Layers,
    title: "12 Ecosystem Rules Built-In",
    desc: "Deep knowledge of Node (.next, .turbo, dist), Rust (target), Python (.venv, __pycache__), Java/Gradle (.gradle, build), Flutter, Go, and Android SDK emulator caches."
  },
  {
    icon: RefreshCw,
    title: "Tray Low-Disk Guard",
    desc: "Runs quietly in the background and pops a gentle notification whenever your SSD drops below 10GB free, letting you reclaim space before your build tools crash."
  },
  {
    icon: HardDrive,
    title: "Recycle Bin Undo Ledger",
    desc: "All files are moved to the Windows Recycle Bin by default using Windows Shell APIs, allowing instant restoration if you change your mind."
  }
];

export function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2 className="section-title">Built specifically because developers shouldn't run out of disk</h2>
          <p className="section-desc" style={{ margin: "0 auto" }}>
            Generic disk cleaners have no idea what node_modules or cargo target directories are. Spaceback was built by engineers, for engineers.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px"
        }}>
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="card">
                <div style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "14px",
                  background: "#e8f1e4",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--accent)",
                  marginBottom: "20px"
                }}>
                  <Icon size={26} />
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: 800, marginBottom: "12px", color: "var(--text)" }}>
                  {f.title}
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "14px", lineHeight: 1.6 }}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
