import { useEffect, useRef, useState } from "react";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { careerJourney } from "../data/siteData.js";

export default function CareerTimeline() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateJourney = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const viewport = window.innerHeight || document.documentElement.clientHeight;
      const start = viewport * 0.78;
      const end = -rect.height + viewport * 0.25;
      const nextProgress = (start - rect.top) / (start - end);
      setProgress(Math.min(1, Math.max(0, nextProgress)));
    };

    updateJourney();
    window.addEventListener("scroll", updateJourney, { passive: true });
    window.addEventListener("resize", updateJourney);
    return () => {
      window.removeEventListener("scroll", updateJourney);
      window.removeEventListener("resize", updateJourney);
    };
  }, []);

  return (
    <section className="journey section-band" id="career">
      <SectionHeader kicker="Scroll journey" title="Promotions, platforms, and engineering chapters." />

      <div className="journey-track" ref={trackRef}>
        <svg className="journey-line" viewBox="0 0 920 2100" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8a35ff" />
              <stop offset="48%" stopColor="#4d6cff" />
              <stop offset="100%" stopColor="#00c2ff" />
            </linearGradient>
            <filter id="lineGlow">
              <feGaussianBlur stdDeviation="7" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path
            className="journey-base"
            d="M460 20 C140 170 140 360 460 500 C785 642 785 820 460 970 C130 1122 135 1305 460 1450 C790 1598 790 1782 460 2070"
          />
          <path
            className="journey-progress"
            pathLength="1"
            strokeDashoffset={1 - progress}
            d="M460 20 C140 170 140 360 460 500 C785 642 785 820 460 970 C130 1122 135 1305 460 1450 C790 1598 790 1782 460 2070"
          />
        </svg>

        {careerJourney.map((item, index) => (
          <Reveal
            as="article"
            className={`journey-card ${index % 2 === 0 ? "left" : "right"}`}
            key={item.title}
            delay={index * 0.03}
          >
            <span className="date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
