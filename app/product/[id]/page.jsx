import ProductPage from "@/components/ProductPage";

export async function generateStaticParams() {
  try {
    const productIds = Array.from({ length: 150 }, (_, i) => i + 1);

    return productIds.map((id) => ({
      id: id.toString(),
    }));
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
}
export default function Product({ params }) {
  return <ProductPage params={params} />;
}
