<template>
  <div>
    <section class="page-group">
      <ul class="user-data-list arrow-cell-list">
        <li class="item" @click="changeHead=true">
          <label class="link cell">
            <input type="file" accept="image/*" @change="uploadImg">
            <span> <i class="icon icon1"></i>头像</span>
            <span class="user-img">
              <img v-if="userLists.user_logo" class="img" :src="IMG_HOST+userLists.user_logo" alt="">
              <img src="@/assets/images/icons/u_head.png" style="background: #fd4915" alt="" v-else>
            </span>
          </label>
        </li>
        <li class="item">
          <router-link class="link cell" :to="{name:'UserName',query:{
            realname:userLists.user_realname
          }}">
            <span> <i class="icon icon2"></i>姓名</span>
            <span v-if="userLists.user_realname">{{userLists.user_realname}}</span>
            <span v-else class="orange">待完善</span>
          </router-link>
        </li>
        <li class="item">
          <router-link class="link cell" :to="{name:'UserNickname',query:{
            nickname:userLists.user_nickname
          }}">
            <span> <i class="icon icon3"></i>昵称</span>
            <span>{{userLists.user_nickname || '暂无'}}</span>
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
            <datetime @on-confirm="changeBirths" v-model="changeBirth" format="YYYY-MM-DD" :min-year=1970 clear-text="请选择您的出生日期" confirm-text="完成"></datetime>
          </div>
        </li>
        <li class="item">
          <router-link class="link cell" :to="{name:'BindMobile',params:{
            old_phone:userLists.user_phone
          }}">
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
    <!--<actionsheet class="user-action-sheet" v-model="changeHead" :menus="headMenu" @on-click-menu="changeSexs" show-cancel></actionsheet>-->

    <!--修改性别 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="changeSex" :menus="sexMenu" @on-click-menu="changeSexs" show-cancel></actionsheet>
  </div>
</template>

<script>
  import {mapMutations,mapState} from 'vuex'
  import { Actionsheet,Datetime } from 'vux'
  import { updateMessage } from '@/assets/js/user/changeMessage'
  import utils from '@/libs/util.js'
  const storeJs=require('storejs');
  import { compressImg } from '@/assets/js/upload/upload'

  export default {
    name: "UserData",
    components: {
      Actionsheet,
      Datetime
    },
    data() {
      return {
        IMG_HOST:global.IMG_HOST || "",
        changeHead:false,
        // headMenu:['拍照','本地相册'],
        changeSex:false,
        sexMenu:{
          0:'女',
          1:'男',
          2:'保密',
        },
        changeBirth:'',
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
        this.$axios.get(global.API_HOST+'User/getUser',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.status==0){
            this.userLists=res.data.village.user;
            this.changeBirth=utils.stampToDate(this.userLists.user_birthday);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**退出
       * ----清除 用户信息 本地存储
       * ----清除 房屋信息 本地存储
       * ----清除 即时通讯 本地存储
       * **/
      ...mapMutations(['update_userInfo','update_roomInfo']),
      exit(){
        this.update_userInfo({});
        this.update_roomInfo({});
        storeJs.remove("msgDB");
        this.$router.push('/');
      },
      /**修改性别**/
      changeSexs(key){
        key=parseInt(key);
        let sex=this.userLists.user_gender;
        if(sex!=key){
          this.userLists.user_gender=key;
          let data={
            type:3,
            value:key
          }
          updateMessage(this,data);
        }
      },
      /**修改生日**/
      changeBirths(value){
        let data={
          type:1,
          value:value
        }
        updateMessage(this,data);
      },
      /**上传头像**/
      uploadImg(event){
        //compressImg压缩图片
        compressImg(event).then(params=>{
          params.append('dir','image');
          params.append('user_id',this.userInfo.user_id);
          this.upload_ajax(params);
        })
      },
      /**
       * 上传头像接口
       * params ：接口接收参数
       * **/
      upload_ajax(params){
        this.$axios.post(global.API_HOST+'User/kindUpload',params,{
          headers:{'Content-Type':'multipart/form-data'}//添加请求头
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.userLists.user_logo=res.data;
          }else{
            this.$vux.toast.text('图片过大,上传失败');
          }
        })
      }
    }
  }
</script>
<style lang="css" scoped>
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
      font-size:rem(26);
      padding:rem(34) 0;
    }
  }

  /*vux-datetime*/
  .vux-datetime{
    width:100%;
    text-align: right;
  }

  /**cell**/
  .weui-cell{
    padding:0;

    &:before{
      border:0;
    }

    .vux-cell-value{
      color:#000;
    }

    &.weui-cell_access .weui-cell__ft{
      padding-right:0;
      color:#000;
    }
  }
</style>
