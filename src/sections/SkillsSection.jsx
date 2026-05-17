import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { awards, clients, skills } from "../data/siteData.js";

export default function SkillsSection() {
  return (
    <>
      <section className="clients section-band">
        <Reveal>
          <p className="section-kicker">Enterprise delivery</p>
          <h2>Campaign systems for brands with serious scale.</h2>
        </Reveal>
        <Reveal className="client-cloud" aria-label="Clients and brands">
          {clients.map((client) => (
            <span key={client}>{client}</span>
          ))}
        </Reveal>
      </section>

      <section className="skills section-band" id="skills">
        <SectionHeader kicker="Technical stack" title="Hands-on across frontend, backend, data, automation, and delivery." />
        <div className="skill-matrix">
          {skills.map((skill, index) => (
            <Reveal as="article" key={skill.title} delay={index * 0.04}>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="awards section-band">
        <Reveal>
          <p className="section-kicker">Recognition</p>
          <h2>Awarded for delivery quality and complex campaign execution.</h2>
        </Reveal>
        <div className="award-list">
          {awards.map((award, index) => (
            <Reveal as="article" key={award.title} delay={index * 0.08}>
              <strong>{award.title}</strong>
              <span>{award.description}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
