/**
 * webpack 的配置文件
 **/

module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/act':{
        target: 'https://www.imooc.com',// 目标
        changeOrigin: true,
        pathRewrite:{
          '/act':''
        }
      }
    }
  }
}
