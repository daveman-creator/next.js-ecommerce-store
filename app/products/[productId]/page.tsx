// import { cookies } from 'next/headers';
// import ProductsPage from '../page';
// import Image from 'next/image';
// import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getProduct } from '../../../database/products';
// import styles from './page.module.scss';
import Product from './product';

export const dynamic = 'force-dynamic';
type Props = {
  params: {
    productId: string;
  };
};

export async function generateMetadata(props: Props) {
  const singleProduct = await getProduct(parseInt(props.params.productId));
  return {
    title: `Single product page for ${singleProduct?.name}
    `,
    description: '',
    icons: {
      shortcut: '/favicon.ico',
    },
  };
}

export default async function ProductPage(props: Props) {
  // const singleProduct = products.find((product) => {
  //   return product.name.toLocaleLowerCase() === props.params.productName;
  // });

  const singleProduct = await getProduct(parseInt(props.params.productId));

  if (!singleProduct) {
    notFound();
  }

  // const productsCookie = cookies().get('productsCookie');

  // let productsCookieParsed = [];

  // if (productsCookie) {
  //   productsCookieParsed = JSON.parse(productsCookie.value);
  // }
  // //  console.log('products', products);
  // const productsWithCart = products.map((product) => {
  //   const productWithCart = { ...product, cart: 0 };

  //   const productInCookie = productsCookieParsed.find(
  //     (productObject) => product.id === productObject.id,
  //   );

  //   if (productInCookie) {
  //     productWithCart.cart = productInCookie.cart;
  //   }
  //   return productWithCart;
  // });

  // console.log('productsWithCart', productsWithCart);

  return (
    <>
      <Product product={singleProduct} />
      {/* <p>{Product.cart}</p> */}
    </>

    // <div className={styles.div}>
    //   <h1>{props.params.productName}</h1>
    //   <main>
    //     <p>{singleProduct.longDescription}</p>
    //     <br />
    //     <Link href="/cart">
    //       <button>Add To cart</button>{' '}
    //     </Link>
    //     <Image
    //       className={styles.img}
    //       src={`/images/${singleProduct.name}-${singleProduct.id}.webp`}
    //       alt={singleProduct.type}
    //       width="400"
    //       height="400"
    //     />
    //   </main>
    // </div>
  );
}
