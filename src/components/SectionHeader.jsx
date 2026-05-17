import Reveal from "./Reveal.jsx";

export default function SectionHeader({ kicker, title, description, centered = false }) {
  return (
    <Reveal className={`section-heading ${centered ? "centered" : ""}`}>
      <p className="section-kicker">{kicker}</p>
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </Reveal>
  );
}
