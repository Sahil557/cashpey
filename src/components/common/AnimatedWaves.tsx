import { useEffect, useState } from "react";

const AnimatedWaves: React.FC = () => {
  const [reRenderKey, setReRenderKey] = useState(0);

  useEffect(() => {
    setTimeout(() => setReRenderKey(prev => prev + 1), 10); // Small delay to force repaint
  }, []);

  return (
    <svg key={reRenderKey} xmlns="http://www.w3.org/2000/svg" width="1000" height="200" viewBox="0 0 1000 200" style={{ overflow: "hidden", transform: "rotate(155deg)" }}>
      <defs>
        <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <rect width="1000" height="200" fill="transparent" />
      <g fill="none" stroke="url(#waveGradient)" strokeWidth="3">
        {[0, 1000].map((offset) => (
          <g key={offset} transform={`translate(${offset}, 0)`}>
            {["120", "145", "170", "95"].map((y, i) => (
              <path key={i} d={`M0,${y} Q250,${parseInt(y) - 60} 500,${y} Q750,${parseInt(y) + 60} 1000,${y}`} strokeWidth="2">
                <animateTransform
                  attributeName="transform"
                  type="translate"
                  from="0 0"
                  to="-1000 0"
                  dur="12s"
                  repeatCount="indefinite"
                  begin="0s"
                />
              </path>
            ))}
          </g>
        ))}
      </g>
    </svg>
  );
};

export default AnimatedWaves;
