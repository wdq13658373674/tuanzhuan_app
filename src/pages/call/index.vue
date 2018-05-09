<template>
  <div>
    <section class="page-group">
      <div class="tz-communication">
        <ul class="tz-communication-list clearfix">
          <li>
            <div class="tip">
              <span>房计划管家<em>小雪</em>为您服务</span>
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li>
            <div class="tip">
              <span>10:24</span>
            </div>
          </li>
          <li>
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，
            </div>
          </li>
          <li>
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
          <li class="customer">
            <div class="img-box">
              <img src="@/assets/images/test/img6.png" alt="">
            </div>
            <div class="con-box">
              你好，我家楼上漏水了，麻烦尽快
              维修。
            </div>
          </li>
        </ul>

        <div class="bottom">
          <div class="enter-box">
            <div class="input-group">
              <input type="text" class="input">
            </div>
            <i class="icon icon1"></i>
            <i class="icon icon2" @click="uitlshow=!uitlshow"></i>
          </div>

          <ul class="util-box-list clearfix" :class="{active:uitlshow}">
            <li class="item">
              <img class="img" src="@/assets/images/img/j_icon2.png" alt="">
              <p>照片</p>
            </li>
            <li class="item">
              <img class="img" src="@/assets/images/img/j_icon1.png" alt="">
              <p>拍摄</p>
            </li>
            <li class="item">
              <a href="#">
                <img class="img" src="@/assets/images/img/j_icon3.png" alt="">
                <p>呼叫</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  export default {
    name: "Call",
    components:{

    },
    data(){
      return {
        uitlshow:false
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/communication.css';
</style>
<style lang="scss" scoped>
  @import "../../core/base";

  .animated{
    margin-top:rem(-88);
    padding-top:rem(88);
  }
</style>
