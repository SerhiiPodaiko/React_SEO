const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const UnminifiedWebpackPlugin = require('unminified-webpack-plugin')

const production = process.env.NODE_ENV === 'production'

module.exports = {
    // Mode
    mode: production  ? 'production' : 'development',

    // Start app
    entry: './src/index.js',

    // Build
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },

    // Modules
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Styles
            {
                test: /\.(css|scss|sass)$/,
                exclude: /node_modules/,
                use: [
                    production ? MiniCssExtractPlugin.loader : 'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // module: true,
                            sourceMap: !production
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            // module: true,
                            sourceMap: !production
                        }
                    }
                ]
            },

            // Files
            {
                test: /\.(jpg|jpe?g|png|svg)$/,
                use: ['file-loader', {
                    loader: 'image-webpack-loader',
                    options: {
                        bypassOnDebug: true,
                        disable: true
                }}]
            },

            // Babel
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },

            // Svg
            // {
            //     test: /\.svg$/i,
            //     issuer: /\.[jt]sx?$/,
            //     use: ['@svgr/webpack'],
            // }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.scss'],
        alias: {
            '@assets': path.resolve(__dirname, '/src/assets'),
            '@components': path.resolve(__dirname, '/src/components'),
            '@hooks': path.resolve(__dirname, '/src/hooks'),
            '@styles': path.resolve(__dirname, '/src/styles'),
            '@lib': path.resolve(__dirname, '/src/lib'),
            '@ui': path.resolve(__dirname, '/src/ui'),
            '@constants': path.resolve(__dirname, '/src/constants'),
            '@utils': path.resolve(__dirname, '/src/utils'),
            '@routes': path.resolve(__dirname, '/src/routes'),
            '@pages': path.resolve(__dirname, '/src/pages'),
        }
    },

    performance: {
        hints: false
    },

    // Optimization bundle
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerWebpackPlugin()
        ],
        // runtimeChunk: 'single',
        // splitChunks: {
        //     chunks: 'all',
        //     maxInitialRequests: Infinity,
        //     minSize: 0,
        //     // cacheGroups: {
        //     //     vendor: {
        //     //         test: /[\\/]node_modules[\\/]/,
        //     //         name(module) {
        //     //             const packageName = module.context.match(/[\\/]node_modules[\\/](.*?)([\\/]|$)/) ?? 'package';
        //     //             return `npm.${packageName[1].replace('@', '')}`;
        //     //         }
        //     //     }
        //     // }
        // },
    },

    // Plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
        new MiniCssExtractPlugin({
            filename: production ? '[name].[contenthash].css' : '[name].css'
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(production  ? 'production' : 'development'),
        }),
        new UnminifiedWebpackPlugin()
    ],

    // Dev Server
    devServer: {
        port: 3004,
        hot: true,
        historyApiFallback: true
    }
}
