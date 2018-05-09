import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import App from './App'
import vueg from 'vueg'
import 'vueg/css/transition-min.css'
import {getCurrentPosition} from '@/libs/bMap'
import * as filters from '@/libs/filter'
// import utils from '@/libs/util.js'
import { ToastPlugin , AlertPlugin ,ConfirmPlugin} from 'vux'

const options={
  duration: '0.3',
  forwardAnim: 'fadeInRight', //前进动画
  backAnim: 'fadeInLeft', //后退动画
  sameDepthDisable: true, //url深度相同时禁用动画，默认为false
  shadow:true, //值为false，转场时没有阴影的层次效果
  disable: false, //禁用转场动画，默认为false，嵌套路由默认为true
  nuxt: false //若使用后端渲染框架Nuxt，需要将此设为true，默认为false
}
Vue.use(vueg, router,options);

//global.API_HOST="http://192.168.1.252";
global.API_HOST="";

/**
 * 定位
 * **/
getCurrentPosition();

/**
 * 全局过滤器
 * **/
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/**
 * 全局工具函数
 * **/
// Vue.use(utils);

/**
 * fastclick
 * **/
FastClick.attach(document.body);

/**
 * vux全局插件
 * **/
Vue.use(ToastPlugin, {
  position: 'top',
  type:'text',
  time:3000,
  width:'auto'
})
Vue.use(AlertPlugin)
Vue.use(ConfirmPlugin)

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
  //config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
  //config.headers['appid'] = 'tz_app';
  //config.headers['authkey'] = 'tz_app2018';
  //config.headers['user_agent'] = 'tz_app_VISITER';

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
    loading:false,//加载动画
    token:storeJs('token') ? storeJs('token') : {},//token值
    roomInfo:storeJs('roomInfo') ? storeJs('roomInfo') : {},//小区房屋信息
    userInfo:storeJs('userInfo') ? storeJs('userInfo') : {},//用户信息
    storeInfo:storeJs('storeInfo') ? storeJs('storeInfo') : {},//商家信息
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
    update_token(state,token){
      state.token=token;
      storeJs.set('token',state.token);
    },
  },
  actions:{

  },
})

/**
 * 路由全局拦截器
 * **/
router.beforeEach((to,from,next)=>{
  store.commit('load',true);

  /**登陆拦截**/
  if (to.meta.requireAuth){
    if (store.state.userInfo.user_id) {
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
 * http请求全局拦截
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
