# mall 商城项目

## Project 介绍

### 项目的commit

#### 1. 项目init 
使用vue-cli 3 
```text
安装的过程：
首先卸载vue-cli2，
npm uninstall vue-cli -g
版本需求： 
        Node 版本要求
        
        Vue CLI 需要 Node.js
        8.9 或更高版本 (推荐 8.11.0+)。你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。

安装命令：
npm install -g @vue/cli
# OR
yarn global add @vue/cli


创建项目：vue create hello-world
图形管理网页： vue ui 启动
```
#### 2. 前端跨域解决方案
> 跨域是浏览器为了安全作出的限制策略
> 浏览器请求必须遵循同源策略：同域名，同端口、同协议
>  1. CORS跨域
>  2. JSONP跨域
>  3. 代理跨域
##### a) CORS 跨域
> 在服务端设置，表明后台容许前端某个站点进行访问

##### b) JSONP跨域
> 前后台同时改造
> 这是一个js脚本，不是XHR

##### c) nginx 服务器配置来实现
> 前端修改，后台不动
