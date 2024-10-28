import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

import { ThemeProvider as NextThemesProvider } from "next-themes";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "TimeWise - Efficient Time Management",
  description:
    "Boost your productivity with TimeWise, the ultimate time management app. Organize tasks, track progress, and achieve your goals.",
  keywords: [
    "time management",
    "productivity",
    "task organization",
    "goal tracking",
  ],
  authors: [{ name: "Arindam Roy" }],
  creator: "TimeWise",

  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://timewise-app.com",
    title: "TimeWise - Master Your Time",
    description:
      "Elevate your productivity with TimeWise. Manage time effectively, organize tasks, and reach your goals.",
    siteName: "TimeWise",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeWise - Efficient Time Management",
    description:
      "Maximize your productivity with TimeWise. The smart way to manage your time and tasks.",
    creator: "@TimeWiseApp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <NextThemesProvider attribute="class" defaultTheme="dark">
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
