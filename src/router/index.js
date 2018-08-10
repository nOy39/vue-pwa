import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Details from '@/components/Details'
import Timetodo from '@/components/Timetodo'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/hello',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/details/:id',
      name: 'Details',
      props: true,
      component: Details
    },
    {
      path: '/',
      name: 'Timetodo',
      component: Timetodo
    }
  ]
})
