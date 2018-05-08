<template>
  <div>
    <section class="page-group">
      <tab>
        <tab-item v-for="(item,index) in tabMenus" :key="index+1" :selected="index===0" @on-item-click="tab">{{item}}</tab-item>
      </tab>

      <ul class="user-order-list">
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right orange">待消费</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <div class="cell">
                <span class="tit">团转制造小旋风风扇</span>
                <span class="num">x1</span>
              </div>
              <p class="p2">60分钟</p>
              <p class="p3">2018.04.20  13:30</p>
            </div>
          </a>
          <div class="bottom">
            <div>
              <span>实付:</span>
              <i class="icon tp ml20"></i>
              <span class="f32 orange">85.00</span>
            </div>
            <div>
              <a href="#" class="link">退款</a>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right orange">待付款</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <div class="cell">
                <span class="tit">团转制造小旋风风扇</span>
                <span class="num">x1</span>
              </div>
              <p class="p2">60分钟</p>
              <p class="p3">2018.04.20  13:30</p>
            </div>
          </a>
          <div class="bottom">
            <div></div>
            <a href="#" class="link">去付款</a>
          </div>
        </li>
        <li class="item">
          <div class="top">
            <span class="pull-left">订单编号：33775628</span>
            <span class="pull-right green">已完成</span>
          </div>
          <a href="#"  class="pro">
            <div class="img-box">
              <img src="@/assets/images/test/img7.png" alt="">
            </div>
            <div class="con-box">
              <div class="cell">
                <span class="tit">团转制造小旋风风扇</span>
                <span class="num">x1</span>
              </div>
              <p class="p2">衬衫   x2</p>
              <p class="p3">毛衣   x2</p>
            </div>
          </a>
          <div class="bottom">
            <div>
              <span>实付:</span>
              <span>¥170.63</span>
            </div>
            <div>
              <router-link to="/user/ordain/detail" class="link">查看详情</router-link>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import { Tab, TabItem} from 'vux'
  export default {
    name: "Index",
    components: {
      Tab,
      TabItem
    },
    data() {
      return {
        tabMenus:['全部','未完成','已完成'],
      }
    },
    mounted(){

    },
    methods:{
      /**选项卡切换**/
      tab(index){
        console.log(index);
      },
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userOrder.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
