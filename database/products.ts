// import fs from 'node:fs';
import { cache } from 'react';
import { sql } from './connect';

// export const products1 = [
//   {
//     id: 1,
//     name: 'ketogen',
//     type: 'BodyCare',
//     description: 'Burn fat, stay healthy',
//     longDescription:
//       'Ketogenic drops (10 ml) | High-quality keto drops – For weight loss through ketosis – Supports fat burning – Rich in omega3 and omega 6 fatty acids',
//     price: '£36.56',
//   },

//   {
//     id: 2,
//     name: 'Detox',
//     type: 'BodyCare',
//     description: 'Vital patches for the feet',
//     longDescription:
//       'Detox Foot Patch Vital Patch Foot Patch Wormwood Foot Patch Promote blood circulation, relieve pain and improve sleep, Get rid of moisture and cold 20pc',
//     price: '£20.43',
//   },

//   {
//     id: 3,
//     name: 'Fruchtgummis',
//     type: 'BodyCare',
//     description: 'Boots the immune system',
//     longDescription:
//       'CB GUMMIES – Classic & XXL (60 pieces) | Plant substances from hemp – 1000mg O-Active Plus – With concentrated terpene extract – Free of THC',
//     price: '£28.76',
//   },

//   {
//     id: 4,
//     name: 'Biovana',
//     type: 'BodyCare',
//     description: 'Stay young always',
//     longDescription:
//       ' Active moss cream To combat wrinkles. Moss Ointment PLUS (100 ml) | With the Moss Extract & Plus of Collagen & Aloe Vera – Rich skin care – Without silicones, mineral oils & parabens',
//     price: '£34.52',
//   },

//   {
//     id: 5,
//     name: 'LuxuryKollagen',
//     type: 'BodyCare',
//     description: 'Keep your skin glowing',
//     longDescription:
//       'LUXURY COLLAGEN Complex Plus | Collagen powder for mixing – 4 types of high-quality collagen – With hyaluronic acid, MSM and much more. – For elastic & smooth skin',
//     price: '£28.89',
//   },

//   {
//     id: 6,
//     name: 'AloeMoisturizing',
//     type: 'BodyCare',
//     description: 'Against skin dehydration',
//     longDescription:
//       'FOREVER Aloe Moisturizing Lotion (118 ml) | soothing after sunbathing | moisturizes with 37% pure aloe vera gel | for supple skin against dehydration',
//     price: '£15.95',
//   },
// ];

// SELECT * FROM products;

// console.log(
//   sql`
//   SELECT * FROM products
//   `,
// );

type Product = {
  id: number;
  name: string;
  type: string;
  description: string | null;
  longDescription: string | null;
  price: number;
};

export const getProducts = cache(async () => {
  const products = await sql<Product[]>`
  SELECT * FROM products
  `;

  return products;
});

export const getProduct = cache(async (id: number) => {
  const [product] = await sql<Product[]>`
  SELECT * FROM products

  WHERE id = ${id}
  `;
  return product;
});
