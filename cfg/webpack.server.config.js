const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;
const copyWebpack = require('copy-webpack-plugin');

const GLOBAL_SCSS_REGEX = /\.global\.scss/

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
}

module.exports = {
    target: "node",
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname, '../src/server/server.js'),
    output: {
        path: path.resolve(__dirname, '../dist/server'),
        filename: 'server.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]-[local]--[hash:base64:5]'
                            },
                            onlyLocals: true,
                        }
                    },
                    'sass-loader',
                ],
                exclude: GLOBAL_SCSS_REGEX,
            },
            {
                test: GLOBAL_SCSS_REGEX,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                // Fonts
                test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new copyWebpack({
            patterns: [
                // Fonts:
                {
                    from: `${PATHS.src}/assets/fonts`,
                    to: `${PATHS.dist}/assets/fonts`
                }
            ]
        })
    ],
};