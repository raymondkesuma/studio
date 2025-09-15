'use server';

/**
 * @fileOverview A flow for generating product highlights using an LLM.
 *
 * - generateProductHighlights - A function that generates product highlights.
 * - GenerateProductHighlightsInput - The input type for the generateProductHighlights function.
 * - GenerateProductHighlightsOutput - The return type for the generateProductHighlights function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateProductHighlightsInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
  targetAudience: z.string().describe('The target audience for the product (e.g., enterprise businesses).'),
  keyFeatures: z.array(z.string()).describe('An array of key features of the product.'),
  businessNeeds: z.array(z.string()).describe('An array of common business needs of the target audience.'),
});
export type GenerateProductHighlightsInput = z.infer<typeof GenerateProductHighlightsInputSchema>;

const GenerateProductHighlightsOutputSchema = z.object({
  productHighlights: z.array(z.string()).describe('An array of concise and compelling product highlights.'),
});
export type GenerateProductHighlightsOutput = z.infer<typeof GenerateProductHighlightsOutputSchema>;

export async function generateProductHighlights(
  input: GenerateProductHighlightsInput
): Promise<GenerateProductHighlightsOutput> {
  return generateProductHighlightsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateProductHighlightsPrompt',
  input: {schema: GenerateProductHighlightsInputSchema},
  output: {schema: GenerateProductHighlightsOutputSchema},
  prompt: `You are a marketing expert specializing in creating compelling product highlights for enterprise businesses.

  Given the following product information, generate a list of concise and engaging product highlights that showcase the product's value proposition to the target audience. Emphasize how the key features address the common business needs.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  Target Audience: {{{targetAudience}}}
  Key Features: {{#each keyFeatures}}- {{{this}}}{{#unless @last}}\n{{/unless}}{{/each}}
  Business Needs: {{#each businessNeeds}}- {{{this}}}{{#unless @last}}\n{{/unless}}{{/each}}

  Product Highlights:`, // Ensure the LLM outputs an array of strings
});

const generateProductHighlightsFlow = ai.defineFlow(
  {
    name: 'generateProductHighlightsFlow',
    inputSchema: GenerateProductHighlightsInputSchema,
    outputSchema: GenerateProductHighlightsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
