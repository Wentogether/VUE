import Vue from 'vue'
import Router from 'vue-router'
import mine from '@/components/mine'
import home from '@/components/home'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    }
  ]
})
