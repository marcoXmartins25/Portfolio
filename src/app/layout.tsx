import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Marco Martins | Programador Full Stack",
    template: "%s | Marco Martins",
  },
  description:
    "Portfólio de Marco Martins — Programador Full Stack especializado em React, PHP e bases de dados. Experiência em plataformas SaaS multi-tenant e desenvolvimento web.",
  keywords: [
    "Marco Martins",
    "Full Stack Developer",
    "Programador",
    "React",
    "PHP",
    "PostgreSQL",
    "Portfolio",
    "Portugal",
  ],
  authors: [{ name: "Marco Martins", url: "https://github.com/marcoXmartins25" }],
  creator: "Marco Martins",
  openGraph: {
    type: "website",
    locale: "pt_PT",
    alternateLocale: "en_US",
    url: siteUrl,
    siteName: "Marco Martins — Portfólio",
    title: "Marco Martins | Programador Full Stack",
    description:
      "Programador Full Stack especializado em React, PHP e bases de dados. Experiência em plataformas SaaS multi-tenant.",
    images: [
      {
        url: "/MarcoMartins.png",
        width: 800,
        height: 800,
        alt: "Marco Martins",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Marco Martins | Programador Full Stack",
    description:
      "Programador Full Stack especializado em React, PHP e bases de dados.",
    images: ["/MarcoMartins.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#050508" },
    { media: "(prefers-color-scheme: light)", color: "#f0f2ff" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Marco Martins",
  jobTitle: "Full Stack Developer",
  url: siteUrl,
  email: "mailto:marcojxmartins@gmail.com",
  sameAs: ["https://github.com/marcoXmartins25"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mogadouro",
    addressRegion: "Bragança",
    addressCountry: "PT",
  },
};

// Runs before paint: applies the saved (or system) theme so there is no flash
// of the wrong theme on load.
const themeInitScript = `(function(){try{var s=localStorage.getItem("theme");var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider>
          <LangProvider>{children}</LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
