<template>
  <section class="page-group">
    <div class="tz-start-device">
      <h2 class="h2">选择设备</h2>
      <ul class="arrow-cell-list auto">
        <li class="item">
          <router-link :to="{name:'BindDevice'}" class="link">
            <p>空调</p>
            <p>遥控器对准空调连续6此”左右风”或”广角风”，听到空调配网</p>
          </router-link>
        </li>
        <li class="item">
          <a href="#" class="link">
            <p>洗衣机</p>
            <p>遥控器对准空调连续6此”器对准空调连续6此”左器对准空调连续6此”左器对准空调连续6此”左器对准空调连续6此”左器对准空调连续6此”左器对准空调连续6此”左左右风”或”广角风”，听到空调配网</p>
          </a>
        </li>
        <li class="item">
          <a href="#" class="link">
            <p>抽油烟机</p>
            <p>遥控器对准空调连续6此”左右风”或”广角风”，听到空调配网</p>
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "WifiStart",
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
<style lang="scss">
  @import "../../core/base";


  .tz-start-device{
    .arrow-cell-list{
      .link{
        p{
          &:nth-child(2){
            font-size:rem(22);
            color:$gray;
            margin-top:rem(10);
          }
        }
      }
    }
  }
</style>
