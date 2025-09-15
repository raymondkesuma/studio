import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 text-center md:px-6">
        <div className="mx-auto max-w-3xl space-y-6">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Elevate Your Business?
          </h2>
          <p className="text-muted-foreground md:text-xl">
            Let our experts help you design the perfect cloud architecture for your enterprise needs.
          </p>
          <Button variant="accent" size="lg">
            Request a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
