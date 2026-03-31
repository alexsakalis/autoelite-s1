import Script from "next/script";

export function AnalyticsHead() {
  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-FF79049V64"
        strategy="afterInteractive"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-FF79049V64');
        `}
      </Script>

      {/* Google Search Console verification — uncomment and add your code when ready
      <meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
      */}
    </>
  );
}
