import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/player',
      name: 'player',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Player.vue'),
      children: [
        {
          path: ':platform',
          name: 'platform',
          component: () => import(/* webpackChunkName: "about" */ './views/Platform.vue'),
          children: [
            {
              path: ':name',
              name: 'playername',
              component: () => import(/* webpackChunkName: "about" */ './views/PlayerName.vue'),
            }
          ]
        }
      ],
    },
    {
      path: '/match',
      name: 'match',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Match.vue')
    },
    {
      path: '/tournament',
      name: 'tournament',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Tournament.vue')
    },
  ]
})
