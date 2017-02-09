var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: 
  {
    main:'./main.js',
    chunk: ["./chunk1", "./chunk2"],//插件中name,filename必须以这个key为值
  },
  output: {
    path:__dirname+'/dist',
    filename: '[name].js'//不使用[name]，并且插件中没有filename，
    // 这输出文件中只用chunk.js的内容，main.js的内容不知跑哪里去了
  },
  plugins: [
   new CommonsChunkPlugin({
       name:"chunk",
      // filename:"chunk.js"//忽略则以name为输出文件的名字，否则以此为输出文件名字
   })
  ]
};