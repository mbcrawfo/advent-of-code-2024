import * as fs from "node:fs";
import * as readline from "node:readline/promises";

export const readLines = async (filePath: string): Promise<string[]> => {
    const fileStream = fs.createReadStream(filePath);

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity,
    });

    const lines: string[] = [];
    for await (const line of rl) {
        if (line !== "") {
            lines.push(line);
        }
    }

    return lines;
};
