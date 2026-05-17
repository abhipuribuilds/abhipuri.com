import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";

export default function ProjectCard({ project, compact = false }) {
  return (
    <motion.article
      className={`project-card ${compact ? "compact" : ""}`}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="card-topline">
        <span>{project.category}</span>
        <strong className={project.status === "Coming soon" ? "status muted" : "status"}>{project.status}</strong>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="tag-row">
        {project.stack.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
      <div className="card-actions">
        {project.links?.demo ? (
          <a className="mini-button" href={project.links.demo} target="_blank" rel="noreferrer">
            <ArrowUpRight size={15} /> Live Demo
          </a>
        ) : null}
        {project.links?.github ? (
          <a className="mini-button" href={project.links.github} target="_blank" rel="noreferrer">
            <Github size={15} /> GitHub
          </a>
        ) : null}
      </div>
    </motion.article>
  );
}
