import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/components/TodoList'
import User from '@/components/User'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/todo/all'
    }, {
      path: '/todo/:type',
      name: 'Todo',
      component: TodoList
    }, {
      path: '/user/:id',
      name: 'User',
      component: User
    }
  ]
})
