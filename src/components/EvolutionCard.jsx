import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, GitBranch, Sparkles } from "lucide-react";

export default function EvolutionCard({ item, index }) {
  const isCurrent = item.day === "Day 4";

  return (
    <motion.article
      className={`evolution-card ${isCurrent ? "current" : ""}`}
      whileHover={{ y: -10, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 240, damping: 24 }}
    >
      <div className="evolution-content">
        <div className="card-topline">
          <span className="day-chip">
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.day}
          </span>
          <strong className="status">{item.status}</strong>
        </div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>

        <div className="evolution-change">
          <Sparkles size={17} />
          <span>{item.changed}</span>
        </div>

        <div className="progress-block">
          <div className="progress-meta">
            <span>Evolution progress</span>
            <strong>{item.progress}%</strong>
          </div>
          <div className="progress-rail">
            <motion.div
              className="progress-fill"
              initial={{ width: 0 }}
              whileInView={{ width: `${item.progress}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.9, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <div className="tag-row tech-row">
          {item.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="milestone-list">
          {item.milestones.map((milestone) => (
            <span key={milestone}>
              <CheckCircle2 size={15} /> {milestone}
            </span>
          ))}
        </div>

        <a className="mini-button open-version" href={item.versionUrl} target={isCurrent ? "_self" : "_blank"} rel="noreferrer">
          <GitBranch size={15} />
          Open Version
          <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}
