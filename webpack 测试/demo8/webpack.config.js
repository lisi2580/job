var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: 
  {
    main:'./main.js',
    main1:'./main1.js',
  },
  output: {
    path:__dirname+'/dist',
    filename: '[name].js'//不使用[name]，并且插件中没有filename，
  },
  plugins: [
   new CommonsChunkPlugin({
       name:"chunk",
      // filename:"chunk.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
      minChunks:2
   })
  ]
};