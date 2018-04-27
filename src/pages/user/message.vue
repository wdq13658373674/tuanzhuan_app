<template>
  <div>
    <section class="page-group">
      <ul class="user-data-list arrow-cell-list">
        <li class="item" @click="changeHead=true">
          <div class="link cell">
            <span> <i class="icon icon1"></i>头像</span>
            <span class="user-img">
              <img v-lazy="userLists.user_logo" alt="">
            </span>
          </div>
        </li>
        <li class="item">
          <router-link class="link cell" to="/user/name">
            <span> <i class="icon icon2"></i>姓名</span>
            <span>{{userLists.user_realname}}</span>
          </router-link>
        </li>
        <li class="item">
          <router-link class="link cell" to="/user/nickname">
            <span> <i class="icon icon3"></i>昵称</span>
            <span>{{userLists.user_nickname}}</span>
          </router-link>
        </li>
        <li class="item" @click="changeSex=true">
          <div class="link cell">
            <span> <i class="icon icon4"></i>性别</span>
            <span v-if="userLists.user_gender==0">女</span>
            <span  v-else-if="userLists.user_gender==1">男</span>
            <span  v-else="userLists.user_gender==2">保密</span>
          </div>
        </li>
        <li class="item">
          <div class="link cell" href="#">
            <span> <i class="icon icon5"></i>生日</span>
            <datetime @on-confirm="changeBirths" v-model="changeBirth" format="YYYY年MM月DD日" :min-year=1970 clear-text="请选择您的出生日期" confirm-text="完成"></datetime>
          </div>
        </li>
        <li class="item">
          <router-link class="link cell" to="/user/mobile">
            <span> <i class="icon icon6"></i>绑定手机</span>
            <span>{{userLists.user_phone}}</span>
          </router-link>
        </li>
      </ul>

      <ul class="user-data-list arrow-cell-list mt20">
        <li class="item">
          <router-link class="link cell" to="/forgetPassword">
            <span> <i class="icon icon7"></i>修改密码</span>
          </router-link>
        </li>
      </ul>
    </section>

    <!--footer-->
    <footer>
      <div class="bottom-fixed btn-orange-fixed" @click="exit">退出登录</div>
    </footer>

    <!--修改头像 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="changeHead" :menus="headMenu" show-cancel></actionsheet>
    <!--修改性别 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="changeSex" :menus="sexMenu" @on-click-menu="changeSexs" show-cancel></actionsheet>
  </div>
</template>

<script>
  import {mapMutations,mapState} from 'vuex'
  import { Actionsheet,Datetime } from 'vux'
  export default {
    name: "UserData",
    components: {
      Actionsheet,
      Datetime
    },
    data() {
      return {
        changeHead:false,
        headMenu:['拍照','本地相册'],
        changeSex:false,
        sexMenu:{
          0:'女',
          1:'男',
          2:'保密',
        },
        changeBirth:'2015年11月12日',
        userLists:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getUserLists();
    },
    methods:{
      /**获取用户数据**/
      getUserLists(){
        let params={
          user_id:this.userInfo.user_id
        }
        this.$axios.get('/index/User/getUser',{
          params:params
        }).then(res=>{
          res=res.data;
          this.userLists=res.data.village.user;
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**退出**/
      ...mapMutations(['update_userInfo']),
      exit(){
        this.update_userInfo('');
        this.$router.push('/');
      },
      /**修改性别**/
      changeSexs(key,item){
        console.log(key,item)
        this.userLists.user_gender=key;
      },
      /**修改生日**/
      changeBirths(value){
        console.log(value);
      }
    }
  }
</script>
<style lang="css">
  @import '../../assets/css/userData.css';
</style>
<style lang="scss">
  @import "../../core/base";

  /*action-sheet*/
  .user-action-sheet{
    .weui-actionsheet{
      width:rem(670);
      left:0;
      right:0;
      margin:0 auto;
      background: none;
    }

    .weui-actionsheet__menu{
      @include border-radius(rem(8));
    }
    .weui-actionsheet__action{
      @include border-radius(rem(8));
      margin-top:rem(20);
      margin-bottom:rem(27);
    }

    .weui-actionsheet__cell{
      font-size:rem(32);
      padding:rem(34) 0;
    }
  }

  /*vux-datetime*/
  .vux-datetime{
    width:100%;
    text-align: right;
  }
  /*vux-datetime*/
  .dp-container{
    .dp-header .dp-item {
      color: #000;
      font-size: rem(26);
      height: rem(90);
      line-height:rem(90);
      cursor: pointer;
    }

    .scroller-component{
      height:rem(518);
    }

    .scroller-indicator{
      height:rem(74);
      top:rem(222);
    }

    .scroller-item {
      font-size:rem(32);
      height:rem(74);
      line-height:rem(74);
    }

    .scroller-mask{
      background-size: 100% rem(222);
    }
  }
</style>
