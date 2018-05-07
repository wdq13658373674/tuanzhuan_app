<template>
  <div>
    <h5 class="h5 mt20">退货原因 <span class="gray">（至少说明一个原因）</span></h5>
    <textarea name="" id="" rows="6" class="textarea" placeholder="请说明退货原因"></textarea>

    <footer>
      <router-link to="/user/order/sales/step2" class="bottom-fixed btn-orange-fixed">提交</router-link>
    </footer>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  const qs = require("querystring")
  export default {
    name: "UserSalesStep1",
    components: {

    },
    data() {
      return {

      }
    },
    computed:{
      ...mapState(['userInfo'])
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
