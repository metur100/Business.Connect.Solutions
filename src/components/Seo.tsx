import { useEffect } from 'react'

export const SITE_URL = 'https://bcosolution.com'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/bco-driver-service.png`

type SeoProps = {
  title: string
  description: string
  /** Site-relative path starting with "/", e.g. "/leistungen/flughafentransfer". */
  path: string
  image?: string
  noindex?: boolean
  jsonLd?: object | object[]
}

function setMetaByName(name: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[name="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('name', name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setMetaByProperty(property: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[property="${property}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute('property', property)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

// Updates the document head for the current route: title, description,
// canonical, Open Graph/Twitter tags and (optionally) a page-specific
// JSON-LD block. index.html carries sane defaults for the very first paint
// and for any crawler that doesn't execute JS; this keeps every client-side
// route from being reported to search engines as a duplicate of the homepage.
export default function Seo({ title, description, path, image, noindex, jsonLd }: SeoProps) {
  useEffect(() => {
    const url = `${SITE_URL}${path}`
    const ogImage = image || DEFAULT_OG_IMAGE

    document.title = title
    setMetaByName('description', description)
    setMetaByName('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    setMetaByProperty('og:title', title)
    setMetaByProperty('og:description', description)
    setMetaByProperty('og:url', url)
    setMetaByProperty('og:image', ogImage)
    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', title)
    setMetaByName('twitter:description', description)
    setMetaByName('twitter:image', ogImage)

    let script: HTMLScriptElement | null = null
    if (jsonLd) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }

    return () => {
      script?.remove()
    }
  }, [title, description, path, image, noindex, jsonLd])

  return null
}
