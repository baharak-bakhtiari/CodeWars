function squareDigits(num) {
  const str = num.toString();
  const arr = str.split("");
  return Number(arr.map((digit) => digit ** 2).join(""));
}

console.log(squareDigits(1234));
