//duplicate array [1,2,3]=>[1,2,3,1,2,3]

function duplicateArray(arr) {
  return [...arr, ...arr];
}

//duplicate array nth time [1,2,3]=>[1,2,3,1,2,3,1,2,3]

const duplicate = (arr, n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result = [...result, ...arr];
  }
  return result;
};

//Count duplicated elements [1,2,3,4,2,3,3]=>5
const countDuplicates = (arr) => {
  let result = 0;
  const counts = {};
  for (num of arr) {
    if (counts[num]) {
      Counts[num]++;
    } else {
      Counts[num] = 1;
    }
  }
  const values = Object.values(counts);
  values.forEach((num) => {
    if (num !== 1) result += num;
  });
  return result;
};

//Return most repeated character "abccdaeefhee" => "e"
const mostRepeated = (str) => {
  const counts = {};
  let maxCount = 0;
  let result = [];

  for (const char of str) {
    if (counts[char]) {
      counts[char]++;
    } else {
      counts[char] = 1;
    }

    if (counts[char] > maxCount) {
      maxCount = counts[char];
      result = [char];
    } else if (counts[char] === maxCount) {
      result.push(char);
    }
  }

  return result;
};

//async log, what does this code log in order?

function foo() {
  console.log(3);
  setTimeout(() => console.log(4), 100);
  Promise.resolve(5).then(console.log);
  setTimeout(() => console.log(6), 0);
  console.log(7);
}
console.log(1);
foo();
console.log(2);

//async loop, fix this loop

for (var i = 0; i <= 3; i++) setTimeout(() => console.log(i), 100);

for (var i = 0; i <= 3; i++) {
  (function (num) {
    setTimeout(() => console.log(num), 100);
  })(i);
}

//maskify "26415236"=>"####5236"

const maskify = (password) => {
  if (password.length < 5) return password;
  let arr = password.split("");
  return arr.slice(0, -4).join("").replace(/./g, "#") + arr.slice(-4).join("");
};
