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
    arr.splice(arr.indexOf(minimum), 1);
  }
  return sortedArr;
};

function sortArrayAscending(array) {
  return array.sort((a, b) => a - b);
}

//Write a function to check if two arrays have any common elements.
const findCommon = (arr1, arr2) => {
  for (num of arr1) {
    if (arr2.includes(num)) return true;
  }
  return false;
};

//Write a function to remove a specific element from an array.

const removeElement = (arr, element) => {
  const index = arr.indexOf(element);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
};

//Write a function to find the first non-repeating character in a string.----------

const findUnique = (str) => {
  const arr = str.split("");
  const uniques = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (!arr.slice(i + 1).includes(current) && !uniques.includes(current)) {
      return current;
    }
    uniques.push(current);
  }

  return null;
};

console.log(findUnique("ababskjk"));

/**/
//Write a function that takes in a string of one or more words,
//and returns the same string, but with all five or more letter words reversed
//(Just like the name of this Kata). Strings passed in will consist of only letters and spaces.
//Spaces will be included only when more than one word is present.

function spinWords(string) {
  let arr = string.split(" ");
  arr = arr.map((word) => {
    if (word.length > 4) {
      return word.split("").reverse().join("");
    }
    return word;
  });
  return arr.join(" ");
}

//Your task is to write a function maskify, which changes all but the last four characters into '#'.

const maskify = (password) => {
  if (password.length < 5) return password;
  let arr = password.split("");
  return arr.slice(0, -4).join("").replace(/./g, "#") + arr.slice(-4).join("");
};

//Write a function called shuffleArray that takes an array as input and returns a new array with its elements shuffled randomly.--------

function shuffleArray(array) {
  const shuffledArray = array.slice(); // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}

// Task 4:
// Write a function called splitArray that takes an array as input
//and returns a new array by splitting it into two separate arrays,
//where the first array contains the odd-indexed elements
//and the second array contains the even-indexed elements.

function splitArray(array) {
  const oddArray = [];
  const evenArray = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(array[i]);
    } else {
      oddArray.push(array[i]);
    }
  }
  return [oddArray, evenArray];
}

// Task 3:
// Write a function called groupArrays that takes two arrays of equal length as input
//and returns a new array by grouping their corresponding elements into subarrays.

function groupArrays(array1, array2) {
  const groupedArray = [];
  for (let i = 0; i < array1.length; i++) {
    groupedArray.push([array1[i], array2[i]]);
  }
  return groupedArray;
}

// Task 2:
// Write a function called interleaveArrays that takes two arrays of equal length as input
//and returns a new array by interleaving their elements.

function interleaveArrays(array1, array2) {
  const interleavedArray = [];
  for (let i = 0; i < array1.length; i++) {
    interleavedArray.push(array1[i], array2[i]);
  }
  return interleavedArray;
}
