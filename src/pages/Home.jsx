import PageTransition from "../components/PageTransition.jsx";
import CareerTimeline from "../sections/CareerTimeline.jsx";
import ContactCTA from "../sections/ContactCTA.jsx";
import Hero from "../sections/Hero.jsx";
import HomeProjects from "../sections/HomeProjects.jsx";
import Intro from "../sections/Intro.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import { socials } from "../data/siteData.js";

export default function Home() {
  return (
    <PageTransition>
      <Hero socials={socials} />
      <Intro />
      <CareerTimeline />
      <HomeProjects />
      <SkillsSection />
      <ContactCTA />
    </PageTransition>
  );
}
