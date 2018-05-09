<!--输入支付密码时的自定义键盘-->
<template>
  <div>
    <popup v-model="popshow" :show-mask="false">
      <div class="tz-keybord">
        <ul class="number-box">
          <li v-for="item in keylist" @click="keyEnter(item)">{{item}}</li>
          <li @click="empty">清空</li>
        </ul>

        <ul class="opera-box">
          <li class="delete" @click="del()">
            <img class="img" src="@/assets/images/icons/del2.png" alt="">
          </li>
          <li class="sure" @click="sure()">确定</li>
        </ul>
      </div>
    </popup>
  </div>
</template>

<script>
  import {Popup} from 'vux'
  export default {
    name: "passKeyBord",
    components:{
      Popup,
    },
    props:{
      paslength:{
        type: Number,
        default:6
      }
    },
    data () {
      return {
        keylist:[1,2,3,4,5,6,7,8,9,'',0],
        val:[],
        popshow:true
      }
    },
     watch:{
       val(value){
         this.$emit('run',value);
       }
    },
    methods: {
      /**开始输入*/
      keyEnter(num){
        if(this.val.length < this.paslength){
          this.val.push(num);
        }
        return;
      },
      /**删除*/
      del(){
        if(this.val.length>0){
          this.val.pop();
        }
      },
      /**确定*/
      sure(){
        if(this.val.length < this.paslength) return;
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

