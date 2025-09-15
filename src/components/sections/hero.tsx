import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 lg:py-40 xl:py-48">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="animate-in fade-in-0 slide-in-from-bottom-10 duration-1000">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            The Cloud for Ambitious Enterprises
          </h1>
          <p className="mx-auto mt-4 max-w-[700px] text-lg text-foreground/80 md:text-xl">
            ApexCloud provides the scalable, secure, and intelligent infrastructure your business needs to innovate faster and lead the market.
          </p>
          <div className="mt-8">
            <Button variant="accent" size="lg">
              Request a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
