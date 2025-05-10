import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
        <footer style={{ textAlign: 'center', margin: '20px 0', fontStyle: 'italic' }}>
          Este sitio no es la documentación oficial de Andreani. Fue creado por Alejo Sotelo (<a href="https://alejosotelo.com.ar" target="_blank" rel="noopener noreferrer">alejosotelo.com.ar</a>).
        </footer>
      </body>
    </html>
  );
}
