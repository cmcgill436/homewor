/*Write a function called minusOnethat takes a parameter num. Assuming the argument is a number, print the argument -1.*/

const minusOne = (num) => num - 1;
console.log(minusOne(10));
console.log(minusOne(100));
console.log(minusOne(Infinity));

/*Write a function makeSentence that takes three parameters and concatenates them into a fully formed sentence.*/

const makeSentence = (str1, str2, str3) =>
  `Oh boy, do ${str1} ${str2} ${str3} or what?`;
console.log(makeSentence("I", "want", "chimichangas"));

/*Write a function called getLastElement that takes a parameter arr.*/

function getLastElement(arr) {
  return arr[arr.length - 1];
}

console.log(getLastElement([1, 2, 3, 4, 5, 6]));
console.log(getLastElement(["a", "b", "c"]));
console.log(
  getLastElement([
    [1, 2, 3],
    [4, 5, 6],
  ])
);
