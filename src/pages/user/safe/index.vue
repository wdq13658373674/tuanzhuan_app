<template>
  <div>
    <section class="page-group">
      <ul class="user-safety-list arrow-cell-list">
        <li class="item">
          <router-link class="link cell" :to="{name:'CheckPayPassword'}">
            <span><i class="icon icon1"></i>修改支付密码</span>
          </router-link>
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
  export default {
    name: "SafeManage",
    components: {

    },
    data() {
      return {

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
<style lang="css" scoped>
  @import '../../../assets/css/userSafety.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
