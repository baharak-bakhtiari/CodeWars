//Digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n.If that value has more than one digit,
//continue reducing in this way until a single - digit number is produced.The input will be a non - negative integer.

export const digitalRoot = (n: number): number => {
    let digtsSum = n.toString().split('').reduce((a, b) => Number(a) + Number(b), 0);
    if (digtsSum > 9) {
        return digitalRoot(digtsSum);
    }
    return digtsSum;
};