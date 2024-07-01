//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.


export function duplicateEncode(word: string): string {
  word = word.toLowerCase();
  let countObj: { [index: string]: number } = {};
  for (let char of word) {
    let count = countObj[char] || 0;
    countObj[char] = ++count;
  }
  let result = '';
  for (let char of word) {
    result += countObj[char] > 1 ? ')' : '(';
  }
  return result;
}