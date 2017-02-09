var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
    entry: {
        main: './main.js',
        main1: './main1.js',
        common1: ['jquery'],
        common2: ['vue']
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'//不使用[name]，并且插件中没有filename，
        //这输出文件中只用chunk.js的内容，main.js的内容不知跑哪里去了
    },
    plugins: [
        new CommonsChunkPlugin({
            name: ["chunk","common1","common2"],//页面上使用的时候common2
            //必须最先加载
            // filename:"chunk.js"//忽略则以name为输出文件的名字，
                //否则以此为输出文件名字
            minChunks: 2
        })
    ]
};