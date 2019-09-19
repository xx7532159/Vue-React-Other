import Vue from 'vue'
import Router from 'vue-router'
import test from '@/components/test.vue'
import helloworld from '@/components/HelloWorld.vue'
import index from '@/page/index.vue'
import login from '@/page/login.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'default',
      component: login,
      meta: { keepAlive: false }
    },

    {
      path: '/index',
      name: 'index',
      component: index,
      meta: { keepAlive: true },
      children: [
        {
          path: '/helloworld',
          name: 'helloworld',
          component: helloworld,
          meta: { keepAlive: true }
        },
        {
          path: '/test',
          name: 'test',
          component: test,
          meta: { keepAlive: false }
        }
      ]
    }
  ]
})
