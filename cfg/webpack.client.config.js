const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const copyWebpack = require('copy-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEX = /\.global\.scss/

const setupDevtool = () => {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
};

const PATHS = {
    src: path.resolve(__dirname, '../src'),
    dist: path.resolve(__dirname, '../dist'),
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ],
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                use: ['ts-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: '[name]-[local]--[hash:base64:5]'
                            }
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
                use: ['style-loader', 'css-loader',
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
    devtool: setupDevtool(),
    plugins: IS_DEV
        ? [
            new CleanWebpackPlugin(),
            new HotModuleReplacementPlugin(),
        ]
        : [],
};