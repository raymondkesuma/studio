import Hero from '@/components/sections/hero';
import ProductShowcase from '@/components/sections/product-showcase';
import Testimonials from '@/components/sections/testimonials';
import CtaSection from '@/components/sections/cta-section';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductShowcase />
      <Testimonials />
      <CtaSection />
    </>
  );
}
