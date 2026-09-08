import { useRef, useState } from "react";
import "../styles/music.css";

const VIDEO_ID = "pvgRyFqJFDg";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handlePlay = () => {
    setIframeMounted(true);
    setPlaying(true);
    requestAnimationFrame(() => {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}`;
      }
    });
  };

  const handlePause = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}`;
    }
    setPlaying(false);
  };

  const handleToggle = () => {
    if (!playing) handlePlay();
    else handlePause();
  };

  return (
    <div className="music-player">
      <div
        className={`music-iframe-wrapper ${iframeMounted ? "visible" : ""}`}
        aria-hidden={!iframeMounted}
      >
        {iframeMounted && (
          <iframe
            ref={iframeRef}
            title="Love Love Soomaali — Birthday Song"
            width="200"
            height="60"
            src=""
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
      <button
        className={`music-button ${playing ? "playing" : ""}`}
        onClick={handleToggle}
        aria-label={playing ? "Pause birthday song" : "Play birthday song"}
      >
        {playing ? (
          <>
            <span className="music-bars" aria-hidden="true">
              <span className="music-bar" />
              <span className="music-bar" />
              <span className="music-bar" />
            </span>
            <span>Pause</span>
          </>
        ) : (
          <>
            <span className="music-icon" aria-hidden="true">♪</span>
            <span>Play Song</span>
          </>
        )}
      </button>
    </div>
  );
}
