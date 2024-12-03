import path from "node:path";
import { readLines } from "../utilities/readLines";
import { reconcileLocationIdLists } from "./reconcileLocationIdLists";

const lines = await readLines(path.join(__dirname, "input.txt"));
const difference = reconcileLocationIdLists(lines);
console.log(difference);
