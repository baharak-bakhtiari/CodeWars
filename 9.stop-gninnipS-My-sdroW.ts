export function spinWords(words: string): string {
    const newArr = words.split(" ").map(word => {
        return word.length >= 5 ? [...word].reverse().join("") : word;
    });
    return newArr.join(" ");
}