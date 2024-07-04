export function isPangram(phrase: string): boolean {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return alphabet.every(char => {
        return phrase.toUpperCase().split("").includes(char);
    });
}