<template>
  <div>
    <section class="page-group">
      <div class="user-add-room">
        <div class="h5 cell">
          <div>
            <span>扬子江商务中心</span>
            <span class="gray ml20">1组团-3栋-302</span>
          </div>
          <span>共4人</span>
        </div>

        <div class="owner mt20">
          <div class="img-box">
            <img class="img" src="@/assets/images/test/img5.png" alt="">
          </div>
          <div class="con-box">
            <p>小怪兽</p>
            <p>
              <span>业主</span>
              <span class="gray ml20">130****1010</span>
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
                <span class="gray ml20">130****1010</span>
              </p>
            </div>
          </li>
          <li>
            <router-link to="/user/holders/invite/1" class="owner active f30">+ 邀请住户</router-link>
          </li>
        </ul>

        <a href="#" class="btn btn-orange radius mt60">移除</a>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "HouseHolders",
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
  @import '../../../assets/css/addRoom.css';
</style>
<style lang="scss">
  @import "../../../core/base";
</style>
