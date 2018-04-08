<template>
  <div>
    <bar-nav :title="title">
      <router-link to="location" class="link pull-left" v-if="indexNav"  slot="left">
        <i class="icon address mr10"></i>
        <span class="name">扬子江扬子江上午小区扬子江上午小区扬子江上午小区扬子江上午小区上午小区</span>
      </router-link>
      <div v-if="indexNav"  slot="right" class="pull-right">
        <a>
          <i class="icon ew"></i>
        </a>
        <a class="ml10">
          <i class="icon phone"></i>
        </a>
      </div>

      <router-link to="/" class="link pull-right" v-if="rightNav==='home'"  slot="right">
        <i class="icon home2"></i>
      </router-link>

      <a class="link pull-right" v-if="rightNav==='cart'"  slot="right">
        <i class="icon cart"></i>
      </a>
    </bar-nav>

    <transition :name="viewTransition">
      <router-view  class="router-view"></router-view>
    </transition>

    <router-view name="footer"></router-view>
  </div>
</template>

<script>
  import BarNav from './barNav'
  import {mapState} from 'vuex'

  export default {
    name: 'Layout',
    components:{
      BarNav
    },
    computed: {
      ...mapState(['direction']),
      viewTransition () {
        if (!this.direction){
          return ''
        }

        return 'vux-pop-' + (this.direction === 'forward' ? 'in' : 'out')
      },
      title(){
        if(this.$route.params.title){
          return this.$route.params.title;
        }
        return this.$route.meta.title ? this.$route.meta.title : ' '
      },
      indexNav(){
        if(this.$route.name=="Index" || this.$route.name=='Service'){
          return true;
        }

        return false;
      },
      rightNav(){
        if(this.$route.name=="ShopDetail"){
          return 'home';
        }
        if(this.$route.name=="ShopCategory"){
          return 'cart';
        }

        return false;
      }
    }
  }
</script>
<style lang="less" scoped>
  /*转场动画*/
  .router-view {
    width: 100%;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 400ms ease-in-out;
    height: 100%;
    top:1.76rem;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
</style>
