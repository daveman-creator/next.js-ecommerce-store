'use client';

import { useRouter } from 'next/navigation';
// import { useState } from 'react';
// import { Value } from 'sass';
import { getParsedCookie, setStringifiedCookie } from '../../utils/cookies';

export default function Remove(props) {
  const router = useRouter();
  return (
    <div>
      <button
        onClick={() => {
          const productsInCookies = getParsedCookie('productsCookie');

          if (!productsInCookies) {
            // setStringifiedCookie('productsCookie', [
            //   { id: props.product.id, cart: 1 },
            // ]);
            return; // if there is no cookie function stop here
          }
          const foundProduct = productsInCookies.find((productInCookie) => {
            return productInCookie.id === props.product.id;
          });

          if (foundProduct) {
            foundProduct.cart--;
            if (foundProduct.cart < 0) {
              foundProduct.cart = 0;
            }
            // update the cookie with the new Value
            setStringifiedCookie('productsCookie', productsInCookies);
            router.refresh();
          }
        }}
      >
        Remove
      </button>
    </div>
  );
}

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
