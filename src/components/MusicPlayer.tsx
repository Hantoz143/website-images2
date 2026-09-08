import { useRef, useState } from "react";
import "../styles/music.css";

const VIDEO_ID = "d-Vk67w0UHw";

export default function MusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [iframeVisible, setIframeVisible] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const handleToggle = () => {
    if (!playing) {
      setIframeVisible(true);
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&loop=1&playlist=${VIDEO_ID}`;
      }
      setPlaying(true);
    } else {
      const iframe = iframeRef.current;
      if (iframe) {
        iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}`;
      }
      setPlaying(false);
    }
  };

  return (
    <div className="music-player">
      <div className={`music-iframe-wrapper ${iframeVisible ? "visible" : ""}`} aria-hidden={!iframeVisible}>
        <iframe
          ref={iframeRef}
          title="Birthday song for Fatxi"
          width="200"
          height="60"
          src=""
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
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
            <span>Play song</span>
          </>
        )}
      </button>
    </div>
  );
}
