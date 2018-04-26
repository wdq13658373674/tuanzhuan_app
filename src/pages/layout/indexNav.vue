<template>
  <header>
    <div class="nav-bar">
      <router-link to="/location" class="link pull-left">
        <i class="icon address mr10"></i>
        <span class="name">{{village_name}}</span>
      </router-link>

      <a href="#" class="pull-right ml10">
        <i class="icon phone"></i>
      </a>
      <a href="#" class="pull-right">
        <i class="icon ew"></i>
      </a>
    </div>
  </header>
</template>

<script>

  import {mapState} from 'vuex'

  export default {
    name: "IndexNav",
    data(){
      return{
        village_name:''
      }
    },
    components:{

    },
    computed:{
      ...mapState(['roomInfo'])
    },
    mounted(){
      this.getVillage();
    },
    methods: {
      getVillage:function(){
        if(this.roomInfo && this.roomInfo.village_name){
          this.village_name=this.roomInfo.village_name;
        }
      }
    }
  }
</script>
