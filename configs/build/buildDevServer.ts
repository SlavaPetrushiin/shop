import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import { ConfigOptions } from "./types/config";

export function buildDevServer({ port, paths }: ConfigOptions.BuildOptions): DevServerConfiguration {
    return {
        static: paths.build,
        open: true,
        port: port,
        historyApiFallback: true,
        hot: true,
    };
}