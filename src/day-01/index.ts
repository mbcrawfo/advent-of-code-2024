import path from "node:path";
import { readLines } from "../utilities/readLines";
import { reconcileLocationIds } from "./reconcileLocationIds";

const lines = await readLines(path.resolve(__dirname, "input.txt"));
console.log(`Read ${lines.length} lines`);

const left: number[] = [];
const right: number[] = [];

for (const line of lines) {
    const [leftValue, rightValue] = line
        .split(" ")
        .map((value) => parseInt(value.trim(), 10))
        .filter((value) => !Number.isNaN(value));

    left.push(leftValue);
    right.push(rightValue);
}

const difference = reconcileLocationIds(left, right);
console.log(`The total difference is ${difference}`);
