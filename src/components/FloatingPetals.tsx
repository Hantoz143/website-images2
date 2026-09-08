import { useEffect, useState } from "react";

interface PetalConfig {
  id: number;
  left: number;
  delay: number;
  duration: number;
  drift: number;
  size: number;
  opacity: number;
}

export default function FloatingPetals({ count = 12 }: { count?: number }) {
  const [petals, setPetals] = useState<PetalConfig[]>([]);

  useEffect(() => {
    const configs: PetalConfig[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 12 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 120,
      size: 8 + Math.random() * 10,
      opacity: 0.3 + Math.random() * 0.3,
    }));
    setPetals(configs);
  }, [count]);

  return (
    <div
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 2 }}
      aria-hidden="true"
    >
      {petals.map((p) => (
        <span
          key={p.id}
          className="petal"
          style={
            {
              left: `${p.left}%`,
              bottom: "-20px",
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
              opacity: p.opacity,
              ["--drift" as string]: `${p.drift}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
