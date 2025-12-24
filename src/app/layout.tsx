import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { FloatingAction } from "../components/FloatingAction";

export const metadata: Metadata = {
  title: "SAMASTIPUR BLOOD CENTRE - Donate Blood, Save Lives",
  description:
    "Official website of Samastipur Blood Centre. 24x7 blood donation services, blood group testing, component separation, and emergency blood supply. Contact us for blood donation camps and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full w-full">
      <body className="antialiased bg-gray-50 dark:bg-gray-900 min-h-screen flex flex-col w-full h-full">
        <Navbar />
        <main className="flex-1 pt-20 pb-0 px-0 w-full flex flex-col">
          {children}
        </main>
        <FloatingAction />
      </body>
    </html>
  );
}
