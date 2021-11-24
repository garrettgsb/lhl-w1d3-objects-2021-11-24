// Primitives in Javascript

const primitives = [
  'string',
  'boolean',
  'number',
  null,
  undefined,
  'symbol',
  'BigInt'
];

{
  let a = 'Alice';
  const b = a;
  a = a + ' Bob';
  console.log(a === b, a, b);
}


// Examples of blocks
if (true) { /* do something */ }

let count = 0;
for (let p in primitives) {
  count++;
  /* do something */
}

{
  let a = 10
  let b = 15;
  function add(x, y) {
    x += y;
    console.log('x: ', x);
    return x;
  }

  console.log(add(a, b));
  console.log(a, b);
}
