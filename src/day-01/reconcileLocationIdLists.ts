import { numberComparer } from "../utilities/sorting";

export const reconcileLocationIdLists = (left: number[], right: number[]): number => {
    const leftSorted = left.toSorted(numberComparer);
    const rightSorted = right.toSorted(numberComparer);

    let totalDifference = 0;
    for (let i = 0; i < leftSorted.length; i++) {
        totalDifference += Math.abs(leftSorted[i] - rightSorted[i]);
    }

    return totalDifference;
};
