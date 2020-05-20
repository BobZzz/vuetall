// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import * as utqil from './util'
import VueLazyLoad from 'vue-lazyload'
import infiniteScroll from 'vue-infinite-scroll'
import {currency} from './util/currency'
import Vuex from 'vuex'
import GlobalError from './errorPlugin'

// import './assets/css/base.css'
// import './assets/css/checkout.css'
// import './assets/css/login.css'
// import './assets/css/product.css'

Vue.config.productionTip = false
// Vue.config.errorHandler = function (err, vm, info) {
//   let { 
//       message, // 异常信息
//       name, // 异常名称
//       stack  // 异常堆栈信息
//   } = err;
// debugger
//   // vm 为抛出异常的 Vue 实例
//   // info 为 Vue 特定的错误信息，比如错误所在的生命周期钩子
// }

Vue.use(VueLazyLoad,{
  loading:"/static/loading-svg/loading-bars.svg"
});
Vue.use(infiniteScroll)
Vue.use(Vuex)
Vue.filter("currency",currency)
Vue.use(GlobalError)
// console.log(`sum:${utqil.sum(4,8)}`);
/* eslint-disable no-new */
router.afterEach((to,form)=>{
  // if (window.performance) {
  //   // Gets the number of milliseconds since page load
  //   // (and rounds the result since the value must be an integer).
  //   var timeSincePageLoad = Math.round(performance.now());
  //   console.log(timeSincePageLoad+'sssssssssssssssss');
    
  //   // Sends the timing event to Google Analytics.
  //   gtag('event', 'timing_complete', {
  //     'name': to.fullPath,
  //     'value': timeSincePageLoad,
  //     'event_category': 'JS Dependencies'
  //   });
  // }
  gtag('config', 'UA-149713823-1',{'page_path': to.fullPath});
})
const store = new Vuex.Store({
  state:{
    nickName:'',
    cartCount:0
  },
  mutations:{
    updateUserInfo(state,nickName){
      state.nickName = nickName
    },
    updateCartCount(state,cartCount){
      state.cartCount += cartCount
    },
    initCartCount(state,cartCount){
      state.cartCount = cartCount
    }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
