<template>
  <div>
    <section class="page-group">
      <div class="h5">
        <span>扬子江商务中心</span>
        <span class="gray ml20">1组团-3栋-302</span>
      </div>

      <ul class="cell-list mt20">
        <li class="item cell p27">
          <label class="w150">手机号码</label>
          <input class="input text-right" v-model="phone" type="text" placeholder="请输入手机号码">
        </li>
        <!--<li class="item cell p27">-->
          <!--<label class="w150">业主姓名</label>-->
          <!--<input class="input text-right" value="小怪兽" type="text" placeholder="">-->
        <!--</li>-->
        <li class="item cell p27">
          <label class="w150">入住身份</label>
          <span>业主</span>
        </li>
      </ul>
      <a href="#" class="btn btn-orange radius mt60">确认添加</a>
    </section>
  </div>
</template>

<script>
  export default {
    name: "HouseInvite",
    components: {
    },
    data() {
      return {
        phone:''
      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userRoom.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
