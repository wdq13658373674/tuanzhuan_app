<template>
  <section class="page-group">
    <div class="tz-device-house">
      <h2 class="h2">可选房屋</h2>

      <ul class="cell-list auto">
        <li class="item link">
          <label class="cell">
            <div class="name">东樾府13栋12东樾府13栋12东樾府13栋12东樾府13栋12东樾府13栋12东樾府13栋12东樾府13栋12-1</div>
            <input type="radio" name="pay" checked>
            <div class="radio align-self mr20">
              <i class="check"></i>
            </div>
          </label>
        </li>
        <li class="item link">
          <label class="cell">
            <div class="name">西城御府2单元1号楼3-3</div>
            <input type="radio" name="pay">
            <div class="radio align-self mr20">
              <i class="check"></i>
            </div>
          </label>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
  export default {
    name: "House",
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

  .tz-device-house{
    .cell-list{
      .name{
        width:80%;
        @include flex-wrap();
      }
    }
  }
</style>
