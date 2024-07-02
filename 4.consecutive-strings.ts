export function longestConsec(strarr: string[], k: number): string {
  let longestConcatenation = "";
  
  for (let i = 0; i <= strarr.length - k; i++) {
    const concatenate = strarr.slice(i, i + k).join("");
    
    if (concatenate.length > longestConcatenation.length) {
      longestConcatenation = concatenate;
    }
  }

  return longestConcatenation;
}