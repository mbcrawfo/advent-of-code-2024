import assert from "node:assert/strict";

export const parseLocationIds = (inputLines: string[]) => {
    const left: number[] = [];
    const right: number[] = [];

    for (const line of inputLines) {
        const matches = line.match(/(\d+)\s+(\d+)/);
        assert.equal(matches.length, 3, "Each line must contain two whitespace separated numbers.");

        left.push(parseInt(matches[1], 10));
        right.push(parseInt(matches[2], 10));
    }

    return { left, right };
};
