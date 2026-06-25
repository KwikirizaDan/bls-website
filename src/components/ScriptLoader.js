"use client"
import Script from 'next/script'

export default function ScriptLoader() {
  return (
    <>
      <Script id="unhandled-rejection-guard" strategy="beforeInteractive">
        {`window.addEventListener('unhandledrejection',function(e){if(e.reason&&'[object Event]'===e.reason.toString()){e.preventDefault()}})`}
      </Script>
      <Script
        src="/assets/js/plugins/smooth-scroll.js"
        strategy="afterInteractive"
        onError={(e) => console.warn('Script load error:', e)}
      />
    </>
  )
}
