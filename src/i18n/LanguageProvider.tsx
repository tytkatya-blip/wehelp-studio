import { useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { LanguageContext } from './LanguageContext'
import { translations } from './translations'
import type { LanguageCode } from './translations'

const storageKey = 'wehelp-language'

function getInitialLanguage(): LanguageCode {
  const savedLanguage = window.localStorage.getItem(storageKey)
  return savedLanguage === 'DE' ? 'DE' : 'EN'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<LanguageCode>(getInitialLanguage)
  const copy = translations[language]

  useEffect(() => {
    window.localStorage.setItem(storageKey, language)
    document.documentElement.lang = copy.locale
    document.title = copy.metadata.title

    document
      .querySelector<HTMLMetaElement>('meta[name="description"]')
      ?.setAttribute('content', copy.metadata.description)
    document
      .querySelector<HTMLMetaElement>('meta[property="og:title"]')
      ?.setAttribute('content', copy.metadata.title)
    document
      .querySelector<HTMLMetaElement>('meta[property="og:description"]')
      ?.setAttribute('content', copy.metadata.description)
  }, [copy, language])

  const value = useMemo(
    () => ({ language, setLanguage, copy }),
    [copy, language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
