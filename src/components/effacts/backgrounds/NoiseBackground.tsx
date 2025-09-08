import React from "react";
import "./noiseBackground.css";

interface NoiseBackgroundProps {
  opacity?: number; // 0 to 1
  blendMode?: "overlay" | "soft-light" | "multiply" | "normal";
  baseFrequency?: number; // controls grain size
  className?: string; // optional custom class
}

export const NoiseBackground: React.FC<NoiseBackgroundProps> = ({
  opacity = 0.15,
  blendMode = "normal",
  baseFrequency = 0.9,
  className = "",
}) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves={3}
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div
        className={`noise-background ${className}`}
        style={{
          filter: `url(#noiseFilter)`,
          mixBlendMode: blendMode,
          opacity,
        }}
      />
    </>
  );
};
