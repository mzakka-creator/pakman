import type { CSSProperties } from "react";
import logoAsset from "@/assets/pakman-logo.asset.json";

export function Logo({ className = "h-8 w-auto", style }: { className?: string; style?: CSSProperties }) {
  return <img src={logoAsset.url} alt="Pakman Packaging Solutions" className={className} style={style} />;
}

