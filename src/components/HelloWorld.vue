<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a href="javascript:void(0);" @click="post">Post请求</a>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'test'
    }
  },
  methods:{
    post:function () {
      axios.post('Project/index',{
        id:1,
        username:'test'
      }).then(res=>{
        //返回数据
        console.log(res.data);
      }).catch(function (e) {
        //错误信息
        console.log("my error:"+e);
      });
    }
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
