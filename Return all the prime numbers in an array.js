// Sample array of numbers
const numberArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function to check if a number is prime
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;

  if (num % 2 === 0 || num % 3 === 0) return false;

  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }

  return true;
};

// Arrow function to filter out the prime numbers from the array
const findPrimeNumbers = (arr) => {
  return arr.filter((num) => isPrime(num));
};

// Call the arrow function to find prime numbers in the array
const primeNumbersArray = findPrimeNumbers(numberArray);

// Output the result
console.log("Prime numbers in the array:", primeNumbersArray);
