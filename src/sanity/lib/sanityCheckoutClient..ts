// lib/sanityCheckoutClient.ts
import { createClient } from 'next-sanity';

const sanityCheckoutClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Ensure this matches your env variable
  dataset: 'production', // Or your specific dataset
  apiVersion:'2021-08-31', // Replace with your API version
  useCdn: false, // Disable CDN for write-heavy operations
  token: process.env.SANITY_API_TOKEN_FOR_CHECKOUT, // Second token for checkout
});

export default sanityCheckoutClient;
