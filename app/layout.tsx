import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Buffet Pierroti Eventos - O Melhor Buffet Para Sua Festa",
    template: "%s | Buffet Pierroti Eventos"
  },
  description: "Qualidade, sabor e atendimento impecável para transformar seu evento em uma experiência inesquecível. Buffet completo para casamentos, aniversários, formaturas e eventos corporativos.",
  keywords: [
    "buffet",
    "catering",
    "eventos",
    "casamentos",
    "aniversários",
    "formaturas",
    "eventos corporativos",
    "São Paulo",
    "SP"
  ],
  authors: [{ name: "Luis Carlos Vitoriano Neto" }],
  creator: "Luis Carlos Vitoriano Neto",
  publisher: "Buffet Pierroti Eventos",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://buffet-pierroti-eventos.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://buffet-pierroti-eventos.vercel.app",
    title: "Buffet Pierroti Eventos - O Melhor Buffet Para Sua Festa",
    description: "Qualidade, sabor e atendimento impecável para transformar seu evento em uma experiência inesquecível.",
    siteName: "Buffet Pierroti Eventos",
    images: [
      {
        url: "/elegant-buffet-table-with-gourmet-dishes.jpg",
        width: 1200,
        height: 630,
        alt: "Buffet Pierroti Eventos - Mesa elegante com pratos gourmet",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buffet Pierroti Eventos - O Melhor Buffet Para Sua Festa",
    description: "Qualidade, sabor e atendimento impecável para transformar seu evento em uma experiência inesquecível.",
    images: ["/elegant-buffet-table-with-gourmet-dishes.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "food",
  classification: "Business",
  referrer: "origin-when-cross-origin",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
