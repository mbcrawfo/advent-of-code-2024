import * as assert from "node:assert/strict";
import { numberComparer } from "../utilities/sorting";

export const reconcileLocationIds = (left: number[], right: number[]): number => {
    assert.equal(left.length, right.length, "The left and right arrays must have the same length.");

    const leftSorted = left.toSorted(numberComparer);
    const rightSorted = right.toSorted(numberComparer);

    let totalDifference = 0;
    for (let i = 0; i < leftSorted.length; i++) {
        totalDifference += Math.abs(leftSorted[i] - rightSorted[i]);
    }

    return totalDifference;
};
