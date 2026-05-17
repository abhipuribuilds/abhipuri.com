import { Github, Instagram, Mail, Youtube } from "lucide-react";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ContactCTA from "../sections/ContactCTA.jsx";
import { socials } from "../data/siteData.js";

const icons = { GitHub: Github, Instagram: Instagram, YouTube: Youtube };

export default function Contact() {
  return (
    <PageTransition className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Contact</p>
        <h1>Let us connect around AI systems, automation, and builder momentum.</h1>
        <p>
          Reach out for collaboration, AI tool ideas, engineering conversations, or to follow the build-in-public journey.
        </p>
      </section>

      <section className="section-band page-section">
        <SectionHeader kicker="Social graph" title="Find AbhiPuri Builds across the main builder channels." />
        <div className="social-grid">
          <Reveal>
            <a className="social-card" href="mailto:abhijeetsinghpuri@gmail.com">
              <Mail size={24} />
              <span>Email</span>
              <strong>abhijeetsinghpuri@gmail.com</strong>
            </a>
          </Reveal>
          {socials.map((social, index) => {
            const Icon = icons[social.label];
            return (
              <Reveal key={social.label} delay={index * 0.06}>
                <a className="social-card" href={social.href} target="_blank" rel="noreferrer">
                  <Icon size={24} />
                  <span>{social.label}</span>
                  <strong>{social.href.replace("https://", "")}</strong>
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      <ContactCTA page />
    </PageTransition>
  );
}
