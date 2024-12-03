import { describe, expect, it } from "vitest";
import { reconcileLocationIdLists } from "./reconcileLocationIdLists";

describe("reconcileLocationIdLists", () => {
    it("should correctly process the test input given in the problem", () => {
        const left = [3, 4, 2, 1, 3, 3];
        const right = [4, 3, 5, 3, 9, 3];

        expect(reconcileLocationIdLists(left, right)).toBe(11);
    });

    it("should return the correct difference for a single pair", () => {
        const left = [1];
        const right = [2];

        expect(reconcileLocationIdLists(left, right)).toBe(1);
    });

    it("should return the correct sum of differences for multiple pairs", () => {
        const left = [1, 3, 5];
        const right = [2, 4, 6];

        expect(reconcileLocationIdLists(left, right)).toBe(3);
    });
});
