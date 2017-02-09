var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
module.exports = {
  entry: 
  {
    main:'./main.js',
    main1:'./main1.js'
  },
  output: {
    path:__dirname+'/dist',
    filename: '[name].js'
  },
  plugins: [
   
  ]
};