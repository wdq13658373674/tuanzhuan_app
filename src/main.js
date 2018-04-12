import Vue from 'vue'
import FastClick from 'fastclick'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
import { ToastPlugin , AlertPlugin} from 'vux'
import App from './App'

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
const store = new Vuex.Store({
  state:{
    loading:false,
    direction:'forward',
    userInfo:''
  },
  mutations:{
    load(state,loading){
      state.loading=loading;
    },
    transfer(state, direction) {
      state.direction = direction
    },
    update_user(state,userInfo){
      state.userInfo = userInfo
    }
  },
  actions:{

  },
})

/**
 * 路由拦截
 * **/
const history = window.sessionStorage
let historyCount = history.getItem('count') * 1 || 0
history.setItem('/', 0)
let isPush = false
let endTime = Date.now()
let methods = ['push', 'go', 'replace', 'forward', 'back']

document.addEventListener('touchend', () => {
  endTime = Date.now()
})
methods.forEach(key => {
  let method = router[key].bind(router)
  router[key] = function (...args) {
    isPush = true
    method.apply(null, args)
  }
})

const storeJs = require('storejs');
router.beforeEach((to,from,next)=>{
  store.commit('load',true);

  const fromIndex = history.getItem(from.path)
  const toIndex = history.getItem(to.path)

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

  /**转场动画**/
  if (toIndex) {
    if (!fromIndex || parseInt(toIndex, 10) > parseInt(fromIndex, 10) || (toIndex === '0' && fromIndex === '0')) {
      store.commit('transfer', 'forward')
    } else {
      // 判断是否是ios左滑返回
      if (!isPush && (Date.now() - endTime) < 377) {
        store.commit('transfer', '')
      } else {
        store.commit('transfer', 'reverse')
      }
    }
  } else {
    ++historyCount
    history.setItem('count', historyCount)
    to.path !== '/' && history.setItem(to.path, historyCount)
    store.commit('transfer', 'forward')
  }

  next()
})
router.afterEach(function (to,from) {
  isPush = false;
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
