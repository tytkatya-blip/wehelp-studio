import { NavLink } from 'react-router-dom'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <NavLink className="site-footer__logo" to="/">
          wehelp.studio
        </NavLink>
        <nav className="site-footer__nav" aria-label="Footer navigation">
          <a href="/#who-we-are">Who we are</a>
          <a href="/#testimonials">Testimonials</a>
        </nav>
        <p>© {new Date().getFullYear()} wehelp.studio</p>
      </div>
    </footer>
  )
}
