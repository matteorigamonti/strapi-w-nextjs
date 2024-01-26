export async function getSpecificProduct(id: any) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/products/${id}?populate=*`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
}
