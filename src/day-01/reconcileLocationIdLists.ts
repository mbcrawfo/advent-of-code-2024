import * as assert from "node:assert/strict";
import { numberComparer } from "../utilities/sorting";

export const reconcileLocationIdLists = (inputLines: string[]): number => {
    const left: number[] = [];
    const right: number[] = [];

    for (const line of inputLines) {
        const matches = line.match(/(\d+)\s+(\d+)/);
        assert.equal(matches.length, 3, "Each line must contain two whitespace separated numbers.");

        left.push(parseInt(matches[1], 10));
        right.push(parseInt(matches[2], 10));
    }

    left.sort(numberComparer);
    right.sort(numberComparer);

    let totalDifference = 0;
    for (let i = 0; i < left.length; i++) {
        totalDifference += Math.abs(left[i] - right[i]);
    }

    return totalDifference;
};
