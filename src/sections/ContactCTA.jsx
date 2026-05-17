import { Github, Instagram, Mail, Youtube } from "lucide-react";
import Reveal from "../components/Reveal.jsx";
import { logoUrl } from "../assets/index.js";
import { socials } from "../data/siteData.js";

const icons = { GitHub: Github, Instagram: Instagram, YouTube: Youtube };

export default function ContactCTA({ page = false }) {
  return (
    <Reveal as="section" className={`contact ${page ? "contact-page-card" : ""}`} id="contact">
      <img src={logoUrl} alt="" />
      <p className="section-kicker">Let us build</p>
      <h2>
        <span>AI projects in public.</span>
        <span>Enterprise systems in production.</span>
      </h2>
      <div className="contact-actions">
        <a className="button primary icon-button" href="mailto:abhijeetsinghpuri@gmail.com">
          <Mail size={18} /> abhijeetsinghpuri@gmail.com
        </a>
        {socials.map((social) => {
          const Icon = icons[social.label];
          return (
            <a className="button secondary icon-button" href={social.href} target="_blank" rel="noreferrer" key={social.label}>
              <Icon size={18} /> {social.label}
            </a>
          );
        })}
      </div>
    </Reveal>
  );
}
