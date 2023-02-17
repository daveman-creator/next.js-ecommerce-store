'use client';

import { useRouter } from 'next/navigation';
// import { getProducts } from '../../database/products';
// import { useState } from 'react';
// import { products } from '../../database/products';
// import { Value } from 'sass';
import { setStringifiedCookie } from '../../utils/cookies';

export default function Remove(props) {
  // console.log(props);

  // const [products, setProducts] = useState(initialState);

  // const remove = () => {
  //   setProducts((current) => current.filter((product) => product.id !== 0));
  // };
  // const products = await getProducts();
  const router = useRouter();

  // return <button onClick={handleClick}>Remove Product from Cart</button>;
  return (
    <button
      data-test-id="cart-product-remove-<product id>"
      onClick={() => {
        const cookies = props.productsCookieParsed;
        const filteredCookie = cookies.filter(
          (cookie) => cookie.id !== props.product.id,
        );
        console.log(filteredCookie);
        setStringifiedCookie('productsCookie', filteredCookie);
        router.refresh();
      }}
    >
      Remove
    </button>
  );
}

//  onClick={handleClick}
// {productsWithCart
//             .filter((product) => product.cart > 0)
//           const newState = [...products];
//           newState.pop();
// export default function Product(props) {
//   const [remove, setRemove] = useState();
//   const router = useRouter();

//   return (
//     <button
//       onClick={() => {
//         const productsInCookies = getParsedCookie('productsCookie');

//         if (!productsInCookies) {
//           setStringifiedCookie('productsCookie', [
//             { id: props.product.id, cart: 1 },
//           ]);
//           return; // if there is no cookie function stop here
//         }

//         const foundProduct = productsInCookies.find((productInCookie) => {
//           return productInCookie.id === props.product.id;
//         });

//         if (foundProduct) {
//           foundProduct.cart--;
//         } else {
//           productsInCookies.push({
//             id: props.product.id,
//             cart: remove,
//           });
//         }

//         setStringifiedCookie('productsCookie', productsInCookies);
//         setRemove();

//         router.refresh();
//       }}
//     >
//       Remove
//     </button>
//   );
// }

// const productsInCookies = getParsedCookie('productsCookie');

// if (!productsInCookies) {
//   // setStringifiedCookie('productsCookie', [
//   //   { id: props.product.id, cart: 1 },
//   // ]);
//   return; // if there is no cookie function stop here
// }
// const foundProduct = productsInCookies.find((productInCookie) => {
//   return productInCookie.id === props.product.id;
// });

// if (foundProduct) {
//   foundProduct.cart--;
//   if (foundProduct.cart < 0) {
//     foundProduct.cart = 0;
//   }
//   // update the cookie with the new Value
//   setStringifiedCookie('productsCookie', productsInCookies);
//   router.refresh();
// }
