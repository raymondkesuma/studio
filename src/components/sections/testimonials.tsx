import Image from 'next/image';
import { testimonials } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const Testimonials = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-xl">
            See how enterprises are succeeding with ApexCloud.
          </p>
        </div>
        <Carousel
          opts={{
            align: 'start',
            loop: true,
          }}
          className="mx-auto w-full max-w-5xl"
        >
          <CarouselContent>
            {testimonials.map((testimonial) => {
              const logo = PlaceHolderImages.find((img) => img.id === testimonial.logoImageId);
              return (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <blockquote className="flex-grow text-lg font-semibold leading-snug">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="mt-6">
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          {logo && (
                            <div className="mt-4 flex justify-center">
                                <Image
                                  src={logo.imageUrl}
                                  alt={`${testimonial.company} logo`}
                                  width={150}
                                  height={50}
                                  data-ai-hint={logo.imageHint}
                                  className="object-contain"
                                />
                            </div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
