var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
const newNumbers = numbers.map(function (x) {
  return 2 * x;
});
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.

const filterExample = numbers.filter(function (x) {
  return x < 10;
});

console.log(filterExample);

//Reduce - Accumulate a value by doing something to each item in an array.

const reduceExample = numbers.reduce(function (accumulator, currentNum) {
  return accumulator + currentNum;
});

console.log(reduceExample);
//Find - find the first item that matches from an array.

const findAns = numbers.find(function (x) {
  return x > 10;
});
console.log(findAns);

//FindIndex - find the index of the first item that matches.
const findIndexAns = numbers.findIndex(function (x) {
  return x > 10;
});
console.log(findIndexAns);
