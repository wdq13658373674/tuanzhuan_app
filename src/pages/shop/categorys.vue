<template>
  <section class="page-group">
    <div class="classify-box">
      <div class="classify-list">
        <scroller height="100%" lock-x>
          <ul>
            <li class="item"
                v-for="(item,index) in tabs"
                :class="{active:item.type_id==tabIndex}"
                @click="tab(item.type_id)"
            >
              <p class="txt">
                <span class="span">{{item.type_name}}</span>
              </p>
            </li>
          </ul>
        </scroller>
      </div>

      <scroller height="100%" lock-x style="width:100%;">
      <div class="classify-content">
        <div v-for="items in tabContents" :key="items.type_id">
          <h3 class="h3 mt40">
            <span class="tit">{{items.type_name}}</span>
            <span class="tit-line"></span>
          </h3>
          <ul class="classify-content-list clearfix">
            <li class="item" v-for="item in items.subordinate" :key="item.type_id">
              <router-link :to="{ name: 'ShopCategory', query: {
                id:item.type_id,
                title: item.type_name,
              }}" class="link">
                <div class="img-box">
                  <img class="img" v-lazy="item.type_logo" alt="">
                </div>
                <p class="txt">{{item.type_name}}</p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      </scroller>
    </div>
  </section>
</template>

<script>
  import { Scroller } from 'vux'
  import {mapState} from 'vuex'

  export default {
    name: "ShopCategorys",
    components: {
      Scroller
    },
    data () {
      return {
        tabIndex:0,
        tabs:'',
        tabContents:'',
      }
    },
    computed:{
      ...mapState(['roomInfo'])
    },
    mounted(){
      this.getTabs();
    },
    methods: {
      tab:function(type_id){
        this.tabIndex=type_id;
        this.getContents(type_id);
      },
      getTabs:function(){
        let params={
          lat:this.roomInfo.lat,
          lng:this.roomInfo.lng,
        };

        this.$axios.get(global.API_HOST+'Goods/classify',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
             this.tabs=res.data;
             this.tabIndex=this.tabs[0].type_id;
             this.getContents(this.tabIndex);
          }
        }).catch(err=>{
          console.log('my err:'+err);
        });
      },
      getContents:function(parent_id){
        let params={
          type_parent_id:parent_id,
        }

        this.$axios.get(global.API_HOST+'Goods/getclassifytwo',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.tabContents=res.data;
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/classify.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
