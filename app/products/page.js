import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
// products
import styles from './page.module.scss';

export default async function ProductsPage() {
  const products = await getProducts();
  // const productsCookie = cookies().get('productsCookie');

  // let productsCookieParsed = [];

  // if (productsCookie) {
  //   productsCookieParsed = JSON.parse(productsCookie.value);
  // }
  // // console.log('productsCookieParsed', productsCookieParsed);

  // const productsWithCart = products.map((product) => {
  //   const productWithCart = { ...product, cart: 0 };

  //   // const productInCookie = productsCookieParsed.find((productObject) => {
  //   //   console.log(product.id, productObject.id);
  //   //   return product.id === productObject.id;
  //   // });
  //   const productInCookie = productsCookieParsed.find(
  //     (productObject) => product.id === productObject.id,
  //   );

  //   // console.log(productInCookie);

  //   if (productInCookie) {
  //     productWithCart.cart = productInCookie.cart;
  //     // console.log(productWithCart.cart);
  //   }
  //   return productWithCart;
  // });

  // console.log('productsWithCart', productsWithCart);

  return (
    <>
      <div className="top container">
        <hi className={styles.h1}>All Products</hi>
        <form>
          <select>
            {' '}
            abc Shop
            <option value="1"> Default sorting</option>
            <option value="2">Sort By Price</option>
            <option value="3">Sort By Popularity</option>
            <option value="4">Sort By Sale</option>
            <option value="5">Sort By Rating</option>
          </select>
        </form>
      </div>

      <main className={styles.main}>
        {products.map((product) => {
          return (
            <div className={styles.productDiv} key={product.id}>
              <Link className={styles.link} href={`/products/${product.id}`}>
                <h2>{product.name}</h2>
              </Link>
              <Link className={styles.link2} href={`/products/${product.id}`}>
                <Image
                  className={styles.img}
                  src={`/images/${product.name}-${product.id}.webp`}
                  alt={product.type}
                  width="300"
                  height="300"
                />
                <h2>{product.description}</h2>
              </Link>
              <Link href={`/products/${product.id}`}>
                <button>£{product.price}</button>
              </Link>
            </div>
          );
        })}
      </main>
    </>
  );
}
