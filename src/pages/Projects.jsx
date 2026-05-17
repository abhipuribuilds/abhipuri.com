import PageTransition from "../components/PageTransition.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data/siteData.js";

export default function Projects() {
  return (
    <PageTransition className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Projects showcase</p>
        <h1>AI systems, automation engines, and practical builder tools.</h1>
        <p>
          A focused catalog of shipped, active, and upcoming projects from the AbhiPuri Builds ecosystem.
        </p>
      </section>

      <section className="section-band page-section">
        <SectionHeader
          kicker="Build portfolio"
          title="Premium project cards for real AI and automation work."
          description="Each project is structured for future demos, repositories, case studies, and launch notes."
        />
        <div className="showcase-grid">
          {projects.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.04}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
