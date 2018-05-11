<template>
  <div>
    <div class="user-header">
      <div class="head-img">
        <div class="img-box">
          <img v-if="userLists.user_logo" :src="userLists.user_logo" alt="">
          <img src="@/assets/images/icons/u_head.png" alt="" v-else>
        </div>
      </div>
      <p class="p1">{{userLists.user_nickname || userLists.user_phone || userLists.user_realname}}</p>
      <p class="p2">{{roomLists.village_name}}{{roomLists.unit_name}}{{roomLists.floor_name}}{{roomLists.floor_code}}</p>

      <!--波浪 start-->
      <div class="waveWrapper waveAnimation">
        <div class="wave waveTop"></div>
        <div class="wave waveMiddle"></div>
        <div class="wave waveBottom"></div>
      </div>
      <!--波浪 end-->
    </div>

    <section class="page-group">
      <div class="content user-menu">
        <div class="item">
          <router-link :to="{path:'/user/tickets',
            query:{
              tp:userLists.user_tcion
            }
          }">
            <p class="p1 orange">{{userLists.user_tcion || '0.00'}}</p>
            <p class="p2">我的团票</p>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{path:'/user/balance',
            query:{
              balance:userLists.user_money
            }
          }">
            <p class="p1">¥{{userLists.user_money || '0.00'}}</p>
            <p class="p2">账户余额</p>
          </router-link>
        </div>
        <div class="item">
          <router-link :to="{path:'/user/integral',
            query:{
              integral:userLists.user_score
            }
          }">
            <p class="p1">{{userLists.user_ticket || '0.00'}}</p>
            <p class="p2">我的物业券</p>
          </router-link>
        </div>
      </div>

      <div class="content mt20">
        <ul class="user-belong-list">
          <router-link class="item" to="/property/service" tag="li">
            <p class="p1">物业账单</p>
            <!--<p class="p2">0元</p>-->
            <i class="icon arrow"></i>
          </router-link>
          <router-link class="item" to="/user/house" tag="li">
            <p class="p1">我的房屋</p>
            <p class="p2" v-if="roomInfo.length !== 0">{{roomInfo.village_name}}{{roomInfo.unit_name}}{{roomInfo.floor_name}}{{roomInfo.floor_code}}</p>
            <p v-else>{{roomInfo.notFloor}}</p>
            <i class="icon arrow"></i>
          </router-link>
          <router-link class="item" to="/user/order" tag="li">
            <p class="p1">我的订单</p>
            <p class="p2">{{orderNum}}个</p>
            <i class="icon arrow"></i>
          </router-link>
          <router-link class="item" to="/user/cards" tag="li">
            <p class="p1">银行卡</p>
            <p class="p2">共{{bankNum}}张</p>
            <i class="icon arrow"></i>
          </router-link>
        </ul>
      </div>

      <div class="user-func mt20">
        <h4 class="h4">
          <span>常用功能</span>
        </h4>

        <ul class="user-func-list clearfix">
          <li class="item">
            <router-link to="/user/order" class="link">
              <img class="img" src="@/assets/images/icons/i_icon1.png" alt="">
              <p class="p1">我的订单</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/user/ordain" class="link">
              <img class="img" src="@/assets/images/icons/i_icon2.png" alt="">
              <p class="p1">我的预约</p>
            </router-link>
          </li>
          <!--<li class="item">-->
            <!--<a href="#" class="link">-->
              <!--<img class="img" src="@/assets/images/icons/i_icon3.png" alt="">-->
              <!--<p class="p1">我的收藏</p>-->
            <!--</a>-->
          <!--</li>-->
          <li class="item">
            <a href="#" class="link">
              <img class="img" src="@/assets/images/icons/i_icon4.png" alt="">
              <p class="p1">任务清单</p>
            </a>
          </li>
          <li class="item">
            <router-link to="/user/safe" class="link">
              <img class="img" src="@/assets/images/icons/i_icon9.png" alt="">
              <p class="p1">安全管理</p>
            </router-link>
          </li>
          <li class="item">
            <router-link to="/user/message" class="link">
              <img class="img" src="@/assets/images/icons/i_icon5.png" alt="">
              <p class="p1">账号管理</p>
            </router-link>
          </li>
          <!--<li class="item">-->
            <!--<a href="#" class="link">-->
              <!--<img class="img" src="@/assets/images/icons/i_icon6.png" alt="">-->
              <!--<p class="p1">优惠券</p>-->
            <!--</a>-->
          <!--</li>-->
          <!--<li class="item">
            <router-link to="/user/holders" class="link">
              <img class="img" src="@/assets/images/icons/i_icon7.png" alt="">
              <p class="p1">房屋住户</p>
            </router-link>
          </li>-->
          <!--<li class="item">-->
            <!--<a href="#" class="link">-->
              <!--<img class="img" src="@/assets/images/icons/i_icon8.png" alt="">-->
              <!--<p class="p1">我的快递</p>-->
            <!--</a>-->
          <!--</li>-->

        </ul>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script>
  import {mapState,mapMutations} from 'vuex'
  import Footer from '@/pages/layout/footer'
  export default {
    name: "User",
    components:{
      Footer
    },
    data(){
      return {
        userLists:0,
        roomLists:0,
        bankNum:0,
        orderNum:0,
        roomInfo:{
          village_name:'',
          unit_name:'',
          floor_name:'',
          floor_code:'',
          notFloor:''
        }
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getUserLists();
    },
    methods:{
      ...mapMutations(['update_userInfo']),
      /**获取用户数据**/
      getUserLists(){
        /*this.$vux.confirm.show({
          title:'提示',
          content:'hahah'
        })*/
        let params={
          user_id:this.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'/index/User/getUser',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status === 0){
            this.userLists=res.data.village.user;
            this.bankNum = res.data.bank_num;
            this.orderNum = res.data.order;
            if(res.data.room_info.length !== 0){
              this.roomInfo = res.data.room_info[0];
            }else {
              this.roomInfo.notFloor = '暂无房屋';
            }
            if(res.data.village.room){
              this.roomLists=res.data.village.room;
            }
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/user.css';
  @import '../../assets/css/wave.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
