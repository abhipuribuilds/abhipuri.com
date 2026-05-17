import { motion } from "framer-motion";
import EvolutionCard from "../components/EvolutionCard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { evolutionJourney } from "../data/siteData.js";

export default function Journey() {
  return (
    <PageTransition className="page-shell">
      <section className="page-hero journey-hero">
        <motion.div
          className="journey-orbit"
          aria-hidden="true"
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />
        <p className="section-kicker">Journey / Evolution</p>
        <h1>Watching an AI engineer evolve publicly, one shipped version at a time.</h1>
        <p>
          A cinematic archive of the portfolio itself: from the first HTML deployment to a React-powered AI builder ecosystem.
        </p>
        <div className="journey-stats" aria-label="Journey milestones">
          <article>
            <strong>4</strong>
            <span>Public versions</span>
          </article>
          <article>
            <strong>3</strong>
            <span>Preserved snapshots</span>
          </article>
          <article>
            <strong>100%</strong>
            <span>Builder momentum</span>
          </article>
        </div>
      </section>

      <section className="section-band page-section evolution-section">
        <SectionHeader
          kicker="Engineering documentary"
          title="Each version captures a different layer of the build."
          description="Infrastructure, brand, workflow, UI craft, React architecture, and Docker development all show up as visible milestones."
        />

        <div className="evolution-timeline">
          <div className="evolution-spine" aria-hidden="true" />
          {evolutionJourney.map((item, index) => (
            <Reveal key={item.day} delay={index * 0.08}>
              <EvolutionCard item={item} index={index} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
