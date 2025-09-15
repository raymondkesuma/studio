'use client';

import { useState } from 'react';
import type { ElementType } from 'react';
import * as LucideIcons from 'lucide-react';
import { generateProductHighlights } from '@/ai/flows/generate-product-highlights';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { CheckCircle2, Loader2, Sparkles } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  features: {
    title: string;
    icon: keyof typeof LucideIcons;
  }[];
  useCases: string[];
  targetAudience: string;
  keyFeatures: string[];
  businessNeeds: string[];
};

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { toast } = useToast();
  const [highlights, setHighlights] = useState<string[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateHighlights = async () => {
    setIsLoading(true);
    setHighlights(null);
    try {
      const result = await generateProductHighlights({
        productName: product.name,
        productDescription: product.description,
        targetAudience: product.targetAudience,
        keyFeatures: product.keyFeatures,
        businessNeeds: product.businessNeeds,
      });
      setHighlights(result.productHighlights);
    } catch (error) {
      console.error('Failed to generate highlights:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate product highlights. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow duration-300 hover:shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-6">
        <p className="font-headline text-4xl font-bold">
          {product.price} <span className="text-sm font-normal text-muted-foreground">{product.price.includes('/') ? '' : 'plan'}</span>
        </p>
        <div className="space-y-2">
          <h4 className="font-semibold">Key Features:</h4>
          <ul className="space-y-2">
            {product.features.map((feature) => {
              const Icon = LucideIcons[feature.icon] as ElementType || LucideIcons.CheckCircle;
              return (
                <li key={feature.title} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Icon className="h-4 w-4 text-primary" />
                  <span>{feature.title}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-semibold">Common Use Cases:</h4>
          <div className="flex flex-wrap gap-2">
            {product.useCases.map((useCase) => (
              <span key={useCase} className="rounded-full bg-secondary px-3 py-1 text-xs text-secondary-foreground">
                {useCase}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-4 rounded-lg bg-secondary/50 p-4">
          <Button
            onClick={handleGenerateHighlights}
            disabled={isLoading}
            className="w-full"
            variant="ghost"
            size="sm"
          >
            {isLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Sparkles className="mr-2 h-4 w-4 text-primary" />
            )}
            {isLoading ? 'Generating...' : 'Generate AI Highlights'}
          </Button>

          {isLoading && (
            <div className="space-y-2 pt-2">
              <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-5/6 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-full animate-pulse rounded-md bg-muted" />
            </div>
          )}

          {highlights && (
            <ul className="space-y-2 pt-2 animate-in fade-in-0">
              {highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="accent">
          Get Started
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
