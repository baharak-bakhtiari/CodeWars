//Write a function that takes an array of words
//and smashes them together into a sentence
//and returns the sentence.

smash = function (words) {
  return words.join(" ");
};

//Write a function which converts
//the input string to uppercase.

function makeUpperCase(str) {
  return str.toUpperCase();
}

//Write a function that accepts
//an integer n and a string s as parameters,
//and returns a string of s repeated exactly n times.

function repeatStr(n, s) {
  return s.repeat(n);
}

//Write a function which calculates the average of the numbers in a given list.
//Note: Empty arrays should return 0.

function find_average(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:

function areYouPlayingBanjo(name) {
  return (
    name +
    (name[0].toLowerCase() == "r" ? " plays" : " does not play") +
    " banjo"
  );
}

// Create a function that takes an integer as an argument
//and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even";
}

// Given an array of integers your solution should find the smallest integer.
function findSmallestInt(args) {
  return Math.min(...args);
}

// Write a function to convert a name into initials.
//This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

function abbrevName(name) {
  var nameArray = name.split(" ");
  return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
}

//write a function that reverse a string "world" => "dlrow"

function solution(str) {
  return str.split("").reverse().join("");
}

// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
// Return True if you're better, else False!

const betterThanAverage = (classPoints, yourPoints) =>
  yourPoints >
  classPoints.reduce((pre, val) => pre + val, yourPoints) /
    (classPoints.length + 1);

//Create a function that gives a personalized greeting.
//This function takes two parameters: name and owner.

function greet(name, owner) {
  return name === owner ? "Hello boss" : "Hello guest";
}

//You're writing code to control your town's traffic lights.
//You need a function to handle each change from green, to yellow, to red, and then to green again.

function updateLight(current) {
  switch (current) {
    case "green":
      return "yellow";
    case "yellow":
      return "red";
    default:
      return "green";
  }
}

function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

//Complete the method that takes a boolean value
//and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  return bool ? "Yes" : "No";
}

//Let's play! You have to return which player won! In case of a draw return Draw!.

const rps = (p1, p2) => {
  if (p1 == p2) return "Draw!";

  if (p1 == "rock" && p2 == "scissors") return "Player 1 won!";
  else if (p1 == "scissors" && p2 == "paper") return "Player 1 won!";
  else if (p1 == "paper" && p2 == "rock") return "Player 1 won!";
  else return "Player 2 won!";
};

const rps2 = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  var rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p2 === rules[p1]) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};

//Very simple, given an integer or a floating-point number, find its opposite.

function opposite(number) {
  return -number;
}

//Convert number to reversed array of digits

function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total.
//Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).

function rentalCarCost(d) {
  const total = d * 40;
  return d >= 7 ? total - 50 : d < 3 ? total : total - 20;
}

//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x) {
  return x.replaceAll(" ", "");
}

//You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

const areaOrPerimeter = function (l, w) {
  return l == w ? l * w : 2 * (l + w);
};

//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour
//and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  return Math.floor(s * 27.777777777778);
}

function cockroachSpeed(s) {
  const secsInHour = 3600;
  const centimetersInKilometers = 100000;
  return Math.floor((s * centimetersInKilometers) / secsInHour);
}

//Write a function findNeedle() that takes an array full of junk but containing one "needle"

function findNeedle(haystack) {
  return `found the needle at position ${haystack.indexOf("needle")}`;
}

//Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
  if (month % 3 !== 0) {
    return Math.floor(month / 3) + 1;
  } else return month / 3;
};

const quarterOf2 = (m) => Math.ceil(m / 3);

//hero and dragons

function hero(bullets, dragons) {
  return bullets / 2 >= dragons;
}

//Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  x = x.toLowerCase();
  return x.split("").reverse().join("") === x;
}

//Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

function fakeBin(x) {
  return x
    .split("")
    .map((n) => (n < 5 ? 0 : 1))
    .join("");
}

//Given a non-negative integer, 3 for example,
// return a string with a murmur: "1 sheep...2 sheep...3 sheep..."

var countSheep = function (num) {
  let msg = "";
  for (let i = 1; i <= num; i++) {
    msg += `${i} sheep...`;
  }
  return msg;
};

//Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting
//- if you have it in your database.
//It should default to English if the language is not in the database, or in the event of an invalid input.

var database = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  return database[language] || "Welcome";
}

//Create a function with two arguments that will return an array of the first n multiples of x.

function countBy(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

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

//Write a function to check if two arrays have any common elements.

const findCommon = (arr1, arr2) => {
  const commons = [];
  arr1.forEach((item) => {
    if (arr2.includes(item)) commons.push(item);
  });
  return commons.length > 0;
};

//Write a function to remove a specific element from an array.

const removeElement = (arr, element) => {
  arr.splice(arr.indexOf(element), 1);
  return arr;
};

//Write a function to find the first non-repeating character in a string.

const findUnique = (str) => {
  const arr = str.split("");
  const uniques = [];

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (arr.indexOf(current) === arr.lastIndexOf(current)) {
      uniques.push(current);
    }
  }

  return uniques[0];
};

//Write a function to check if a number is prime.

const checkIsPrime = (num) => {
  return (num % 2 === 0 && num !== 2) || num < 2 ? false : true;
};

//Write a function to generate Fibonacci series up to a given number.

const fibonacci = (n) => {
  const fiboSeries = [0, 1];
  let current = "";
  while (
    fiboSeries[fiboSeries.length - 1] + fiboSeries[fiboSeries.length - 2]
  ) {
    fiboSeries.push(
      fiboSeries[fiboSeries.length - 1] + fiboSeries[fiboSeries.length - 2]
    );
  }
  return fiboSeries;
};

//Given the a list of numbers, return a fixed list so that
//the values increment by 1 for each index from
//the minimum value up to the maximum value (both included).

function pipeFix(numbers) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  let current = min;
  let newArr = [current];

  while (current < max) {
    current += 1;
    newArr.push(current);
  }
  return newArr;
}

function pipeFix(numbers) {
  var first = numbers[0];
  var last = numbers[numbers.length - 1];
  var arr = [];
  for (var i = first; i <= last; i++) {
    arr.push(i);
  }
  return arr;
}

//each lowercase letter becomes uppercase
//and each uppercase letter becomes lowercase.

String.prototype.toAlternatingCase = function () {
  return this.split("")
    .map((a) => (a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase()))
    .join("");
};

//Create a function that accepts a string and a single character,
//and returns an integer of the count of occurrences the 2nd argument
//is found in the first one.

function strCount(str, letter) {
  return str.split("").filter((c) => c == letter).length;
}

//Write a function feast that takes the animal's name and dish as arguments
//and returns true or false to indicate their first and last letters are same

function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

//Complete the function that takes two integers (a, b, where a < b)
//and return an array of all integers between the input parameters, including them.

function between(a, b) {
  arr = [];
  for (i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs,
//function accepts 1 parameter:n, n is the number of hotdogs
//a customer will buy, different numbers have different prices (refer to the following table)
//return how much money will the customer spend to buy that number of hotdogs.

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

//Write a function that always returns 5! You can't use 1,2,3,,,9 and */+-

function returnFive() {
  const str = "hello";
  return hello.length;
}

//Write a function that takes an array of numbers and returns the sum of the numbers.
//The numbers can be negative or non-integer.
//If the array does not contain any numbers then you should return 0.

function sum(numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}

//Take an array and remove every second element from the array.
//Always keep the first element and start removing with the next element.

function removeEveryOther(arr) {
  return arr.filter((element) => arr.indexOf(element) % 2 == 0);
}

//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
//The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}
