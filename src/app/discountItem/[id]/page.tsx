import products from "@/app/discountItem/[id]/DataProducts";
import { notFound } from "next/navigation";
import ProductDetails from "@/app/discountItem/[id]/ProductDetails";

// Define the expected structure for the props
interface ProductPageProps {
  params: { id: string };
}

// Define `generateStaticParams` for Next.js dynamic routing
export async function generateStaticParams() {
    return products.map((product: any) => ({
      params: { id: product.id.toString() }, // Ensure params is an object with `id`
    }));
  }
  

// The main page component
export default function ProductPage({ params }: ProductPageProps) {
  // Parse the ID from the params object (it's a string by default)
  const productId = parseInt(params.id, 10);
  // Find the product by ID
  const product = products.find((p: any) => p.id === productId);

  // If the product doesn't exist, return a 404 page
  if (!product) {
    notFound();
  }

  // Return the product details component with the found product
  return <ProductDetails product={product} />;
}
