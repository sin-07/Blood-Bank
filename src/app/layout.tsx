import type { Metadata, Viewport } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { FloatingAction } from "../components/FloatingAction";

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
    default: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
    template: "%s | SAMASTIPUR BLOOD CENTRE"
  },
  description:
    "Official website of Samastipur Blood Centre. 24x7 blood donation services, blood group testing, component separation, and emergency blood supply. Contact us for blood donation camps and more.",
  keywords: ["blood donation", "blood bank", "Samastipur", "Bihar", "emergency blood", "blood group testing", "component separation", "24x7 blood service"],
  authors: [{ name: "Samastipur Blood Centre" }],
  creator: "Samastipur Blood Centre",
  publisher: "Samastipur Blood Centre",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "SAMASTIPUR BLOOD CENTRE",
    title: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
    description: "24x7 blood donation services in Samastipur, Bihar. Save lives by donating blood.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
    description: "24x7 blood donation services in Samastipur, Bihar. Save lives by donating blood.",
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
      <body className="font-ubuntu antialiased bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <FloatingAction />
      </body>
    </html>
  );
}
