import BlogCard from "../components/BlogCard.jsx";
import PageTransition from "../components/PageTransition.jsx";
import Reveal from "../components/Reveal.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import { blogPosts } from "../data/siteData.js";

export default function Blog() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const remainingPosts = blogPosts.filter((post) => !post.featured);

  return (
    <PageTransition className="page-shell">
      <section className="page-hero">
        <p className="section-kicker">Builder notes</p>
        <h1>Writing the engineering journey while the work is still warm.</h1>
        <p>
          Short build logs on AI projects, developer workflow, infrastructure, brand building, and practical execution.
        </p>
      </section>

      <section className="section-band page-section">
        <SectionHeader
          kicker="Featured article"
          title="From infrastructure basics to public AI builder momentum."
          description="The blog is set up as a scalable content surface for future categories, tags, and long-form posts."
        />

        {featuredPost ? (
          <Reveal>
            <BlogCard post={featuredPost} featured />
          </Reveal>
        ) : null}

        <div className="blog-grid">
          {remainingPosts.map((post, index) => (
            <Reveal key={post.title} delay={index * 0.06}>
              <BlogCard post={post} />
            </Reveal>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
