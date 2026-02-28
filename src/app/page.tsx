
import { Hero } from "../components/hero/Hero";
import PaymentCarousel from "../components/PaymentCarousel";
import { StartGrowing } from "../components/features/StartGrowing";
import { ImageComparison } from "../components/features/ImageComparison";
import { Process } from "../components/features/Process";
import { FeaturesGrid } from "../components/features/FeaturesGrid";
import { HowItWorks } from "../components/features/HowItWorks";
import { ProductGrid } from "../components/products/ProductGrid";
import { WhyChooseGrowit } from "../components/features/WhyChooseGrowit";
import { ProductShowcase } from "../components/products/ProductShowcase";
import { ReviewsSection } from "../components/reviews/ReviewsSection";
import { FaqSection } from "../components/faq/FaqSection";
import { PickupSection } from "../components/pickup/PickupSection";
import { ProductSelection } from "../components/products/ProductSelection";
import { getProducts } from "../lib/shopify";
import Link from "next/link";

export default async function Home() {
  // Get first 4 products for featured section
  const products = await getProducts();
  const featuredProducts = products.slice(0, 4);

  const indoorProduct = products.find((p) => p.title.toLowerCase().includes("indoor") && p.title.toLowerCase().includes("grow 28"));
  const outdoorProduct = products.find((p) => p.title.toLowerCase().includes("outdoor") && p.title.toLowerCase().includes("grow 28"));

  return (
    <>
      <Hero />
      <PaymentCarousel />

      <FeaturesGrid />

      <HowItWorks />

      <WhyChooseGrowit />

      <ImageComparison />

      <Process />

      <ProductSelection />

      <ReviewsSection />

      <StartGrowing />

      <section className="pt-8 pb-8 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-primary mb-6 uppercase tracking-wide">
              Lo más vendido
            </h2>
          </div>

          <ProductGrid products={featuredProducts} />

          <div className="text-center mt-12">
            <Link
              href="/catalogo"
              className="inline-block py-3 px-8 bg-primary text-white font-accent font-bold text-sm uppercase tracking-wider hover:bg-[#254040] transition-colors rounded-lg shadow-sm"
            >
              Ver todos
            </Link>
          </div>
        </div>
      </section>



      <PickupSection />

      <FaqSection />
    </>
  );
}
