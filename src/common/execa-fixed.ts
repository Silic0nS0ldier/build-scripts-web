import * as Execa from "execa";

// @ts-ignore
const ExecaActual: typeof Execa = Execa.default;

export {
    ExecaActual as default
}
