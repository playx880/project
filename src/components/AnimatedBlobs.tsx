import React from "react";

const AnimatedBlobs: React.FC = () => (
  <div
    style={{
      position: "fixed",
      inset: 0,
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      pointerEvents: "none",
      overflow: "hidden",
    }}
    aria-hidden="true"
  >
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 1920 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ position: "absolute", inset: 0 }}
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 600 400"
          to="360 600 400"
          dur="18s"
          repeatCount="indefinite"
        />
        <ellipse
          cx="600"
          cy="400"
          rx="320"
          ry="180"
          fill="hsl(0,96%,27%)"
          fillOpacity="0.18"
        />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 1400 700"
          to="360 1400 700"
          dur="24s"
          repeatCount="indefinite"
        />
        <ellipse
          cx="1400"
          cy="700"
          rx="380"
          ry="200"
          fill="hsl(42,100%,97%)"
          fillOpacity="0.24"
        />
      </g>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 960 540"
          to="360 960 540"
          dur="36s"
          repeatCount="indefinite"
        />
        <ellipse
          cx="960"
          cy="540"
          rx="600"
          ry="320"
          fill="hsl(0,96%,27%)"
          fillOpacity="0.08"
        />
      </g>
    </svg>
  </div>
);

export default AnimatedBlobs;