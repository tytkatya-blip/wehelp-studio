import { useEffect, useState } from 'react'

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

type LanguageCode = (typeof languages)[number]['code']

const navigationItems = [
  { href: '/#who-we-are', sectionId: 'who-we-are', label: 'Who we are' },
  { href: '/#problems', sectionId: 'problems', label: 'Problems' },
  { href: '/#what-we-do', sectionId: 'what-we-do', label: 'What we do' },
  { href: '/#tools', sectionId: 'tools', label: 'Tools' },
  { href: '/#testimonials', sectionId: 'testimonials', label: 'Testimonials' },
] as const

type SectionId = (typeof navigationItems)[number]['sectionId']

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<SectionId | null>(null)
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = window.localStorage.getItem('wehelp-language')
    return savedLanguage === 'DE' ? savedLanguage : 'EN'
  })
  const closeMenu = () => setIsMenuOpen(false)
  const activeLanguage = languages.find(({ code }) => code === language) ?? languages[0]

  useEffect(() => {
    window.localStorage.setItem('wehelp-language', language)
    document.documentElement.lang = activeLanguage.locale
  }, [activeLanguage.locale, language])

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
  }, [])

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
            aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <a
            className="site-header__logo"
            href="/"
            aria-label="wehelp.studio home"
            onClick={closeMenu}
          >
            wehelp.studio
          </a>

          <div className="site-header__actions">
            <details className="language-switcher">
              <summary
                className="language-switcher__trigger"
                aria-label={`Language: ${activeLanguage.label}`}
              >
                <span>{activeLanguage.code}</span>
                <svg viewBox="0 0 12 8" aria-hidden="true">
                  <path d="m1 1.25 5 5 5-5" />
                </svg>
              </summary>
              <div className="language-switcher__menu" role="group" aria-label="Choose language">
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
              Let&apos;s discuss
            </a>
          </div>
        </div>

        <nav
          className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
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

          <div className="mobile-languages" role="group" aria-label="Choose language">
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
