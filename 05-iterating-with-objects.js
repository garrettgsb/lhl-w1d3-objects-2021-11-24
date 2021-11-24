const person1 = { name: 'Alice', age: 27, passportNumber: 'OA2374J' };
const person2 = { name: 'Alice', age: 27, passportNumber: 'OA9913H' };

for (const key in person1) {
  console.log(key, person1[key], person2[key], person1[key] === person2[key]);
}
