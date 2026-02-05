import type { Metadata } from "next";
// import { Inter } from "next/font/google"; // Using system fonts or add Inter if requested
import "./globals.css";
import { Header } from "../components/header/Header";
import { Footer } from "../components/footer/Footer";

// const inter = Inter({ subsets: ["latin"] });

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
      <body className="min-h-screen bg-white">
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
