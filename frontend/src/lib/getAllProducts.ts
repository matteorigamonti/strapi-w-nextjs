export async function getAllProducts(populate?: boolean) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/products?populate=*`
  );
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    // throw new Error("Failed to fetch data");
    // return null;
    return undefined;
  }

  return res.json();
}
