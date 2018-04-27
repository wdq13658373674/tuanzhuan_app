<template>
  <div>
    <section class="page-group">
    <div class="content">
      <div class="order-mark clearfix">
        <label v-if="orderInfo.store_send_type==1 || orderInfo.store_send_type==3">
          <input type="radio" value="1" name="send_type" v-model="send_type" />
          <span class="mark">商家配送</span>
        </label>
        <label v-if="orderInfo.store_send_type==2 || orderInfo.store_send_type==3">
          <input type="radio" value="2" name="send_type"  v-model="send_type" />
          <span class="mark">到店自提</span>
        </label>
      </div>
    </div>

    <!--商家配送-->
    <div v-if="send_type==1">
      <h4 href="#" class="h4" @click="popControl=!popControl">
      <span class="txt">期望送达时间 [预计{{tabs[tabIndex]}}{{timeValue}}]</span>
      <span class="f60 gray"> &rsaquo; </span>
    </h4>

    <router-link to="/shop/address" class="order-address">
      <p class="p" v-if="address.length>0">重庆 重庆 渝北区 扬子江商务中心扬子江商务中心扬子江商务中心扬子江商务中心 22楼</p>
      <p class="p" v-if="address.length>0">
        <span>小怪兽</span>
        <span>18680722507</span>
      </p>

      <!--为空-->
      <p v-if="address.length==0">请添加或者选择地址 <i class="icon arrow5 pull-right"></i></p>
    </router-link>
  </div>
  <!--商家配送-->

  <!--到店自提-->
  <h4 v-if="send_type==2" class="h4">
    <span class="txt">邻水县西城御府房计划售房部</span>
    <span class="f60 gray"> &rsaquo; </span>
  </h4>
  <!--到店自提-->

  <ul class="order-shop-list mt20">
    <li class="item" v-for="(item,key) in cartList">
      <div class="cell">
        <div class="img-box">
          <router-link  :to="{path:'/shop/detail',query:{id:item.goods_id}}">
            <img class="img" v-lazy="item.goods_logo" alt="" />
          </router-link>

        </div>
        <div class="con-box">
          <p class="title">
            <span class="w388 pull-left">{{item.goods_name}}</span>
            <span class="gray pull-right">数量：{{item.cart_sum}}</span>
          </p>
          <p class="p2">
            规格:{{item.goods_spec_title}}；{{item.choose_prop}}
          </p>
          <p class="p3">
            <i class="icon tp mr10"></i>
            <span class="f32 orange"> {{item.goods_tcion}} </span>
            <em>¥{{item.goods_price}}</em>
          </p>
        </div>
      </div>
    </li>

  </ul>
  <ul class="order-money cell-list">
    <li class="item cell">
      <span>配送费</span>
      <span>¥ 0.00</span>
    </li>
    <!--<li class="item cell">-->
    <!--<span>优惠活动</span>-->
    <!--<span class="orange">满100减50</span>-->
    <!--</li>-->
  </ul>

  <div class="order-remark mt20">
    <p class="cell">
      <span class="span">订单备注</span>
      <input class="input" type="text" placeholder="击添加订单备注" />
    </p>
  </div>
</section>
<footer>
<div class="bottom-fixed cell">
  <div class="order-total">
    <p class="f32">合计:
      <i class="icon tp"></i>
      <span class="orange">{{tcion}}</span>
    </p>
    <p>¥{{money}}</p>
  </div>
  <a href="javascript:void(0);" class="btn btn-orange">结算</a>
</div>
</footer>

  <!--popup-->
<popup v-model="popControl">
<div class="pop-order-time">
  <h5 class="tit">送达时间</h5>
  <div class="time-box">
    <div class="nav-list">
            <span class="item"
                  v-for="(item,index) in tabs"
                  :class="{active:index==tabIndex}"@click="tab(index)">
      {{item}}
    </span>
  </div>

  <div class="con">
    <scroller height="100%" lock-x>
      <group>
        <radio title="title" :options="options" v-model="timeValue" @on-change="popControl=false">
        <template slot-scope="props" slot="each-item">
          送达时间 {{ props.label }} <span class="gray"></span>
        </template>
      </radio>
    </group>
  </scroller>
</div>
</div>
  </div>
  </popup>
  <!--popup-->
  </div>
  </template>

<script>
import { Popup ,Group, Scroller,Radio} from 'vux'
import {mapState} from 'vuex'
import cart from '@/assets/js/shop/cart'

export default {
  name: "ShopOrder",
  components: {
    Popup,
    Group,
    Scroller,
    Radio
  },
  data () {
    return {
      tabIndex:0,
      tabs:['今日'],
      options:[],
      timeValue:'',
      popControl:false,
      cartList:[],
      send_type:1,
      money:cart.getMoney(cart.order_pay).price,
      tcion:cart.getMoney(cart.order_pay).tcion,
      orderInfo:[],
      address:[],
    }
  },
  computed:{
    ...mapState(['userInfo','storeInfo'])
  },
  mounted(){
    //获取店铺配置信息
    let param={
      storeid:this.storeInfo.store_id,
      user_id:this.userInfo.user_id,
      money:this.money,
      tcion:this.tcion
    };
    this.$axios.get('/index/Goods_order/getSendStatus',{
      params:param
    }).then(res=>{
      res=res.data.data;
      this.orderInfo=res;
      this.address=res.address;

      if(res.store_send_type==2){
        this.send_type=2;
      }

      let day=["明天","后天"];
      for(var i=0;i<res.store_send_appoint;i++){
        if(i>1) back;
        this.tabs.push(day[i]);
      }
      console.log(res);
      //初始化送货时间
      this.setSendTime();
      this.timeValue=this.options[0];

    }).catch(err=>{
      console.log('my err:'+ err);
    });

    //选中购物车商品
    if(cart.order_pay.length>0){
      cart.order_pay.find(item=>{
        this.cartList.push(cart.cart_list[item]);
      });
    }else{
      this.$router.push('/shop/cart');
    }

  },
  methods: {
    tab:function(index){
      this.tabIndex=index;
      this.options=[];
      if(index==0){
        this.setSendTime();
      }else{
        this.setSendTime(index);
      }
    },

    /**
     * 设置配置时间
     * @param set 0为今天,1为所有一天时间
     * @param jump 几分钟一点, 单位(毫秒)
     */
    setSendTime(set=0,jump=900){
      let nowTime = new Date();
      let day = {
        "Y" : nowTime.getFullYear(),                 //月份
        "M" : nowTime.getMonth()+1,                 //月份
        "d" : nowTime.getDate()                    //日
      };

      if(set==0){
        var strOpenTime = `${day["Y"]}-${day["M"]}-${day["d"]} ${this.orderInfo.store_open_time}`;
        var openTime = Date.parse(new Date(strOpenTime));
        var nowStamp = Date.parse(new Date());
        var timestamp=openTime / 1000;

        if(timestamp>(nowStamp / 1000)){
          timestamp=openTime+this.orderInfo.store_send_arrival_time
        }else{
          timestamp=(nowStamp / 1000)+this.orderInfo.store_send_arrival_time
        }

      }else{
        var strOpenTime = `${day["Y"]}-${day["M"]}-${day["d"]} ${this.orderInfo.store_open_time}`;
        var openTime = Date.parse(new Date(strOpenTime));
        var timestamp=openTime / 1000;
      }

      let strCloseTime = `${day["Y"]}-${day["M"]}-${day["d"]} ${this.orderInfo.store_close_time}`;
      let closeTime = Date.parse(new Date(strCloseTime));
      closeTime=closeTime / 1000;

      let timeStatus=true;

      var i=1;
      while (timeStatus){
        timestamp = timestamp+jump;

        if(timestamp<=closeTime){
          nowTime.setTime(timestamp * 1000);
          var h=nowTime.getHours();
          var m=nowTime.getMinutes();
          if(h<10) h=`0${h}`;
          if(m<10) m=`0${m}`;

          var t=`${h}:${m}`;

//            if(i==1){
//              this.timeValue=t;
//            }

          this.options.push(t);
        }else{
          timeStatus=false;
        }
        i++;
      }

    }

  },
}
</script>
<style lang="css" scoped>
@import '../../assets/css/order.css';
</style>
<style lang="scss">
@import "../../core/base";

.weui-cells.vux-no-group-title{
  margin-top:0;
}
.weui-cells_radio{
.weui-cell{
  padding:rem(30) rem(27) rem(30) rem(0);
  font-size:rem(24);
}

.weui-check:checked+.weui-icon-checked:before {
  font-size: .5rem !important;
}
}
</style>
