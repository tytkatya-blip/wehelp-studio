import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'

const email = 'hello@wehelp.studio'

export function SiteFooter() {
  const { copy } = useLanguage()
  const [copied, setCopied] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(email)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1800)
  }

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copyright">
          <span>©</span>
          <NavLink className="site-footer__logo" to="/">
            wehelp.studio
          </NavLink>
          <span aria-hidden="true">·</span>
          <span>{new Date().getFullYear()}</span>
        </p>

        <span className="site-footer__terms" aria-disabled="true">
          {copy.footer.terms}
        </span>

        <div className="site-footer__contact">
          <a href={`mailto:${email}`}>{email}</a>
          <button type="button" onClick={copyEmail} aria-live="polite">
            {copied ? copy.footer.copied : copy.footer.copy}
          </button>
        </div>
      </div>
    </footer>
  )
}
