<template>
  <div>
    <section class="page-group">
      <div class="user-bind-rooms">
        <h5 class="h5 bold">请输入业主手机号码</h5>
        <ul class="cell-list">
          <li class="item cell p27">
            <label>手机号码</label>
            <input type="text" class="input text-right" value="186807222222" placeholder="请输入手机号码">
          </li>
        </ul>
        <p class="tips">*若业主已更换手机号码，请联系我们</p>
        <router-link to="/user/house/add/next" class="btn btn-orange radius">下一步</router-link>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "AddHouse",
    components: {
    },
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/bindRoom.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
