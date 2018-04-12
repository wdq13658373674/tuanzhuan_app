<template>
  <div>
    <section class="page-group">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
        <div class="content">
          <div class="banner" style="">
            <div class="clearfix">
              <div class="pull-left day">14</div>
              <div class="pull-left date">
                <p>
                  <span class="mr10">星期三</span>
                  <span>农历二月十六</span>
                </p>
                <p>2018年三月</p>
              </div>
            </div>
            <div class="temp">
              <span class="mr10">小雨</span>
              <span>气温24°C</span>
            </div>
          </div>

          <div class="menu-index">
            <router-link to="/property" class="item">
              <img class="img" src="@/assets/images/icons/menu1.svg" alt="">
              <p class="txt">物业缴费</p>
            </router-link>
            <router-link to="/life" class="item">
              <img class="img" src="@/assets/images/icons/menu2.svg" alt="">
              <p class="txt">生活缴费</p>
            </router-link>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu3.svg" alt="">
              <p class="txt">投诉建议</p>
            </a>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu4.svg" alt="">
              <p class="txt">报事报修</p>
            </a>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu5.svg" alt="">
              <p class="txt">全部服务</p>
            </a>
          </div>

          <div class="tips">
            <span class="pull-left f24 mr10"><i class="icon notice mr10"></i></span>
            <div class="pull-left">
              <marquee>
                <marquee-item v-for="item in newsLists" :key="item.id" class="align-middle">
                  <router-link :to="{ path: '/article/detail', query: { id: item.id }}">{{item.notic_title}}</router-link>
                </marquee-item>
              </marquee>
            </div>

            <router-link to="article" class="pull-right gray" append>更多<i class="ml10 icon arrow"></i></router-link>
          </div>

          <h1 class="h1">
            <em class="pull-left">生活服务</em>
            <a class="pull-right gray">更多<i class="ml10 icon arrow"></i></a>
          </h1>

          <div class="life-list">
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img3.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
          </div>

        </div>

        <div class="content mt20">
          <h1 class="h1">
            <em class="pull-left">团转商城</em>
            <router-link to="shop" class="pull-right gray">更多<i class="ml10 icon arrow"></i></router-link>
          </h1>

          <div class="shop-list mb70">
            <a href="#" class="item" v-for="img in list">
              <div class="img-box">
                <img class="img" v-lazy="img" alt="">
              </div>
              <p class="p1">每次章鱼陶瓷刀6寸1把(系列)每次章鱼陶瓷刀6寸1把(系列)</p>
              <p class="p2">
                <i class="icon tp mr10"></i>
                <span class="orange">29.00</span>
                <span class="shop-mark yellow-bg">满减</span>
                <span class="shop-mark pink-bg">五折</span>
              </p>
              <p class="p3">
                <span class="pull-left">¥170.00</span>
                <span class="gray pull-right">已售1096</span>
              </p>
            </a>
          </div>
        </div>

        <load-more class="load-more" tip="正在加载" v-show="busy"></load-more>
      </div>
    </section>
  </div>
</template>

<script>
  import {Marquee, MarqueeItem , Scroller , LoadMore} from 'vux'
  import infiniteScroll from 'vue-infinite-scroll'
  import getMap from '@/libs/bMap'

  export default {
    name: "Index",
    directives: {infiniteScroll},
    components:{
      Marquee,
      MarqueeItem,
      Scroller,
      LoadMore
    },
    data(){
      return{
        list: [
          'https://o5omsejde.qnssl.com/demo/test1.jpg',
          'https://o5omsejde.qnssl.com/demo/test2.jpg',
          'https://o5omsejde.qnssl.com/demo/test0.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'https://o5omsejde.qnssl.com/demo/test8.jpg'
        ],
        busy:false,
        newsLists:[],
        goodsLists:[]
      }
    },
    mounted:function(){
      this.getNewsLists();
      this.getGoodsLists();
    },
    computed: {

    },
    methods:{
      getNewsLists:function(){
        /*const param={
          'notic_village_id' : 1
        }

        this.$axios.get('index/House_notic/getTitle',{
          params : param
        }).then(res=>{
          res=res.data;
          this.newsLists = res.data;
        }).catch(err=>{
          console.log('my err:'+err);
        })*/
      },
      getGoodsLists:function(){
        let self=this;
        /*getMap(function (points) {
          let param={
            lat:points.lat,
            lng:points.lng
          }*/
         /* let param={
            lat:29.54460611,
            lng:106.53063501
          }

          self.$axios.get('/index/Goods/IndexGoods',{
            params:param
          }).then(res=>{
            res=res.data;
            if(res.status==0){

            }
          }).catch(err=>{
            console.log('my err:'+err);
          })*/
        // })
      },
      loadMore: function() {
        this.busy = true;

        setTimeout(() => {
          for (var i = 0, j = 8; i < j; i++) {
            this.list.push('https://o5omsejde.qnssl.com/demo/test'+i+'.jpg');
          }
          this.busy = false;
        }, 1000);
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/index.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
