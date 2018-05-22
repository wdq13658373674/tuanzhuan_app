<template>
  <section class="page-group">
    <h2 class="h2">请先登录网关</h2>

    <form action="" @submit="submit">
      <ul class="cell-list">
        <li class="item p27 cell">
          <label class="w90">网关</label>
          <input class="input" type="text" placeholder="请输入网管账号">
          <i class="icon ew align-self"></i>
        </li>
        <li class="item p27 cell">
          <label class="w90">密码</label>
          <input class="input" type="text" placeholder="请输入网管密码">
        </li>
      </ul>

      <!--说明
          禁止点击状态；disabled
      -->
      <div class="btn-box">
        <button type="submit" class="btn btn-orange mt60">进入</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: "Login",
    components:{

    },
    data () {
      return {

      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{
      submit(){
        this.$router.push({
          name:'Intelligent'
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

  .tz-device-house{
    .cell-list{
      .name{
        width:80%;
        @include flex-wrap();
      }
    }
  }
</style>
