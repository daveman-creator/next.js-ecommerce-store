'use client';

// import { cookies } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Link from 'next/link';
import { useState } from 'react';
// import { products } from '../../../database/products';
import { getParsedCookie, setStringifiedCookie } from '../../../utils/cookies';
import styles from './product.module.scss';

// import { products } from '../../../database/products';

// productscookie = [ {id: number, stars: number}, ]
// export const dynamic = 'force-dynamic';

export default function Product(props) {
  // const singleProduct = await getProduct(props.params.productName);
  const [count, setCount] = useState(1);
  const router = useRouter();

  return (
    <main className={styles.main}>
      <Image
        className={styles.img}
        src={`/images/${props.product.name}-${props.product.id}.webp`}
        alt={props.product.type}
        width="400"
        height="400"
      />
      <div className={styles.content}>
        <h1>{props.product.name}</h1>
        <p>{props.product.longDescription}</p>
        <div className={styles.div}>
          <input
            className={styles.input}
            placeholder="count"
            value={count}
            onChange={(event) => {
              setCount(event.currentTarget.value);
            }}
          />
          <button
            className={styles.button}
            onClick={() => {
              if (count > 1) {
                setCount(count - 1);
              }
            }}
          >
            -
          </button>
          <button
            className={styles.button}
            onClick={() => {
              if (count >= 1) {
                setCount(count + 1);
              } else {
                setCount(1);
              }
            }}
          >
            +
          </button>{' '}
          <br />
          <Link href="/cart">
            <button
              data-test-id="product-add-to-cart"
              className={styles.button2}
              onClick={() => {
                const productsInCookies = getParsedCookie('productsCookie');

                if (!productsInCookies) {
                  setStringifiedCookie('productsCookie', [
                    { id: props.product.id, cart: 1 },
                  ]);
                  return; // if there is no cookie function stop here
                }

                const foundProduct = productsInCookies.find(
                  (productInCookie) => {
                    return productInCookie.id === props.product.id;
                  },
                );

                if (foundProduct) {
                  foundProduct.cart += count;
                } else {
                  productsInCookies.push({
                    id: props.product.id,
                    cart: count,
                  });
                }

                setStringifiedCookie('productsCookie', productsInCookies);
                setCount(1);

                router.refresh();
              }}
            >
              Add To Cart
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
