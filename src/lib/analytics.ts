declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

// Called by the cookie-consent banner (src/components/CookieConsent.tsx).
// Consent Mode defaults to "denied" in index.html, so no tracking cookies
// are set until grantAnalyticsConsent() runs.
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

// GTM only sees the initial page load automatically. This app is a
// client-side-routed SPA, so every route change pushes its own page_view
// event for a GTM trigger (History Change / Custom Event) to pick up and
// forward to whichever tags (GA4, Ads, ...) are configured in the container.
export function trackPageview(path: string) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'page_view',
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
  })
}
