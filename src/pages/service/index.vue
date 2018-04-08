<template>
  <section class="page-group">
    <div class="classify-box">
      <div class="classify-list">
        <scroller height="100%" lock-x>
          <ul>
            <li class="item"
                v-for="(item,index) in tabs"
                :class="{active:index == tabIndex}"
                @click="tab(index)">
              <p class="txt">
                <span class="span">{{item}}</span>
              </p>
            </li>
            <li class="bottom-h"></li>
          </ul>
        </scroller>
      </div>

      <scroller height="100%" lock-x ref="scroller" @on-scroll="onScroll" @on-scroll-bottom="onScrollBottom">
      <div class="classify-content">
        <h3 class="h3 mt40" id="tabCon0">
          <span class="tit">生活服务</span>
          <span class="tit-line"></span>
        </h3>
        <ul class="classify-content-list">
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img1.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img3.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
        </ul>

        <h3 class="h3 mt40" id="tabCon1">
          <span class="tit">生活服务2</span>
          <span class="tit-line"></span>
        </h3>
        <ul class="classify-content-list">
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img1.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img3.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
        </ul>

        <h3 class="h3 mt40" id="tabCon2">
          <span class="tit">生活服务3</span>
          <span class="tit-line"></span>
        </h3>
        <ul class="classify-content-list">
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img1.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img3.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
        </ul>

        <h3 class="h3 mt40" id="tabCon3">
          <span class="tit">生活服务3</span>
          <span class="tit-line"></span>
        </h3>
        <ul class="classify-content-list">
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img1.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img3.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
          <li class="item">
            <a class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </a>
          </li>
        </ul>

        <div class="bottom-h"></div>
      </div>
      </scroller>
    </div>
  </section>
</template>

<script>
  import { Scroller } from 'vux'

  export default {
    name: "Service",
    components: {
      Scroller
    },
    data () {
      return {
        tabIndex:0,
        tabs:['物业服务','生活缴费','生活服务','团转商城'],
        onFetching: true,
        scrollTop:0
      }
    },
    mounted () {
      this.$nextTick(() => {
        this.$refs.scroller.reset({top: 0})
      })
    },
    methods: {
      onScrollBottom () {
        console.log()
      },
      onScroll (pos) {
        this.scrollTop = pos.top

        for(let i=0;i<this.tabs.length;i++){
          var tabCon = this.$el.querySelector('#tabCon' + i);

          if(this.scrollTop >= tabCon.offsetTop - 100){
            this.tabIndex = i;
          }
        }
      },
      tab(index) {
        var tabCon = this.$el.querySelector('#tabCon'+index);
        this.$refs.scroller.reset({top: tabCon.offsetTop},500,'ease-in-out');
      },
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/classify.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .bottom-h{
    @include wh(100%,rem(102));
  }
</style>
