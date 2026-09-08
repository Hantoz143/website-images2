import { useEffect, useRef } from "react";
import "../styles/timeline.css";

const timelineEvents: { date: string; title: string; desc: string }[] = [
  { date: "25 Nov 2022", title: "The beginning", desc: "TikTok, wada hadal, iyo tallaabadii ugu horreysay ee kalsoonida." },
  { date: "20 Feb 2024", title: "The day we met", desc: "Maalintii sheekadu ka soo baxday shaashadda oo noqotay xusuus dhab ah." },
  { date: "Liido", title: "One unforgettable night", desc: "Sawirro, fiidiyowyada, qosol, iyo xusuuso." },
  { date: "90 KM", title: "Jowhar ↔ Xamar", desc: "Masaafad noqotay qayb ka mid ah sheekada." },
  { date: "14 Jan 2025", title: "Kenya", desc: "Maalintii masaafadu qaabkeeda u beddeshay." },
  { date: "End of 2025", title: "A future imagined", desc: "Wada hadal ku saabsan guurka, waqtiga, nolosha, iyo inaan deg-degnoono waxyaalaha muhiimka ahaa." },
  { date: "A difficult day", title: "You were there", desc: "Waqti ay Fatxi garab taagnayd oo si macquul ah u taageertay." },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = sectionRef.current?.querySelectorAll(".timeline-item");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="timeline-section" id="timeline">
      <div className="timeline-header">
        <p className="section-label">05 · Timeline</p>
        <h2 className="section-heading">The story, in order.</h2>
      </div>
      <div className="timeline" ref={sectionRef}>
        {timelineEvents.map((event, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <p className="timeline-date">{event.date}</p>
              <h3 className="timeline-title">{event.title}</h3>
              <p className="timeline-desc">{event.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
