// square every digit of a number and concatenate them.
// For example, if we run 9119 through the function,
// 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)

function squareDigits(num) {
  const str = num.toString();
  const arr = str.split("");
  return Number(arr.map((digit) => digit ** 2).join(""));
}

//Check if you can make a triangle

function isTriangle(a, b, c) {
  return a + b > c && a + c > b && c + b > a;
}

//You will be given an array of numbers.
//You have to sort the odd numbers in ascending order
//while leaving the even numbers at their original positions.

function sortArray(array) {
  const oddNumbers = array.filter((num) => num % 2 !== 0);
  const sortedOddNumbers = oddNumbers.sort((a, b) => a - b);

  let j = 0;
  const result = array.map((num) => {
    if (num % 2 !== 0) {
      const sortedOdd = sortedOddNumbers[j];
      j++;
      return sortedOdd;
    } else {
      return num;
    }
  });

  return result;
}

//Given an array of integers, find the one that appears an odd number of times.

function findOdd(arr) {
  let counts = {};
  for (let num of arr) {
    if (counts[num]) counts[num]++;
    else counts[num] = 1;
  }
  for (let [key, value] of Object.entries(counts)) {
    if (value % 2 !== 0) return Number(key);
  }
}

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b))
//that checks whether the two arrays have the "same" elements,
//with the same multiplicities (the multiplicity of a member is the number of times it appears).
//"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1.map((v) => v * v).every((v, i) => v == array2[i]);
}

// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format.
// IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

function isValidIP(str) {
  const arr = str.split(".");
  if (arr.length !== 4) {
    return false;
  }
  for (let num of arr) {
    if (
      !(0 <= Number(num) && Number(num) <= 255 && String(Number(num)) === num)
    ) {
      return false;
    }
  }
  return true;
}
