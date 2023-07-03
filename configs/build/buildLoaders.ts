import webpack from 'webpack';
import { ConfigOptions } from './types/config';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

export function buildLoaders({ isDev }: ConfigOptions.BuildOptions): webpack.RuleSetRule[] {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const svgLoader = {
        test: /\.svg$/,
        use: ['@svgr/webpack'],
    };

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            // Translates CSS into CommonJS
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resourcePath: string) => resourcePath.includes('.module.'),
                        localIdentName: isDev
                            ? "[path][name]__[local]--[hash:base64:5]"
                            : "[hash:base64:8]"
                    }
                },
            },
            // Compiles Sass to CSS
            "sass-loader",
        ],
    };

    return [
        tsLoader,
        cssLoader,
        svgLoader
    ]
}