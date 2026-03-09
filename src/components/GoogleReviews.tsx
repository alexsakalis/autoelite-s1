"use client";

import Script from "next/script";
import { ELFSIGHT_APP_ID, GOOGLE_REVIEWS_URL } from "@/lib/constants";

type Props = {
  showViewMore?: boolean;
};

export function GoogleReviews({ showViewMore = true }: Props) {
  if (!ELFSIGHT_APP_ID) {
    return (
      <div className="rounded-2xl border border-surface-border bg-surface-card p-10 text-center">
        <h3 className="text-xl font-bold text-white">Google Reviews</h3>
        <p className="mt-3 text-sm text-text-secondary">
          To display your live Google Reviews, set up your free Elfsight widget:
        </p>
        <ol className="mx-auto mt-4 max-w-md space-y-2 text-left text-sm text-text-secondary">
          <li className="flex gap-2">
            <span className="shrink-0 font-bold text-brand-orange">1.</span>
            Go to{" "}
            <a href="https://elfsight.com/google-reviews-widget/" target="_blank" rel="noopener noreferrer" className="text-brand-orange underline">
              elfsight.com/google-reviews-widget
            </a>
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-bold text-brand-orange">2.</span>
            Create a free widget and connect your Google Business
          </li>
          <li className="flex gap-2">
            <span className="shrink-0 font-bold text-brand-orange">3.</span>
            Copy your App ID and paste it in <code className="rounded bg-surface-dark px-1.5 py-0.5 text-xs text-white">src/lib/constants.ts</code>
          </li>
        </ol>
        {showViewMore && (
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-lg border border-brand-orange px-6 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
          >
            View Our Reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        )}
      </div>
    );
  }

  return (
    <div>
      <Script
        src="https://elfsightcdn.com/platform.js"
        strategy="lazyOnload"
      />
      <div className={`elfsight-app-${ELFSIGHT_APP_ID}`} data-elfsight-app-lazy />
      {showViewMore && (
        <div className="mt-8 text-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-brand-orange px-6 py-3 text-sm font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-brand-black"
          >
            View All Reviews on Google
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
