// Existing Code ....
module.exports = {
  entry: './dist/index.js',
  output: {
    path: './dist',
    filename: 'main.js',
  },
  externals:{
    react:false
  },
  target:"node"
}
