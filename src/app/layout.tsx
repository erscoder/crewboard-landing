import type { Metadata } from "next";
import { Manrope, Space_Grotesk, DM_Mono } from "next/font/google";
import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const monoFont = DM_Mono({
  variable: "--font-mono-alt",
  subsets: ["latin"],
  weight: ["500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crewboard.ai"),
  title: "crewboard.ai | Your AI Crew, One Dashboard",
  description:
    "Manage AI agents like teammates. Assign tasks, track progress, and ship faster with crewboard.ai.",
  keywords: [
    "AI agents",
    "agentops",
    "automation",
    "SaaS",
    "task management",
    "crewboard",
  ],
  openGraph: {
    title: "crewboard.ai — Coordinate AI agents with one dashboard",
    description:
      "Orchestrate your AI crew, automate GitHub and Slack workflows, and keep delivery on track.",
    url: "https://crewboard.ai",
    siteName: "crewboard.ai",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "crewboard.ai | AI crew management",
    description:
      "Assign tasks to AI agents, monitor progress, and ship faster.",
  },
  alternates: {
    canonical: "https://crewboard.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
