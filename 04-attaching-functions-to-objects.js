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
  total: 30.20,
  hasPaid: false,

  addItem(item) {
    this.items.push(item);
  },
};

// cart1.addItem({ label: 'Flour', quantity: 1, price: 4.00 });
// console.log(cart1);



function createCart(owner) {
  return {
    owner,
    items: [],
    hasPaid: false,

    addItem(...items) { this.items.push(...items); },
    total() {
      let total = 0;
      for (const item of this.items) {
        total += item.price * item.quantity
      }
      return total;
    },
    report() {
      console.log(
        `${this.owner}'s cart has ${this.items.length} items in it, and will cost $${this.total()}`
      );
    }
  }
}

const alicesCart = createCart('Alice');
const bobsCart = createCart('bob');
const carolCart = createCart('carol');

console.log(alicesCart === bobsCart);

alicesCart.addItem(
  { label: 'Eggs', quantity: 1, price: 6.50 },
  { label: 'Milk', quantity: 1, price: 7.50 },
);
alicesCart.report();

alicesCart.addItem(
  { label: 'Cheese', quantity: 1, price: 12.20 },
  { label: 'Cauliflower', quantity: 2, price: 4.00 },
);
alicesCart.report();

alicesCart.addItem(
  { label: 'Ketchup', quantity: 1, price: 4.50, ingredients: [
      { label: 'tomato paste', caloriesPerServing: 8 },
      { label: 'sugar', caloriesPerServing: 16 },
      { label: 'vinegar', caloriesPerServing: 0 },
      /* ...etc */
    ],
  }
);
alicesCart.report();

// bobsCart.addItem('Kale');
// bobsCart.addItem('Spinach');


// console.log(alicesCart);
// console.log(bobsCart);


function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

let total = 14;
const itemPrice = 3.50;
const itemQuantity = 4;

const lineItem = multiply(itemPrice, itemQuantity);
total = add(lineItem, total);
