import { useEffect, useRef } from "react";
import { galleryImages } from "../data/images";
import "../styles/gallery.css";

export default function Gallery() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".gallery-item");
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-header">
        <p className="section-label">07 · Photo Gallery</p>
        <h2 className="section-heading">Moments, preserved.</h2>
        <p className="section-subtitle" style={{ margin: "0 auto" }}>
          A collection of real photographs — each one a page from the story.
        </p>
      </div>

      <div className="gallery-grid" ref={gridRef}>
        {galleryImages.map((img, i) => (
          <div className={`gallery-item ${img.size}`} key={i}>
            <img src={img.src} alt={img.caption} loading="lazy" />
            <span className="gallery-category">{img.category}</span>
            <div className="gallery-caption">{img.caption}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
