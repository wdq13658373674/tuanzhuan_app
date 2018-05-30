import Vue from 'vue'
import Router from 'vue-router'

/**
 * barNav(公共导航条) 嵌套路由模板
 * **/
import Layout from '@/pages/layout/layout'

/**登陆注册**/
import Login from '@/pages/sign/login'
import Register from '@/pages/sign/register'
import Password from '@/pages/sign/password'
import Repassword from '@/pages/sign/repassword'
import ForgetPassword from '@/pages/sign/forgetPassword'

/**首页**/
import Index from '@/pages/home/index'
import Location from '@/pages/home/location'

/**物业服务**/
import Property from '@/pages/property/index'
import PropertyService from '@/pages/property/service'
import PropertyRoom from '@/pages/property/room'
import PropertyServiceDetail from '@/pages/property/detail'

/**生活服务**/
import Life from '@/pages/life/index'
import LifeElectricity from '@/pages/life/electricity'
import LifeWater from '@/pages/life/water'
import LifeGas from '@/pages/life/gas'
import LifeCheckDetail from '@/pages/life/detail'
import LifePay from '@/pages/life/pay'

/**邻聚**/
import Neighbor from '@/pages/neighbor/index'

/**公告**/
import Article from '@/pages/article/index'
import ArticleDetail from '@/pages/article/detail'

/**智能管家**/
import Call from '@/pages/call/index'

/**服务**/
import Service from '@/pages/service/index'

/**商城**/
import Shop from '@/pages/shop/index'
import ShopSearch from '@/pages/shop/search'
import ShopDetail from '@/pages/shop/detail'
import ShopCategory from '@/pages/shop/category'
import ShopCategorys from '@/pages/shop/categorys'
import ShopAddress from '@/pages/shop/address'
import ShopAddAddress from '@/pages/shop/addAddress'
import ShopEditAddress from '@/pages/shop/editAddress'
import ShopCart from '@/pages/shop/cart'
import ShopOrder from '@/pages/shop/order'

/**订单支付**/
import OrderPay from '@/pages/pay/index'
import OrderPayDetail from '@/pages/pay/detail'
import WerxinPay from '@/pages/pay/wx'

/**智能家居**/
import Intelligent from '@/pages/intelligent/index'
import AddDevice from '@/pages/intelligent/addDevice'
import IgtLogin from '@/pages/intelligent/login'
import IgtSearch from '@/pages/intelligent/search'
import IgtHouse from '@/pages/intelligent/house'
import IgtRoom from '@/pages/intelligent/room'
import IgtRoomSet from '@/pages/intelligent/roomSet'
import IgtRoomAdd from '@/pages/intelligent/roomAdd'
import DeviceWifi from '@/pages/intelligent/wifi'
import DeviceZigbee from '@/pages/intelligent/zigbee'
import WifiStart from '@/pages/intelligent/wifiStart'
import BindDevice from '@/pages/intelligent/bindDevice'
import SelectDevice from '@/pages/intelligent/selectDevice'

/**用户中心-首页**/
import User from '@/pages/user/index'

/**用户中心-个人资料**/
import UserData from '@/pages/user/message/message'
import UserName from '@/pages/user/message/changeName'
import UserNickname from '@/pages/user/message/changeNickname'
import BindMobile from '@/pages/user/message/bindMobile'

/**用户中心-验证身份**/
import CheckIdCard from '@/pages/user/checkIdCard'

/**用户中心-我的账户**/
import UserBalance from '@/pages/user/account/balance'
import UserTicket from '@/pages/user/account/ticket'
import UserTicon from '@/pages/user/account/ticon'
import UserRecharge from '@/pages/user/account/recharge'
import UserWithdraw from '@/pages/user/account/withdraw'
import UserIncomeMoney from '@/pages/user/account/income_money'
import UserIncomeTcion from '@/pages/user/account/income_tcion'
import UserIncomeScore from '@/pages/user/account/income_score'

/**用户中心-银行卡**/
import UserCards from '@/pages/user/bank/index'
import UserAddCards from '@/pages/user/bank/add'
import UserAddCardsNext from '@/pages/user/bank/addNext'

/**用户中心-安全管理（支付密码）**/
import UserSafeManage from '@/pages/user/safe/index'
import ForgetPayPassword from '@/pages/user/safe/forgetPayPassword'
import SetPayPassword from '@/pages/user/safe/setPayPassword'
import CheckPayPassword from '@/pages/user/safe/checkPayPassword'

/**用户中心-我的订单**/
import UserOrder from '@/pages/user/order/order'
import UserOrderDetail from '@/pages/user/order/orderDetail'

/**用户中心-售后服务**/
import UserOrderSales from '@/pages/user/sales/index'
import UserSalesStep1 from '@/pages/user/sales/step1'
import UserSalesStep2 from '@/pages/user/sales/step2'
import UserSalesStep3 from '@/pages/user/sales/step3'

/**用户中心-我的预约**/
import UserOrdain from '@/pages/user/ordain/index'
import UserOrdainDetail from '@/pages/user/ordain/detail'

/**用户中心-我的房屋**/
import UserHouse from '@/pages/user/house/index'
import UserHouseHolders from '@/pages/user/house/holders'
import UserHouseInvite from '@/pages/user/house/invite'

Vue.use(Router)
export default new Router({
  // mode:'history',
  saveScrollPosition : false,
  linkExactActiveClass:'active',
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
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
          path: '/property/service',
          name: 'PropertyService',
          component: PropertyService,
          meta: {
            requireAuth: true,
            title: '物业服务费'
          }
        },
        {
          path: '/property/service/room',
          name: 'PropertyRoom',
          component: PropertyRoom,
          meta: {
            requireAuth: true,
            title: '更改房屋'
          }
        },
        {
          path: '/property/service/detail',
          name: 'PropertyServiceDetail',
          component: PropertyServiceDetail,
          meta: {
            requireAuth: true,
            title: '物业服务费'
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
          path: '/life/electricity',
          name: 'LifeElectricity',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:LifeElectricity
          }
        },
        {
          path: '/life/water',
          name: 'LifeWater',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:LifeWater
          }
        },
        {
          path: '/life/gas',
          name: 'LifeGas',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:LifeGas
          }
        },
        {
          path: '/life/check/detail',
          name: 'LifeCheckDetail',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:LifeCheckDetail
          }
        },
        {
          path: '/life/select/pay/:type',
          name: 'LifePay',
          meta: {
            title: '生活缴费'
          },
          components:{
            default:LifePay
          }
        },
        {
          path: '/article',
          name: 'Article',
          meta: {
            title: '通知'
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
          path: '/shop/category/search',
          name: 'ShopSearch',
          meta: {
            title: '搜索商品'
          },
          components:{
            default:ShopSearch,
          }
        },
        {
          path: '/shop/buy/order/detail',
          name: 'ShopOrder',
          meta: {
            requireAuth: true,
            title: '提交订单'
          },
          components:{
            default:ShopOrder,
          }
        },
        {
          path: '/shop/buy/order/detail/address',
          name: 'ShopAddress',
          meta: {
            title: '选择地址'
          },
          components:{
            default:ShopAddress,
          }
        },
        {
          path: '/shop/buy/order/detail/address/add',
          name: 'ShopAddAddress',
          meta: {
            title: '添加地址'
          },
          components:{
            default:ShopAddAddress,
          }
        },
        {
          path: '/shop/order/detail/address/edit/:id',
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
          path: '/user/order',
          name: 'UserOrder',
          meta: {
            requireAuth: true,
            title: '我的订单'
          },
          components:{
            default:UserOrder,
          }
        },
        {
          path: '/user/order/detail',
          name: 'UserOrderDetail',
          meta: {
            requireAuth: true,
            title: '订单详情'
          },
          components:{
            default:UserOrderDetail,
          }
        },
        {
          path: '/user/house',
          name: 'UserHouse',
          meta: {
            requireAuth: true,
            title:'我的房屋'
          },
          component: UserHouse,
        },
        {
          path: '/user/house/holders',
          name: 'UserHouseHolders',
          meta: {
            requireAuth: true,
            title:'管理房屋'
          },
          component: UserHouseHolders,
        },
        {
          path: '/user/house/holders/invite',
          name: 'UserHouseInvite',
          meta: {
            requireAuth: true,
            title:'入住邀请'
          },
          component: UserHouseInvite,
        },
        {
          path: '/user/ordain',
          name: 'UserOrdain',
          meta: {
            requireAuth: true,
            title:'预约服务'
          },
          component: UserOrdain,
        },
        {
          path: '/user/ordain/detail',
          name: 'UserOrdainDetail',
          meta: {
            requireAuth: true,
            title:'预约详情'
          },
          component: UserOrdainDetail,
        },
        {
          path: '/user/order/sales',
          component:UserOrderSales,
          children: [
            {
              path: 'step1',
              name: 'UserSalesStep1',
              meta: {
                requireAuth: true,
                title: '售后申请'
              },
              components:{
                default:UserSalesStep1,
              }
            },
            {
              path: 'step2',
              name: 'UserSalesStep2',
              meta: {
                requireAuth: true,
                title: '售后申请'
              },
              components:{
                default:UserSalesStep2,
              }
            },
            {
              path: 'step3',
              name: 'UserSalesStep3',
              meta: {
                requireAuth: true,
                title: '售后申请'
              },
              components:{
                default:UserSalesStep3,
              }
            },
          ]
        },
        {
          path: '/user/account/recharge',
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
          path: '/user/account/withdraw',
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
          path: '/user/account/money/income',
          name: 'UserIncomeMoney',
          meta: {
            requireAuth: true,
            title: '余额收支明细'
          },
          components:{
            default:UserIncomeMoney,
          }
        },
        {
          path: '/user/account/tcion/income',
          name: 'UserIncomeTcion',
          meta: {
            requireAuth: true,
            title: '团票明细'
          },
          components:{
            default:UserIncomeTcion,
          }
        },
        {
          path: '/user/account/score/income',
          name: 'UserIncomeScore',
          meta: {
            requireAuth: true,
            title: '积分收支明细'
          },
          components:{
            default:UserIncomeScore,
          }
        },
        {
          path: '/user/cards/add/:realname',
          name: 'UserAddCards',
          meta: {
            requireAuth: true,
            title: '添加银行卡'
          },
          components:{
            default:UserAddCards,
          }
        },
        {
          path: '/user/cards/add/next/:cardsNum',
          name: 'UserAddCardsNext',
          meta: {
            requireAuth: true,
            title: '填写信息'
          },
          components:{
            default:UserAddCardsNext,
          }
        },
        {
          path: '/user/check/idCard',
          name: 'CheckIdCard',
          meta: {
            requireAuth: true,
            title: '验证身份'
          },
          components:{
            default:CheckIdCard,
          }
        },
        {
          path: '/call',
          name: 'Call',
          meta: {
            requireAuth: true,
            title: '呼叫管家'
          },
          components:{
            default:Call,
          }
        },
        {
          path: '/user/safe',
          name: 'UserSafeManage',
          meta: {
            requireAuth: true,
            title: '安全管理'
          },
          components:{
            default:UserSafeManage,
          }
        },
        {
          path: '/user/safe/forgetPayPassword',
          name: 'ForgetPayPassword',
          meta: {
            requireAuth: true,
            title: '忘记支付密码'
          },
          components:{
            default:ForgetPayPassword,
          }
        },
        {
          path: '/user/safe/setPayPassword',
          name: 'SetPayPassword',
          meta: {
            requireAuth: true,
            title: '设置支付密码'
          },
          components:{
            default:SetPayPassword,
          }
        },
        {
          path: '/user/safe/checkPayPassword',
          name: 'CheckPayPassword',
          meta: {
            requireAuth: true,
            title: '修改支付密码'
          },
          components:{
            default:CheckPayPassword,
          }
        },
        {
          path: '/shop/buy/order/detail/pay/detail',
          name: 'OrderPayDetail',
          meta: {
            requireAuth: true,
            title: '支付详情'
          },
          components:{
            default:OrderPayDetail,
          }
        },
        {
          path: '/shop/buy/order/detail/pay/wx',
          name: 'WerxinPay',
          meta: {
            requireAuth: true,
            title: '微信支付'
          },
          components:{
            default:WerxinPay,
          }
        },
        {
          path: '/intelligent',
          name: 'IgtLogin',
          meta: {
            title: '智能家居'
          },
          components:{
            default:IgtLogin,
          }
        },
        {
          path: '/intelligent/search',
          name: 'IgtSearch',
          meta: {
            title: '智能家居'
          },
          components:{
            default:IgtSearch,
          }
        },
        {
          path: '/intelligent/house/change',
          name: 'IgtHouse',
          meta: {
            title: '智能家居'
          },
          components:{
            default:IgtHouse,
          }
        },
        {
          path: '/intelligent/room/manage',
          name: 'IgtRoom',
          meta: {
            title: '房间管理'
          },
          components:{
            default:IgtRoom,
          }
        },
        {
          path: '/intelligent/device/add',
          name: 'AddDevice',
          meta: {
            title: '添加设备'
          },
          components:{
            default:AddDevice,
          }
        },
        {
          path: '/intelligent/device/add/wifi',
          name: 'DeviceWifi',
          meta: {
            title: '添加wifi设备'
          },
          components:{
            default:DeviceWifi,
          }
        },
        {
          path: '/intelligent/device/add/zigbee',
          name: 'DeviceZigbee',
          meta: {
            title: '添加zigBee设备'
          },
          components:{
            default:DeviceZigbee,
          }
        },
        {
          path: '/intelligent/device/add/wifi/start',
          name: 'WifiStart',
          meta: {
            title: '启动设备Wi-Fi模块'
          },
          components:{
            default:WifiStart,
          }
        },
        {
          path: '/intelligent/device/add/wifi/start/bind',
          name: 'BindDevice',
          meta: {
            title: '绑定设备'
          },
          components:{
            default:BindDevice,
          }
        },
        {
          path: '/intelligent/device/add/wifi/start/bind/select',
          name: 'SelectDevice',
          meta: {
            title: '选择设备'
          },
          components:{
            default:SelectDevice,
          }
        },
      ]
    },
    {
      path: '/shop/buy/cart',
      name: 'ShopCart',
      component: ShopCart,
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
      path: '/user/ticket',
      name: 'UserTicket',
      meta: {
        requireAuth: true,
        title:'我的物业券'
      },
      component: UserTicket,
    },
    {
      path: '/user/ticon',
      name: 'UserTicon',
      meta: {
        requireAuth: true,
        title:'我的团票'
      },
      component: UserTicon,
    },
    {
      path: '/user/change/mobile',
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
      path: '/user/change/name',
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
      path: '/user/change/nickname',
      name: 'UserNickname',
      meta: {
        requireAuth: true,
        title: '修改昵称'
      },
      components:{
        default:UserNickname,
      }
    },
    {
      path: '/user/cards',
      name: 'UserCards',
      meta: {
        requireAuth: true,
        title: '银行卡'
      },
      components:{
        default:UserCards,
      }
    },
    {
      path: '/neighbor',
      name: 'Neighbor',
      components:{
        default:Neighbor,
      }
    },
    {
      path: '/intelligent/home',
      name: 'Intelligent',
      components:{
        default:Intelligent,
      }
    },
    {
      path: '/intelligent/room/manage/set',
      name: 'IgtRoomSet',
      meta: {

      },
      components:{
        default:IgtRoomSet,
      }
    },
    {
      path: '/intelligent/room/manage/add',
      name: 'IgtRoomAdd',
      meta: {

      },
      components:{
        default:IgtRoomAdd,
      }
    },
    {
      path: '/shop/buy/order/detail/pay',
      name: 'OrderPay',
      meta: {
        requireAuth: true,
      },
      components:{
        default:OrderPay,
      }
    },
  ]
})
