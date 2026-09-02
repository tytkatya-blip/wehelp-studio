import { useEffect, useState } from 'react'

const languages = [
  {
    code: 'EN',
    locale: 'en',
    flag: new URL('../../assets/icons/en.svg', import.meta.url).href,
    label: 'English',
  },
  {
    code: 'RU',
    locale: 'ru',
    flag: new URL('../../assets/icons/ru.svg', import.meta.url).href,
    label: 'Русский',
  },
  {
    code: 'DE',
    locale: 'de',
    flag: new URL('../../assets/icons/de.svg', import.meta.url).href,
    label: 'Deutsch',
  },
] as const

type LanguageCode = (typeof languages)[number]['code']

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<LanguageCode>(() => {
    const savedLanguage = window.localStorage.getItem('wehelp-language')
    return savedLanguage === 'RU' || savedLanguage === 'DE' ? savedLanguage : 'EN'
  })
  const closeMenu = () => setIsMenuOpen(false)
  const activeLanguage = languages.find(({ code }) => code === language) ?? languages[0]

  useEffect(() => {
    window.localStorage.setItem('wehelp-language', language)
    document.documentElement.lang = activeLanguage.locale
  }, [activeLanguage.locale, language])

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

          <nav
            className={`site-header__nav${isMenuOpen ? ' site-header__nav--open' : ''}`}
            id="main-navigation"
            aria-label="Main navigation"
          >
            <a className="site-header__link" href="/#who-we-are" onClick={closeMenu}>
              Who we are
            </a>
            <a className="site-header__link" href="/#problems" onClick={closeMenu}>
              Problems
            </a>
            <a className="site-header__link" href="/#what-we-do" onClick={closeMenu}>
              What we do
            </a>
            <a className="site-header__link" href="/#tools" onClick={closeMenu}>
              Tools
            </a>
            <a className="site-header__link" href="/#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </nav>

          <a className="site-header__cta" href="/#contact" onClick={closeMenu}>
            Let&apos;s discuss
          </a>
        </div>
      </header>

      <details className="language-switcher">
        <summary
          className="language-switcher__trigger"
          aria-label={`Language: ${activeLanguage.label}`}
        >
          <span className="language-switcher__flag">
            <img src={activeLanguage.flag} alt="" />
          </span>
          <span>{activeLanguage.code}</span>
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
              <span className="language-switcher__flag">
                <img src={option.flag} alt="" />
              </span>
              <span>{option.code}</span>
            </button>
          ))}
        </div>
      </details>
    </>
  )
}
