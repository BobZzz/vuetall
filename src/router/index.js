import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import Cart from './../views/Cart'
import Address from './../views/Address'
import OrderConfirm from './../views/OrderConfirm'
import OrderSuccess from './../views/OrderSuccess'
import TestView from './../views/TestView'
import TestChild from './../views/TestChild'
import TestChildnew from './../views/TestChildnew'
import htmlViewSample from './../views/htmlViewSample'


Vue.use(Router)

export default new Router({
  // mode: 'history', // 后端支持可开
  routes: [
    {
      path: '/',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/address',
      name: 'Address',
      component: Address
    },
    {
      path: '/orderConfirm',
      name: 'OrderConfirm',
      component: OrderConfirm
    },
    {
      path: '/orderSuccess',
      name: 'OrderSuccess',
      component: OrderSuccess
    },
    {
      path: '/test',
      component: TestView,
      children:[
        {
          path:'child',
          component:TestChild
        },
        {
          path:'childnew',
          component:TestChildnew
        }
      ]
    },
    {
      path: '/htmlViewSample',
      component: htmlViewSample
    },
  ]
})
