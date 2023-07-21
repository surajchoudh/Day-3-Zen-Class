// Sample array of numbers
const numberArray = [1, 2, 3, 4, 5];

// Arrow function to calculate the sum of numbers
const sumArray = (arr) => {
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

// Call the arrow function to calculate the sum
const sum = sumArray(numberArray);

// Output the result
console.log("Sum of numbers in the array:", sum);

