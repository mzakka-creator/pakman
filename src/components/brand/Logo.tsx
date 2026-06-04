import type { CSSProperties } from "react";
import { siteImages } from "@/lib/site-images";

export function Logo({ className = "h-8 w-auto", style }: { className?: string; style?: CSSProperties }) {
  return <img src={siteImages.logo} alt="Pakman Packaging Solutions" className={className} style={style} />;
}

