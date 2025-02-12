import { createClient } from 'next-sanity';
import imageUrlBuilder from "@sanity/image-url";

import { apiVersion, dataset, projectId } from '../env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Use CDN for faster read operations, false for write-heavy apps
  token: process.env.SANITY2_API_TOKEN_FOR_CHECKOUT, // Include the token for authenticated requests
});

// Configure the image builder
const builder = imageUrlBuilder(client);

// Helper function to generate URLs
export function urlFor(source: any) {
  return builder.image(source).url();
}
