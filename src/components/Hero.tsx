import Flower from "./Flower";
import FloatingPetals from "./FloatingPetals";
import { imageSources } from "../data/images";
import "../styles/hero.css";

export default function Hero() {
  const scrollToStory = () => {
    document.getElementById("beginning")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" aria-label="Happy Birthday, Fatxi">
      <div className="hero-bg">
        <img src={imageSources.hero} alt="Portrait of Fatxi" />
      </div>

      <div className="hero-ornament" aria-hidden="true" />

      <div className="hero-floral-tl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="hero-floral-tr" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="hero-floral-bl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
      <div className="hero-floral-br" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>

      <FloatingPetals count={14} />

      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
        <span className="sparkle" style={{ top: "15%", left: "20%", animationDelay: "0s" }} />
        <span className="sparkle" style={{ top: "25%", left: "75%", animationDelay: "1s" }} />
        <span className="sparkle" style={{ top: "60%", left: "15%", animationDelay: "2s" }} />
        <span className="sparkle" style={{ top: "70%", left: "80%", animationDelay: "0.5s" }} />
        <span className="sparkle" style={{ top: "40%", left: "50%", animationDelay: "1.5s" }} />
      </div>

      <div className="hero-content">
        <p className="hero-for">for Fatxi</p>
        <h1 className="hero-heading">
          Happy Birthday,<br /><em>Fatxi Abdirahman</em>
        </h1>
        <p className="hero-description">
          A little website for a big collection of memories — the kind that distance can change, but time cannot erase.
        </p>
        <p className="hero-date">September 12 · A day worth remembering</p>
        <div className="hero-cta">
          <button className="btn" onClick={scrollToStory}>Open your story ↓</button>
        </div>
      </div>

      <div className="hero-scroll-hint"><span>Scroll</span></div>
    </section>
  );
}
