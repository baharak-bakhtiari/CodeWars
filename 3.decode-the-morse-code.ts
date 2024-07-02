export function decodeMorse(morseCode: string): string {
  let sentences : string[] = [];
  const words : string[] = morseCode.split("   ");
  words.forEach(word => {
    let wordResult = "";
    const chars : string[] = word.split(" ");
    for (let i = 0; i < chars.length; i++) {
      wordResult += morseCode[chars[i]];
    };
    sentences.push(wordResult);
  });
  return sentences.join(" ");
}