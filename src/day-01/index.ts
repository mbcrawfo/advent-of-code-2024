import { getCommandLine } from "../utilities/getCommandLine";
import { readLines } from "../utilities/readLines";
import { reconcileLocationIdLists as humanImpl } from "./human";

const { implementation, inputFilePath } = getCommandLine(__dirname);

let reconcileLocationIdLists = humanImpl;
switch (implementation) {
    case "chatgpt":
        break;
    case "claude":
        break;
    case "copilot":
        break;
    default:
    // Intentionally empty.
}

const lines = await readLines(inputFilePath);
const difference = reconcileLocationIdLists(lines);
console.log(difference);
