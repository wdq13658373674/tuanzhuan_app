<template>
  <div>
    <setPassword title="设置支付密码"></setPassword>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import setPassword from '@/components/setPassword'
  const qs = require("querystring");
  export default {
    name: "PayPassword",
    components: {
      setPassword
    },
    data() {
      return {

      }
    },
    computed:{
      ...mapState(['userInfo']),
    },
    methods:{

    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userBindBank.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
