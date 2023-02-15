const products = [
  {
    id: 1,
    name: 'ketogen',
    type: 'BodyCare',
    description: 'Burn fat, stay healthy',
    long_description:
      'Ketogenic drops (10 ml) | High-quality keto drops – For weight loss through ketosis – Supports fat burning – Rich in omega3 and omega 6 fatty acids',
    price: 36,
  },

  {
    id: 2,
    name: 'Detox',
    type: 'BodyCare',
    description: 'Vital patches for the feet',
    long_description:
      'Detox Foot Patch Vital Patch Foot Patch Wormwood Foot Patch Promote blood circulation, relieve pain and improve sleep, Get rid of moisture and cold 20pc',
    price: 20,
  },

  {
    id: 3,
    name: 'Fruchtgummis',
    type: 'BodyCare',
    description: 'Boots the immune system',
    long_description:
      'CB GUMMIES – Classic & XXL (60 pieces) | Plant substances from hemp – 1000mg O-Active Plus – With concentrated terpene extract – Free of THC',
    price: 28,
  },

  {
    id: 4,
    name: 'Biovana',
    type: 'BodyCare',
    description: 'Stay young always',
    long_description:
      ' Active moss cream To combat wrinkles. Moss Ointment PLUS (100 ml) | With the Moss Extract & Plus of Collagen & Aloe Vera – Rich skin care – Without silicones, mineral oils & parabens',
    price: 34,
  },

  {
    id: 5,
    name: 'LuxuryKollagen',
    type: 'BodyCare',
    description: 'Keep your skin glowing',
    long_description:
      'LUXURY COLLAGEN Complex Plus | Collagen powder for mixing – 4 types of high-quality collagen – With hyaluronic acid, MSM and much more. – For elastic & smooth skin',
    price: 28,
  },

  {
    id: 6,
    name: 'AloeMoisturizing',
    type: 'BodyCare',
    description: 'Against skin dehydration',
    long_description:
      'FOREVER Aloe Moisturizing Lotion (118 ml) | soothing after sunbathing | moisturizes with 37% pure aloe vera gel | for supple skin against dehydration',
    price: 15,
  },
];

export async function up(sql) {
  await sql`
INSERT INTO products ${sql(
    products,
    'name',
    'type',
    'description',
    'long_description',
    'price',
  )}
  `;
}
// --   (name, type, description, long_description, price)
// -- VALUES
// -- (
// --   'ketogen',
// --   'BodyCare',
// --   'Burn fat, stay healthy',
// --   'Ketogenic drops (10 ml) | High-quality keto drops – For weight loss through ketosis – Supports fat burning – Rich in omega3 and omega 6 fatty acids',
// --    36.56
// --    ),

// -- (
// --   'Detox',
// --   'BodyCare',
// --   'Vital patches for the feet',
// --   'Detox Foot Patch Vital Patch Foot Patch Wormwood Foot Patch Promote blood circulation, relieve pain and improve sleep, Get rid of moisture and cold 20pc',
// --   20.43
// --   ),

// --   (
// --     'Fruchtgummis',
// --   'BodyCare',
// --   'Boots the immune system',
// --    'CB GUMMIES – Classic & XXL (60 pieces) | Plant substances from hemp – 1000mg O-Active Plus – With concentrated terpene extract – Free of THC',
// --    28.76
// --    ),

// --    (
// --     'Biovana',
// --    'BodyCare',
// --     'Stay young always',
// --     'Active moss cream To combat wrinkles. Moss Ointment PLUS (100 ml) | With the Moss Extract & Plus of Collagen & Aloe Vera – Rich skin care – Without silicones, mineral oils & parabens',
// --     34.52
// --     ),

// --     (
// --       'LuxuryKollagen',
// --      'BodyCare',
// --       'Keep your skin glowing',
// --       'LUXURY COLLAGEN Complex Plus | Collagen powder for mixing – 4 types of high-quality collagen – With hyaluronic acid, MSM and much more. – For elastic & smooth skin',
// --       28.89
// --       ),

// --       ('AloeMoisturizing',
// --       'BodyCare',
// --       'Against skin dehydration'
// --       'FOREVER Aloe Moisturizing Lotion (118 ml) | soothing after sunbathing | moisturizes with 37% pure aloe vera gel | for supple skin against dehydration',
// --       15.95
// --       )

export async function down(sql) {
  for (const product of products) {
    await sql`
     DELETE FROM
      products
     WHERE
     id = ${product.id}

    `;
  }
}
