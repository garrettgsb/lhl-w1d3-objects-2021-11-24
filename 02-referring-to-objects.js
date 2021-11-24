// {
//   const a = 'hello';
//   let b = a;
//   b += ' world';
//   console.log(a);
//   console.log(b);
// }

{
  const a = { message: 'hello' };
  const b = a;
  b.message += ' world';
  b.timestamp = new Date();
  const c = b;

  // console.log(a);
  // console.log(b);
  // console.log(c);
}

{
  const a = { message: 'hello' };
  function addTimestamp(obj) {
    obj.timestamp = new Date();
  }
  addTimestamp(a);
  console.log(a);
}
