import webpack from 'webpack';
import { ConfigOptions } from './types/config';
import { Configuration } from 'webpack-dev-server';

export function buildDevServer({ paths, port }: ConfigOptions.BuildOptions): Configuration {
    return {
        static: paths.build,
        port,
        open: true
    }
}