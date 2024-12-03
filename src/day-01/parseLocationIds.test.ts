import { describe, expect, it } from "vitest";
import { parseLocationIds } from "./parseLocationIds";

describe("parseLocationIds", () => {
    it("should parse lines into left and right lists", () => {
        const inputLines = ["1 2", "3 4", "5 6"];

        const { left, right } = parseLocationIds(inputLines);

        expect(left).toEqual([1, 3, 5]);
        expect(right).toEqual([2, 4, 6]);
    });
});
