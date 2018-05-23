<template>
  <section class="page-group">
    <div class="tz-device-room">
      <h2 class="h2">我的房间</h2>
      <ul class="arrow-cell-list">
        <li class="item">
          <router-link :to="{name:'IgtRoomSet'}" class="link cell">
            <div>
              <i class="m_icon icon1"></i>
              <span>卧室</span>
              <span class="gray">0个设备</span>
            </div>
          </router-link>
        </li>
        <li class="item">
          <a href="#" class="link cell">
            <div>
              <i class="m_icon icon2"></i>
              <span>客厅</span>
              <span class="gray">2个设备</span>
            </div>
          </a>
        </li>
        <li class="item">
          <a href="#" class="link cell">
            <div>
              <i class="m_icon icon3"></i>
              <span>厨房</span>
              <span class="gray">2个设备</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "Room",
    components:{

    },
    data () {
      return {

      }
    },
    computed:{

    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css">
  @import "../../assets/css/intellicon.css";
</style>
<style lang="scss">
  @import "../../core/base";


  .tz-device-room{
    .m_icon{
      float:left;
      @include wh(rem(60), rem(90));
      background-repeat: no-repeat;
      background-size: 60% auto;
      background-position: left center;
    }
  }
</style>
