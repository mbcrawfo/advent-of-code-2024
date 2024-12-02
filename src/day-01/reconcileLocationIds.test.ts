import { describe, expect, test } from "vitest";
import { reconcileLocationIds } from "./reconcileLocationIds";

describe("reconcileLocationIds", () => {
    test("should correctly process the test input given in the prompt", () => {
        const left = [3, 4, 2, 1, 3, 3];
        const right = [4, 3, 5, 3, 9, 3];

        expect(reconcileLocationIds(left, right)).toBe(11);
    });
});
