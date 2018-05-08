<template>
  <div>
    <section class="page-group">
      <div class="content">
        <router-link :to="{path:'/shop/search',query:{
          store_id:storeInfo.store_id,
          type_id:0,
          title:''
        }}" class="search-link" append>请输入商品名称</router-link>
      </div>

      <swiper class="index-swiper" :list="swiperList" height="100%" dots-class="dot" :show-desc-mask="false"></swiper>

      <div class="menu-shop clearfix">
        <router-link :to="{ name: 'ShopCategory', query: {
          title: item.type_name,
          type_id: item.type_id,
          store_id:item.type_store_id
        }}" class="item" v-for="item in categorys" :key="item.type_id">
          <img class="img" v-lazy="item.type_logo" alt="">
          <p class="txt">{{item.type_name}}</p>
        </router-link>
        <router-link to="categorys" class="item" append>
          <img class="img" src="@/assets/images/img/d_menu5.png" alt="">
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
            <router-link to="detail" append>
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
              <img class="img" v-lazy="goods.goods_logo" alt="">
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
              <span class="gray pull-right">已售{{goods.goods_sell_count}}</span>
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
        swiperList:[{
          url: '/',
          img: 'https://static.vux.li/demo/1.jpg',
          title: ''
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: ''
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '',
          fallbackImg: 'https://static.vux.li/demo/3.jpg'
        }],
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

        this.$axios.get(global.API_HOST+'/index/Goods/getBanner',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status==0){
            console.log(res);
          }
        }).catch(err=>{
          cnsole.log('my err:'+err);
        })
      },
      /**获取商品种类**/
      getCategorys:function(){
        let params={
          lat:this.roomInfo.lat,
          lng:this.roomInfo.lng,
        }

        this.$axios.get(global.API_HOST+'/index/Goods/classify',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status==0){
              this.categorys=res.data;
          }
        }).catch(err=>{
          cnsole.log('my err:'+err);
        })
      },
      /**获取商品列表**/
      getShopLists:function(){
        let params={
          lat:this.roomInfo.lat,
          lng:this.roomInfo.lng,
        }

        this.$axios.get(global.API_HOST+'/index/Goods/position',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status==0){
            this.shopLists=res.data;
          }
        }).catch(err=>{
          cnsole.log('my err:'+err);
        })
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shop.css';
</style>
<style lang="scss" scoped>
  @import "../../core/base";
  .index-swiper{
    height:rem(310);

    .vux-icon-dot{
      @include bgcolor-alpha(rgba(#000,.8));
    }
  }
</style>
