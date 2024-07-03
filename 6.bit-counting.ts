export function countBits(n: number) {
  return n.toString(2)
          .split('')
          .reduce((acc, curr) => acc + Number(curr), 0);
}