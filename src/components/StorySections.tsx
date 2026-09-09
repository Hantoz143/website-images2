import Flower from "./Flower";
import { useReveal } from "../hooks/useReveal";
import { imageSources } from "../data/images";
import "../styles/story.css";

export function BeginningSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section id="beginning" className="story-section">
      <div ref={ref} className={`story-section-inner reveal ${visible ? "visible" : ""}`}>
        <div className="story-text">
          <p className="section-label">01 · The beginning</p>
          <h2 className="section-heading">It started with a hello.</h2>
          <p className="section-subtitle">
            25 Nofeembar 2022 — taariikh markii hore caadi u ekaayd, laakiin noqotay boggagii ugu horreeyay ee sheeko qiimo leh.
          </p>
          <div className="section-story story-somali">
            <p>Mararka qaar waxaan is weydiiyaa haddii aan maalintii 25-ka Nofeembar 2022 ogaan lahayn halka ay nagu dambayn doonto isbarashadii TikTok, ma sidaan ayaynu u bilaabi lahayn?</p>
            <p>Waxay ahayd waqti aanay sahlanayn in gabar iyo wiil ay saaxiibtinimo dhab ah yeeshaan. Waxaa jiray duruufo badan oo naga hor istaagi karayay inaan isu soo dhowaanno.</p>
            <p>Laakiin sidaas ma dhicin.</p>
            <p>Wax yar wax yar ayay kalsoonidu u timid. Hadallo badan ayaa naga dhexeeyay, waqti ayaa ina dhex maray, waxaana ugu dambayn noqonnay laba qof oo isku aaminay meel aysan labadeenuba markii hore filayn.</p>
          </div>
          <blockquote className="pull-quote">"Waxa ugu quruxda badnaa wuxuu ahaa sida aan isu barannay kadib."</blockquote>
        </div>
        <div className="story-image-wrap">
          <div className="story-image-frame">
            <div className="story-floral tl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <div className="story-floral br" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <img src={imageSources.memory[0]} alt="Xusuus ka bilaabaysay sheekada" />
          </div>
          <p className="story-image-caption">Boggagii kasta ee wax kasta.</p>
        </div>
      </div>
    </section>
  );
}

export function MeetingSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="story-section alt reverse" id="meeting">
      <div ref={ref} className={`story-section-inner reveal ${visible ? "visible" : ""}`}>
        <div className="story-text">
          <p className="section-label">02 · The day we met</p>
          <h2 className="section-heading">20 February 2024.</h2>
          <p className="section-subtitle">20 Febraayo 2024 — waa maalintii saaxiibtinimadii shaashaddu noqotay xusuus dhab ah, iyo kulan rasmi ah.</p>
          <div className="section-story story-somali">
            <p>Bilado ka dib oo wada hadal ah oo shaashadda marayay, 20 Febraayo 2024 waa maalintii sheekadu ka soo baxday telefoonka oo soo gaaray adduunka dhabta ah.</p>
            <p>Markii ugu horreysay ee aan isaga ceshano meesha isla mararka ah. Markii ugu horreysay ee codku yeesho waji, joogto, iyo kul ka shaashadda aan kuixin karin.</p>
          </div>
        </div>
        <div className="story-image-wrap">
          <div className="story-image-frame">
            <div className="story-floral tl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <div className="story-floral br" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <img src={imageSources.meeting[0]} alt="20 Febraayo 2024 — maalintii aan isku aragnay" />
          </div>
          <p className="story-image-caption">sawirkan aad baan u jeclahay.</p>
        </div>
      </div>
    </section>
  );
}

export function LiidoSection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="story-section" id="liido">
      <div ref={ref} className={`story-section-inner reveal ${visible ? "visible" : ""}`}>
        <div className="story-text">
          <p className="section-label">03 · Liido</p>
          <h2 className="section-heading">One night became a memory.</h2>
          <p className="section-subtitle">Sawirro qaar waa caadi dadka kowaad, marka laga reebo kuwa daqanka daartay.</p>
          <div className="section-story story-somali">
            <p>Sanado kadib, waxaa dhacday habeen aan wali xasuusto — Liido.</p>
            <p>Waxaan xasuustaa adiga, turxaaddaada madow iyo cabaayaddii caddaanka iyo madowga isku jirtay. Aniguna caddaan ayaan watay.</p>
            <p>Habeenkaas sawirro ayaan galnay. Videos ayaan duubnay. Waan sheekaysanay, waan qosolnay, waqti badanna halkaas ayaan ku qaadanay.</p>
            <p>Waxaa laga yaabaa in sawir qof kale daawado uu u arko sawir caadi ah. Laakiin aniga sawiradaas gadaashoodaa waxaa ahaaday oo ku jira habeen dhan oo watay — dareen, farxad, iyo laba qof oo aan weli ogeyn inta xusuus ah ee ay maalintaas abuureen.</p>
          </div>
        </div>
        <div className="story-image-wrap">
          <div className="story-image-frame">
            <div className="story-floral tl" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <div className="story-floral br" aria-hidden="true"><Flower variant="corner" color="#d9aeb4" /></div>
            <img src={imageSources.meeting[1]} alt="Liido — habeen aan la xasuusan karin" />
          </div>
          <p className="story-image-caption">Sawirkii ugu horeeye ee aan wada galnay buu ahah kani. Aad ban ujeclahay dawashadiisa fatxiye</p>
        </div>
      </div>
    </section>
  );
}

export function JourneySection() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <section className="story-section alt" id="journey">
      <div ref={ref} className={`story-only reveal ${visible ? "visible" : ""}`}>
        <p className="section-label">04 · 90 KM</p>
        <h2 className="section-heading">Distance became a number.</h2>
        <div className="story-ornament" aria-hidden="true"><Flower variant="branch" color="#d9aeb4" /></div>
        <div className="section-story story-somali">
          <p>Xitaa markii aan soo laabanaynay ayaan video kale duubnay. Waxaan maraynay jidka u dhexeeya Darjiinka iyo Sanco, annagoo dhinaca Sanco u sii jeedna, halkaas oo xaafaddaadu ahayd.</p>
          <p>Ugu dambayn gurigaaga ayaan ku geeyay. Adigoo faraxsan oo ammaan ah ayaan kaa soo tagay.</p>
          <p>Adigu Jowhar ayaad ka timid. Aniguna Xamar ayaan joogay. Waxaa naga dhexeeyay qiyaastii 90km.</p>
          <p>Laakiin safarkaas 90-ka km ah wuxuu noqday wax ka badan masaafad lagu cabbiro waddo. Wuxuu noqday safar keenay habeen farxad leh, kalsooni badan, iyo xusuuso aan markii dambe ogaanay inay naga qiimo badan yihiin intii aan moodnay.</p>
        </div>
        <div className="journey-images">
          <div className="journey-image">
            <img src={imageSources.journey[0]} alt="Darjiinka — waddada dhexe" />
            <div className="journey-caption">Darjiinka ↔ Sanco</div>
          </div>
        </div>
      </div>
    </section>
  );
}
