import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from './../views/GoodsList'
import TestView from './../views/TestView'
import TestChild from './../views/TestChild'
import TestChildnew from './../views/TestChildnew'
import htmlViewSample from './../views/htmlViewSample'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: GoodsList
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
