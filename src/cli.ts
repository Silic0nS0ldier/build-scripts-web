import Commander from "./cli/commander-fixed.js";
import build from "./cli/build.js";
import watch from "./cli/watch.js";
const program = Commander.program;

// Register commands
program.addCommand(build);
program.addCommand(watch);

// Start
program.parse(process.argv)
