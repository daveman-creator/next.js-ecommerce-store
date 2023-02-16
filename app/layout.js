import './global.scss';
import { cookies } from 'next/headers';
import Link from 'next/link';
import { getProducts } from '../database/products';
import CookieBanner from './CookieBanner';
import styles from './layout.module.scss';

export default async function RootLayout({ children }) {
  const products = await getProducts();
  const productsCookie = cookies().get('productsCookie');

  let productsCookieParsed = [];

  if (productsCookie) {
    productsCookieParsed = JSON.parse(productsCookie.value);
  }

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
    subTotal += product.cart;
  });

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CookieBanner />
        <header className={styles.header}>
          <nav className={styles.navbar}>
            <hi className={styles.logo}>Dave</hi>
            <ul className={styles.links}>
              <li className={styles.navlink}>
                <Link href="/">Home</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/products">Products</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/about us">About Us</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/contact">Contact</Link>
              </li>
              <li className={styles.navlink}>
                <Link href="/login">login</Link>
              </li>
              <li className={styles.navlink}>
                {' '}
                <Link href="/cart"> cart ({subTotal})</Link>
              </li>
            </ul>
          </nav>
        </header>

        {children}
        <footer className={styles.footer}>copyright BodyCare 2023</footer>
      </body>
    </html>
  );
}
