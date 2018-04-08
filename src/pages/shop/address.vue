<template>
  <div>
    <!--section-->
    <section class="page-group address-list">
      <div class="item">
        <label class="cell">
          <div>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
          <div class="txt">
            <p>
              <span>小怪兽</span>
              <span class="pull-right">18680722222</span>
            </p>
            <p class="p2">重庆市渝北区龙山路冉家坝扬子江商务中心22楼02号</p>
          </div>
        </label>
        <a href="" class="link ">
          <i class="icon edit"></i>
        </a>
      </div>
      <div class="item">
        <label class="cell">
          <div>
            <input type="radio" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
          <div class="txt">
            <p>
              <span>小怪兽</span>
              <span class="pull-right">18680722222</span>
            </p>
            <p class="p2">重庆市渝北区龙山</p>
          </div>
        </label>
        <a href="" class="link ">
          <i class="icon edit"></i>
        </a>
      </div>
    </section>

    <!--footer-->
    <footer>
      <router-link to="add" class="bottom-fixed btn-orange-fixed" append="">添加地址</router-link>
    </footer>
  </div>
</template>

<script>
  import {  } from 'vux'
  export default {
    name: "ShopAddress",
    components: {

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
  @import '../../assets/css/address.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
