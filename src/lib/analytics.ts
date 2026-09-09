declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

// TODO: replace with the real IDs once available.
// GA4: GA4 Admin -> Data Streams -> your web stream (format G-XXXXXXXXXX)
// Google Ads: Google Ads -> Tools -> Conversions, or Google Tag (format AW-XXXXXXXXX)
export const GA_MEASUREMENT_ID = 'G-0GXNZQRWEW'
export const GOOGLE_ADS_ID = 'AW-XXXXXXXXX'

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

// Wire these to your cookie-consent banner once one exists. Consent Mode
// defaults to "denied" in index.html, so no tracking cookies are set until
// grantAnalyticsConsent() runs.
export function grantAnalyticsConsent() {
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  })
}

export function denyAnalyticsConsent() {
  gtag('consent', 'update', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  })
}

// gtag.js only auto-sends a page_view on the very first load. This app is a
// client-side-routed SPA, so every subsequent route change needs an explicit
// page_view event, or GA/Ads will only ever see the entry page.
export function trackPageview(path: string) {
  gtag('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  })
}
