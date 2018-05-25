<template>
  <section class="page-group">
    <h2 class="h2">当前房屋</h2>
    <ul class="cell-list">
      <li class="item link">
        <i class="icon home mr10"></i>
        <span>{{defaultRoom.village_name}}</span>
        <span>{{defaultRoom.version_name}} {{defaultRoom.build_name}}</span>
        <span>{{defaultRoom.unit_name}} {{defaultRoom.floor_name}} {{defaultRoom.room_code}}号</span>
      </li>
    </ul>

    <h2 class="h2">其他可选房屋</h2>
    <ul class="cell-list auto">
      <router-link v-for="(item, index) in room_list" class="item link" tag="li" :to="{name:'PropertyService',query:{room_id:item.room_id,village_id:item.village_id}}">
        <span>{{item.village_name}}</span>
        <span>{{item.version_name}} {{item.build_name}}</span>
        <span>{{item.unit_name}} {{item.floor_name}} {{item.room_code}}号</span>
      </router-link>
    </ul>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: "Room",
    components:{

    },
    data () {
      return {
        room_list:{},
        defaultRoom:{}
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getRoomList();
    },
    methods:{
      getRoomList(){
        let defaultRoom_id = this.$route.query.room_id;
        let params={
         user_id:this.userInfo.user_id
        };
        this.$axios.get(global.API_HOST+'House_user_bind_info_view/getUserHouse',{
          params:params
        }).then(res=>{
          res=res.data;
          if(res.data != ''){
            res.data.map((item, index)=>{
              if(item.room_id == defaultRoom_id){
                this.defaultRoom = item;
                res.data.splice(index, 1);
              }
              this.room_list = res.data;
            });
          }
        }).catch(err=>{
          console.log('my err:'+err)
        });
      },
    }
  }
</script>
<style lang="scss">
  @import "../../core/base";
</style>
