import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#dc2626' },
    { media: '(prefers-color-scheme: dark)', color: '#991b1b' }
  ],
};

export const metadata: Metadata = {
  title: {
    default: "SAMASTIPUR BLOOD CENTRE - Maintenance",
    template: "%s | SAMASTIPUR BLOOD CENTRE"
  },
  description:
    "The Samastipur Blood Centre website is temporarily unavailable for maintenance.",
  keywords: ["maintenance", "temporarily unavailable", "Samastipur Blood Centre"],
  authors: [{ name: "Samastipur Blood Centre" }],
  creator: "Samastipur Blood Centre",
  publisher: "Samastipur Blood Centre",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SAMASTIPUR BLOOD CENTRE",
    title: "SAMASTIPUR BLOOD CENTRE - Maintenance",
    description: "The website is temporarily unavailable for maintenance.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "SAMASTIPUR BLOOD CENTRE - Maintenance",
    description: "The website is temporarily unavailable for maintenance.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={ubuntu.variable}>
      <body className="font-ubuntu antialiased min-h-screen bg-slate-950 text-white">
        <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-16">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(220,38,38,0.28),_transparent_40%),linear-gradient(135deg,_#020617_0%,_#111827_50%,_#1f2937_100%)]" />
          <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />
          <section className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/10 bg-white/8 p-8 text-center shadow-2xl shadow-black/40 backdrop-blur-xl sm:p-12">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-600/20 ring-1 ring-red-400/40">
              <span className="text-2xl font-bold text-red-200">!</span>
            </div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-red-200/80">Temporarily Offline</p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">We are down for maintenance</h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-200 sm:text-lg">
              The Samastipur Blood Centre website is temporarily unavailable while we perform maintenance and updates.
              Please check back soon.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">No public access</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Maintenance mode</span>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
