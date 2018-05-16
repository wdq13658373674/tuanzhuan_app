<!--输入money自定义键盘-->
<template>
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
</template>

<script>
  export default {
    name: "Keybord",
    data () {
      return {
        keylist:[1,2,3,4,5,6,7,8,9,'',0],
        val:[]
      }
    },
    watch:{
      val(value){
        this.$emit('run',value.join(''));
      }
    },
    methods: {
      /**开始输入*/
      keyEnter(num){
        /*小数点验证*/
        if(num=='.'){
          if (this.val.indexOf('.') > -1 || this.val.indexOf('0.') > -1) return false;
          if(!this.val.length){
            num='0.';
          }
        }
        /*首位输入0时*/
        if(num==0){
          if(!this.val.length){
            num='0.';
          }
        }
        /*小数点后位数2位*/
        if(this.val.indexOf('.') > -1 && this.val.length-this.val.indexOf('.') > 2 || this.val.indexOf('0.') > -1 && this.val.length-this.val.indexOf('0.') > 2) return false;

        this.val.push(num);
      },
      /**删除*/
      del(){
        if(this.val.length>0){
          this.val.pop();
        }
      },
      /**确定*/
      sure(){
        if(this.val.length==0 || parseFloat(this.val.join(''))==0) return;
        this.$emit('sure');
      },
      /**清空*/
      empty(){
        this.val=[];
      }
    }
  }
</script>

<style lang="css" scoped>
 @import "../assets/css/keyboard.css";
</style>

