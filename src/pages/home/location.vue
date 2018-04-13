<template>
  <div>
    <barNav title="加入您所在的小区"></barNav>
    <section class="page-group">
      <search
        class="tz-search"
        placeholder="请输入商品名称"
        :auto-fixed="false"
        cancel-text="搜索"
        @on-cancel="submit"
        v-model="search">
      </search>

      <h2 class="h2">我的小区</h2>
      <ul class="cell-list">
        <li class="item link" v-for="item in user_village">
          <router-link to="">
            <i class="address pull-left mr10"></i>
            {{item.village_name}}
          </router-link>
        </li>
      </ul>

      <h2 class="h2">附近小区</h2>
      <ul class="cell-list">
        <li class="item link" v-for="item in other_village">
          <router-link to="" class="cell">
            <span class="tit">{{item.village_name}}</span>
            <span v-if="item.range">{{item.range}}m</span>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import barNav from '@/pages/layout/barNav'
  import { Search } from 'vux'
  const storeJs=require('storejs');

  export default {
    name: "Location",
    components:{
      Search,
      barNav
    },
    data () {
      return {
        lat:'',
        lng:'',
        user_village:'',
        other_village:'',
        search: ''
      }
    },
    mounted(){
       this.getRooms();
    },
    methods:{
      getRooms:function(){
        let points=storeJs('points');
        let roomInfo=storeJs('homeInfo');

        if(roomInfo){
          this.lat=roomInfo.lat;
          this.lng=roomInfo.lng;
        }else if(points){
          this.lat=points.lat;
          this.lng=points.lng;
        }

        let param={
          lat:this.lat,
          lng:this.lng,
          user_id:0,
        };

        this.$axios.get('/index/house_village/findVillage',{
          params:param
        }).then(res=>{
          res=res.data;
          if(res.status==0){
              this.user_village=res.data.user_village;
              this.other_village=res.data.other_village;
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      submit:function(){
        console.log(this.search);
      }
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";
</style>
