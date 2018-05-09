<!--输入支付密码-->
<template>
  <div class="user-pay-password">
    <slot name="title"></slot>
    <ul class="pay-password-box mt60">
      <li class="item" v-for="(key,i) in length" :key="i">
        <input class="input" type="password" :value="value[i]" disabled>
      </li>
    </ul>
  </div>
</template>

<script>
  import PassKeyBord from '@/components/passKeyBord'

  export default {
    props:['value','length'],
    name: "setPassword",
    components:{
      PassKeyBord,
    },
    data () {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style lang="css" scoped>
  @import '../assets/css/userPayPassword.css';
</style>
<style lang="scss" scoped>
  @import "../core/base";
</style>

