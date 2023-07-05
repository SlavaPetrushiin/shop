import webpack from "webpack";
import { ConfigOptions } from "./types/config";

export function buildResolves({ paths }: ConfigOptions.BuildOptions): webpack.ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"],
        preferAbsolute: true,
        modules: [paths.src, "node_modules"],
        mainFiles: ["index"],
        alias: {},
    };
}