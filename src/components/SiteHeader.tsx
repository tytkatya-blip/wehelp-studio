import { useEffect, useMemo, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'
import type { LanguageCode, SectionId } from '../i18n/translations'

const languages = [
  {
    code: 'EN',
    locale: 'en',
    label: 'English',
  },
  {
    code: 'DE',
    locale: 'de',
    label: 'Deutsch',
  },
] as const

export function SiteHeader() {
  const { language, setLanguage, copy } = useLanguage()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const closeMenu = () => setIsMenuOpen(false)
  const activeLanguage = languages.find(({ code }) => code === language) ?? languages[0]
  const navigationItems = useMemo(
    () =>
      copy.header.navigation.map((item) => ({
        ...item,
        href: `/#${item.sectionId}`,
      })),
    [copy.header.navigation],
  )

  useEffect(() => {
    let frame = 0

    const updateActiveSection = () => {
      frame = 0
      const marker = window.innerHeight * 0.42
      const visibleSection = navigationItems.find(({ sectionId }) => {
        const section = document.getElementById(sectionId)
        if (!section) return false

        const bounds = section.getBoundingClientRect()
        return bounds.top <= marker && bounds.bottom > marker
      })

      setActiveSection(visibleSection?.sectionId ?? null)
    }

    const scheduleUpdate = () => {
      if (frame) return
      frame = window.requestAnimationFrame(updateActiveSection)
    }

    updateActiveSection()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [navigationItems])

  const selectLanguage = (code: LanguageCode, details: HTMLDetailsElement | null) => {
    setLanguage(code)
    details?.removeAttribute('open')
  }

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <button
            className="site-header__menu-button"
            type="button"
            aria-expanded={isMenuOpen}
            aria-controls="main-navigation"
            aria-label={
              isMenuOpen
                ? copy.accessibility.closeNavigation
                : copy.accessibility.openNavigation
            }
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <a
            className="site-header__logo"
            href="/"
            aria-label={copy.accessibility.home}
            onClick={closeMenu}
          >
            wehelp.studio
          </a>

          <div className="site-header__actions">
            <details className="language-switcher">
              <summary
                className="language-switcher__trigger"
                aria-label={copy.accessibility.language(activeLanguage.label)}
              >
                <span>{activeLanguage.code}</span>
                <svg viewBox="0 0 12 8" aria-hidden="true">
                  <path d="m1 1.25 5 5 5-5" />
                </svg>
              </summary>
              <div
                className="language-switcher__menu"
                role="group"
                aria-label={copy.accessibility.chooseLanguage}
              >
                {languages.map((option) => (
                  <button
                    className="language-switcher__option"
                    type="button"
                    aria-pressed={option.code === language}
                    key={option.code}
                    onClick={(event) =>
                      selectLanguage(
                        option.code,
                        event.currentTarget.closest('details') as HTMLDetailsElement | null,
                      )
                    }
                  >
                    {option.code}
                  </button>
                ))}
              </div>
            </details>

            <a className="site-header__cta" href="/#contact" onClick={closeMenu}>
              {copy.header.cta}
            </a>
          </div>
        </div>

        <nav
          className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
          id="main-navigation"
          aria-label={copy.accessibility.mainNavigation}
        >
          {navigationItems.map((item) => {
            const isActive = item.sectionId === activeSection

            return (
              <a
                className={`site-header__link${isActive ? ' site-header__link--active' : ''}`}
                href={item.href}
                aria-current={isActive ? 'location' : undefined}
                onClick={closeMenu}
                key={item.sectionId}
              >
                {item.label}
              </a>
            )
          })}

          <div
            className="mobile-languages"
            role="group"
            aria-label={copy.accessibility.chooseLanguage}
          >
            {languages.map((option) => (
              <button
                className="mobile-languages__option"
                type="button"
                aria-pressed={option.code === language}
                key={option.code}
                onClick={() => selectLanguage(option.code, null)}
              >
                {option.code}
              </button>
            ))}
          </div>
        </nav>
      </header>
    </>
  )
}
