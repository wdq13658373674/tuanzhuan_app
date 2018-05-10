<template>
  <div>
    <section class="page-group">
      <ul class="user-rooms-list">
        <li class="item" v-for="(item,index) in houseLists">
          <router-link :to="{path:'/user/house/holders',query:{
            id:item.room_id,
            type:item.bind_type,
          }}">
            <div class="cell">
              <div>
                <span>{{item.village_name}}</span>
                <span class="gray ml20">{{item.unit_name}}-{{item.floor_name}}-{{item.floor_code}}</span>
              </div>
            </div>
            <div class="cell mt50">
              <div class="f30">身份：
                <span v-if="item.bind_type==1">产权房主</span>
                <span v-else-if="item.bind_type==2">产权人</span>
                <span v-else-if="item.bind_type==3">亲友</span>
                <span v-else-if="item.bind_type==4">租客</span>
                <span v-else>审核中</span>
              </div>

              <div v-if="index==0">
                <span class="state">当前默认房屋</span>
              </div>
            </div>
          </router-link>
        </li>
      </ul>

      <!--为空时-->
      <div class="user-room-empty" v-if="houseLists==''">
        <img src="@/assets/images/img/room_empty.png" alt="">
        <p>未绑定房屋</p>
      </div>
      <!--为空时-->
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserHouse",
    components: {

    },
    data() {
      return {
        houseLists:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getHouseLists()
    },
    methods:{
      /**
       * 获取房屋列表
       * **/
      getHouseLists(){
        const params={
          user_id:this.userInfo.user_id
        }

        this.$axios.post('/index/House_user_bind_info_view/getUserHouse',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.houseLists=res.data;
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

</style>
