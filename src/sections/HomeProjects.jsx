import ProjectCard from "../components/ProjectCard.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { projects } from "../data/siteData.js";

export default function HomeProjects() {
  return (
    <section className="automation section-band" id="projects">
      <SectionHeader kicker="AI and automation" title="Systems that reduce repetition and improve campaign accuracy." />
      <div className="project-grid">
        {projects.slice(0, 4).map((project, index) => (
          <Reveal key={project.title} delay={index * 0.06}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
