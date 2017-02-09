var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {

        main: './main.js',
        main1: './main1.js',
        jquery:["jquery"]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    plugins: [
        new CommonsChunkPlugin({
            name: "jquery",

            // minChunks:2,
            minChunks:2,

            chunks:["main","main1"]

        })
    ]
};