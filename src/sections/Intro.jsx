import Reveal from "../components/Reveal.jsx";
import { profileCards } from "../data/siteData.js";

export default function Intro() {
  return (
    <section className="intro section-band">
      <Reveal>
        <p className="section-kicker">Profile</p>
        <h2>Building the connective tissue between products, platforms, data, and delivery.</h2>
      </Reveal>
      <div className="intro-grid">
        {profileCards.map((card, index) => (
          <Reveal as="article" delay={index * 0.06} key={card.title}>
            <span>{card.index}</span>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
