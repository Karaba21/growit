"use client";

import { Hero } from "../components/hero/Hero";
import { FeaturesGrid } from "../components/features/FeaturesGrid";
import { HowItWorks } from "../components/features/HowItWorks";
import { ProductGrid } from "../components/products/ProductGrid";
import { FaqSection } from "../components/faq/FaqSection";
import { mockProducts } from "../data/mockProducts";
import Link from "next/link";

export default function Home() {
  // Get first 4 products for featured section
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <>
      <Hero />

      <FeaturesGrid />

      <HowItWorks />

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Productos Destacados
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre nuestros kits y accesorios más populares
            </p>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-8">
            <Link
              href="/catalogo"
              className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Ver todos los productos
            </Link>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}
