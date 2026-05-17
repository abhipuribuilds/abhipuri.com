import Navbar from "./Navbar.jsx";

export default function AppLayout({ children }) {
  return (
    <div className="site-shell">
      <Navbar />
      {children}
      <footer className="site-footer">© 2026 AbhiPuri Builds</footer>
    </div>
  );
}
