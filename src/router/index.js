import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/layout/layout'

import Login from '@/pages/sign/login'
import Register from '@/pages/sign/register'
import Password from '@/pages/sign/password'
import Repassword from '@/pages/sign/repassword'
import ForgetPassword from '@/pages/sign/forgetPassword'

import Index from '@/pages/home/index'
import Location from '@/pages/home/location'
import Property from '@/pages/property/index'
import Life from '@/pages/life/index'
import Article from '@/pages/article/index'
import ArticleDetail from '@/pages/article/detail'
import Service from '@/pages/service/index'

import Shop from '@/pages/shop/index'
import ShopSearch from '@/pages/shop/search'
import ShopDetail from '@/pages/shop/detail'
import ShopCategory from '@/pages/shop/category'
import ShopCategorys from '@/pages/shop/categorys'
import ShopOrder from '@/pages/shop/order'
import ShopAddress from '@/pages/shop/address'
import ShopAddAddress from '@/pages/shop/addAddress'
import ShopEditAddress from '@/pages/shop/editAddress'
import Cart from '@/pages/shop/cart'

import OrderPay from '@/pages/pay/index'
import OrderPayDetail from '@/pages/pay/detail'

import User from '@/pages/user/index'
import UserData from '@/pages/user/message'
import UserName from '@/pages/user/changeName'
import UserNickname from '@/pages/user/changeNickname'
import BindMobile from '@/pages/user/bindMobile'
import UserBalance from '@/pages/user/balance'
import UserRecharge from '@/pages/user/recharge'
import UserWithdraw from '@/pages/user/withdraw'
import UserIncome from '@/pages/user/income'

Vue.use(Router)

export default new Router({
  // mode:'history',
  saveScrollPosition : false,
  linkExactActiveClass:'active',
  /*scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },*/
  routes: [
    {
      path: '/',
      name: 'Index',
      components:{
        default:Index
      }
    },
    {
      path: '/layout',
      component: Layout,
      children: [
        {
          path: '/location',
          name: 'Location',
          component: Location,
          meta: {
            title: '选择小区'
          }
        },
        {
          path: '/property',
          name: 'Property',
          component: Property,
          meta: {
            title: '物业'
          }
        },
        {
          path: '/life',
          name: 'Life',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:Life
          }
        },
        {
          path: '/article',
          name: 'Article',
          meta: {
            title: '社区公告'
          },
          components:{
            default:Article
          }
        },
        {
          path: '/article/detail',
          name: 'ArticleDetail',
          meta: {
            title: '公告详情'
          },
          components:{
            default:ArticleDetail
          }
        },
        {
          path: '/shop',
          name: 'Shop',
          meta: {
            title: '团转商城'
          },
          components:{
            default:Shop
          }
        },
        {
          path: '/shop/detail',
          name: 'ShopDetail',
          meta: {
            title: '商品详情'
          },
          components:{
            default:ShopDetail,
          }
        },
        {
          path: '/shop/category',
          name: 'ShopCategory',
          components:{
            default:ShopCategory,
          }
        },
        {
          path: '/shop/categorys',
          name: 'ShopCategorys',
          meta: {
            title: '全部分类'
          },
          components:{
            default:ShopCategorys,
          }
        },
        {
          path: '/shop/search',
          name: 'ShopSearch',
          meta: {
            title: '搜索商品'
          },
          components:{
            default:ShopSearch,
          }
        },
        {
          path: '/shop/order',
          name: 'ShopOrder',
          meta: {
            title: '提交订单'
          },
          meta: {
            requireAuth: true,
          },
          components:{
            default:ShopOrder,
          }
        },
        {
          path: '/shop/address',
          name: 'ShopAddress',
          meta: {
            title: '选择地址'
          },
          components:{
            default:ShopAddress,
          }
        },
        {
          path: '/shop/address/add',
          name: 'ShopAddAddress',
          meta: {
            title: '添加地址'
          },
          components:{
            default:ShopAddAddress,
          }
        },
        {
          path: '/shop/address/edit/:id',
          name: 'ShopEditAddress',
          meta: {
            title: '修改地址'
          },
          components:{
            default:ShopEditAddress,
          }
        },
        {
          path: '/user/message',
          name: 'UserData',
          meta: {
            requireAuth: true,
            title: '我的资料'
          },
          components:{
            default:UserData,
          }
        },
        {
          path: '/user/recharge',
          name: 'UserRecharge',
          meta: {
            requireAuth: true,
            title: '充值'
          },
          components:{
            default:UserRecharge,
          }
        },
        {
          path: '/user/withdraw',
          name: 'UserWithdraw',
          meta: {
            requireAuth: true,
            title: ' 提现'
          },
          components:{
            default:UserWithdraw,
          }
        },
        {
          path: '/user/income',
          name: 'UserIncome',
          meta: {
            requireAuth: true,
            title: '收支明细'
          },
          components:{
            default:UserIncome,
          }
        },
        {
          path: '/order/pay',
          name: 'OrderPay',
          meta: {
            title: '确认支付'
          },
          components:{
            default:OrderPay,
          }
        },
        {
          path: '/order/pay/detail',
          name: 'OrderPayDetail',
          meta: {
            title: '支付详情'
          },
          components:{
            default:OrderPayDetail,
          }
        },
      ]
    },
    {
      path: '/shop/cart',
      name: 'ShopCart',
      component: Cart,
    },
    {
      path: '/service',
      name: 'Service',
      components:{
        default:Service
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/password/:phone/:code',
      name: 'Password',
      component: Password,
    },
    {
      path: '/forgetPassword',
      name: 'ForgetPassword',
      component: ForgetPassword,
    },
    {
      path: '/repassword/:phone/:code',
      name: 'Repassword',
      component: Repassword,
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        requireAuth: true,
      },
      component: User,
    },
    {
      path: '/user/balance',
      name: 'UserBalance',
      meta: {
        requireAuth: true,
        title:'我的余额'
      },
      component: UserBalance,
    },
    {
      path: '/user/mobile/:old_phone',
      name: 'BindMobile',
      meta: {
        requireAuth: true,
        title: '修改手机号'
      },
      components:{
        default:BindMobile,
      }
    },
    {
      path: '/user/name/:realname',
      name: 'UserName',
      meta: {
        requireAuth: true,
        title: '修改姓名'
      },
      components:{
        default:UserName,
      }
    },
    {
      path: '/user/nickname/:nickname',
      name: 'UserNickname',
      meta: {
        requireAuth: true,
        title: '修改昵称'
      },
      components:{
        default:UserNickname,
      }
    }
  ]
})
