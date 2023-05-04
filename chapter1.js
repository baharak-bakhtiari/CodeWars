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