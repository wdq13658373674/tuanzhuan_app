<template>
  <div>
    <section class="page-group">
      <ul class="change-data cell-list mt20">
        <li class="item p27">
          <input class="input" type="text" v-model="realname" placeholder="请输入昵称">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ChangeName",
    components: {

    },
    data() {
      return {

      }
    },
    computed:{
      realname:{
        get(){
          return this.$route.params.realname;
        },
        set(value){
          if(value){
            this.$route.params.realname=value;
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
