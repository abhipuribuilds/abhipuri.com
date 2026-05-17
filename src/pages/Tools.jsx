import { motion } from "framer-motion";
import { FlaskConical, Sparkles } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { tools } from "../data/siteData.js";

export default function Tools() {
  return (
    <PageTransition className="page-shell">
      <section className="page-hero lab-hero">
        <p className="section-kicker">Experimental AI Lab</p>
        <h1>Small AI apps designed to become useful, repeatable workflows.</h1>
        <p>
          A futuristic tools hub for experiments in validation, prompting, workflow automation, and assistant design.
        </p>
      </section>

      <section className="section-band page-section">
        <SectionHeader
          kicker="Tools hub"
          title="Coming soon: practical AI utilities with a product mindset."
          description="The lab stays minimal, sharp, and expandable as new apps move from experiment to release."
        />
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <Reveal key={tool.title} delay={index * 0.05}>
              <motion.article className="tool-card" whileHover={{ y: -8, scale: 1.01 }}>
                <div className="tool-icon">
                  {index % 2 === 0 ? <FlaskConical size={24} /> : <Sparkles size={24} />}
                </div>
                <span>{tool.status}</span>
                <h3>{tool.title}</h3>
                <p>{tool.description}</p>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
