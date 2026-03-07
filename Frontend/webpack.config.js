const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true
                        }
                    },
                    'angular2-template-loader'
                ],
                exclude: /node_modules/
            },
            {
                test: /\.(html|css)$/,
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src/app'),
                use: 'raw-loader'
            },
            {
                test: /\.css$/,
                exclude: path.resolve(__dirname, 'src/app'),
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'public', to: '.', noErrorOnMissing: true },
            ],
        }),
    ],
    devServer: {
        historyApiFallback: true,
        port: 4201,
        proxy: [
            {
                context: ['/api'],
                target: 'http://localhost:8080',
            },
        ],
    },
};

