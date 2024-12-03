export const computeSimilarity = (left: number[], right: number[]) => {
    const rightListAppearances: Record<number, number> = {};
    for (const id of right) {
        rightListAppearances[id] = (rightListAppearances[id] || 0) + 1;
    }

    let similarity = 0;
    for (const id of left) {
        const increaseFactor = rightListAppearances[id] || 0;
        similarity += id * increaseFactor;
    }

    return similarity;
};
