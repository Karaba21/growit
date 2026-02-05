import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

export const metadata: Metadata = {
  title: "Growit - Cultiva tu propio alimento en casa",
  description: "Sistema inteligente de cultivo para tu hogar. Fácil, automático y orgánico.",
};


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
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white antialiased font-body">
        <div id="app" className="flex flex-col min-h-screen">
          <Header currentPath="/" />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
