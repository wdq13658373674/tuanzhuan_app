<template>
  <div>
    <section class="page-group">
      <h2 class="h2">
        <i class="home pull-left"></i>
        <span class="mr10">扬子江商务中心</span>
        <span class="mr10">二期2号楼</span>
        <span class="mr10">2单元0406</span>
      </h2>

      <div class="content">
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
          <tr>
            <td>
              <label>
                <input type="checkbox" name="pay">
                <div class="radio">
                  <i class="check"></i>
                </div>
              </label>
            </td>
            <td class="text-center">2018年02月</td>
            <td class="text-center">280.99</td>
            <td>
              <router-link class="link" to="/property/service/detail">
                <img class="img" src="@/assets/images/icons/arrow3.svg" alt="">
              </router-link>
            </td>
          </tr>
          <tr>
            <td>
              <label>
                <input type="checkbox" name="pay">
                <div class="radio">
                  <i class="check"></i>
                </div>
              </label>
            </td>
            <td class="text-center">2018年02月</td>
            <td class="text-center">280.99</td>
            <td>
              <a class="link" href="#">
                <img class="img" src="@/assets/images/icons/arrow3.svg" alt="">
              </a>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
    <footer>
      <div class="bottom-fixed cell">
        <div class="property-pay-money">
          <label class="pull-left mr50">
            <input type="checkbox" name="pay">
            <div class="radio">
              <i class="check"></i>
            </div>
            <span>全选</span>
          </label>

          合计：<span class="orange">¥1592.59</span>
        </div>
        <a href="#" class="btn btn-orange">结算</a>
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
        propertyList:{}
      }
    },
    computed:{
      ...mapState(['roomInfo'])
    },
    mounted(){
      this.getUserPropertyList();
    },
    methods:{
      getUserPropertyList(){
        //console.log(this.roomInfo);
        let params={
          village_id: this.roomInfo.village_id,
          room_id: this.roomInfo.room_id
        };
        this.$axios.get(global.API_HOST+'index/property/getUserPropertyList',{
          params:params
        }).then(res=>{
          res=res.data;
          this.propertyList = res.data;
          console.log(this.propertyList);

        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css">
  @import '../../assets/css/property.css';
</style>
