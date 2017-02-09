var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: 
  {
    main:'./main.js',
  },
  output: {
    path:__dirname+'/dist',
    filename: 'build.js'
  },
  plugins: [
   
  ]
};