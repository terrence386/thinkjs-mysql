import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Mission from '@/components/Mission'
import MissionDetail from '@/components/MissionDetail'
import CompanyDetail from '@/views/company/CompanyDetail'
import Login from '@/views/login/Login'
import User from '@/views/user/user'
import HomePage from '@/views/user/homePage'
import Pservice from '@/views/serviceOrder/pservice'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/component/Mission',
      name: 'Mission',
      component: Mission
    },
    {
      path: '/login/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/component/MissionDetail',
      name: 'MissionDetail',
      component: MissionDetail
    },
    {
      path: '/company/CompanyDetail',
      name: 'CompanyDetail',
      component: CompanyDetail
    },
    {
      path: '/user/User',
      name: 'User',
      component: User
    },
    {
      path: '/user/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/serve/pservice',
      name: Pservice,
      component: Pservice
    }
  ]
})
