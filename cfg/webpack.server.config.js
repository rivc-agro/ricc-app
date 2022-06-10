const path = require('path');
const nodeExternals = require('webpack-node-externals');
const NODE_ENV = process.env.NODE_ENV;

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
                use: ['ts-loader'],
                exclude: /node_modules/
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
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        }
                    },
                    'sass-loader',
                ],
                exclude: GLOBAL_SCSS_REGEX,
            },
            {
                test: GLOBAL_SCSS_REGEX,
                use: ['css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            postcssOptions: {
                                config: path.resolve(__dirname, "postcss.config.js"),
                            },
                        }
                    },
                    'sass-loader'
                ]
            },
            {
                // Fonts
                test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                // imgs
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            }
        ]
    },
    optimization: {
        minimize: false
    },
};