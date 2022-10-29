const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 关闭eslint
  devServer: {
    proxy: {
      // 遇见/api前缀的请求，走代理去服务器端获取
      '/api': {
        target: 'http://gmall-h5-api.atguigu.cn' // 服务器地址
      }
    }
  }
})
