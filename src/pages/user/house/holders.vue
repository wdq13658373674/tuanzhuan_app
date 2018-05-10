<template>
  <div>
    <section class="page-group">
      <div class="user-add-room">
        <div class="h5 cell">
          <div>
            <span>{{house.village_name}}</span>
            <span class="gray ml20">{{house.unit_name}}-{{house.floor_name}}-{{house.floor_code}}</span>
          </div>
          <!--<span v-if="type==1">共{{house.room_living}}人</span>-->
        </div>

        <template v-if="type==1">
          <div class="owner mt20">
            <div class="img-box">
              <img v-if="userInfo.user_logo" :src="userInfo.user_logo" alt="">
              <img src="@/assets/images/icons/u_head.png" alt="" v-else>
            </div>
            <div class="con-box">
              <p>{{userInfo.user_nickname || userInfo.user_realname}}</p>
              <p>
                <span>业主</span>
                <span class="gray ml20">{{userInfo.user_phone | regMobile}}</span>
              </p>
            </div>
          </div>
          <ul class="owner-list">
            <li class="owner">
              <label>
                <input type="checkbox" name="pay" checked>
                <div class="radio pull-left mr20">
                  <i class="check"></i>
                </div>
              </label>
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con-box">
                <p>小怪兽</p>
                <p>
                  <span>业主</span>
                  <span class="gray ml20">130****1010</span>
                </p>
              </div>
            </li>
            <li class="owner">
              <label>
                <input type="checkbox" name="pay" checked>
                <div class="radio pull-left mr20">
                  <i class="check"></i>
                </div>
              </label>
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con-box">
                <p>小怪兽</p>
                <p>
                  <span>业主</span>
                  <span class="gray ml20">130****1010</span>
                </p>
              </div>
            </li>
            <li class="owner">
              <label>
                <input type="checkbox" name="pay" checked>
                <div class="radio pull-left mr20">
                  <i class="check"></i>
                </div>
              </label>
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con-box">
                <p>小怪兽</p>
                <p>
                  <span>业主</span>
                  <span class="gray ml20">130****1010</span>
                </p>
              </div>
            </li>
            <li class="owner">
              <label>
                <input type="checkbox" name="pay" checked>
                <div class="radio pull-left mr20">
                  <i class="check"></i>
                </div>
              </label>
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img6.png" alt="">
              </div>
              <div class="con-box">
                <p>小怪兽</p>
                <p>
                  <span>业主</span>
                  <span class="gray ml20">{{userInfo.user_phone}}</span>
                </p>
              </div>
            </li>
            <li>
              <router-link :to="{name:'UserHouseInvite',query:{
                id:room_id
              }}" class="owner active f30">+ 邀请住户</router-link>
            </li>
          </ul>
          <a href="#" class="btn btn-orange radius mt60">移除</a>
        </template>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "HouseHolders",
    components: {
    },
    data() {
      return {
        type:this.$route.query.type,
        room_id:this.$route.query.id,
        house:'',
        holders:''
      }
    },
    computed:{
      ...mapState(['userInfo'])
    },
    mounted(){
      this.getHouseDetail();
    },
    methods:{
      /**
       * 获取房屋详细信息
       * **/
      getHouseDetail(){
        const params={
          user_id:this.userInfo.user_id,
          room_id:this.room_id,
          bind_type:this.type,
        }

        this.$axios.post('/index/House_user_bind_info_view/getUserType',qs.stringify(params)).then(res=>{
          res=res.data;

          console.log(res);
          if(res.status==0){
            this.house=res.data;//房屋
            this.holders=res.data.other;//房屋住户
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/addRoom.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
