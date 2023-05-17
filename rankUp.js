//Write a function to reverse a string.

const reverseString = (word) => {
  return word.split("").reverse().join("");
};

// Write a function to check if a string is a palindrome.

const checkPlaindrome = (word) => {
  const reversed = word.split("").reverse().join("");
  console.log(reversed === word);
};

// Write a function to find the largest number in an array.

const findMax = (numbers) => {
  console.log(Math.max(...numbers));
};

// Write a function to remove duplicates from an array.

const removeDups = (arr) => {
  const uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
};

//Write a function to sort an array in ascending order.

const reOrder = (arr) => {
  const sortedArr = [];
  while (arr.length > 0) {
    const minimum = Math.min(...arr);
    sortedArr.push(minimum);
    arr.splice(arr[minimum], 1);
  }
  return sortedArr;
};

console.log(reOrder([1, 30, 4, 21, 100]));

//Write a function to check if two arrays have any common elements.

const findCommon = (arr1, arr2) => {
  arr1.forEach((item) => {
    return arr2.includes(item);
  });
};

//Write a function to remove a specific element from an array.

const removeElement = (arr, element) => {
  arr.splice(arr[element], 1);
  return arr;
};

//Write a function to find the first non-repeating character in a string.

const findUnique = (str) => {
  const arr = str.split("");
  const uniques = [];

  for (let i = 0; i < arr.length; i++) {
    const current=arr.splice(i, 1);
    if (!current.includes(arr[i])) uniques.push(arr[i]);
  }
  return uniques[0];
};

console.log(findUnique("ababskjk"));
