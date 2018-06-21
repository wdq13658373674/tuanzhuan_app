<template>
  <div>
    <BarNav title="物业服务费">
      <span @click="back" class="link pull-left" slot="left">
          <slot name="leftIcon">
               <i class="icon arrow2"></i>
          </slot>
      </span>
    </BarNav>

    <section class="page-group">
      <router-link :to="{name:'PropertyRoom',query:{room_id:room.room_id}}" tag="h2" class="h2">
        <div class="name">
          <i class="icon home pull-left mr10"></i>
          <span class="mr10">{{room.village_name}}</span>
          <span class="mr10">{{room.unit_name}}</span>
          <span class="mr10">{{room.floor_name}}</span>
          <span class="mr10">{{room.room_code}}号</span>
        </div>

        <span class="change">切换</span>
      </router-link>

      <div v-if="isData" class="content">
        <div>
          <table class="table">
            <thead>
            <tr>
              <td>操作</td>
              <td class="text-center">日期</td>
              <td class="text-center">总计</td>
              <td></td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(item, index) in propertyList">
              <td>
                <label>
                  <input @click="currClick(item,index)" type="checkbox" name="pay" :value="index" v-model="checkboxModel">
                  <div class="radio">
                    <i class="check"></i>
                  </div>
                </label>
              </td>
              <td v-if="item.property_month_end - item.property_month_begin == 0" class="text-center">{{item.property_year}}年 {{item.property_month_begin}}月</td>
              <td v-else class="text-center">{{item.property_year}}年 {{item.property_month_begin}}月 - {{item.property_month_begin + (item.property_month_end - item.property_month_begin)}}月</td>
              <td class="text-center propertyMoney">{{item.property_money}}</td>
              <td>
                <router-link class="link" :to="{path:'/property/service/detail',query:{property_id:item.property_id}}">
                  <img class="img" src="@/assets/images/icons/arrow3.svg" alt="">
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else class="mt40" style="background-color: #f4f4f4;">
        <p style="text-align: center;background-color: #f4f4f4;">暂无服务费</p>
      </div>
    </section>
    <footer v-if="isData">
      <div class="bottom-fixed cell">
        <div class="property-pay-money">
          <label class="cart-radio mr50" >
            <input type="checkbox" name="pay" v-model="checkAll">
            <div class="radio">
              <i class="check"></i>
            </div>
            <span>全选</span>
          </label>

          合计：<span class="orange">¥{{totalMoney}}</span>
        </div>
        <router-link :to="{name:'OrderPay',query:{type:'property',property_id:property_id}}" class="btn btn-orange" :class="checkboxModel.length==0?'disabled':''" @click="pay">结算</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  import BarNav from '@/pages/layout/barNav'
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "PropertyService",
    components:{
      BarNav
    },
    data(){
      return {
        propertyList:{},
        room:{},
        propertyTotal: [],
        checkboxModel:[],
        isData: true,
        property_id: [],
        room_id: 0,
        default_roomInfo:{}
      }
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.fromUrl = from.name;
      })
    },
    computed:{
      ...mapState(['roomInfo','userInfo']),
      totalMoney:function(item,index){
        let sum = 0;
        for(let i=0;i<this.propertyTotal.length;i++){
          sum += this.propertyTotal[i];
        };

        return sum.toFixed(2);
      },
      checkAll: {
        get: function() {
          return this.checkboxModel.length === this.propertyList.length;
        },
        set: function(value){
          let _this = this;
          if (value) {
            this.propertyTotal = [];
            this.property_id = [];
            this.propertyList.map(function(item,index) {
              _this.checkboxModel.push(index);
              item.checked = true;
              let total = parseFloat(item.property_money);
              let propertyId = item.property_id;
              _this.propertyTotal.push(total);
              _this.property_id.push(propertyId);
            })
          }else{
            this.checkboxModel = [];
            this.propertyTotal=[];
            this.propertyList.forEach(function(item,index){
              item.checked = false;
            });
          }
        }
      },
      checkedCount: {
        get: function() {
          return this.checkboxModel.length;
        }
      }
    },
    mounted(){
      this.getRoom_id();
      this.getUserPropertyList();
    },
    methods:{
      getUserPropertyList(){

        let params={};
        if(this.$route.query.room_id){
          this.room_id = this.$route.query.room_id;
          params={
            village_id: this.$route.query.village_id,
            room_id: this.room_id,
            user_id:this.userInfo.user_id
          };
        }else {
          params={
            user_id:this.userInfo.user_id
          };
        }
        this.$axios.get(global.API_HOST+'property/getUserPropertyList',{
          params:params
        }).then(res=>{
          res=res.data;
          this.room = res.data.room;
          if(res.data.property == null){
            this.isData = false;
          }else {
            this.propertyList = res.data.property;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        });

      },
      currClick(item,index){
        let _this = this;
        if(typeof item.checked == 'undefined'){
          this.$set(item,'checked',true);
          let total = parseFloat(item.property_money);
          let propertyId = item.property_id;
          this.propertyTotal.push(total);
          this.property_id.push(propertyId);
        }else{
          item.checked = !item.checked;
          if(item.checked){
            this.propertyTotal = [];
            this.property_id = [];
            this.propertyList.forEach(function(item,index){
              if(item.checked){
                let total = parseFloat(item.property_money);
                let propertyId = item.property_id;
                _this.propertyTotal.push(total);
                _this.property_id.push(propertyId);
              }
            });
          }else{
            this.propertyTotal = [];
            this.property_id = [];
            this.propertyList.forEach(function(item,index){
              if(item.checked){
                let total = parseFloat(item.property_money);
                let propertyId = item.property_id;
                _this.propertyTotal.push(total);
                _this.property_id.push(propertyId);
              }
            });
          }
        }
      },
      pay(){

      },
      getRoom_id () {
        // 取到路由带过来的参数
        let room_id = this.$route.query.room_id;
        // 将数据放在当前组件的数据内
        this.room_id = room_id;
      },
      back(){
        if(this.fromUrl == "User"){
          this.$router.push({
            name:'User'
          });
          return;
        }else if(this.fromUrl == "PropertyRoom" || this.fromUrl == "PropertyServiceDetail"){
          this.$router.push({
            name:'Property'
          });
          return;
        }
        this.$router ? this.$router.go(-1) : window.history.back();
      }
    },
    watch: {

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/property.css';
</style>
