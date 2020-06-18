/**
 * webpack 的配置文件
 **/

module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target: 'https://mall-pre.springboot.cn',// 目标
        changeOrigin: true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  }
}
