import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { ConfigOptions } from './configs/build/types/config';

export default (env: ConfigOptions.BuildEnv) => {
  console.log({ env });

  const mode: ConfigOptions.BuildMode = env.mode ?? 'development';
  const paths: ConfigOptions.BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src',)
  }
  const isDev = mode === 'development';
  const port = env.port || 3000;

  const config: webpack.Configuration = buildWebpackConfig({
    mode, paths, isDev, port
  });

  return config;
}
