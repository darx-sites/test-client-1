import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ShopHub - Your Premium E-Commerce Destination',
  description: 'Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, home decor, and more.',
  keywords: 'ecommerce, online shopping, products, fashion, electronics, home decor',
  openGraph: {
    title: 'ShopHub - Your Premium E-Commerce Destination',
    description: 'Discover amazing products at unbeatable prices',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}