import { describe, expect, it } from "vitest";
import { reconcileLocationIdLists } from "./reconcileLocationIdLists";

describe("reconcileLocationIdLists", () => {
    it("should correctly process the test input given in the problem", () => {
        const inputLines = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

        expect(reconcileLocationIdLists(inputLines)).toBe(11);
    });

    it("should return the correct difference for a single pair", () => {
        const inputLines = ["1 2"];

        expect(reconcileLocationIdLists(inputLines)).toBe(1);
    });

    it("should return the correct sum of differences for multiple pairs", () => {
        const inputLines = ["1 2", "3 4", "5 6"];

        expect(reconcileLocationIdLists(inputLines)).toBe(3);
    });
});
