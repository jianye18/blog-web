const CompressionPlugin = require("compression-webpack-plugin");
module.exports = {
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete('prefetch')
  },
  configureWebpack: () => {

    if (process.env.NODE_ENV === 'production') {
      return {
        plugins: [
          new CompressionPlugin({
            test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
            threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
            deleteOriginalAssets: false // 是否删除原文件
          })
        ]
      }
    }
  }
}
