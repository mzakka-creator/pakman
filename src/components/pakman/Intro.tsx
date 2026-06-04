import { useEffect, useState } from "react";
import { siteImages } from "@/lib/site-images";

export function Intro({ onDone, tagline }: { onDone: () => void; tagline: string }) {
  const [stage, setStage] = useState(0); // 0 symbol, 1 logo, 2 tagline, 3 fading out

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 700);
    const t2 = setTimeout(() => setStage(2), 1500);
    const t3 = setTimeout(() => setStage(3), 2500);
    const t4 = setTimeout(() => onDone(), 3100);
    return () => [t1, t2, t3, t4].forEach(clearTimeout);
  }, [onDone]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal text-canvas transition-opacity duration-700"
      style={{ opacity: stage === 3 ? 0 : 1, pointerEvents: stage === 3 ? "none" : "auto" }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-8">
        <div
          className="relative flex items-center justify-center transition-all duration-700 ease-out"
          style={{ opacity: stage >= 0 ? 1 : 0 }}
        >
          {/* symbol = scaled crop of logo (we just use the whole logo, animated) */}
          <img
            src={siteImages.logo}
            alt="Pakman Packaging Solutions"
            className="object-contain transition-all duration-700 ease-out"
            style={{
              width: stage === 0 ? "72px" : "min(320px, 85vw)",
              height: stage === 0 ? "72px" : "auto",
              filter: "invert(1) brightness(2)",
              objectFit: "contain",
              objectPosition: stage === 0 ? "left center" : "center",
              clipPath: stage === 0 ? "inset(0 70% 0 0)" : "inset(0 0 0 0)",
            }}
          />
        </div>
        <p
          className="text-[10px] tracking-[0.4em] uppercase text-warm-gray transition-all duration-700"
          style={{ opacity: stage >= 2 ? 1 : 0, transform: stage >= 2 ? "translateY(0)" : "translateY(8px)" }}
        >
          {tagline}
        </p>
      </div>
    </div>
  );
}
