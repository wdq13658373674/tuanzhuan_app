import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import { ToastPlugin , AlertPlugin} from 'vux'
import App from './App'
import getMap from '@/libs/bMap'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'

const options={
  duration: '0.3',
  forwardAnim: 'fadeInRight', //前进动画
  backAnim: 'fadeInLeft', //后退动画
  sameDepthDisable: true, //url深度相同时禁用动画，默认为false
  shadow:true, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
  nuxt: false //若使用后端渲染框架Nuxt，需要将此设为true，默认为false
}
Vue.use(vueg, router,options)

getMap();

/**
 * fastclick
 * **/
FastClick.attach(document.body);
Vue.use(ToastPlugin, {
  position: 'top',
  type:'text',
  time:3000,
  width:'auto'
})
Vue.use(AlertPlugin)

/**
 * vuex
 * 全局设置$axios
 * **/
Vue.use(Vuex);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

/**
 * 接口请求设置
 */
axios.interceptors.request.use(function (config) {
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  /*config.headers['appid'] = 'tz_app';
  config.headers['auth-key'] = 'tz_app2018';
  config.headers['user_agent'] = 'tz_app_VISITER';*/

  return config;
});

/**图片懒加载**/
Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '../static/images/404.png',
  loading: '../static/images/loading.gif',
  attempt: 1
})

/**
 * store状态管理
 * **/
const storeJs=require('storejs');

const store = new Vuex.Store({
  state:{
    loading:false,
    roomInfo:storeJs('roomInfo') ? storeJs('roomInfo') : {},
    userInfo:storeJs('userInfo') ? storeJs('userInfo') : {},
    storeInfo:storeJs('storeInfo') ? storeJs('storeInfo') : {}
  },
  mutations:{
    load(state,loading){
      state.loading=loading;
    },
    update_roomInfo(state,roomInfo){
      state.roomInfo=roomInfo;
      storeJs.set('roomInfo',state.roomInfo);
    },
    update_userInfo(state,userInfo){
      state.userInfo=userInfo;
      storeJs.set('userInfo',state.userInfo);
    },
    update_storeInfo(state,storeInfo){
      state.storeInfo=storeInfo;
      storeJs.set('storeInfo',state.storeInfo);
    },
  },
  actions:{

  },
})

router.beforeEach((to,from,next)=>{
  store.commit('load',true);

  /**登陆拦截**/
  if (to.meta.requireAuth){
    if (storeJs('userInfo')) {
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: router.currentRoute.fullPath}
      })
    }
  }
  next()
})
router.afterEach(function (to,from) {
  store.commit('load',false);
})

/**
 * http请求拦截器
 * **/
axios.interceptors.request.use(config=>{
  store.commit('load',true);
  return config;
},err=>{
  store.commit('load',false);
  Vue.$vux.toast.show('加载超时');
  return Promise.reject(err);
})

axios.interceptors.response.use(response=>{
  store.commit('load',false);
  return response;
},err=>{
  store.commit('load',false);
  Vue.$vux.toast.show('加载失败');
  return Promise.reject(err);
})

/**
 * vue实例
 * **/
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
  // render: h => h(App)
});
