import path from "node:path";
import { readLines } from "../utilities/readLines";
import { parseLocationIds } from "./parseLocationIds";
import { reconcileLocationIdLists } from "./reconcileLocationIdLists";

const lines = await readLines(path.join(__dirname, "input.txt"));
const { left, right } = parseLocationIds(lines);

const difference = reconcileLocationIdLists(left, right);
console.log("Difference:", difference);
