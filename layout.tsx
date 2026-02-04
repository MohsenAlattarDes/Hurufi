import type { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import './globals.css';

export const metadata: Metadata = {
  title: 'Hurufi',
  description: 'A visual guide to Arabic typography for designers',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
