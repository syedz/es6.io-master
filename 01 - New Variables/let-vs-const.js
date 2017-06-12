const key = 'abc123';
let points = 50;
let winner = false;

if (points > 40) {
  console.log('it ran1');
  let winner = true;
}

const person = {
  name: 'Zee',
  age: 27
};
// Can't be reassigned, but change attributes
// person = { name: 'something' } // does not work
person.name = 'something' // works

// const variables can't be updated, let can
// winner is false because the variables are 2 separate variables (window and block)
console.log(winner);