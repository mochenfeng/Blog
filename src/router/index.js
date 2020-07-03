import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import index from '@/components/index'
import websocket from '@/components/websocket'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      children: [
        {
          path: '/helloworld',
          name: 'HelloWorld',
          component: HelloWorld
        },
       
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },

    // 测试websocket
    {
      path: '/websocket',
      name: 'websocket',
      component: websocket
    }
  ]
})

