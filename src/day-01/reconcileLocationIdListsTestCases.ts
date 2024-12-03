import { expect, it } from "vitest";

export const testReconcileLocationIdLists = (testFn: (inputLines: string[]) => number) => {
    it("should correctly process the test input given in the problem", () => {
        const inputLines = ["3   4", "4   3", "2   5", "1   3", "3   9", "3   3"];

        expect(testFn(inputLines)).toBe(11);
    });

    it("should return the correct difference for a single pair", () => {
        const inputLines = ["1 2"];

        expect(testFn(inputLines)).toBe(1);
    });

    it("should return the correct sum of differences for multiple pairs", () => {
        const inputLines = ["1 2", "3 4", "5 6"];

        expect(testFn(inputLines)).toBe(3);
    });

    it("should skip empty input lines", () => {
        const inputLines = ["1 2", "", "3 4", ""];

        expect(testFn(inputLines)).toBe(2);
    });
};
