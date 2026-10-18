import { Hero } from "@/components/home/Hero";
import { DiskReclaimTreemapDemo } from "@/components/home/DiskReclaimTreemapDemo";
import { Features } from "@/components/home/Features";
import { Pricing } from "@/components/home/Pricing";
import { DownloadSection } from "@/components/home/Download";
import { Faq } from "@/components/home/Faq";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <div className="container" style={{ margin: "0 auto" }}>
        <DiskReclaimTreemapDemo />
      </div>
      <Features />
      <Pricing />
      <DownloadSection />
      <Faq />
    </div>
  );
}
