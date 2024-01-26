import Image from "next/image";
import Link from "next/link";

type Props = { data: any };

export default async function ProductView({ data }: Props) {
  const link = data.id;
  const productName = data.attributes.productName;
  const productImage = data.attributes.productImage;
  const alternativeText =
    data.attributes.productImage.data.attributes.alternativeText;
  const productPrice = `${data.attributes.productPrice}€`;
  const productImageThumbnail =
    productImage.data.attributes.formats.thumbnail.url;
  const productImageThumbnailSize = {
    width: productImage.data.attributes.formats.thumbnail.width,
    height: productImage.data.attributes.formats.thumbnail.height,
  };
  //const productDescription = data.attributes.productDescription[0];
  return (
    <Link href={`/product/${link}`}>
      <h1 className="font-bold">{productName}</h1>
      {/* <p>{productPrice}</p> */}
      <Image
        src={process.env.NEXT_PUBLIC_STRAPI + productImageThumbnail}
        width={productImageThumbnailSize.width}
        height={productImageThumbnailSize.height}
        alt={alternativeText}
      />

      {/* {productDescription && <div></div>} */}
    </Link>
  );
}
