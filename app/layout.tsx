import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';
import { CartProvider } from '@/lib/cart-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'test-client-1 - Premium E-Commerce Store',
  description: 'Discover premium products with exceptional quality and service. Shop the latest collections and enjoy seamless checkout experience.',
  keywords: 'ecommerce, online shopping, premium products, fashion, electronics',
  authors: [{ name: 'test-client-1' }],
  openGraph: {
    title: 'test-client-1 - Premium E-Commerce Store',
    description: 'Discover premium products with exceptional quality and service.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'test-client-1 - Premium E-Commerce Store',
    description: 'Discover premium products with exceptional quality and service.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}