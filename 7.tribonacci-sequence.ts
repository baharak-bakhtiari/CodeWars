export function tribonacci(arr : [number, number, number], n: number): number[] {
  let result : number[] = [];
  if (0 < n && n <= 3) {
    for(let i = 0; i < n; i++) {
      result.push(arr[i]);
    }
    return result;
  }
  if(n > 3) {
    result.push(...arr);
    for (let i = 0; i < n-3; i++) {
      result.push(result[i] + result[i+1] + result[i+2]);
    }
    return result;
  }
  else return [];
}