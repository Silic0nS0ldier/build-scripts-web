import execa from "./execa-fixed.js";
import * as Url from 'url';
import * as Path from 'path';

const __filename = Url.fileURLToPath(import.meta.url);
const __dirname = Path.dirname(__filename);

interface BuildArgs {
    inputDir: string,
    stdout: NodeJS.WriteStream;
    stderr: NodeJS.WriteStream;
}

export async function build(args: BuildArgs) {
    try {
        const result = execa(
            Path.join(__dirname, '../../node_modules/.bin/tsc'),
            [
                "--rootDir", args.inputDir,
                "--module", "ES2015",
                "--newLine", "lf",
                "--declaration", "false",
                "--target", "ES2020",
                "--sourcemap", "true",
                "--noEmitHelpers", "true",
                "--strict", "true",
                "--moduleResolution", "node",
                "--useDefineForClassFields", "true"
            ],
            {
                stderr: args.stderr,
                stdout: args.stdout,
                cwd: process.cwd(),
            }
        );

        await result;
    } catch {}
}
