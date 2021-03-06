import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index'
// import Product from '../views/Product'
// import Detail from '../views/Detail'
// import Cart from '../views/Cart'
import Order from '../views/Order'
import OrderList from '../views/OrderList'
import OrderConfirm from '../views/OrderConfirm'
import OrderPay from '../views/OrderPay'
import AliPay from '../views/AliPay'
// import Login from '../views/Login'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/index',
    component: Home,
    children:[{
      path: '/index',
      name: Index,
      component:Index
    },
      {
        path: '/product/:id',
        name: 'product',
        component: resolve => require(['./views/Index.vue'],resolve),
      },
      {
        path: '/detail/:id',
        name: 'detail',
        component: resolve => require(['./views/Detail.vue'],resolve),
      }]
  },
    {
      path: '/login',
      name: 'login',
      component: ()=> import('./views/Login.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: ()=> import('./views/Cart.vue')
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [{
        path: 'list',
        name: 'order-list',
        component: OrderList,
      },
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm,
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay,
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: AliPay,
        }
        ]
    }
]

const router = new VueRouter({
  routes
})

export default router
