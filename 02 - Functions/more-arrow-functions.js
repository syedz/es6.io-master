/*
  Implicit return with an object literal
*/

const race = '100m Dash';
const winners = ['Hunter Gath', 'Singa Song', 'Imda Bos'];

// race: race is replaced with just race
const win = winners.map((winner, i) => ({ name: winner, race, place: i }))
console.log(win)

const ages = [23, 62, 45, 234, 3, 45, 42];
const old = ages.filter(age => age >= 60);
console.log(old);

// {
//   name: 'Zee Syed',
//   place: 1,
//   race: race
// }