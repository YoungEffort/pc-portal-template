module.exports = {
  css: {
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
        ]
      }
    }
  }
  // 这里写你调用接口的基础路径，来解决跨域，如果设置了代理，那你本地开发环境的axios的baseUrl要写为 '' ，即空字符串
  // devServer: {
  //   // proxy: 'http://172.17.100.97:8803'
  // }
}
