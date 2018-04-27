<template>
  <div>
    <section class="page-group">
      <ul class="change-data cell-list mt20">
        <li class="item p27">
          <input class="input" type="text" v-model="nickname" placeholder="请输入昵称">
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  export default {
    name: "ChangeNickname",
    components: {

    },
    data() {
      return {

      }
    },
    computed:{
      nickname:{
        get(){
          return this.$route.params.nickname;
        },
        set(value){
          if(value){
            this.$route.params.nickname=value;
          }
        }
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";

</style>
