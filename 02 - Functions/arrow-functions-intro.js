/*
  Arrow functions are anonymous functions
*/

const names = ['zee', 'john', 'bob'];

// const fullNames = names.map(function(name) {
//   return `${name} syed`;
// });

const fullNames2 = names.map((name) => {
  return `${name} syed`;
});

// If only one argument, no need for () - but do it anyways
// const fullNames3 = names.map(name => {
//   return `${name} syed`;
// });

// Implicit return - assumes we are returning
const fullNames4 = names.map(name => `${name} syed`);

// With not args
const fullNames5 = names.map(() => `some syed`);

console.log(fullNames5);

// function sayMyName(name) {
//   alert(`Hello ${name}`);
// }

const sayMyName = (name) => {
  console.log(`Hello ${name}!`)
};
sayMyName('Zee')