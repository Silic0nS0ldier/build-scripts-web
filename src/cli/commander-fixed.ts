import * as Commander from "commander";

const CommanderActual: Commander.CommanderStatic = Commander.default;

const Command = CommanderActual.Command;

export {
    Command,
    CommanderActual as default
}
