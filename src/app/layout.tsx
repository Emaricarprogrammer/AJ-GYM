import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ginásio AJ Luanda - Transforma o Teu Corpo',
  description: 'O melhor ginásio de Luanda para alcançares os teus objetivos de fitness.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}