// 1. Write a function min that takes two numbers and returns the smallest one of the pair.
// Examples:
// console.log(min(0, 10)); // will output 0.
// console.log(min(0, -10)); // will output -10

function min(n, m) {
  if (n <= m) {
    return n;
  }
  return m;
}

console.log(min(0, 10));
console.log(min(0, -10));
console.log(min(5, 5));
console.log(min(0.3, 9));

// 2. Write a function that takes the radius of a circle and outputs it’s approximate circumference (the formula for circumference is 2 *pi * radius, you may use 3.14 for pi).
// Example Output:
// console.log(calculateCircumference(5)); // will output 31.4

function calculateCircumference(r) {
  let pi = 3.14;
  return pi * 2 * r;
}

console.log(calculateCircumference(5));
console.log(calculateCircumference(17));
console.log(calculateCircumference(9));
console.log(calculateCircumference(0.5));

// 3. Write a function searchString that takes a character and then returns how many times it appears in another string argument.
// Example Output:
// console.log(searchString(“s”, “mississippi”)); // will output 4
// console.log(searchString(“q”, “mississippi”)); // will output 0

function searchString(character, word) {
  let numberOfCharacters = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] == character) {
      numberOfCharacters++;
    }
  }
  return numberOfCharacters;
}

console.log(searchString("s", "mississippi"));
console.log(searchString("q", "mississippi"));
console.log(searchString("i", "Pneumonoultramicroscopicsilicovolcanoconiosis"));
console.log(searchString("o", "Honorificabilitudinitatibus"));
