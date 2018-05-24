<template>
  <section class="page-group">
    <h2 class="h2">可添加设备</h2>
    <ul class="arrow-cell-list">
      <li class="item">
        <router-link :to="{name:'WifiStart'}" class="link cell">
          海信
        </router-link>
      </li>
      <li class="item">
        <a href="#" class="link cell">
          海尔
        </a>
      </li>
      <li class="item">
        <a href="#" class="link cell">
          格力
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
  export default {
    name: "Wifi",
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

</style>
