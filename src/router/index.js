import Vue from 'vue'
import Router from 'vue-router'

import Layout from '../views/layout'

Vue.use(Router)

export const constantRouterMap = [{
    path: '/404',
    component: () =>
      import('@/views/404'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    name: 'index',
    hidden: true,
    children: [{
      path: 'index',
      component: () =>
        import('@/views/index')
    }]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }, {
    path: '/test',
    component: () =>
      import('@/views/test'),
    hidden: true
  }
]

export default new Router({
  mode: 'history', // 后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})
