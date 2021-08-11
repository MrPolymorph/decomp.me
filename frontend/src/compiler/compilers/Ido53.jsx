import { h, Fragment } from "preact"
import { Checkbox, FlagSet, FlagOption } from "../CompilerOpts"

export const name = "IDO 5.3"
export const id = "ido5.3"

export function Flags() {
    return <>
        <FlagSet name="Optimization level">
            <FlagOption flag="-O0" description="No optimization" />
            <FlagOption flag="-O1" description="Some optimization" />
            <FlagOption flag="-O2" description="Heavy optimization" />
        </FlagSet>

        <FlagSet name="Debug information">
            <FlagOption flag="-g0" description="No debug info" />
            <FlagOption flag="-g1" description="Minimal trace info" />
            <FlagOption flag="-g2" description="Local variable tracking" />
            <FlagOption flag="-g3" description="Macro expansions" />
        </FlagSet>

        <Checkbox flag="-Wall" description="Enable all warning types" />
    </>
}