/**
 * Analytics placeholder.
 *
 * Replace the IDs below with your real tracking IDs:
 *  - Google Analytics (GA4): G-XXXXXXXXXX
 *  - Google Search Console verification: paste the <meta> tag content
 *
 * Once you have the IDs, uncomment the relevant <Script> blocks.
 */

// import Script from "next/script";

export function AnalyticsHead() {
  return (
    <>
      {/* ── Google Analytics (GA4) ──
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
      */}

      {/* ── Google Search Console verification ──
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      */}
    </>
  );
}
