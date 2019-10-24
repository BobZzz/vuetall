// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as utqil from './util'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'
// import './assets/css/base.css'
// import './assets/css/checkout.css'
// import './assets/css/login.css'
// import './assets/css/product.css'

Vue.config.productionTip = false

Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
});
Vue.use(infiniteScroll)
Vue.filter("currency",currency)
// console.log(`sum:${utqil.sum(4,8)}`);
/* eslint-disable no-new */
// router.afterEach((to,form)=>{
//   gtag('config', 'UA-149713823-1',{'page_path': to.fullPath});
// })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
