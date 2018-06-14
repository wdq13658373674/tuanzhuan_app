<template>
  <div>
    <section class="page-group">
      <ul class="user-safety-list arrow-cell-list">
        <li class="item">
          <div class="link cell" @click="checkPay">
            <span><i class="icon icon1"></i>修改支付密码</span>
          </div>
        </li>
        <li class="item">
          <router-link class="link cell" to="forgetPayPassword" append>
            <span><i class="icon icon2"></i>忘记支付密码</span>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "SafeManage",
    components: {

    },
    data() {
      return {

      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){

    },
    methods:{
      /**
       * 修改支付密码点击事件
       * 判断是否已经设置支付密码
       * **/
      checkPay(){
        if(this.userInfo.user_paypass==''){
          const self=this;
          this.$vux.confirm.show({
            title: '提示',
            content: '你还没有设置支付密码，请前往设置',
            confirmText:'前往',
            onConfirm(){
              self.$router.push({
                name:'SetPayPassword'
              });
            }
          })
        }else{
          this.$router.push({
            name:'CheckPayPassword'
          });
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userSafety.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
