import Grid from "../components/Grid";
import ProductView from "../components/ProductView";
import { getAllProducts } from "../lib/getAllProducts";

export default async function Home() {
  const products = await getAllProducts(true);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Grid>
        {products.data.map((product: any, index: number) => (
          <ProductView key={index} data={product} />
        ))}
      </Grid>
    </main>
  );
}
