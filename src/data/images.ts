export const imageSources = {
  hero: "/hero pic/hero pic.jpeg",
  meeting: [
    "/liido first meeting/liido first meeting.jpeg",
    "/liido first meeting/liido.jpeg",
  ],
  liido: [
    "/liido first meeting/liido.jpeg",
    "/liido first meeting/liido first meeting.jpeg",
  ],
  journey: [
    "/DarjiinkaSanco/DarjiinkaSanco.jpeg",
    "/DarjiinkaSanco/DarjiinkaSanco (2).jpeg",
  ],
  kenya: [
    "/kenya/kenya.jpeg",
    "/kenya/kenya 2.jpeg",
    "/kenya/kenya 3.jpeg",
  ],
  memory: ["/Memory/Memory.jpeg"],
  birthday: ["/birthday pic/birthday picture.jpeg"],
} as const;

export const galleryImages: {
  src: string;
  caption: string;
  category: string;
  size: "large" | "medium" | "small";
}[] = [
  { src: imageSources.hero, caption: "Fatxi — boggagii kasta oo sheekada", category: "Hero", size: "large" },
  { src: imageSources.meeting[0], caption: "20 Febraayo 2024 — maalintii aan isku aragnay", category: "20 Febraayo 2024", size: "medium" },
  { src: imageSources.meeting[1], caption: "Ugu dambayn, waji hore", category: "20 Febraayo 2024", size: "small" },
  { src: imageSources.liido[0], caption: "Liido — habeen aan la xasuusan karin", category: "Liido", size: "medium" },
  { src: imageSources.liido[1], caption: "Habeen ka sii hargaysa", category: "Liido", size: "small" },
  { src: imageSources.memory[0], caption: "Xusuus qiimo leh", category: "Memory", size: "medium" },
  { src: imageSources.kenya[0], caption: "14 Janaayo 2025 — Kenya", category: "Kenya", size: "medium" },
  { src: imageSources.kenya[1], caption: "Masaafadu qaabka u beddeshay", category: "Kenya", size: "small" },
  { src: imageSources.kenya[2], caption: "Bisha cusub ee meel fog", category: "Kenya", size: "small" },
  { src: imageSources.birthday[0], caption: "12 Sebtamber — maalintaada", category: "Birthday", size: "large" },
  { src: imageSources.journey[0], caption: "Darjiinka ↔ Sanco — waddada dhexe", category: "Shared memories", size: "medium" },
  { src: imageSources.journey[1], caption: "Safar ka badan masaafad", category: "Shared memories", size: "small" },
];

export const memoryCards: {
  id: string;
  number: string;
  date: string;
  title: string;
  description: string;
  image: string;
  story: string;
}[] = [
  {
    id: "beginning",
    number: "01",
    date: "25 Nov 2022",
    title: "The beginning",
    description: "TikTok, wada hadal, iyo tallaabadii ugu horreysay ee kalsoonida.",
    image: imageSources.memory[0],
    story: "Mararka qaar waxaan is weydiiyaa haddii aan maalintii 25-ka Nofeembar 2022 ogaan lahayn halka ay nagu dambayn doonto isbarashadii TikTok, ma sidaan ayaynu u bilaabi lahayn?\n\nWaxay ahayd waqti aanay sahlanayn in gabar iyo wiil ay saaxiibtinimo dhab ah yeeshaan. Waxaa jiray duruufo badan oo naga hor istaagi karayay inaan isu soo dhowaanno.\n\nLaakiin sidaas ma dhicin.\n\nWax yar wax yar ayay kalsoonidu u timid. Hadallo badan ayaa naga dhexeeyay, waqti ayaa ina dhex maray, waxaana ugu dambayn noqonnay laba qof oo isku aaminay meel aysan labadeenuba markii hore filayn.",
  },
  {
    id: "meeting",
    number: "02",
    date: "20 Feb 2024",
    title: "The day we met",
    description: "Maalintii sheekadu ka soo baxday shaashadda oo noqotay xusuus dhab ah.",
    image: imageSources.meeting[0],
    story: "20 Febraayo 2024 — waa maalintii saaxiibtinimadii shaashaddu noqotay xusuus dhab ah. Bilado ka dib oo wada hadal ah oo shaashadda marayay, waqtigii ugu dambeeyay ayaa yimid — inaan joogno meesha isla mararka ah, isla waqtiga, oo aan isku aragno si ka badan erayo telefoonka.\n\nMarkii ugu horreysay ee aan isaga ceshano meesha isla mararka ah. Markii ugu horreysay ee codku yeesho waji, joogto, iyo kul ka shaashadda aan kuixin karin.",
  },
  {
    id: "liido",
    number: "03",
    date: "Liido",
    title: "One unforgettable night",
    description: "Sawirro, fiidiyowyada, qosol, iyo xusuuso.",
    image: imageSources.liido[0],
    story: "Sanado kadib, waxaa dhacday habeen aan wali xasuusto — Liido.\n\nWaxaan xasuustaa adiga, turxaaddaada madow iyo cabaayaddii caddaanka iyo madowga isku jirtay. Aniguna caddaan ayaan watay.\n\nHabeenkaas sawirro ayaan galnay. Videos ayaan duubnay. Waan sheekaysanay, waan qosolnay, waqti badanna halkaas ayaan ku qaadanay.\n\nWaxaa laga yaabaa in sawir qof kale daawado uu u arko sawir caadi ah. Laakiin aniga sawiradaas gadaashoodaa waxaa ahaaday oo ku jira habeen dhan oo watay — dareen, farxad, iyo laba qof oo aan weli ogeyn inta xusuus ah ee ay maalintaas abuureen.",
  },
  {
    id: "90km",
    number: "04",
    date: "90 KM",
    title: "Never just a number",
    description: "Jowhar ↔ Xamar — masaafad noqotay qayb ka mid ah sheekada.",
    image: imageSources.journey[0],
    story: "Xitaa markii aan soo laabanaynay ayaan video kale duubnay. Waxaan maraynay jidka u dhexeeya Darjiinka iyo Sanco, annagoo dhinaca Sanco u sii jeedna, halkaas oo xaafaddaadu ahayd.\n\nUgu dambayn gurigaaga ayaan ku geeyay. Adigoo faraxsan oo ammaan ah ayaan kaa soo tagay.\n\nAdigu Jowhar ayaad ka timid. Aniguna Xamar ayaan joogay. Waxaa naga dhexeeyay qiyaastii 90km.\n\nLaakiin safarkaas 90-ka km ah wuxuu noqday wax ka badan masaafad lagu cabbiro waddo. Wuxuu noqday safar keenay habeen farxad leh, kalsooni badan, iyo xusuuso aan markii dambe ogaanay inay naga qiimo badan yihiin intii aan moodnay.",
  },
  {
    id: "kenya",
    number: "05",
    date: "14 Jan 2025",
    title: "Kenya",
    description: "Maalintii masaafadu qaabkeeda u beddeshay.",
    image: imageSources.kenya[0],
    story: "14 Janaayo 2025 — waa maalintii Fatxi aaday Kenya. Masaafadu maanta qaabkeeda u beddeshay. Waxaa markii hore lagu cabiray kilometers u dhexeeya Jowhar iyo Xamar, hadda waa wax ka badan — wax ka badan xudduudo. Laakiin xusuusuhu weli meeshooda ayay joogaan — dhow, aan taaban, weli naga leh.",
  },
  {
    id: "thankyou",
    number: "06",
    date: "Thank you",
    title: "For being there",
    description: "Waqti ay Fatxi garab taagnayd oo si macquul ah u taageertay.",
    image: imageSources.birthday[0],
    story: "Waxaa jiray maalin adag — maalin kasta oo culays saarnaayay oo adduunku ka qabowsanaa caadadiisa. Maalintaas, adigaa joogtay. Ma u baahnayn inaad wax badan tidhaahdo. Joogitaankaaga, erayadaaga, taageeradaaga qarooxa — waxay ku filnaayeen. Oo arrintaas ma xasuusan doono.",
  },
];
