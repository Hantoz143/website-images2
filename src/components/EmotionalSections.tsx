import { useRef, useState } from "react";
import Flower from "./Flower";
import { useReveal } from "../hooks/useReveal";
import { imageSources } from "../data/images";
import "../styles/emotional.css";

export function BirthdaySurprise() {
  const [opened, setOpened] = useState(false);
  const [confetti, setConfetti] = useState<
    { id: number; left: number; delay: number; color: string; size: number; duration: number }[]
  >([]);
  const { ref, visible } = useReveal<HTMLDivElement>();

  const handleOpen = () => {
    if (!opened) {
      setOpened(true);
      const colors = ["#d9aeb4", "#8b4f58", "#d9cbc0", "#fffaf4", "#f8f3ec"];
      const pieces = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: 6 + Math.random() * 10,
        duration: 2 + Math.random() * 2,
      }));
      setConfetti(pieces);
      setTimeout(() => setConfetti([]), 5000);
    } else {
      setOpened(false);
    }
  };

  return (
    <section className="birthday-surprise" id="surprise">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="birthday-surprise-header">
          <p className="section-label">08 · A little surprise</p>
          <h2 className="section-heading">Something for you.</h2>
        </div>

        <div
          className="birthday-arrangement"
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label={opened ? "Close birthday message" : "Open birthday message"}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleOpen(); }
          }}
        >
          <div className="birthday-floral-wrap">
            <div className="birthday-floral birthday-floral-pulse" aria-hidden="true">
              <Flower variant="full" color="#d9aeb4" />
            </div>
            <div className="birthday-particles" aria-hidden="true">
              {[...Array(8)].map((_, i) => (
                <span key={i} className="birthday-particle"
                  style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`, animationDelay: `${Math.random() * 3}s` }}
                />
              ))}
            </div>
            <div className="birthday-photo">
              <img src={imageSources.birthday[0]} alt="Sawirka dhalashada ee Fatxi" />
            </div>
            <div className="birthday-ribbon">For you, Fatxi</div>
          </div>

          <p className="birthday-cta">{opened ? "Close" : "Tap to open"}</p>
          <p className="birthday-cta-hint">{opened ? "" : "Raryo yar, ku dhufan gudaheada ubaxyada."}</p>
        </div>

        {opened && (
          <div className="birthday-reveal visible">
            <h3 className="birthday-reveal-title">For you, Fatxi</h3>
            <p className="birthday-reveal-text">
              {"Maanta waxna kaama doonayo. Ma doonayo inaan su'aal ku ku wiidiiyo.\n\nWaxaan rabaa hal wax oo keliya: inaan ku iraahdo —\n\nDhalasho Wacan, Fatxi."}
            </p>
          </div>
        )}
      </div>

      {confetti.length > 0 && (
        <div className="confetti-container" aria-hidden="true">
          {confetti.map((c) => (
            <span key={c.id} className="confetti-piece"
              style={
                {
                  left: `${c.left}%`,
                  top: "-20px",
                  width: `${c.size}px`,
                  height: `${c.size}px`,
                  background: c.color,
                  borderRadius: c.id % 2 === 0 ? "50%" : "50% 0 50% 50%",
                  animation: `confetti-fall ${c.duration}s ease-in ${c.delay}s forwards`,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}

export function WishesSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const wishes: { title: string; text: string }[] = [
    { title: "Peace", text: "Ilaahay ha kuu fududeeyo wax kasta oo qalbigaagu doonayo, hana kuu keeno sannado badan waliba deggan kheyrna leh." },
    { title: "Happiness", text: "Waxan kuu rajeyna maalmo badan oo aad si dhab ah u dhoolla-caddayso, iyo dareemo kuu keena farxad dhab ah." },
    { title: "A beautiful future", text: "Haddii noloshu meel kale inoo waddo, Ilaahay kheyrka ha inoo dooro. Haddii masaafadu sii dheeraato, xusuustii wanaagsanaa ha sii ahaato mid qurux badan waligeydna sii jiri doonta." },
  ];

  return (
    <section className="wishes-section" id="wishes">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="wishes-header">
          <p className="section-label">09 · My Wishes</p>
          <h2 className="section-heading">What I hope this year brings.</h2>
        </div>
        <div className="wishes-grid">
          {wishes.map((wish, i) => (
            <div className="wish-card" key={i}>
              <div className="wish-floral" aria-hidden="true"><Flower variant="small" color="#d9aeb4" /></div>
              <h3 className="wish-title">{wish.title}</h3>
              <p className="wish-text">{wish.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LetterSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const floralRef = useRef<HTMLDivElement>(null);

  return (
    <section className="letter-section" id="letter">
      <div ref={ref} className={`reveal ${visible ? "visible" : ""}`}>
        <div className="letter-header">
          <p className="section-label">11 · The Letter</p>
          <h2 className="section-heading">One last thing.</h2>
        </div>
        <div className="letter-card">
          <div className="letter-text">
            <p>Waxaa laga yaabaa in noloshu ay dadka kala fogeyso. Waxaa laga yaabaa in hadalladu yaraadaan. Waxaa laga yaabaa in masaafadu sii dheeraato.</p>
            <p>Laakiin waxaa jira dad marka ay noloshaada mar galaan, xusuustooda aysan si fudud uga bixin. Adiga waxaad ka mid tahay dadkaas.</p>
            <p>Markaan dib u milicsado, waxaan xasuustaa TikTok. Waxaan xasuustaa 25-ka Nofeembar 2022. Waxaan xasuustaa 20-ka Febraayo 2024. Waxaan xasuustaa Jowhar. Waxaan xasuustaa 90km. Waxaan xasuustaa Liido. Waxaan xasuustaa dhoolla-caddayntaada.</p>
            <p>Waxaan xasuustaa maalintii aad Kenya aaday — 14-ka Janaayo 2025. Waxaan xasuustaa waxyaabihii aan rabay inaan kuu sheego oo aan cabsi darteed u aamusay. Waxaan xasuustaa hadalkii guurka. Waxaan xasuustaa maalintii aad garabkeyga noqotay markii Ayeeyaday geeriyootay.</p>
          </div>
          <div className="letter-center">
            <p className="letter-center-text">"Waxaan ku faraxsanahay inaan ku bartay."</p>
          </div>
          <div className="letter-closing">
            <p>Mararka qaar waan kuu xiisaa. Mararka qaarna waxaan dib ugu noqdaa xusuusihii aad ii reebtay.</p>
            <p>Adiga oo aan ogeyn, waxaad noqotay qayb ka mid ah sheeko aanan rabin in waqtigu iga tirtiro.</p>
          </div>
        </div>
      </div>
      <div ref={floralRef} style={{ display: "flex", justifyContent: "center", marginTop: "var(--space-4)", opacity: 0.3 }} aria-hidden="true">
        <Flower variant="branch" color="#d9aeb4" />
      </div>
    </section>
  );
}
