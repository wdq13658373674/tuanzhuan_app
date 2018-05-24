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
        let routeName=this.$route.name;
        /*if(this.$route.name=='Property'){
          this.$router.replace('/');
          return;
        }*/

        if(routeName=='UserOrder'){
          this.$router.push('/user');
          return;
        }
        if(routeName=='OrderPayDetail'){
          this.$router.push({
            name:'UserOrder'
          });
          return;
        }

        this.$router ? this.$router.go(-1) : window.history.back()
      }
    }
  }
</script>
