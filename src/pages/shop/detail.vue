<template>
  <div>
    <section class="page-group">
      <swiper :auto="true" class="detail-swiper" :list="swiperList" height="100%" dots-class="dot" :show-desc-mask="false"></swiper>

      <div class="content">
        <div class="mb30">
          <div class="product-msg mt20 clearfix">
            <p class="title pull-left">{{goodsDetail.goods_name}}</p>
            <p class="share pull-right">分享</p>
          </div>
          <div class="product-total">
            <i class="mr10 icon tp"></i>
            <span class="f32 orange pull-left">{{goodsDetail.now_tcion}}</span>
            <span class="ml29">¥{{goodsDetail.now_price}}</span>
            <span class="pull-right gray">已售{{goodsDetail.goods_now_sell || 0}}</span>
          </div>

          <!--新加标签-->
          <div class="clearfix">
            <span class="shop-mark2 pink-bg" v-if="10>parseInt(goodsDetail.goods_discount)>0">{{goodsDetail.goods_discount}}折</span>
            <span class="shop-mark2 yellow-bg" v-if="goodsDetail.goods_addwords!=''">{{goodsDetail.goods_addwords}}</span>
          </div>
          <!--新加标签-->
        </div>
      </div>

      <h4 class="h4 mt20" @click="popControl=!popControl" v-if="showPop">
        <span class="txt">选择规格</span>
        <span class="f60 gray"> &rsaquo; </span>
      </h4>

      <p class="mt20 text-center f24">继续拖动，查看图文详情</p>
      <div class="product-content mt20" v-html="goodsDetail.goods_desc"></div>
    </section>
    <footer>
      <div class="bottom-fixed cell">
        <router-link :to="{name:'ShopCart'}" class="shop-cart">
          <p>
            <span class="icon cart">
              <i class="num">{{cartNumber}}</i>
            </span>
          </p>
          <p>
            购物车
          </p>
        </router-link>
        <span class="btn btn-yellow" @click="addCart()">加入购物车</span>
        <span class="btn btn-orange" @click="buy()">立刻购买</span>
      </div>
    </footer>

    <!--popup-->
    <popup v-model="popControl" v-if="showPop">
      <div class="popup1">
        <span class="pop-close" @click="popControl=!popControl">X</span>

        <div class="content pop-shop-detail">
          <div class="product-detail clearfix">
            <div class="img-box">
              <img class="img" v-lazy="IMG_HOST+goods.goods_logo" alt="">
            </div>
            <div class="con-box">
              <p class="p1">
                <i class="icon tp"></i>
                <span>{{goods.now_tcion}}</span>
              </p>
              <p class="p2">¥{{goods.now_price}}</p>
              <p class="p3" v-if="goods.goods_stock!=-1">库存：{{goods.now_stock || 0}}</p>
            </div>
          </div>
          <ul class="format-list mb70">
            <li class="item">
              <h5 class="tit">规格</h5>
              <div class="clearfix">
                <label v-for="(items,index) in goodsLists" :key="items.goods_id" @click="getGoods(index)">
                  <input type="radio" name="types" :value="items.goods_spec_title" v-model="type">
                  <span class="span">{{items.goods_spec_title}}</span>
                </label>
              </div>
            </li>

            <li class="item" v-if="goodsType">
              <h5 class="tit">属性</h5>
              <div class="clearfix">
                <label v-for="(item,index) in goodsType" @click="changeProp(index)">
                  <input type="radio" name="props" :value="item" v-model="prop">
                  <span class="span">{{item}}</span>
                </label>
              </div>
            </li>

            <li class="item">
              <x-number class="mt20 tz-xnumber" title="购买数量" v-model="cartNum" :min="1" :fillable="false" @on-change="change_num"></x-number>
            </li>
          </ul>
        </div>

        <footer>
          <div class="bottom-fixed cell">
            <!--<router-link to="/shop/cart" class="shop-cart">
              <p>
            <span class="icon cart">
              <i class="num">{{cartNumber}}</i>
            </span>
              </p>
              <p>
                购物车
              </p>
            </router-link>-->
            <span class="btn btn-yellow" @click="addCart()">加入购物车</span>
            <span class="btn btn-orange" @click="buy()">立刻购买</span>
          </div>
        </footer>
      </div>
    </popup>
    <!--popup-->
  </div>
</template>

<script>
  import {mapMutations,mapState,mapGetters} from 'vuex'
  import {Swiper,Popup,XNumber} from 'vux'
  import storeJs from 'storejs'
  import cart from '@/assets/js/shop/cart'

  export default {
    name: "ShopDetail",
    components:{
      Swiper,
      Popup,
      XNumber,
    },
    data(){
      return {
        IMG_HOST:global.IMG_HOST || "",
        swiperList:[],
        cartNum:1,
        type:'',
        prop:'',
        prop_id:'',
        popControl:false,
        goodsLists:[],
        goods:[],
        goodsDetail:'',
        goodsType:[],
        changeStatus:false,
        cartNumber:cart.getCartShopSum(0,'',true),
        goods_id:this.$route.query.id
      }
    },
    updated() {
      /**
       * 修改v-html 商品详情的样式
       * **/
      $('.product-content').find('img').css({
        width:'100%'
      });
    },
    computed:{
      showPop:function(){
        return this.goodsLists.length>1 || this.goodsDetail.goods_property!='';
      },
      //...mapState(['cartInfo']),
    },
    mounted(){
      this.getDetail();

    },
    methods:{
      /**
       * 获取商品详情
       * **/
      getDetail:function(){
        let param={
          goods_id:this.goods_id
        }

        this.$axios.get(global.API_HOST+'goods/getGoodsInfo',{
          params:param
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.goodsLists=res.data;

            //主商品
            this.goods=res.data[0];
            this.goodsDetail=res.data[0];
            this.goodsType=res.data[0].goods_property.split(',');

            //轮播图
            let swiper=res.data[0].goods_imgs.split(',');
            if(swiper){
              this.swiperList=swiper.map((item)=>({
                url:'',
                img:IMG_HOST+item,
                title:''
              }))
            }
          }
        }).catch(err=>{
          console.log('my err:'+ err);
        })
      },
      /**
       * 获取当前规格选中商品信息
       * **/
      getGoods:function(index){
        this.goods=this.goodsLists[index];

        if(this.goods.goods_logo==""){
          this.goods.goods_logo=this.goodsLists[0].goods_logo
        }

        this.goods_id=this.goods.goods_id;
        this.cartNum=cart.getCartShopSum(this.goods_id,this.prop);
        this.changeStatus=false;
        var goods_property=this.goods.goods_property.split(',');
        if(goods_property!=""){
          this.goodsType=goods_property;
        }else{
          this.goodsType=[];
        }

        this.prop='';
      },
      //...mapMutations(['add_cartInfo']),
      /**
       * 加入购物车
       * **/
      addCart:function(){
        var that=this;
        if(this.goods.goods_property != ''){
          if(this.selectType(0)){
            var check=cart.addCart(this.goods,this.cartNum,that.prop_id);
            if(check==-1){
              this.$vux.toast.text('没有库存了','middle');
              this.cartNum=this.goods.goods_stock;

              return false;
            }else{
              this.$vux.toast.text('加入购物车成功','middle');
              this.cartNumber=cart.getCartShopSum(0,'',true);
              this.cartNum=cart.getCartShopSum(this.goods_id,that.prop_id);
              this.popControl=false;
            }
          }
        }else{
          let flags;
          cart.query(this.goods_id, function (flag) {
            flags = flag;
          });

          if(flags){
            let goodNum = this.cartNum+1;
            var check=cart.addCart(this.goods,goodNum,that.prop_id);
            if(check==-1){
              this.$vux.toast.text('没有库存了','middle');
              this.cartNum=this.goods.goods_stock;

              return false;
            }else{
              this.$vux.toast.text('加入购物车成功','middle');
              this.cartNumber=cart.getCartShopSum(0,'',true);
              this.cartNum=cart.getCartShopSum(this.goods_id,that.prop_id);
              this.popControl=false;
            }
          }else {
            var check=cart.addCart(this.goods,this.cartNum,that.prop_id);
            if(check==-1){
              this.$vux.toast.text('没有库存了','middle');
              this.cartNum=this.goods.goods_stock;

              return false;
            }else{
              this.$vux.toast.text('加入购物车成功','middle');
              this.cartNumber=cart.getCartShopSum(0,'',true);
              this.cartNum=cart.getCartShopSum(this.goods_id,that.prop_id);
              this.popControl=false;
            }
          }
        }

      },
      /**
       * 选择规格
       * **/
      changeProp:function(index) {
        var that=this;
        that.prop_id=that.goods_id+'_'+index;

        that.goods.choose_prop=that.goodsType[index];
        that.goods.choose_prop_id=that.prop_id;
        //console.log(cart.getCartShopSum(this.goods_id,this.prop));
        that.cartNum=cart.getCartShopSum(that.goods_id,that.prop_id);
        that.changeStatus=false;
      },
      /**
       * 改变购物车数量
       * **/
      change_num(stock){
        if(stock<=1) return false;
        if(!this.selectType(0)){
          this.cartNum=stock-1;
        }
      },
      /**
       * 立即购买
       * **/
      buy(){
        let goods_list = [];
        if(this.goods.goods_property != ''){
          if(this.selectType(1)){
            goods_list.push(this.goods);
            goods_list[0].cart_sum = this.cartNum;
            storeJs.set('buy_goods', goods_list);
            this.$router.push({name: 'ShopOrder',query:{ type:'isbuy'}});
          }
        }else{
          goods_list.push(this.goods);
          goods_list[0].cart_sum = this.cartNum;
          storeJs.set('buy_goods', goods_list);
          this.$router.push({name: 'ShopOrder',query:{ type:'isbuy'}});
        }

      },
      /**
       * 加入购物车商品验证规格是否选择
       * type : 0->表示加入购物车  1->表示立即购买
       * **/
      selectType(types){
        if(this.showPop){
          if(this.popControl){
            if((this.type=='' || this.prop=='') && this.goods.goods_property!=""){
              this.$vux.toast.text('请选择商品规格和属性','middle');
              return false;
            }
            return true;
          }else{
            if(types==0){
              this.popControl=true;
              return false;
            }else if((this.type=='' || this.prop=='') && this.goods.goods_property!=""){
              this.popControl=true;
              return false;
            }

            return true;
          }
        }
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shopDetail.css';
</style>
<style lang="scss">
  @import "../../core/base";
  /*swiper*/
  .detail-swiper{
    height:rem(750);
    background: #fff;

    .vux-img{
      background-size: contain !important;
    }

    &.vux-slider > .vux-indicator > a > .vux-icon-dot{
      @include wh(rem(12),rem(12));
      @include border-radius(50%);
      background-color: #fff;
      border:rem(1) solid $primary;

      &.active{
        background-color: $primary;
      }
    }
  }
  .tz-xnumber .vux-number-selector{
    display: flex;
    align-items: center;
  }
  .tz-xnumber .vux-number-selector svg{
    margin-top: 0;
  }
</style>
