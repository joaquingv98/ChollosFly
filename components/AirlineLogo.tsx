"use client";

import { useState } from "react";

interface AirlineLogoProps {
  airline: string;
  logoUrl: string | null;
  emojiFallback: string;
  sizeClassName?: string;
}

export default function AirlineLogo({
  airline,
  logoUrl,
  emojiFallback,
  sizeClassName = "w-9 h-9"
}: AirlineLogoProps) {
  const [hasError, setHasError] = useState(false);
  const isLufthansa = airline.toLowerCase() === "lufthansa";

  if (hasError || !logoUrl) {
    return <span className="text-2xl">{emojiFallback}</span>;
  }

  return (
    <img
      src={logoUrl}
      alt={`Logo oficial de ${airline}`}
      className={`${sizeClassName} object-contain ${isLufthansa ? "bg-white rounded-md p-0.5 border border-slate-200" : ""}`}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
}
