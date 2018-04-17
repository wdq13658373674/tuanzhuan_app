<template>
  <div class="nav-bar">
    <span @click="back" class="link pull-left">
          <slot name="leftIcon">
               <i class="icon arrow4"></i>
          </slot>
        </span>
  </div>
</template>

<script>
  export default {
    name: "RegNav",
    methods: {
      back() {
        this.$router ? this.$router.back(-1) : window.history.back()
      }
    }
  }
</script>
