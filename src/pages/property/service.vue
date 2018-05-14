<template>
  <div>
    <section class="page-group">
      <h2 class="h2">
        <i class="home pull-left"></i>
        <span class="mr10">{{room.version_name}}</span>
        <span class="mr10">{{room.version_name}}</span>
        <span class="mr10">{{room.unit_name}}{{room.room_code}}</span>
      </h2>

      <div v-if="isData" class="content">
        <div>
          <table class="table">
            <thead>
            <tr>
              <td>操作 {{propertyList.length}}</td>
              <td class="text-center">日期</td>
              <td class="text-center">总计</td>
              <td></td>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(item, index) in propertyList">
              <td>
                <label @click="currClick(item,index)">
                  <input type="checkbox" name="pay" :value="index" v-model="checkboxModel">
                  <div class="radio">
                    <i class="check"></i>
                  </div>
                </label>
              </td>
              <td class="text-center">{{item.property_year}}年{{item.property_month_begin}}月</td>
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
      <div v-else style="background-color: #f4f4f4;">
        <p style="text-align: center;background-color: #f4f4f4;">暂无服务费</p>
      </div>
    </section>
    <footer v-if="isData">
      <div class="bottom-fixed cell">
        <div class="property-pay-money">
          <label class="pull-left mr50" >
            <input type="checkbox" name="pay" v-model="checkAll">
            <div class="radio">
              <i class="check"></i>
            </div>
            <span>全选</span>
          </label>

          合计：<span class="orange">¥{{totalMoney}}</span>
        </div>
        <router-link :to="{path:'/order/pay',query:{type:'property',property_id:property_id}}" class="btn btn-orange" :class="checkboxModel.length==0?'disabled':''" @click="pay">结算</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "PropertyService",
    data(){
      return {
        propertyList:{},
        room:{},
        propertyTotal: [],
        checkboxModel:[],
        isData: true,
        property_id: {}
      }
    },
    computed:{
      ...mapState(['roomInfo']),
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
      this.getUserPropertyList();
    },
    methods:{
      getUserPropertyList(){
        let params={
          village_id: this.roomInfo.village_id,
          room_id: this.roomInfo.room_id
        };

        if(this.roomInfo.room_id){
          this.$axios.get(global.API_HOST+'index/property/getUserPropertyList',{
            params:params
          }).then(res=>{
            res=res.data;
            this.room = res.data.room;
            this.propertyList = res.data.property;
          }).catch(err=>{
            console.log('my err:'+err)
          });
        }else{
          this.isData = false;
        }
      },
      currClick(item,index){

        let _this = this;
        if(typeof item.checked === 'undefined'){
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

      }
    }
  }
</script>
<style lang="css">
  @import '../../assets/css/property.css';
</style>
