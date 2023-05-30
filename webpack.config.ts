import path from 'path';
import webpack from 'webpack';
import { buildWebpackConfig } from './configs/build/buildWebpackConfig';
import { ConfigOptions } from './configs/build/types/config';

const mode: ConfigOptions.BuildMode = 'development';
const paths: ConfigOptions.BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'dist'),
  html: path.resolve(__dirname, 'public', 'index.html')
}
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode, paths, isDev
});

export default config;