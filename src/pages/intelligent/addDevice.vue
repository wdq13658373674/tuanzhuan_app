<template>
  <div>
    <section class="page-group">
      <div class="tz-add-device">
        <p class="f30">添加ZigBee设备</p>
        <div>
          <a href="#" class="link-icon icon1"></a>
        </div>
        <p>选择后自动开启网关代加网模式</p>

        <p class="f30 mt150">添加WIFI设备</p>
        <router-link :to="{name:'DeviceWifi'}" tag="div">
          <span class="link-icon icon2"></span>
        </router-link>
        <p>添加空调/油烟机／洗衣机等设备</p>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "AddDevice",
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
<style lang="css" scoped>
  @import "../../assets/css/intelladd.css";

  .animated:nth-child(1){
    background: #fff;
  }
</style>
<style lang="scss">
  @import "../../core/base";
</style>
