import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CholloFly - Chollos de vuelos del día',
  description: 'Detectamos vuelos por debajo del precio habitual. Compra en un clic. Encuentra las mejores ofertas de vuelos del día.',
  openGraph: {
    title: 'CholloFly - Chollos de vuelos del día',
    description: 'Detectamos vuelos por debajo del precio habitual. Compra en un clic.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CholloFly - Chollos de vuelos del día',
    description: 'Detectamos vuelos por debajo del precio habitual. Compra en un clic.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
