<!--输入密码时的自定义键盘-->
<template>
  <div>
    <div class="tz-keybord">
      <ul class="number-box">
        <li v-for="item in keylist" @click="keyEnter(item)">{{item}}</li>
        <li>键盘</li>
      </ul>

      <ul class="opera-box">
        <li class="delete" @click="del()">
          <img class="img" src="@/assets/images/icons/del2.png" alt="">
        </li>
        <li class="sure" @click="sure()">确定</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "passKeyBord",
    props:{
      paslength:{
        type: Number,
        default:6
      }
    },
    data () {
      return {
        keylist:[1,2,3,4,5,6,7,8,9,'',0],
        val:[]
      }
    },
     watch:{
       val(value){
         this.$emit('run',value);
       }
    },
    methods: {
      keyEnter(num){
        if(this.val.length < this.paslength){
          this.val.push(num);
        }
        return;
      },
      del(){
        if(this.val.length>0){
          this.val.pop();
        }
      },
      sure(){
        if(this.val.length < this.paslength) return;
        this.$emit('sure');
      },
    }
  }
</script>

<style lang="css" scoped>
  @import "../assets/css/keyboard.css";
</style>

