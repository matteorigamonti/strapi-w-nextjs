export async function getAllProducts(populate?: boolean) {
  return await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API}/products${
      populate ? "?populate=*" : ""
    }`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
}
