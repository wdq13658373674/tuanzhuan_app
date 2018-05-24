<template>
  <section class="page-group">
    <h2 class="h2">输入Wi-Fi密码以帮助家电链接Wi-Fi</h2>
    <form action="" @submit="submit">
      <ul class="cell-list">
        <li class="item p27 cell">
          <label class="w90">名称</label>
          <input class="input" type="text" placeholder="请输入wifi名称">
        </li>
        <li class="item p27 cell">
          <label class="w90">密码</label>
          <input class="input" type="password" placeholder="请输入请输入wifi密码">
        </li>
      </ul>

      <!--说明
          禁止点击状态；disabled
      -->
      <div class="btn-box">
        <button type="submit" class="btn btn-orange mt60">下一步</button>
      </div>
    </form>
  </section>
</template>

<script>
  export default {
    name: "BindDevice",
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
      /**
       * 表单提交
       * **/
      submit(){
        this.$router.push({
          name:'SelectDevice'
        })
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
