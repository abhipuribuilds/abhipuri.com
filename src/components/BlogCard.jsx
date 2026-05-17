import { motion } from "framer-motion";

export default function BlogCard({ post, featured = false }) {
  return (
    <motion.article
      className={`blog-card ${featured ? "featured" : ""}`}
      whileHover={{ y: -7 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
    >
      <div className="card-topline">
        <span>{post.category}</span>
        <strong>{post.date}</strong>
      </div>
      <h3>{post.title}</h3>
      <p>{post.excerpt}</p>
      <div className="tag-row">
        {post.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </motion.article>
  );
}
