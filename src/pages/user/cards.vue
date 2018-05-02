<template>
  <div>
    <ColorNav color="black-bar"></ColorNav>
    <section class="page-group gray-bg">
      <ul class="user-bank-list">
        <li class="item">
          <!--<div class="img-box">
            <img src="@/assets/images/test/img7.png" alt="">
          </div>-->
          <div class="msg-box">
            <div class="cell">
              <div class="name">
                <p>重庆银行</p>
                <p>储蓄卡</p>
              </div>
              <a class="link" href="#">解除绑定</a>
            </div>
            <p class="card">****  ****  ****  1114</p>
          </div>
        </li>
      </ul>
      <a href="#" class="user-add-bank">
        <span class="add">+</span>
        添加银行卡
      </a>

      <div class="connect-box">
        <p class="bank-connect">联系客户：400-000-0034</p>
      </div>
    </section>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  export default {
    name: "Cards",
    components: {
      ColorNav
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
  @import '../../assets/css/userBank.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
