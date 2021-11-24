{
  const cartOwner = 'Alice';
  const cartItems = ['Eggs', 'Milk', 'Cheese', 'Cauliflower'];
  const cartTotal = 26.50;
  const cartMaterial = 'Aluminum';
  const cartColor = 'Green';
  const cartHasPaid = false;
  const cartLocation = 'Aisle 6';

  const cart1 = [
    'Alice',
    ['Eggs', 'Milk', 'Cheese', 'Cauliflower'],
    26.50,
    'Aluminum',
    'Green',
    false,
    'Aisle 6',
  ];

  const cart2 = [
    'Bob',
    ['Lettuce', 'Spinach', 'Kale'],
    14.10,
    'Aluminum',
    'Green',
    false,
    'Produce',
  ];

  const storeA = [cart1, cart2];
  // const storeB = [cart3, cart4];
  // const allStores = [storeA, storeB];

  const produceCart = storeA.find(cart => {
    return cart[6] === 'Produce';
  });

  // console.log(produceCart);
}

{

  const cart1 = {
    owner: 'Alice',
    items: [
      { label: 'Eggs', quantity: 1, price: 6.50 },
      { label: 'Milk', quantity: 1, price: 7.50 },
      { label: 'Cheese', quantity: 1, price: 12.20 },
      { label: 'Cauliflower', quantity: 2, price: 4.00 },
      { label: 'Ketchup', quantity: 1, price: 4.50, ingredients: [
          { label: 'tomato paste', caloriesPerServing: 8 },
          { label: 'sugar', caloriesPerServing: 16 },
          { label: 'vinegar', caloriesPerServing: 0 },
          /* ...etc */
        ],
      }
    ],
    total: 26.50,
    material: 'Aluminum',
    color: 'Green',
    hasPaid: false,
    location: 'Aisle 6',
  };

  const cart1ExceptIngredientsIsAnObject = {
    owner: 'Alice',
    items: [
      { label: 'Eggs', quantity: 1, price: 6.50 },
      { label: 'Milk', quantity: 1, price: 7.50 },
      { label: 'Cheese', quantity: 1, price: 12.20 },
      { label: 'Cauliflower', quantity: 2, price: 4.00 },
      { label: 'Ketchup', quantity: 1, price: 4.50, ingredients: {
        'tomato paste': { label: 'tomato paste', caloriesPerServing: 8 },
        sugar: { label: 'sugar', caloriesPerServing: 16 },
        vinegar: { label: 'vinegar', caloriesPerServing: 0 },
      }
        /* ...etc */
      }
    ],
    total: 26.50,
    material: 'Aluminum',
    color: 'Green',
    hasPaid: false,
    location: 'Aisle 6',
  };

  // console.log(cart1.items[4].ingredients[0].caloriesPerServing);
  console.log(cart1ExceptIngredientsIsAnObject
    .items[4]
    .ingredients['tomato paste']
  );

  const cart2 = {
    owner: 'Bob',
    items: ['Lettuce', 'Spinach', 'Kale'],
    total: 14.10,
    material: 'Aluminum',
    color: 'Green',
    hasPaid: false,
    location: 'Produce',
  };

  // console.log(Object.keys(cart1));
  // console.log(cart1.color);
  // cart1['color'];
  // cart1[0];
}
