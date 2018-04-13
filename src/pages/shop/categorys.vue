<template>
  <section class="page-group">
    <div class="classify-box">
      <div class="classify-list">
        <scroller height="100%" lock-x>
          <ul>
            <li class="item"
                v-for="(item,index) in tabs"
                :class="{active:index==tabIndex}"
                @click="tab(index)"
            >
              <p class="txt">
                <span class="span">{{item}}</span>
              </p>
            </li>
          </ul>
        </scroller>
      </div>

      <scroller height="100%" lock-x>
      <div class="classify-content">
        <h3 class="h3 mt40">
          <span class="tit">家居分类</span>
          <span class="tit-line"></span>
        </h3>
        <ul class="classify-content-list">
          <li class="item">
            <router-link :to="{ name: 'ShopCategory', params: { title: '床品件套' }}" class="link" href="">
              <div class="img-box">
                <img src="@/assets/images/test/img1.jpg" alt="" class="img">
              </div>
              <p class="txt">床品件套</p>
            </router-link>
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

        <h3 class="h3 mt40">
          <span class="tit">家居分类</span>
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

        <h3 class="h3 mt40">
          <span class="tit">家居分类</span>
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
      </div>
      </scroller>
    </div>
  </section>
</template>

<script>
  import { Scroller } from 'vux'

  export default {
    name: "ShopCategorys",
    components: {
      Scroller
    },
    data () {
      return {
        tabIndex:0,
        tabs:['家居日用','折扣区','折扣区','折扣区']
      }
    },
    mounted(){
      this.getCategorys();
    },
    methods: {
      tab:function(index){
        this.tabIndex=index;
      },
      getCategorys:function(){
        let params={
          lat:29.60335600,
          lng:106.50352700,
        }

        this.$axios.get('/index/Goods/classify',{
          params:params
        }).then(res=>{
          res=res.data;
          console.log(res);
          if(res.status==0){

          }
        }).catch(err=>{
          cnsole.log('my err:'+err);
        })
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/classify.css';
</style>
<style lang="scss">
  @import "../../core/base";


</style>
