const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

const NpmInstallPlugin = require('npm-install-webpack-plugin');

const PATHS = {
    src: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const commonConfig = {
    debug: true,
    devtool: 'source-map',
	entry: {
        filename: PATHS.src + '/index.tsx'
    },
	output: {
        path: PATHS.build,
		filename: 'bundle.js'
	},
	resolve:{
		extensions: ['', '.webpack.js', '.scss', '.web.js', '.js', '.ts', '.tsx']
	},
    plugins: [
        //new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                include: /src/,
                loader: 'ts'
            },
            {
                test: /\.s?css$/,
                include: /src/,
                loader: 'style!css!sass'
            },
            {
                test: /\.(otf|eot|woff|woff2|ttf|svg)(\?\S*)?$/,
                include: /src/,
                loader: 'url'
            }
        ]
    }
};

const TARGET = process.env.npm_lifecycle_event;

if (TARGET === 'start' || !TARGET) {
	const devConfig = {
        devTool: 'eval-source-map',
        devServer: {
            contentBase: PATHS.build,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true,
            stats: 'errors-only',
            host: process.env.HOST,
            port: process.env.PORT
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new NpmInstallPlugin({
                save: true
            })
        ]
	};

	module.exports = merge(commonConfig, devConfig);
}

if(TARGET === 'build') {
  module.exports = merge(commonConfig, {});
}
