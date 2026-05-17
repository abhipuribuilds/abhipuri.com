import { motion } from "framer-motion";
import { Github, Instagram, Youtube } from "lucide-react";
import { logoUrl, resumeUrl } from "../assets/index.js";
import { homeMetrics } from "../data/siteData.js";

const socialIcons = {
  GitHub: Github,
  Instagram: Instagram,
  YouTube: Youtube,
};

export default function Hero({ socials }) {
  return (
    <section className="hero" id="hero">
      <div className="hero-art" aria-hidden="true">
        <motion.img
          className="hero-mark"
          src={logoUrl}
          alt=""
          animate={{ y: [0, -14, 0], rotate: [0, 1.5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="orbital-ring ring-one"></div>
        <div className="orbital-ring ring-two"></div>
        <div className="circuit-plane"></div>
      </div>

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="eyebrow">AI Automation | Backend Platforms | Enterprise Delivery</p>
        <h1>
          <span>Building AI</span>
          <span>Projects in Public</span>
        </h1>
        <p className="hero-lede">
          I am Abhijeet Singh Puri, an engineering leader with 11+ years of experience turning complex
          client needs into scalable platforms, API-driven systems, ETL pipelines, and AI-assisted automation.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projects">
            Explore projects
          </a>
          <a className="button secondary" href={resumeUrl} target="_blank" rel="noreferrer">
            View resume
          </a>
          {socials.map((social) => {
            const Icon = socialIcons[social.label];
            return (
              <a className="button ghost icon-button" href={social.href} target="_blank" rel="noreferrer" key={social.label}>
                <Icon size={18} />
                {social.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      <div className="hero-metrics" aria-label="Career highlights">
        {homeMetrics.map((metric, index) => (
          <motion.article
            key={metric.label}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 + index * 0.08 }}
          >
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
