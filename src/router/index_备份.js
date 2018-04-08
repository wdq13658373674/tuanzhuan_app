import Vue from 'vue'
import Router from 'vue-router'

import Footer from '@/pages/common/footer'
import Layout from '@/pages/common/layout'

import Index from '@/pages/home/index'
import Location from '@/pages/home/location'
import Property from '@/pages/property/index'

/*懒加载 按需异步加载组件*/
// const Index=()=>import('@/pages/home/index')
// const Location=()=>import('@/pages/home/location')
// const Property=()=>import('@/pages/property/index')

Vue.use(Router)

export default new Router({
  // mode:'history',
  saveScrollPosition : true,
  linkExactActiveClass:'active',
  routes: [
    /*{
      path: '/',
      name: 'Index',
      components:{
        default:Index,
        footer:Footer,
        header:Header
      }
    },
    {
      path: '/Property',
      name: 'Property',
      component: Property,
      meta: {
        title: '物业'
      }
    },
    {
      path: '/location',
      name: 'Location',
      component: Location,
      meta: {
        title: '选择小区'
      }
    }*/
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/Property',
          name: 'Property',
          component: Property,
          meta: {
            title: '物业'
          }
        },
        {
          path: '/location',
          name: 'Location',
          component: Location,
          meta: {
            title: '选择小区'
          }
        },
        {
          path: '/',
          name: 'Index',
          components:{
            default:Index,
            footer:Footer
          }
        },
      ]
    },
  ]
})
