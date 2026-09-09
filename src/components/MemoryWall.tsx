import { useEffect, useRef, useState } from "react";
import Flower from "./Flower";
import { memoryCards } from "../data/images";
import "../styles/memory-wall.css";

export default function MemoryWall() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = gridRef.current?.querySelectorAll(".memory-card");
    if (!cards) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activeCard === null) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveCard(null);
    };
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [activeCard]);

  const card = activeCard !== null ? memoryCards[activeCard] : null;

  return (
    <section className="memory-wall" id="memory-wall">
      <div className="memory-wall-header">
        <p className="section-label">06 · Memory Wall</p>
        <h2 className="section-heading">Six memories, one story.</h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>Taabo kaar si aad u furto xusuus.</p>
      </div>

      <div className="memory-grid" ref={gridRef}>
        {memoryCards.map((mc, i) => (
          <div
            className="memory-card"
            key={mc.id}
            onClick={() => setActiveCard(i)}
            role="button"
            tabIndex={0}
            aria-label={`Open memory: ${mc.title}`}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveCard(i); }
            }}
          >
            <div className="memory-card-image">
              {mc.image ? (
                <img src={mc.image} alt={mc.title} />
              ) : (
                <div className="memory-card-floral" aria-hidden="true">
                  <Flower variant="small" color="#d9aeb4" />
                </div>
              )}
            </div>
            <div className="memory-card-body">
              <p className="memory-card-number">{mc.number}</p>
              <p className="memory-card-date">{mc.date}</p>
              <h3 className="memory-card-title">{mc.title}</h3>
              <p className="memory-card-desc">{mc.description}</p>
              <p className="memory-card-hint">Fur xusuusta →</p>
            </div>
          </div>
        ))}
      </div>

      {card && (
        <div
          className="memory-modal-overlay visible"
          onClick={() => setActiveCard(null)}
          role="dialog"
          aria-modal="true"
          aria-label={card.title}
        >
          <div className="memory-modal" onClick={(e) => e.stopPropagation()}>
            <button className="memory-modal-close" onClick={() => setActiveCard(null)} aria-label="Close memory">×</button>
          {card.image ? (
            <div className="memory-modal-image"><img src={card.image} alt={card.title} /></div>
          ) : (
            <div className="memory-modal-floral" aria-hidden="true">
              <Flower variant="full" color="#d9aeb4" />
            </div>
          )}
            <div className="memory-modal-body">
              <p className="memory-modal-number">{card.number}</p>
              <h3 className="memory-modal-title">{card.title}</h3>
              <p className="memory-modal-date">{card.date}</p>
              <p className="memory-modal-story">{card.story}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
