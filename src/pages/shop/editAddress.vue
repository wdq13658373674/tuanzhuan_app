<template>
  <div>
    <!--section-->
    <section class="page-group">

      <ul class="cell-list address-add">
        <li class="item">
          <x-address title="" value-text-align="left" :raw-value="true" v-model="city" :list="addressData" placeholder="请选择地址"></x-address>
        </li>
        <li class="item">
          <input class="input" type="text" v-model="community" placeholder="请输入小区名">
        </li>
        <li class="item">
          <input class="input" type="text" v-model="house" placeholder="请输入门牌号等详细地址">
        </li>
      </ul>
      <ul class="cell-list mt20 address-add">
        <li class="item">
          <input class="input" type="text" v-model="realname" placeholder="您的姓名">
        </li>
        <li class="item">
          <input class="input" type="text" v-model="phone" placeholder="请输入你的电话号码">
        </li>
      </ul>
    </section>
    <!--footer-->
    <footer>
      <div class="bottom-fixed btn-orange-fixed" @click="submit">保存</div>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import { XAddress, ChinaAddressV4Data,Value2nameFilter as value2name } from 'vux'
  import {getPosition} from '@/libs/bMap'
  import utils from '@/libs/util.js'
  const qs = require("querystring")

  export default {
    name: "ShopAddAddress",
    components: {
      XAddress
    },
    data () {
      return {
        addressData:ChinaAddressV4Data,
        city:[],
        community:'',
        house:'',
        realname:'',
        phone:'',
        address:'',
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getCurrentAddress();
    },
    methods: {
      /**
       * 获取当前需修改的地址信息
       * **/
      getCurrentAddress(){
        const params={
          user_id:this.userInfo.user_id,
          address_id:this.$route.params.id
        }

        this.$axios.get(global.API_HOST+'User_address/getUserAddress',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            const currentAddress=res.data;
            const addressArr=currentAddress.address_comment.split(',');

            this.city=addressArr[0].split(' ');
            this.community=addressArr[1];
            this.house=addressArr[2];
            this.realname=currentAddress.address_user_realname;
            this.phone=currentAddress.address_user_phone;
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**修改地址表单提交**/
      editress_ajax(lat,lng){
        let params={
          address_id:this.$route.params.id,
          address_user_id:this.userInfo.user_id,
          address_user_realname:this.realname,
          address_user_phone:this.phone,
          address_lat:lat,
          address_lng:lng,
          address_comment:this.address
        }

        this.$axios.post(global.API_HOST+'User_address/editAddress',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.$vux.toast.text('修改成功');
            this.$router.go(-1);
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**修改地址表单提交**/
      submit(){
        if(!this.checkForm()){
          return;
        }else{
          const self=this;
          let city=value2name(this.city, ChinaAddressV4Data);
          self.address=city+','+this.community+','+this.house;

          getPosition(self.address,function(point){
            if(point){
              self.editress_ajax(point.lat,point.lng);
            }else{
              self.$vux.toast.text('该地址不存在，请填写真实存在的地址');
            }
          })
          return true;
        }
      },
      /**
       * 表单验证
       * **/
      checkForm(){
        let tips='';
        if(this.city==''){
          tips='请选择地址';
        }else if(this.community==''){
          tips='请输入小区名';
        }else if(this.realname==''){
          tips='请输入你的真实姓名';
        }else if(this.phone==''){
          tips='请输入你的电话号码';
        }else if(!utils.is_mobile(this.phone)){
          tips='电话号码格式错误';
        }

        if(tips!=''){
          this.$vux.toast.text(tips);
          return false;
        }else{
          return true;
        }
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/address.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .weui-cell{
    padding:0;
  }

  .vux-popup-picker-select-box{
    .vux-popup-picker-placeholder{
      color:#bbbbbb;
    }
  }

  .vux-popup-picker-container{
    .vux-popup-header {
      height: rem(90);
      line-height:rem(90);
      font-size: rem(34);
    }

    .scroller-component{
      height:rem(500);
    }

    .scroller-indicator{
      height:rem(74);
      top:rem(213);
    }

    .scroller-item {
      font-size: rem(34);
      height: rem(74);
      line-height: rem(74);
    }

    .scroller-mask{
      background-size: 100% rem(213);
    }

    .scroller-content{
      top:rem(-9);
    }
  }
</style>
