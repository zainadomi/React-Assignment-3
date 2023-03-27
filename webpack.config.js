const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function getWebpackConfig(env, argv) {
    const mode = argv.nodeEnv || argv.mode || 'production';
    const copyPlugin = new CopyWebpackPlugin({
        patterns: [
            { from: './some-file*.txt', },
        ],
        plugins:[
            new webpack.DefinePlugin({
                process: {env: {}}
            })
          ]
    });

    return {
        mode,
        entry: './index.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'dist'),
        },
        plugins: [copyPlugin],
    };
}