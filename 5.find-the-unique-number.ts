export function findUniq(arr: number[]): number {
    for (const num of arr) {
        if (arr.indexOf(num) === arr.lastIndexOf(num)) {
            return num;
        }
    }
    return -1;
}