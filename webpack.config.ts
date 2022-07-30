import path from 'path'
import { Configuration } from 'webpack'
import * as webpackDevServer from 'webpack-dev-server'

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Set the webpack configuration
const config: Configuration  = {
    entry: './src/main.ts',
    module: {
        rules: [
            {
                test: /\.(ts|js)?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            '@babel/preset-typescript'
                        ]
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: [
            '.ts',
            '.js'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js' //'bundle.js'
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000
    },
    plugins : [
        new HtmlWebpackPlugin({
            template : './src/index.html'
        })
    ]
}

export default config