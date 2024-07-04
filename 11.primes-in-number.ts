export const primeFactors = (n: number): string => {
    let primesCount: { [key: number]: number } = {};
    for (let i = 2; i <= n; i++) {
        while (n % i === 0) {
            primesCount[i] = (primesCount[i] || 0) + 1;
            n = n / i;
        }
    }
    let result = "";
    for (let key in primesCount) {
        if (primesCount[key] === 1) {
            result += `(${key})`;
        } else {
            result += `(${key}**${primesCount[key]})`;
        }
    }
    return result;
}