export function humanReadable(s: number): string {
    const date = new Date(s * 1000);
    const hours = Math.floor(s / 3600).toString().padStart(2, '0');
    const minutes = date.getUTCMinutes().toString().padStart(2, '0');
    const seconds = date.getUTCSeconds().toString().padStart(2, '0');

    return `${hours}:${minutes}:${seconds}`;
}