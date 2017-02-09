var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {

        main: './main.js',
        main1: './main1.js',
        jquery:["jquery"],
        vue:["vue"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: ["common","jquery","vue","load"],

            minChunks:2

        })
    ]
};