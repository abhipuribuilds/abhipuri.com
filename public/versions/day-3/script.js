const progressPath = document.querySelector("[data-progress-path]");
const journey = document.querySelector("[data-journey]");

if (progressPath && journey) {
  const length = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = length;
  progressPath.style.strokeDashoffset = length;

  const updateJourney = () => {
    const rect = journey.getBoundingClientRect();
    const viewport = window.innerHeight || document.documentElement.clientHeight;
    const start = viewport * 0.78;
    const end = -rect.height + viewport * 0.25;
    const progress = (start - rect.top) / (start - end);
    const clamped = Math.min(1, Math.max(0, progress));
    progressPath.style.strokeDashoffset = String(length * (1 - clamped));
  };

  updateJourney();
  window.addEventListener("scroll", updateJourney, { passive: true });
  window.addEventListener("resize", updateJourney);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
