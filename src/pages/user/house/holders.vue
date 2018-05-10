<template>
  <div>
    <section class="page-group">
      <div class="user-add-room">
        <div class="h5 cell">
          <div>
            <span>{{village}}</span>
            <span class="gray ml20">{{unit}}</span>
          </div>
          <!--<span v-if="type==1">共{{house.room_living}}人</span>-->
        </div>

        <template v-if="type==1">
          <div class="owner mt20">
            <div class="img-box">
              <img class="img" v-if="userInfo.user_logo" :src="userInfo.user_logo" alt="">
              <img class="img" src="@/assets/images/public/404.png" alt="" v-else>
            </div>
            <div class="con-box">
              <p>{{userInfo.user_nickname || userInfo.user_realname}}</p>
              <p>
                <span>业主</span>
                <span class="gray ml20">{{userInfo.user_phone | formatMobile}}</span>
              </p>
            </div>
          </div>

          <ul class="owner-list">
            <li class="owner" v-for="(item,index) in holders">
              <label>
                <input type="radio" :name="index" :value="item" v-model="select">
                <div class="radio pull-left mr20">
                  <i class="check"></i>
                </div>
              </label>
              <div class="img-box">
                <img class="img" v-if="item.user.user_logo" :src="item.user.user_logo" alt="">
                <img class="img" src="@/assets/images/public/404.png" alt="" v-else>
              </div>
              <div class="con-box">
                <p>{{item.user.user_nickname || item.user.user_realname}}</p>
                <p>
                  <span v-if="item.bind_type==1">产权房主</span>
                  <span v-else-if="item.bind_type==2">产权人</span>
                  <span v-else-if="item.bind_type==3">亲友</span>
                  <span v-else-if="item.bind_type==4">租客</span>
                  <span class="gray ml20">{{item.user.user_phone | formatMobile}}</span>
                </p>
              </div>
            </li>
            <li>
              <router-link :to="{name:'UserHouseInvite',query:{
                id:room_id,
                village:village,
                unit:unit
              }}" class="owner active f30">+ 邀请住户</router-link>
            </li>
          </ul>
          <div class="btn btn-orange radius mt60" :class="{disabled:!select}" @click="del">移除</div>
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
        village:this.$route.query.village,
        unit:this.$route.query.unit,
        house:'',
        holders:'',
        select:''
      }
    },
    computed:{
      ...mapState(['userInfo']),
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

        this.$axios.post(global.API_HOST+'/index/House_user_bind_info_view/getUserType',qs.stringify(params)).then(res=>{
          res=res.data;
          console.log(res);

          if(res.status==0){
            this.house=res.data;//房屋
            this.holders=res.data.other;//房屋住户
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      /**
       * 移除选中住户
       * **/
      del(){
        const self=this;
        this.$vux.confirm.show({
          title: '提示',
          content: '确定删除该住户,删除后将不能恢复',
          onConfirm() {
            self.del_ajax();
          }
        })
      },
      /**
       * 删除ajax
       * **/
      del_ajax(){
        const params={
          user_id:this.select.user_id,
          room_id:this.room_id,
          bind_type:this.select.bind_type,
        }

        this.$axios.post(global.API_HOST+'/index/House_user_bind_info_view/delBind',qs.stringify(params)).then(res=>{
          res=res.data;

          if(res.status==0){
            this.$vux.toast.text('移除成功');
            this.holders.splice(this.select,1);
          }else{
            this.$vux.toast.text('移除失败');
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
