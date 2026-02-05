"use client";

import { Hero } from "../components/hero/Hero";
import PaymentCarousel from "../components/PaymentCarousel";
import { FeaturesGrid } from "../components/features/FeaturesGrid";
import { HowItWorks } from "../components/features/HowItWorks";
import { ProductGrid } from "../components/products/ProductGrid";
import { ProductShowcase } from "../components/products/ProductShowcase";
import { ReviewsSection } from "../components/reviews/ReviewsSection";
import { FaqSection } from "../components/faq/FaqSection";
import { PickupSection } from "../components/pickup/PickupSection";
import { mockProducts } from "../data/mockProducts";
import Link from "next/link";

export default function Home() {
  // Get first 4 products for featured section
  const featuredProducts = mockProducts.slice(0, 4);

  return (
    <>
      <Hero />
      <PaymentCarousel />

      <FeaturesGrid />

      <HowItWorks />

      <ProductShowcase
        title="GROW 28"
        price="$12.400,00 UYU"
        image="/images/grow-28.png"
        imageAlt="Grow 28 Hydroponic System"
        subtitle="GROW HYDROPONIC"
      />

      <ProductShowcase
        title="GROW 28 INDOOR"
        price="$14.400,00 UYU"
        image="/images/grow-28-indoor.png"
        imageAlt="Grow 28 Indoor System"
        subtitle="SMART INDOOR"
        reverse={true}
        bgColor="bg-white"
      />

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-medium text-primary mb-4 uppercase tracking-widest">
              Todos nuestros productos
            </h2>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="inline-block bg-[#D9704F] hover:bg-[#c56040] text-white px-8 py-3 rounded-md font-body font-bold text-sm uppercase tracking-wider transition-colors shadow-sm"
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>

      <ReviewsSection />

      <PickupSection />

      <FaqSection />
    </>
  );
}
