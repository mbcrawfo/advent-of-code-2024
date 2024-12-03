import path from "node:path";

type Implementation = "chatgpt" | "claude" | "copilot" | "human";

interface Args {
    implementation: Implementation;
    inputFilePath: string;
}

export const getCommandLine = (indexDirname: string): Args => {
    const args = process.argv.slice(2);
    const defaultPath = path.join(indexDirname, "input.txt");

    if (args.length === 0) {
        return { implementation: "human", inputFilePath: defaultPath };
    }

    let implementation: Implementation = "human";
    switch (args[0]) {
        case "chatgpt":
        case "claude":
        case "copilot":
            implementation = args[0];
            break;

        default:
        // Intentionally empty
    }

    if (args.length === 1) {
        return { implementation, inputFilePath: defaultPath };
    }

    return { implementation, inputFilePath: args[1] };
};
