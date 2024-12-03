import { describe, expect, it } from "vitest";
import { computeSimilarity } from "./computeSimilarity";

describe("computeSimilarity", () => {
    it("should correctly process the test input given in the problem", () => {
        const left = [3, 4, 2, 1, 3, 3];
        const right = [4, 3, 5, 3, 9, 3];

        expect(computeSimilarity(left, right)).toBe(31);
    });

    it("should return 0 for lists with no common elements", () => {
        const left = [1, 2, 3];
        const right = [4, 5, 6];

        expect(computeSimilarity(left, right)).toBe(0);
    });

    it("should return the sum of the left elements multiplied by the number of appearances in the right list", () => {
        const left = [1, 2, 3, 3];
        const right = [3, 2, 1, 3];

        expect(computeSimilarity(left, right)).toBe(15);
    });
});
