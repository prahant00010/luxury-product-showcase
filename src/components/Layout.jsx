import { Link, useLocation } from "react-router-dom";

export function Layout({ children, onViewCollection }) {
  const location = useLocation();

  const isOnCollection = location.pathname.startsWith("/collection");

  return (
    <div className="shell">
      <header className="site-header">
        <div className="site-header__inner">
          <Link to="/" className="brand-mark">
            <span className="brand-mark__wordmark">Lumière Privée</span>
            <span className="brand-mark__tagline">Haute Parfumerie</span>
          </Link>
          <nav className="site-nav">
            <Link
              to="/"
              className={`site-nav__link ${
                location.pathname === "/" ? "site-nav__link--active" : ""
              }`}
            >
              Maison
            </Link>
            <Link
              to="/collection"
              className={`site-nav__link ${
                isOnCollection ? "site-nav__link--active" : ""
              }`}
            >
              Collection
            </Link>
          </nav>
          <button
            className="button button--ghost"
            onClick={onViewCollection}
          >
            View Collection
          </button>
        </div>
      </header>
      <main className="site-main">{children}</main>
      <footer className="site-footer">
        <div className="site-footer__inner">
          <p className="body body--muted">
            © {new Date().getFullYear()} Lumière Privée. Crafted in Grasse,
            bottled in Paris.
          </p>
          <p className="body body--muted">For those who prefer a whisper to a shout.</p>
        </div>
      </footer>
    </div>
  );
}

