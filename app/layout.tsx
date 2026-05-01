import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Akdere Wedding | Göl Kenarında Kır Düğünü Mekanı',
  description: 'İzmir Bornova Çiçekli Köy’de göl kenarında kır düğünü, nikah, kına ve özel organizasyon alanı.',
  openGraph: {
    title: 'Akdere Wedding',
    description: 'Göl kenarında kır düğünü mekanı.',
    images: ['/images/akdere-gol-kenari-nikah.png']
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}
