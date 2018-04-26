<template>
  <div>
    <section class="page-group">
      <ul class="user-data-list arrow-cell-list">
        <li class="item" @click="changeHead=true">
          <div class="link cell">
            <span> <i class="icon icon1"></i>头像</span>
            <span class="user-img">
              <img src="@/assets/images/test/img6.png" alt="">
            </span>
          </div>
        </li>
        <li class="item">
          <div class="link cell">
            <span> <i class="icon icon2"></i>姓名</span>
            <span>魏某某</span>
          </div>
        </li>
        <li class="item">
          <a class="link cell" href="#">
            <span> <i class="icon icon3"></i>昵称</span>
            <span>魏某某</span>
          </a>
        </li>
        <li class="item" @click="changeName=true">
          <div class="link cell">
            <span> <i class="icon icon4"></i>性别</span>
            <span>女</span>
          </div>
        </li>
        <li class="item">
          <div class="link cell" href="#">
            <span> <i class="icon icon5"></i>生日</span>
            <datetime v-model="changeBirth" format="YYYY年MM月DD日" clear-text="请选择您的出生日期" confirm-text="完成"></datetime>
          </div>
        </li>
        <li class="item">
          <a class="link cell" href="#">
            <span> <i class="icon icon6"></i>绑定手机</span>
            <span>18680722507</span>
          </a>
        </li>
      </ul>

      <ul class="user-data-list arrow-cell-list mt20">
        <li class="item">
          <a class="link cell" href="#">
            <span> <i class="icon icon7"></i>修改密码</span>
          </a>
        </li>
      </ul>
    </section>

    <!--footer-->
    <footer>
      <a href="#" class="bottom-fixed btn-orange-fixed">退出登录</a>
    </footer>

    <!--修改头像 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="changeHead" :menus="headMenu" show-cancel></actionsheet>
    <!--修改性别 actionSheet-->
    <actionsheet class="user-action-sheet" v-model="changeName" :menus="nameMenu" show-cancel></actionsheet>
  </div>
</template>

<script>
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
        changeName:false,
        nameMenu:['女','男','保密'],
        changeBirth:'2015年11月12日'
      }
    },
    mounted(){
      this.show()
    },
    methods:{
      show(){
        this.$vux.confirm.show({
          title:'提示',
          content:'请选择您要删除的商品'
        })
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
      font-size:rem(24);
      padding:rem(34) 0;
    }
  }

  /*vux-datetime*/
  .vux-datetime{
    width:100%;
    text-align: right;
  }
  .dp-container{
    .dp-header .dp-item {
      color: #000;
      font-size: rem(24);
      height: rem(90);
      line-height:rem(90);
      cursor: pointer;
    }

    .scroller-component{
      height:rem(360);
    }

    .scroller-indicator{
      height:rem(60);
      top:rem(150);
    }

    .scroller-item {
      font-size:rem(32);
      height:rem(60);
      line-height:rem(60);
    }

    .scroller-mask{
      background-size: 100% rem(150);
    }

    .scroller-content{
      top:rem(32);
    }
  }
</style>
