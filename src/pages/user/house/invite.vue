<template>
  <div>
    <section class="page-group">
      <div class="h5">
        <span>{{village}}</span>
        <span class="gray ml20">{{unit}}</span>
      </div>

      <ul class="cell-list mt20">
        <li class="item cell p27">
          <label class="w150">手机号码</label>
          <input class="input text-right" v-model="phone" type="text" placeholder="请输入手机号码">
        </li>
        <!--<li class="item cell p27">-->
          <!--<label class="w150">业主姓名</label>-->
          <!--<input class="input text-right" value="小怪兽" type="text" placeholder="">-->
        <!--</li>-->
        <li class="item cell p27" @click="sheetShow=true">
          <label class="w150">入住身份</label>
          <span>{{role}}</span>
        </li>
      </ul>
      <div class="btn btn-orange radius mt60" :class="{disabled:!this.phone || !this.role}" @click="submit">确认添加</div>
    </section>

    <!--入住身份 actionSheet-->
    <actionsheet class="house-sheet" v-model="sheetShow" :menus="identity" @on-click-menu="selectRole"></actionsheet>
  </div>
</template>

<script>
  import utils from '@/libs/util.js'
  const qs = require("querystring")
  import {Actionsheet} from 'vux'
  export default {
    name: "HouseInvite",
    components: {
      Actionsheet
    },
    data() {
      return {
        village:this.$route.query.village,
        unit:this.$route.query.unit,
        phone:'',
        role:'亲友',
        type:3,
        sheetShow:false,
        identity:{
          3:'亲友',
          4:'租客',
        },
      }
    },
    mounted(){

    },
    methods:{
      /**
       * 选择入住身份
       * **/
      selectRole(key,value){
        this.type=key;
        this.role=value;
      },
      /**
       *确认添加住户
       * **/
      submit(){
        if(!utils.is_mobile(this.phone)){
          this.$vux.toast.show('手机号码格式不正确');
          return;
        }

        let params={
          mobile:this.phone,
          room_id:this.$route.query.id,
          bind_type:this.type
        }

        this.$axios.get(global.API_HOST+'/index/house_user_bind_info_view/addUserBind',{
          params:params
        }).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==0){
            this.$vux.toast.text('添加成功');
            this.$router.back();
          }else{
            this.$vux.toast.text(res.msg);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userRoom.css';
</style>
<style lang="scss">
  @import "../../../core/base";

  .house-sheet{
    .weui-actionsheet{
      background: none;
    }

    .weui-actionsheet__cell{
      padding:rem(31) 0 ;
      font-size:rem(30);
    }

    .weui-actionsheet__action{
      margin-top:rem(20);
    }
  }
</style>
