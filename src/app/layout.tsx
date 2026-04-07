import type { Metadata } from "next";
import { FacebookPixel } from "../components/common/FacebookPixel";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";
import { CartProvider } from "../contexts/CartContext";
import { CartDrawer } from "../components/cart/CartDrawer";
import { AnnouncementBanner } from "../components/header/AnnouncementBanner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://growituruguay.com'),
  title: {
    default: "Growit - Cultiva tu propio alimento en casa",
    template: "%s | Growit",
  },
  description: "Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico. Descubre una nueva forma de cultivar con Growit.",
  keywords: ["Cultivo", "Growit", "Orgánico", "Hidroponía", "Interior", "Exterior", "Plantas", "Hogar", "Sistema inteligente"],
  openGraph: {
    title: "Growit - Cultiva tu propio alimento en casa",
    description: "Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico.",
    url: "/",
    siteName: "Growit",
    locale: "es_UY",
    type: "website",
    images: [
      {
        url: "/ogimage.webp",
        width: 1200,
        height: 630,
        alt: "Growit - Cultiva tu propio alimento en casa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growit - Cultiva tu propio alimento en casa",
    description: "Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico.",
    images: ["/ogimage.webp"],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    shortcut: '/favicon_io/favicon.ico',
    apple: [
      { url: '/favicon_io/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/favicon_io/site.webmanifest',
};


import { ScrollToTop } from "../components/common/ScrollToTop";
import { WhatsAppButton } from "../components/common/WhatsAppButton";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Montserrat:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Noto+Serif:ital,wght@0,100..900;1,100..900&family=Tinos:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white antialiased font-body">
        <FacebookPixel />
        <ScrollToTop />
        <WhatsAppButton />
        <CartProvider>
          <div id="app" className="flex flex-col min-h-screen">
            <AnnouncementBanner />
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
