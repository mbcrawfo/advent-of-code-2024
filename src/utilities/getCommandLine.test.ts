import { afterEach, describe, expect, it } from "vitest";
import { getCommandLine } from "./getCommandLine";

describe("getCommandLine", () => {
    const originalArgv = process.argv;

    afterEach(() => {
        process.argv = originalArgv;
    });

    it("should return the default args when no arguments are provided", () => {
        const dirname = "/path/to/dir";
        process.argv = ["node", "script.js"];

        const { implementation, inputFilePath } = getCommandLine(dirname);

        expect(implementation).toBe("human");
        expect(inputFilePath).toBe("/path/to/dir/input.txt");
    });

    it.each([["chatgpt"], ["claude"], ["copilot"], ["human"]])(
        "should return the correct implementation when provided as an argument (%s)",
        (expectedImplementation) => {
            const dirname = "/path/to/dir";
            process.argv = ["node", "script.js", expectedImplementation];

            const { implementation, inputFilePath } = getCommandLine(dirname);

            expect(implementation).toBe(expectedImplementation);
            expect(inputFilePath).toBe("/path/to/dir/input.txt");
        },
    );

    it.each([["chatgpt"], ["claude"], ["copilot"], ["human"]])(
        "should return the correct input file path when provided as an argument (%s)",
        (expectedImplementation) => {
            const dirname = "/path/to/dir";
            const expectedInputFilePath = "/path/to/dir/some_file.txt";
            process.argv = ["node", "script.js", expectedImplementation, expectedInputFilePath];

            const { implementation, inputFilePath } = getCommandLine(dirname);

            expect(implementation).toBe(expectedImplementation);
            expect(inputFilePath).toBe(expectedInputFilePath);
        },
    );
});
