import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store'
import {Message} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
/*
  status:0,
    data:[],
  msg:0
}*/
// 根据前端的跨域方法做调整（域名不一样，要这样写）
axios.defaults.baseURL= '/api'
axios.defaults.timeout = 8000

// 拦截器-接口错误拦截,返回拦截
axios.interceptors.response.use(function (response) {
  let res = response.data;
  let path = location.hash;
  if (res.status === 0 ){
    return res.data;
  }else if (res.status === 10) {//自定义的状态码--未登录
    if (path != '#/index'){
      window.location.href = '/#/login'
    }
    return Promise.reject(res);
  }else {
    // alert(res.msg)
    Message.warning(res.msg)
    return Promise.reject(res);
  }
})
Vue.use(VueAxios,axios)
// 生产环境提示
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  loading:'/imgs/loading-svg/loading-bars.svg'
})
// Vue.use(Message)
Vue.prototype.$message = Message
Vue.use(store)
Vue.use(VueCookie)
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
