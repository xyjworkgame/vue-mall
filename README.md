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



#### 3. storage封装
> Cookie 、LocalSorate、SessionStorage三者

##### a) 三者区别
1. 存储大小：Cookie4K,Storage5M
2. 有效期：Cookie有有效期，storage永久存储
3. Cookie会发送到服务器端，存储在内存中，Storage只存在浏览器端
4. 路径： Cookie 有路径限制，Storage只存储在域名下
5. API：Cookie没有特定的API，Storage有对应的API

##### b) 为什么封装
1. 虽然本身有API，但是只是简单的key-value性阿是
2. 只存储字符串，需要人工转换json对象
3. 只能一次清空，不能单个清空

#### 4. 接口错误拦截
> 统一错误
> 未登录统一拦截
> 请求值，返回值统一处理
