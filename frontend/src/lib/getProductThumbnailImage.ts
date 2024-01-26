export async function getProductThumbnailImage(populate?: boolean) {
  return await fetch(
    process.env.NEXT_PUBLIC_STRAPI +
      data.attributes.productImage.data.attributes.formats.thumbnail.url,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  ).then((response) => response.json());
}
