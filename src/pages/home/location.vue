<template>
  <div>
    <section class="page-group">
      <!--<search
        class="tz-search"
        placeholder="请输入商品名称"
        :auto-fixed="false"
        cancel-text="搜索"
        @on-cancel="submit"
        v-model="value">
      </search>-->

      <h2 class="h2" v-if="flag">我的小区</h2>
      <ul class="cell-list">
        <li class="item link" v-for="item in user_village" @click="changeVillage(item)">
          <router-link to="">
            <i class="address pull-left mr10"></i>
            {{item.village_name}}
          </router-link>
        </li>
      </ul>

      <h2 class="h2">附近小区</h2>
      <ul class="cell-list">
        <li class="item link" v-for="item in other_village" @click="changeVillage(item)">
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
  import { Search } from 'vux'
  import {mapState,mapMutations} from 'vuex'

  export default {
    name: "Location",
    components:{
      Search,
    },
    data () {
      return {
        flag:false,
        user_village:[],
        other_village:[],
        value:''
      }
    },
    computed:{
      ...mapState(['roomInfo','userInfo'])
    },
    mounted(){
       this.getRooms();
    },
    methods:{
      /**获取房屋信息*/
      getRooms:function(){
        let param={}
        if(this.roomInfo){
          param={
            lat:this.roomInfo.lat,
            lng:this.roomInfo.lng,
            user_id:this.userInfo.user_id
          }
        }

        this.$axios.get(global.API_HOST+'house_village/findVillage',{
          params:param
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.user_village=res.data.user_village;
            this.other_village=res.data.other_village;

            if(this.user_village && this.user_village.length>0){
              this.flag=true;
            }
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      /**切换小区*/
      ...mapMutations(['update_roomInfo']),
      changeVillage:function(item){
        let roomInfo=item;
        this.update_roomInfo(roomInfo);
        this.$router.push('/');
      },
      /**搜索*/
      /*submit:function(){
        console.log(this.search);
      }*/
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";
</style>
