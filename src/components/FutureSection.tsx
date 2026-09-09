import { useEffect, useRef, useState } from "react";
import Flower from "./Flower";
import { useReveal } from "../hooks/useReveal";
import "../styles/future-section.css";

const SOMALI_MESSAGE = `Fatxi,

Mararka qaar waxaan is weydiiyaa waxa ugu quruxda badan ee aan ka helay inaan ku barto. Ma ahayn oo keliya inaan helay qof aan la sheekaysto ama qof aan xusuuso badan wadaagno. Waxa aan helay qof aan si dhab ah ugu qiimeeyo nolosheyda.

Saaxiibtinimadeennu waxay soo martay waqti, masaafad, farxad, sheekooyin badan iyo xusuuso aan mar kasta dib ugu laabto. Waxaan soo xasuustaa 25-kii Nofeembar 2022, maalintii wax walba ka bilaabmeen. Markaan maanta dib u fiiriyo, ma rumaysan karo inta ay sheekadaasi soo martay.

Waxa aan ugu jeclahay waxa inaga dhexeeya ma aha hal maalin ama hal sawir. Waa kalsoonida, fahamka iyo xiriirka si tartiib ah u dhismay.

Waxaa laga yaabaa inaanan mar walba si fiican u sheegin, laakiin waxaan rabaa inaad ogaato in aan si dhab ah u jeclahay saaxiibtinimada inaga dhaxaysa. Waa wax aanan rabin in waqtiga, masaafada ama duruufaha noloshu ay si fudud u tirtiraan.

Laakiin qalbigayga waxaa ku jira rajo ka weyn saaxiibtinimada oo keliya.

Waxaan rajaynayaa in haddii Ilaahay inoo qoro, maalin maalmaha ka mid ah aan noqono labo qof oo aan kaliya xusuuso wadaagin, balse nolol wadaaga.

Waxaan jeclaan lahaa inaan mustaqbalka kula wadaago maalmo ka badan kuwii hore. In aan kula wadaago farxadda, dhibka, qorshayaasha iyo nolosha lafteeda. Waxaan jeclaan lahaa in haddii waqtigu iyo duruufuhu noo saamaxaan, xiriirkeennu uu maalin u gudbo meel ka qurux badan — guur iyo qoys aan si wanaagsan u dhisanno.

Ma doonayo inaan maanta ballan kuu dhigo wax aanan hubin. Noloshu waxay leedahay qorshaheeda, Ilaahayna isagaa og waxa berri dhici doona. Waxa keliya ee aan ogahay waa in haddii mustaqbalkaas uu inoo qoran yahay, aan jeclaan lahaa inaan adiga kula gaaro.

Haddii aan maalin uun wada fariisanno annagoo dib u xasuusanayna wax walba oo ina soo maray, waxaan jeclaan lahaa inaan dhahno:

"Wax walba waxay ka bilaabmeen saaxiibtinimo, laakiin Ilaahay wuxuu noo qoray wax ka qurux badan."

Fatxi, waxaan jeclaan lahaa inaad mar walba ogaato hal arrin:

Waxaan ku qiimeeyaa qofka aad tahay, waxaan jeclahay waxa inaga dhexeeya, waxaana rajaynayaa mustaqbal qurux badan oo haddii Ilaahay kheyr inoogu qoro, aan adiga kula wadaago.

Ugu dambayn, waxaa jira hal eray oo laga yaabo inaan marar badan afka kaaga sheegi waayay, laakiin maanta waxaan rabaa inaan qalbigayga kaaga qoro:

||WAAN_KU_JECLAHAY||

Waxaan jeclahay qofka aad tahay, waxaan jeclahay saaxiibtinimada inaga dhaxaysa, waxaan jeclahay xusuusta aan wadaagno, waxaana jeclaan lahaa in haddii Ilaahay kheyr inoo qoro, jacaylkaas uu maalin u noqdo nolol aan wadaagno.

Haddii ay tahay saaxiibtinimo — waxaan rabaa inaan ilaashanno.

Haddii ay tahay mustaqbal ka weyn — waxaan rajaynayaa inaan si wanaagsan u dhisno.

Haddii uu yahay guur — waxaan rajaynayaa inuu noqdo mid Ilaahay barakeeyo.

Ilaahay ha inoo doorto waxa inoo kheyr badan. 🤍`;

export default function FutureSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [petalsActive, setPetalsActive] = useState(false);
  const letterEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = letterEndRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPetalsActive(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const paragraphs = SOMALI_MESSAGE.split("\n\n");

  return (
    <section className="future-section" id="future">
      <div ref={ref} className={`future-inner reveal ${visible ? "visible" : ""}`}>
        <div className="future-header">
          <p className="section-label">10 · A friendship I never want to lose</p>
          <h2 className="section-heading future-heading">The Future I Hope For</h2>
        </div>

        <div className="future-letter-card">
          <div className="future-floral future-floral-tl" aria-hidden="true">
            <Flower variant="corner" color="#d9aeb4" />
          </div>
          <div className="future-floral future-floral-tr" aria-hidden="true">
            <Flower variant="corner" color="#d9aeb4" />
          </div>
          <div className="future-floral future-floral-bl" aria-hidden="true">
            <Flower variant="corner" color="#d9aeb4" />
          </div>
          <div className="future-floral future-floral-br" aria-hidden="true">
            <Flower variant="corner" color="#d9aeb4" />
          </div>

          {petalsActive && (
            <div className="future-petals" aria-hidden="true">
              {[...Array(6)].map((_, i) => (
                <span
                  key={i}
                  className="future-petal"
                  style={
                    {
                      left: `${10 + i * 15}%`,
                      animationDelay: `${i * 0.8}s`,
                      animationDuration: `${10 + i * 2}s`,
                      ["--petal-drift" as string]: `${(i % 2 === 0 ? 1 : -1) * 30}px`,
                    } as React.CSSProperties
                  }
                />
              ))}
            </div>
          )}

          <div className="future-letter-body">
            {paragraphs.map((para, i) => {
              if (para === "||WAAN_KU_JECLAHAY||") {
                return (
                  <p key={i} className="future-love-line">
                    Waan ku jeclahay. <span className="future-heart">❤️</span>
                  </p>
                );
              }
              return <p key={i} className="future-letter-para">{para}</p>;
            })}
          </div>

          <div className="future-signature">— Yahye 🤍</div>
        </div>

        <div ref={letterEndRef} style={{ height: "1px" }} aria-hidden="true" />
      </div>
    </section>
  );
}
