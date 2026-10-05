import { createContext } from 'react'
import type { Dispatch, SetStateAction } from 'react'
import type { LanguageCode } from './translations'
import { translations } from './translations'

export type LanguageContextValue = {
  language: LanguageCode
  setLanguage: Dispatch<SetStateAction<LanguageCode>>
  copy: (typeof translations)[LanguageCode]
}

export const LanguageContext = createContext<LanguageContextValue | null>(null)
