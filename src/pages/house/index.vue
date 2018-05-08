<template>
  <div>
    <section class="page-group">
      <ul class="user-rooms-list">
        <li class="item">
          <div class="cell">
            <div>
              <span>扬子江商务中心</span>
              <span class="gray ml20">1组团-3栋-302</span>
            </div>
            <span>共2人</span>
          </div>
          <div class="cell mt50">
            <span class="f30">身份：业主</span>

            <div>
              <a href="" class="link set">设置</a>
              <a href="" class="link del">删除</a>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="cell">
            <div>
              <span>东樾府</span>
              <span class="gray ml20">1组团-3栋-302</span>
            </div>
            <span>共2人</span>
          </div>
          <div class="cell mt50">
            <span class="f30">身份：亲友</span>

            <div>
              <a href="" class="link del">删除</a>
            </div>
          </div>
        </li>
        <li class="item">
          <div class="cell">
            <div>
              <span>诚远御府</span>
              <span class="gray ml20">1组团-3栋-302</span>
            </div>
            <span>共2人</span>
          </div>
          <div class="cell mt50">
            <span class="f30">身份：租户</span>

            <div>
              <a href="" class="link del">删除</a>
            </div>
          </div>
        </li>
      </ul>

      <!--为空时-->
      <!--<div class="user-room-empty">
          <img src="../../images/img/room_empty.png" alt="">
          <p>未绑定房屋</p>
      </div>-->
    </section>
  </div>
</template>

<script>
  export default {
    name: "UserHouse",
    components: {
    },
    data() {
      return {

      }
    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/userRoom.css';
</style>
<style lang="scss">
  @import "../../core/base";

</style>
