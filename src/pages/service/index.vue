<template>
  <div>
    <indexNav></indexNav>
    <section class="page-group">
      <div class="classify-box">
        <div class="classify-list">
          <scroller height="100%" lock-x>
            <ul>
              <li class="item"
                  v-for="(item,index) in tabs"
                  :class="{active:index == tabIndex}"
                  @click="tab(index)">
                <p class="txt">
                  <span class="span">{{item}}</span>
                </p>
              </li>
              <li class="bottom-h"></li>
            </ul>
          </scroller>
        </div>

        <scroller height="100%" lock-x ref="scroller" @on-scroll="onScroll" @on-scroll-bottom="onScrollBottom" style="width: 100%">
          <div class="classify-content">

            <div v-for="(item, index) in serviceList">
              <h3 class="h3 mt40" :id="'tabCon' + index">
                <span class="tit">{{item.service_title}}</span>
                <span class="tit-line"></span>
              </h3>
              <ul class="classify-content-list clearfix">
                <li v-for="two_level in item.two_level" class="item">
                  <router-link class="link" :to="{path: two_level.service_url}">
                    <div class="img-box">
                      <img class="img" v-lazy="two_level.service_logo" alt="" />
                    </div>
                    <p class="txt">{{two_level.service_title}}</p>
                  </router-link>
                </li>
              </ul>
            </div>

            <div class="bottom-h"></div>
          </div>
        </scroller>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import indexNav from '@/pages/layout/indexNav'
  import Footer from '@/pages/layout/footer'
  import { Scroller } from 'vux'

  export default {
    name: "Service",
    components: {
      Scroller,
      indexNav,
      Footer
    },
    data () {
      return {
        tabIndex:0,
        tabs:[],
        onFetching: true,
        scrollTop:0,
        serviceList:{}
      }
    },
    mounted () {
      this.getServiceList();
      this.$nextTick(() => {
        this.$refs.scroller.reset({top: 0})
      })
    },
    methods: {
      getServiceList(){
        this.$axios.get(global.API_HOST+'index/service/getServiceList').then(res=>{
          res=res.data;
          this.serviceList = res.data;
          for(let i in this.serviceList){
            this.tabs.push(res.data[i].service_title);
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      onScrollBottom () {
        // console.log()
      },
      onScroll (pos) {
        this.scrollTop = pos.top

        for(let i=0;i<this.tabs.length;i++){
          var tabCon = this.$el.querySelector('#tabCon' + i);

          if(this.scrollTop >= tabCon.offsetTop - 100){
            this.tabIndex = i;
          }
        }
      },
      tab(index) {
        var tabCon = this.$el.querySelector('#tabCon'+index);
        this.$refs.scroller.reset({top: tabCon.offsetTop},500,'ease-in-out');
      },
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/classify.css';
</style>
<style lang="scss">
  @import "../../core/base";

  .bottom-h{
    @include wh(100%,rem(102));
  }
</style>
