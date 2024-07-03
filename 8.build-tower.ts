export const towerBuilder = (nFloors: number): string[] => {
    let result = [];
    for (let i = 1; i <= nFloors; i++) {
        let floorStars = "*".repeat(2 * i - 1);
        let floorResult = floorStars.padStart(nFloors + i - 1, " ").padEnd(2 * nFloors - 1, " ");
        result.push(floorResult);
    }
    return result;
}