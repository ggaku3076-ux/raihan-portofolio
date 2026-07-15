import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Raihan Fajar Aly — Portfolio",
  description:
    "Web Developer & UI/UX Designer. Building with intent, designing with purpose.",
  openGraph: {
    title: "Raihan Fajar Aly",
    description: "Web Developer & UI/UX Designer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
