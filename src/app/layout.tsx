import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  style: ["normal", "italic"],
});

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
      <body className={`min-h-screen bg-white ${lato.variable} ${playfair.variable} antialiased font-body`}>
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
