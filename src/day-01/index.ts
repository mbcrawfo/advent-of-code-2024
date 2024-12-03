import path from "node:path";
import { readLines } from "../utilities/readLines";
import { computeSimilarity } from "./computeSimilarity";
import { parseLocationIds } from "./parseLocationIds";
import { reconcileLocationIds } from "./reconcileLocationIds";

const lines = await readLines(path.join(__dirname, "input.txt"));
const { left, right } = parseLocationIds(lines);

const difference = reconcileLocationIds(left, right);
console.log("Difference:", difference);

const similarity = computeSimilarity(left, right);
console.log("Similarity:", similarity);
