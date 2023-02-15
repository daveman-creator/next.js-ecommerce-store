import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export default async function Cart() {
  const productsCookie = cookies().get('productsCookie');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }
  const products = await getProducts();

  // console.log('products', products);
  const productsWithCart = products.map((product) => {
    const productWithCart = { ...product, cart: 0 };

    const productInCookie = productsCookieParsed.find(
      (productObject) => product.id === productObject.id,
    );

    if (productInCookie) {
      productWithCart.cart = productInCookie.cart;
      // console.log(productWithCart.cart);
    }
    return productWithCart;
  });

  let subTotal = 0;
  productsWithCart.forEach((product) => {
    subTotal += product.price * product.cart;
  });

  // console.log('productsWithCart', productsWithCart);

  return (
    <div className={styles.div}>
      {productsWithCart
        .filter((product) => product.cart > 0)
        .map((product) => {
          return (
            <div key={product.id}>
              <h2 className={styles.h2}>
                {' '}
                {product.name}
                {/* ({product.cart}) */}
              </h2>
              <Image
                className={styles.img}
                src={`/images/${product.name}-${product.id}.webp`}
                alt={product.type}
                width="100"
                height="100"
              />
              <p className={styles.p}>£{product.price}</p>
              <p className={styles.p}> quantity: {product.cart}</p>
            </div>
          );
        })}
      <p className={styles.p}>Total: £{subTotal}</p>
      <Link href={`/cart/${Cart.id}`}>
        <button className={styles.button}>Check Out </button>
      </Link>
    </div>
  );
}
