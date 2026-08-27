import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'site-header__link site-header__link--active' : 'site-header__link'

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <NavLink
          className="site-header__logo"
          to="/"
          aria-label="wehelp.studio home"
          onClick={closeMenu}
        >
          wehelp.studio
        </NavLink>

        <nav
          className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          <NavLink className={getNavLinkClassName} to="/who-we-are" onClick={closeMenu}>
            Who we are
          </NavLink>
          <NavLink className={getNavLinkClassName} to="/cases" onClick={closeMenu}>
            Cases
          </NavLink>
        </nav>

        <a className="site-header__cta" href="/#contact" onClick={closeMenu}>
          Let&apos;s discuss
        </a>
      </div>
    </header>
  )
}
