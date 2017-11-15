import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todo/all'
    }, {
      path: '/todo/:type',
      name: 'Todo',
      component: resolve => require(['@/components/TodoList'], resolve)
    }, {
      path: '/user/:id',
      name: 'User',
      component: resolve => require(['@/components/User'], resolve)
    }, {
      path: '/componentdemo',
      name: 'ComponentDemo',
      component: resolve => require(['@/components/ComponentDemo'], resolve)
    }, {
      path: '/tree',
      name: 'Tree',
      component: resolve => require(['@/components/Tree'], resolve)
    }
  ]
})
