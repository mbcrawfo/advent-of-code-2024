import path from "node:path";
import { readLines } from "../utilities/readLines";

const lines = await readLines(path.resolve(__dirname, "input.txt"));

console.log(lines.slice(0, 5));
