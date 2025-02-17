import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "NLW Connect - 2025",
  description: "Next app created during the Next Level Week 2025",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-black text-white">{children}</body>
    </html>
  )
}
