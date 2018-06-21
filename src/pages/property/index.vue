<template>
  <div>
    <BarNav title="物业">
      <span @click="back" class="link pull-left" slot="left">
          <slot name="leftIcon">
               <i class="icon arrow2"></i>
          </slot>
      </span>
    </BarNav>
    <section class="page-group">
      <h2 class="h2">
        <span>
          <i class="icon address mr10"></i>{{roomInfo.village_name}}
        </span>
      </h2>
      <div class="menu-property">
        <a class="menu" @click="isRoom">
          <img class="img" src="@/assets/images/img/c_img3.svg" alt="">
          <p class="p">物业服务费</p>
        </a>
        <router-link class="menu" :to="{name:'CarBill'}">
          <img class="img" src="@/assets/images/img/c_img1.svg" alt="">
          <p class="p">预交停车费</p>
        </router-link>
        <router-link class="menu" :to="{name:'CarPay'}">
          <img class="img" src="@/assets/images/img/c_img2.svg" alt="">
          <p class="p">临停缴费</p>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
  import BarNav from '@/pages/layout/barNav'
  import {mapState} from 'vuex'

  export default {
    name: "Property",
    components:{
      BarNav
    },
    computed:{
      ...mapState(['roomInfo'])
    },
    beforeRouteEnter(to, from, next){
      next(vm => {
        vm.fromUrl = from.name;
      })
    },
    mounted(){

    },
    methods:{
      isRoom(){
        if(this.roomInfo.room_id){
          this.$router.push({name: 'PropertyService'});
        }else if(this.roomInfo.user_room){
          this.$router.push({name: 'PropertyService'});
        }else{
          this.$vux.confirm.show({
            title: '提示',
            content: '没有小区',
            onConfirm(){}
          });
        }
      },
      back(){
        this.$router.push({
          name:'Index'
        });
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/property.css';
</style>
