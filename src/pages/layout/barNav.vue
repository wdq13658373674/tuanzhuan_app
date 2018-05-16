<template>
  <header>
    <div class="nav-bar">
      <slot name="left">
        <span @click="back" class="link pull-left">
          <slot name="leftIcon">
               <i class="icon arrow2"></i>
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
    name: "BarNav",
    props: ["title"],
    mounted(){

    },
    methods: {
      /**返回**/
      back() {
        if(this.$route.name=='UserOrder'){
          this.$router.push('/user');
          return;
        }
        if(this.$route.name=='OrderPayDetail'){
          this.$router.go(-2);
          return;
        }

        this.$router ? this.$router.go(-1) : window.history.back()
      }
    }
  }
</script>
