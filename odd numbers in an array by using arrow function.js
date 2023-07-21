const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Arrow function to print odd numbers
const printOddNumbers = (arr) => {
  console.log("Odd numbers in the array:");
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};

printOddNumbers(numbers);

