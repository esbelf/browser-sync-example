var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './app.js'
  },
  watch:true,
  plugins: [
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 8080,
      files: ['./dist/*.html', './dist/*.js', './dist/*.css'],
      server: { baseDir: ['./dist'] }
    })
  ]
}

