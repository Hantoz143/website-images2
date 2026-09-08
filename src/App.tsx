import Hero from "./components/Hero";
import MusicPlayer from "./components/MusicPlayer";
import { BeginningSection, MeetingSection, LiidoSection, JourneySection } from "./components/StorySections";
import Timeline from "./components/Timeline";
import MemoryWall from "./components/MemoryWall";
import Gallery from "./components/Gallery";
import { BirthdaySurprise, WishesSection, LetterSection } from "./components/EmotionalSections";
import FinalSection from "./components/FinalSection";

export default function App() {
  return (
    <>
      <div className="grain-overlay" aria-hidden="true" />
      <main>
        <Hero />
        <BeginningSection />
        <MeetingSection />
        <LiidoSection />
        <JourneySection />
        <Timeline />
        <MemoryWall />
        <Gallery />
        <BirthdaySurprise />
        <WishesSection />
        <LetterSection />
        <FinalSection />
      </main>
      <MusicPlayer />
    </>
  );
}
