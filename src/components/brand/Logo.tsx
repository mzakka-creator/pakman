import type { CSSProperties } from "react";
import pakmanLogo from "@/assets/pakman-logo.jpeg";

export function Logo({ className = "h-8 w-auto", style }: { className?: string; style?: CSSProperties }) {
  return <img src={pakmanLogo} alt="Pakman Packaging Solutions" className={className} style={style} />;
}

