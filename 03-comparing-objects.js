console.log('hello' === 'hello');
console.log({ message: 'hello' } === { message: 'hello' });
console.log({} === {});
const a = {};
const b = a;
console.log(a === b);
[1,2,3] === [1,2,3];


const person1 = { name: 'Alice', age: 27, passportNumber: 'OA2374J' };
const person2 = { name: 'Alice', age: 27, passportNumber: 'OA9913H' };

person1 === person2;

person1.passportNumber === person2.passportNumber
&& person1.name === person2.name
&& person1.age === person2.age;

Object.keys(person1);
