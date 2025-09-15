import { products } from '@/lib/data';
import ProductCard from './product-card';

const ProductShowcase = () => {
  return (
    <section className="w-full bg-card py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Premier Cloud Solutions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            Powerful, scalable, and reliable products designed for the modern enterprise.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
