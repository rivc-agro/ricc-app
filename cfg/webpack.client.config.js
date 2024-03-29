const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_SCSS_REGEX = /\.global\.scss/

const setupDevtool = () => {
    if (IS_DEV) return 'eval';
    if (IS_PROD) return false;
};

const getEntry = () => {
    if (IS_PROD) {
        return [path.resolve(__dirname, '../src/client/index.jsx')]
    }

    return [
        path.resolve(__dirname, '../src/client/index.jsx'),
        'webpack-hot-middleware/client?path=http://localhost:3001/static/__webpack_hmr'
    ]
}

module.exports = {
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        alias: {
            'react-dom': IS_DEV ? '@hot-loader/react-dom' : 'react-dom',
        }
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: getEntry(),
    output: {
        path: path.resolve(__dirname, '../dist/client'),
        filename: 'client.js',
        publicPath: '/static/'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|mjs)?$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
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
                test: /\.(png|jpe?g|gif|svg|webp)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                // vids
                test: /\.(mov|mp4)$/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                }
            },
            {
                // files
                test: /\.(pdf|doc)$/i,
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