import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { FloatingAction } from "../components/FloatingAction";

export const metadata: Metadata = {
  title: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
  description:
    "Official website of Samastipur Blood Centre. 24x7 blood donation services, blood group testing, component separation, and emergency blood supply. Contact us for blood donation camps and more.",
  keywords: "blood donation, blood bank, Samastipur, Bihar, emergency blood, blood group testing, component separation",
  authors: [{ name: "Samastipur Blood Centre" }],
  openGraph: {
    title: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
    description: "24x7 blood donation services in Samastipur, Bihar. Save lives by donating blood.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <FloatingAction />
      </body>
    </html>
  );
}
