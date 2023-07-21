// Sample array of strings
const stringArray = ["level", "hello", "racecar", "world", "madam"];

// Arrow function to check if a string is a palindrome
const isPalindrome = (str) => {
  const reversedStr = str.split("").reverse().join("");
  return str === reversedStr;
};

// Arrow function to filter out the palindromes from the array
const findPalindromes = (arr) => {
  return arr.filter((str) => isPalindrome(str));
};

// Call the arrow function to find palindromes in the array
const palindromeArray = findPalindromes(stringArray);

// Output the result
console.log("Palindromes in the array:", palindromeArray);


