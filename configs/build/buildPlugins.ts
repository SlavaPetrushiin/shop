import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from 'webpack';
import { ConfigOptions } from "./types/config";

export function buildPlugins({ paths }: ConfigOptions.BuildOptions): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
    ]
}