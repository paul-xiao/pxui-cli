const webpack = require('webpack')
const webpackConfig = {}
module.exports = function () {
  webpack(webpackConfig, function (err, stat) {
    if (err || stat.hasErrors()) {
      console.log('构建过程出错！')
      console.log(stat)
    } else {
      console.log('构建成功！')
    }
  })
}
