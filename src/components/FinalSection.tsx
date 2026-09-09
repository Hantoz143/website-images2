import { useEffect, useState } from "react";
import Flower from "./Flower";
import "../styles/final.css";

function getNextBirthday(): { days: number; hours: number; minutes: number; seconds: number } {
  const now = new Date();
  const year = now.getMonth() > 8 || (now.getMonth() === 8 && now.getDate() > 12)
    ? now.getFullYear() + 1
    : now.getFullYear();
  const birthday = new Date(year, 8, 12, 0, 0, 0);
  const diff = birthday.getTime() - now.getTime();

  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function FinalSection() {
  const [time, setTime] = useState(getNextBirthday());

  useEffect(() => {
    const interval = setInterval(() => setTime(getNextBirthday()), 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section className="final-section" id="final">
      <div className="final-bg-gradient" aria-hidden="true" />

      <div className="final-floral-tl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="final-floral-tr" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="final-floral-bl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="final-floral-br" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>

      <div className="final-stars" aria-hidden="true">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="final-star"
            style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 4}s` }}
          />
        ))}
      </div>

      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}>
        {[...Array(8)].map((_, i) => (
          <span key={i} className="final-petal"
            style={
              {
                left: `${Math.random() * 100}%`,
                bottom: "-20px",
                animationDelay: `${Math.random() * 15}s`,
                animationDuration: `${14 + Math.random() * 8}s`,
                ["--drift" as string]: `${(Math.random() - 0.5) * 100}px`,
              } as React.CSSProperties
            }
          />
        ))}
      </div>

      <div className="final-content">
        <p className="final-label">12 · Today is your day</p>
        <p className="final-script">Happy Birthday</p>
        <h2 className="final-heading">Fatxi.</h2>
        <p className="final-message">
          12 September — maanta waa maalintaada. Ilaahay ha kuu barakeeyo sannadka cusub, ha kuu fududeeyo riyooyinkaaga, hana kuu ilaaliyo qalbigaaga.
        </p>

        <div className="countdown" aria-label="Countdown to September 12">
          <div className="countdown-unit"><span className="countdown-number">{time.days}</span><span className="countdown-label">Maalmood</span></div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit"><span className="countdown-number">{time.hours}</span><span className="countdown-label">Saacad</span></div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit"><span className="countdown-number">{time.minutes}</span><span className="countdown-label">Daqiiqo</span></div>
          <span className="countdown-separator">:</span>
          <div className="countdown-unit"><span className="countdown-number">{time.seconds}</span><span className="countdown-label">Ilbidhiqsi</span></div>
        </div>

        <div className="final-cta">
          <button className="btn btn-light" onClick={scrollToTop}>Read it again ↑</button>
        </div>
      </div>
    </section>
  );
}
