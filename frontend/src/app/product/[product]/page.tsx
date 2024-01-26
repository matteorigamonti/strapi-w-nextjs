import { getSpecificProduct } from "@/components/lib/getSpecificProduct";

export default async function Page({
  params,
}: {
  params: { product: string };
}) {
  const product = await getSpecificProduct(params.product);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>{product.data.attributes.productName}</h1>
    </main>
  );
}
