<template>
  <div>
    <section class="page-group">
      <div class="content">
        <router-link :to="{name:'ShopSearch',query:{
          title:'全部'
        }}" class="search-link" append>请输入商品名称</router-link>
      </div>

      <swiper :auto="true" class="index-swiper" :list="swiperList" height="100%" dots-class="dot" :show-desc-mask="false"></swiper>

      <div class="menu-shop clearfix">
        <router-link :to="{ name: 'ShopCategory', query: {
          id: item.type_id,
          title: item.type_name
        }}" class="item" v-for="item in categorys" :key="item.type_id">
          <div class="img-box">
            <img class="img" v-lazy="IMG_HOST+item.type_logo" alt="">
          </div>
          <p class="txt">{{item.type_name}}</p>
        </router-link>
        <router-link to="categorys" class="item" append>
          <div class="img-box all">
            <img class="img" src="@/assets/images/img/d_menu5.png" alt="">
          </div>
          <p class="txt">全部分类</p>
        </router-link>
      </div>

      <div class="content mt20">
        <div class="shop-timer mt60">
          <span>限时购</span>
          <clocker  time="2018-03-31 16:37">
            <span class="timer m">%H</span>
            <span>:</span>
            <span class="timer s">%M</span>
            <span>:</span>
            <span class="timer s">%S</span>
          </clocker>
        </div>

        <ul class="shop-limit-list">
          <li class="item">
            <router-link to="">
              <div class="img-box">
                <img src="@/assets/images/test/img4.png" alt="" class="img">
              </div>
              <p class="p1">
                <i class="tp"></i>
                <span>5.00</span>
              </p>
              <p class="p2">
                ¥4.55
              </p>
            </router-link>
          </li>
        </ul>

        <p class="mt40 mb40 text-center">
          <a class="all" href="#">查看全部 <i class="arrow"></i></a>
        </p>
      </div>

      <div class="content mt20" v-for="item in shopLists" :key="item.position_id">
        <h3 class="h3 mt40">
          <span class="tit">{{item.position_name}}</span>
          <span class="tit-line"></span>
        </h3>

        <div class="shop-list mb40">
          <router-link :to="{path:'/shop/detail',query:{id:goods.goods_id}}" class="item" v-for="goods in item.goods" :key="goods.goods_id" append>
            <div class="img-box">
              <img class="img" v-lazy="IMG_HOST+goods.goods_logo" alt="">
            </div>
            <p class="p1">{{goods.goods_name}}</p>
            <p class="p2">
              <i class="icon tp mr10"></i>
              <span class="orange">{{goods.now_tcion}}</span>
              <!--<span class="shop-mark yellow-bg">满减</span>-->
              <span class="shop-mark pink-bg" v-if="10>parseInt(goods.goods_discount)>0">{{goods.goods_discount}}折</span>
            </p>
            <p class="p3">
              <span class="pull-left">¥{{goods.now_price}}</span>
              <span class="gray pull-right">已售{{goods.goods_now_sell || 0}}</span>
            </p>
          </router-link>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Footer from '@/pages/layout/footer'
  import {Clocker,Swiper} from 'vux'
  export default {
    name: "Shop",
    components:{
      Swiper,
      Clocker,
      Footer
    },
    data(){
      return {
        IMG_HOST:global.IMG_HOST || "",
        swiperList:[],
        categorys:'',
        shopLists:''
      }
    },
    computed:{
      ...mapState(['roomInfo','storeInfo'])
    },
    mounted(){
      this.getCategorys();
      this.getShopLists();
      this.getSwiper();
    },
    methods:{
      /**获取轮播图**/
      getSwiper(){
        let params={
          store_id:this.storeInfo.store_id,
        }

        this.$axios.get(global.API_HOST+'Goods/getBanner',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            let swiper=res.data.data;
            this.swiperList=swiper.map((item)=>({
              url:'',
              img:IMG_HOST+item.store_slider_img,
              title:''
            }))
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**获取商品种类**/
      getCategorys:function(){
        let params={
          lat:this.roomInfo.lat,
          lng:this.roomInfo.lng,
        }

        this.$axios.get(global.API_HOST+'Goods/classify',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status==0){
              this.categorys=res.data;
          }
        }).catch(err=>{
          console.warn('my err:'+err);
        })
      },
      /**获取商品列表**/
      getShopLists:function(){
        let params={
          lat:this.roomInfo.lat,
          lng:this.roomInfo.lng,
        };
        this.$axios.get(global.API_HOST+'Goods/position',{
          params:params
        }).then(res=>{

          res=res.data;
          if(res.status==0){
            this.shopLists=res.data;
          }
        }).catch(err=>{
          console.warn('my err:'+err);
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  @import '../../assets/scss/shop.scss';
</style>
<style lang="scss">
  @import "../../core/base";
  .index-swiper{
    height:rem(310);

    &.vux-slider > .vux-indicator > a > .vux-icon-dot{
      @include wh(rem(12),rem(12));
      @include border-radius(50%);
      @include bgcolor-alpha(rgba(#000,.8));

      &.active{
        background-color: $primary;
      }
    }
  }
</style>
