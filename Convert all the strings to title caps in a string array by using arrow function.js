const stringArray = ["hello world", "welcome to javascript", "programming is fun"];

// Arrow function to convert strings to title caps
const convertToTitleCaps = (arr) => {
  return arr.map((str) => {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  });
};

// Call the arrow function to convert strings to title caps
const titleCapsArray = convertToTitleCaps(stringArray);

// Output the result
console.log(titleCapsArray);


