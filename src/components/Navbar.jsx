import { useEffect, useMemo, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { logoUrl } from "../assets/index.js";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Projects", to: "/projects" },
  { label: "Tools", to: "/tools" },
  { label: "Blog", to: "/blog" },
  { label: "Journey", to: "/journey" },
  { label: "Contact", to: "/contact" },
];

const homeSections = ["hero", "projects", "skills", "contact"];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("hero");

  const sectionMap = useMemo(
    () => ({
      "/projects": "projects",
      "/journey": "journey",
      "/contact": "contact",
    }),
    []
  );

  useEffect(() => {
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-32% 0px -58% 0px", threshold: 0.01 }
    );

    homeSections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const handleHomeClick = (event, path) => {
    if (location.pathname === "/" && sectionMap[path]) {
      event.preventDefault();
      document.getElementById(sectionMap[path])?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goHome = (event) => {
    event.preventDefault();
    if (location.pathname === "/") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <header className="topbar">
      <a className="brand" href="/" aria-label="Abhijeet Singh Puri home" onClick={goHome}>
        <img src={logoUrl} alt="" />
        <span>
          <span className="brand-white">AbhiPuri</span> <span className="brand-gradient">Builds</span>
        </span>
      </a>
      <nav aria-label="Primary navigation">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            onClick={(event) => handleHomeClick(event, item.to)}
            className={({ isActive }) => {
              const sectionActive = location.pathname === "/" && sectionMap[item.to] === activeSection;
              return isActive || sectionActive ? "active" : undefined;
            }}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
