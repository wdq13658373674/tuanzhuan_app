<template>
  <section class="page-group">
    <!--状态说明
        1、搜索中
        2、搜索结果为搜索到
        3、搜索成功
    -->

    <!--1、搜索中 start-->
    <!--<div class="intelligent-empty">
        <img class="img" src="../../images/img/m_img1.png" alt="">
        <p class="gray mt20">搜索中...</p>
    </div>-->
    <!--1、搜索中 end-->

    <!--2、未搜索到 start-->
    <!--<div class="intelligent-empty">
        <img class="img2" src="../../images/img/m_img2.png" alt="">
        <p class="gray mt20">未搜索到</p>
    </div>-->
    <!--2、未搜索到 end-->

    <!--3、搜索成功 start-->
    <h2 class="h2">附近网关</h2>
    <ul class="cell-list">
      <li class="item p27 cell">
        ADT6236926
      </li>
      <li class="item p27 cell">
        ADT6236926
      </li>
    </ul>
    <!--3、搜索成功 end-->
  </section>
</template>

<script>
  export default {
    name: "Search",
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
