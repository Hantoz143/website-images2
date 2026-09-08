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
  { src: imageSources.hero, caption: "Fatxi — the beginning of every page", category: "Hero", size: "large" },
  { src: imageSources.meeting[0], caption: "20 February 2024 — the day we met", category: "20 February 2024", size: "medium" },
  { src: imageSources.meeting[1], caption: "Finally, in person", category: "20 February 2024", size: "small" },
  { src: imageSources.liido[0], caption: "Liido — one unforgettable night", category: "Liido", size: "medium" },
  { src: imageSources.liido[1], caption: "A night that stays", category: "Liido", size: "small" },
  { src: imageSources.memory[0], caption: "A memory worth keeping", category: "Memory", size: "medium" },
  { src: imageSources.kenya[0], caption: "14 January 2025 — Kenya", category: "Kenya", size: "medium" },
  { src: imageSources.kenya[1], caption: "Distance changed shape", category: "Kenya", size: "small" },
  { src: imageSources.kenya[2], caption: "A new chapter afar", category: "Kenya", size: "small" },
  { src: imageSources.birthday[0], caption: "September 12 — your day", category: "Birthday", size: "large" },
  { src: imageSources.journey[0], caption: "Darjiinka ↔ Sanco — the road between", category: "Shared memories", size: "medium" },
  { src: imageSources.journey[1], caption: "A journey that meant more", category: "Shared memories", size: "small" },
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
    description: "TikTok, conversations, and the first steps toward trust.",
    image: imageSources.memory[0],
    story: "Mararka qaar waxaan is weydiiyaa haddii aan maalintii 25-ka Nofeembar 2022 ogaan lahayn halka ay nagu dambayn doonto isbarashadii TikTok, ma sidaan ayaynu u bilaabi lahayn?\n\nWaxay ahayd waqti aanay sahlanayn in gabar iyo wiil ay saaxiibtinimo dhab ah yeeshaan. Waxaa jiray duruufo badan oo naga hor istaagi karayay inaan isu soo dhowaanno.\n\nLaakiin sidaas ma dhicin.\n\nWax yar wax yar ayay kalsoonidu u timid. Hadallo badan ayaa naga dhexeeyay, waqti ayaa ina dhex maray, waxaana ugu dambayn noqonnay laba qof oo isku aaminay meel aysan labadeenuba markii hore filayn.",
  },
  {
    id: "meeting",
    number: "02",
    date: "20 Feb 2024",
    title: "The day we met",
    description: "The day the story moved from screens into a real memory.",
    image: imageSources.meeting[0],
    story: "20 February 2024 — the day a digital friendship became a real-life memory. After months of conversations through screens, the moment finally came to stand in the same place, at the same time, and see each other as more than words on a phone.",
  },
  {
    id: "liido",
    number: "03",
    date: "Liido",
    title: "One unforgettable night",
    description: "Photos, videos, laughter, and memories.",
    image: imageSources.liido[0],
    story: "Sanado kadib, waxaa dhacday habeen aan wali xasuusto — Liido.\n\nWaxaan xasuustaa adiga, turxaaddaada madow iyo cabaayaddii caddaanka iyo madowga isku jirtay. Aniguna caddaan ayaan watay.\n\nHabeenkaas sawirro ayaan galnay. Videos ayaan duubnay. Waan sheekaysanay, waan qosolnay, waqti badanna halkaas ayaan ku qaadanay.\n\nWaxaa laga yaabaa in sawir qof kale daawado uu u arko sawir caadi ah. Laakiin aniga sawiradaas gadaashoodaa waxaa ahaaday oo ku jira habeen dhan oo watay — dareen, farxad, iyo laba qof oo aan weli ogeyn inta xusuus ah ee ay maalintaas abuureen.",
  },
  {
    id: "90km",
    number: "04",
    date: "90 KM",
    title: "Never just a number",
    description: "Jowhar ↔ Xamar — a distance that became part of the story.",
    image: imageSources.journey[0],
    story: "Xitaa markii aan soo laabanaynay ayaan video kale duubnay. Waxaan maraynay jidka u dhexeeya Darjiinka iyo Sanco, annagoo dhinaca Sanco u sii jeedna, halkaas oo xaafaddaadu ahayd.\n\nUgu dambayn gurigaaga ayaan ku geeyay. Adigoo faraxsan oo ammaan ah ayaan kaa soo tagay.\n\nAdigu Jowhar ayaad ka timid. Aniguna Xamar ayaan joogay. Waxaa naga dhexeeyay qiyaastii 90km.\n\nLaakiin safarkaas 90-ka km ah wuxuu noqday wax ka badan masaafad lagu cabbiro waddo. Wuxuu noqday safar keenay habeen farxad leh, kalsooni badan, iyo xusuuso aan markii dambe ogaanay inay naga qiimo badan yihiin intii aan moodnay.",
  },
  {
    id: "kenya",
    number: "05",
    date: "14 Jan 2025",
    title: "Kenya",
    description: "The day distance changed shape.",
    image: imageSources.kenya[0],
    story: "14 January 2025 — the day Fatxi went to Kenya. Distance changed shape that day. What was once measured in kilometers between Jowhar and Xamar became something larger, something across borders. But the memories stayed where they were — close, untouched, still ours.",
  },
  {
    id: "thankyou",
    number: "06",
    date: "Thank you",
    title: "For being there",
    description: "A moment when Fatxi offered meaningful support.",
    image: imageSources.birthday[0],
    story: "There was a difficult day — a day when everything felt heavy and the world seemed quieter than usual. On that day, you were there. You didn't need to say much. Your presence, your words, your quiet support — they were enough. And that is something I will not forget.",
  },
];
