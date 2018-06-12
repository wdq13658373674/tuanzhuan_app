<template>
  <header>
    <div class="nav-bar">
      <router-link to="/location" class="link pull-left">
        <i class="icon address mr10"></i>
        <span class="name">{{village_name}}</span>
      </router-link>

      <a href="tel:400-135-6677" class="pull-right ml10">
        <i class="icon phone"></i>
      </a>
      <a href="#" @click="scanner" class="pull-right">
        <i class="icon ew"></i>
      </a>
    </div>
    <div style='width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(100,100,100,0.6);z-index:9999;display:none;' id='scannerdiv'>
      <div style="width:100%;height:50%;position:fixed;top:10%;left:0;background-color:white;text-align:center;display:none;" id="paybardiv">
        <div style="width:100%;height:100%;padding-top:10%;" id="paybars">
          <div v-show="qrcodeUrl" style="text-align:center;">
            <barcode :value="qrcodeUrl" :options="{ displayValue: true ,width:'2px',height:'90px',fontSize:'17px'}"></barcode>
          </div>
          <p id="paymsg" style="font-size:21px;"></p>
        </div>
      </div>
      <div style='width:100%;height:224px;background-color:white;z-index:99999;position:fixed;bottom:0;left:0;text-align:center;font-size:130%;' id="scannav">
        <div style="width:100%;height:56px;border-top:1px solid gray;line-height:56px;display:none;" id="scanopens" @click="scanopen">团 转 扫 码</div>
        <div style="width:100%;height:56px;border-top:1px solid gray;line-height:56px;" @click="paybar('T',$event)">团转支付码(团票)</div>
        <div style="width:100%;height:56px;border-top:1px solid gray;line-height:56px;" @click="paybar('Y',$event)">团转支付码(余额)</div>
        <div style="width:100%;height:56px;border-top:1px solid gray;line-height:56px;" @click="scanclose">取 消</div>
      </div>
    </div>
  </header>
</template>

<script>

  import {mapState} from 'vuex';
  import VueBarcode from '@xkeshi/vue-barcode';

  export default {
    name: "IndexNav",
    data(){
      return{
        user_id:0,
        user_phone:'',
        village_name:'',
        qrcodeUrl:'123456'
      }
    },
    components:{
      "barcode":VueBarcode
    },
    computed:{
      ...mapState(['roomInfo','userInfo'])
    },
    mounted(){
      this.getVillage();
    },
    methods: {
      getVillage:function(){
        if(this.roomInfo && this.roomInfo.village_name){
          this.village_name=this.roomInfo.village_name;
        }
      },
      scanner:function(){
        if(window.navigator.userAgent.indexOf('Tuanzhuanw')>-1){
          $("#scanopens").show();
        }else{
          $("#scannav").css("height","126px");
        }
        $("#scannerdiv").show();
      },
      scanclose:function(){
        $("#paybardiv").hide();
        $("#scannerdiv").hide();
      },
      scanopen:function(){
        if(window.navigator.userAgent.indexOf('Tuanzhuanw')>-1){
          cordova.plugins.barcodeScanner.scan(
            function (result) {
              if(!result.cancelled){
                var io = result.text.indexOf('.com/#/')
                if(io>-1){
                  window.location.href = result.text.substring(parseInt(io)+4);
                }else{
                  alert('扫描结果: '+result.text);
                }
              }
            },
            function (error) {
              alert("错误: " + error);
            }
          );
        }else{
          alert('扫码功能只能用于团转APP或微信');
        }
        $("#scannerdiv").hide();
      },paybar(type,event){
        var that = this;
        $("#paybardiv").show();
        if(typeof this.userInfo.user_id == 'undefined'){
          $("#paymsg").html("未登录");return;
        }
        $("#paymsg").html("获取支付码中");
        this.$axios.get(global.API_HOST+'User/paybar',{
          params:{user_id:that.userInfo.user_id,user_phone:that.userInfo.user_phone,type:type}
        }).then(res=>{
          console.log(res);
          if(res.data.status==0){
            that.qrcodeUrl = res.data.data;
            $("#paymsg").html("请使用团转收银台扫码");
          }else{
            $("#paymsg").html("支付码获取失败"+res.data.msg);
          }
        });
      }
    }
  }
</script>
