import * as Path from "path";
import { Command } from "./commander-fixed.js";
import { build } from "../common/typescript.js";

const cmd = new Command("build");
export default cmd;

cmd.description("Builds web app bundle")
cmd.option('-i, --inDir <path>', "Input directory")
cmd.action(async function () {
    cmd.parse(process.argv);
    let inDir: string|undefined = cmd.inDir;

    if (!inDir) {
        console.error("-i, --inDir <path> is required");
        return;
    }

    // Resolve inDir to absolute path
    inDir = Path.relative(__dirname, inDir);

    console.log("Running TypeScript...");// with config at...
    await build({
        inputDir: inDir,
        stderr: process.stderr,
        stdout: process.stdout,
    });
    console.log("TypeScript complete");

    // TODO Rollup
});
