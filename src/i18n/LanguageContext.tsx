import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import * as contentDe from '../data/content.de'
import * as contentEn from '../data/content.en'
import { strings } from './strings'

export type Lang = 'de' | 'en'

type ContentModule = typeof contentDe

const contentByLang: Record<Lang, ContentModule> = {
  de: contentDe,
  en: contentEn,
}

type LanguageContextValue = {
  lang: Lang
  setLang: (lang: Lang) => void
  t: (key: string) => string
  content: ContentModule
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'bco-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'de'
  return window.localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'de'
}

function lookup(key: string, lang: Lang): string {
  const dict = strings[lang] as unknown as Record<string, unknown>
  const value = key.split('.').reduce<unknown>((node, part) => {
    if (node && typeof node === 'object' && part in (node as Record<string, unknown>)) {
      return (node as Record<string, unknown>)[part]
    }
    return undefined
  }, dict)
  return typeof value === 'string' ? value : key
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => ({
    lang,
    setLang,
    t: (key: string) => lookup(key, lang),
    content: contentByLang[lang],
  }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
