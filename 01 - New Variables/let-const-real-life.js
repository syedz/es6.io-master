// IIFE runs itself, and has it's own scope

// Let and const are block scoped
(function() {
  var name = 'zee IIFE';
  // console.log(name);
}());

{
  const name = 'zee const';
  // console.log(name);
}

// No need for an IIFE
// for (var i = 0; i < 10; i++) {
//   console.log(i);
//   setTimeout(function() {
//     console.log('The number is ' + i);
//   }, 1000);
// }

for (let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);
  }, 1000);
}