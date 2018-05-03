<template>
  <div>
    <section class="page-group">
      <ul class="user-safety-list arrow-cell-list">
        <li class="item">
          <div class="link cell" @click="popshow=true">
            <span><i class="icon icon1"></i>修改支付密码</span>
          </div>
        </li>
        <li class="item">
          <router-link class="link cell" to="/user/forgetPayPassword">
            <span><i class="icon icon1"></i>忘记支付密码</span>
          </router-link>
        </li>
      </ul>
    </section>

    <!--popup 设置支付密码-->
    <popup v-model="popshow" :show-mask="false" height="100%" style="z-index:999999;background: #fff;">
      <span class="pop-close" @click="popshow=!popshow">X</span>
      <setPassword></setPassword>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import setPassword from '@/components/setPassword'
  import {Popup} from 'vux'

  export default {
    name: "SafeManage",
    components: {
      setPassword,
      Popup
    },
    data() {
      return {
        popshow:false,
      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import '../../assets/css/userSafety.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .pay-keybord{
    position:absolute;
    bottom:0;
    left:0;
    width:100%;
  }

  .pop-close{
    z-index: 10;
  }
</style>
