import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Home from '@/pages/home'
import GoodsDeatil from '@/pages/goodsDetail'
import Index from '@/pages/index'
import ShopList from '@/pages/shoplist'
import ShopDetail from '@/pages/shopDetail'
import User from '@/pages/user'
import AdressDetail from '@/pages/adressDetail'
import Echarts from '@/pages/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    {
      name:'index',
      path: '/',
      component: Index
    }, {
      name:'detail',
      path: '/detail',
      component: GoodsDeatil
    }, {
      name:'index',
      path: '/index',
      component: Index
    }, {
      name:'shoplist',
      path: '/shoplist',
      component: ShopList
    }, {
      name:'shopDetail',
      path:'/shopDetail',
      component:ShopDetail
    }, {
      name:'user',
      path:'/user', 
      component:User
    }, {
      name:'adressDetail',
      path:'/adressDetail',
      component:AdressDetail
    }, {
      name:'echarts',
      path:'/echarts',
      component:Echarts
    }
  ]
})


