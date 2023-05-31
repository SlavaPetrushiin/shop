import { buildDevServer } from './buildDevServer';
import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolves } from './buildResolves';
import { ConfigOptions } from './types/config';
import webpack from 'webpack';

export function buildWebpackConfig(options: ConfigOptions.BuildOptions): webpack.Configuration {
    const { mode, paths, isDev } = options;

    return {
        mode: mode,
        entry: paths.entry,
        devtool: isDev ?  'inline-source-map' : undefined,
        devServer: buildDevServer(options),
        module: {
            rules: buildLoaders()
        },
        resolve: buildResolves(),
        plugins: buildPlugins(options),
        devServer: buildDevServer(options),
        output: {
            filename: '[name][contenthash].js',
            path: paths.build,
            clean: true
        },
        optimization: {
            runtimeChunk: 'single',
        }
    }
}