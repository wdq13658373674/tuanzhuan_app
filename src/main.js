import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'

/**
 * fastclick
 * **/
FastClick.attach(document.body);

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
  config.headers['appid'] = 'tuanzhuan_app';
  config.headers['auth-key'] = 'TUANZHUANW2018';
  config.headers['user_agent'] = 'FJH_VISITER';

  return config;
});

/**
 * store状态管理
 * **/
const store = new Vuex.Store({
  state:{
    loading:false,
    direction:'forward'
  },
  mutations:{
    load(state,loading){
      state.loading=loading;
    },
    transfer(state, direction) {
      state.direction = direction
    }
  },
  actions:{

  }
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

router.beforeEach((to,from,next)=>{
  store.commit('load',true);

  const fromIndex = history.getItem(from.path)
  const toIndex = history.getItem(to.path)

  //设置 title
  /*if (to.meta.title) {
    document.title = to.meta.title
  }*/

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
   setTimeout(function () {
     store.commit('load',false);
   },500)
})

/**
 * http请求拦截器
 * **/
axios.interceptors.request.use(config=>{
  store.commit('load',true);
  return config;
},err=>{
  return Promise.reject(err);
})

axios.interceptors.response.use(response=>{
  store.commit('load',false);
  return response;
},err=>{
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
});
