<template>
  <header>
    <div class="nav-bar" :class="color">
      <slot name="left">
        <span @click="back" class="link pull-left">
          <slot name="leftIcon">
               <i class="icon arrow4"></i>
          </slot>
        </span>
      </slot>

      <slot name="middle">
        <div class="title">{{title}}</div>
      </slot>

      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
  export default {
    props:['color'],
    name: "BarNav",
    computed:{
      title(){
        if(this.$route.query.title){
          return this.$route.query.title;
        }
        return this.$route.meta.title ? this.$route.meta.title : ' '
      },
    },
    methods: {
      /**返回**/
      back() {
        this.$router ? this.$router.go(-1) : window.history.back()
      }
    }
  }
</script>
