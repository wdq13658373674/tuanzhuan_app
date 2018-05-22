<template>
  <div>
    <ColorNav color="trans-bar">
      <i class="icon arrow6" slot="leftIcon"></i>
      <a href="#" class="link pull-right" slot="right">
        <i class="icon device"></i>
        添加设备
      </a>
    </ColorNav>
    <section class="page-group">
      <div class="tz-device-main">
        <div class="flex-box">
          <router-link to="/intelligent/change/house" tag="div" class="title clearfix">
            <span class="f32 pull-left">西城御府2栋2-3</span>
            <div class="change">切换</div>
          </router-link>

          <div class="flex-content">
            <!--tabs-->
            <div class="tabs">
              <scroller lock-x ref="scrollerBottom">
                <div class="tab-items">
                  <div class="item active">
                    <i class="icon icon1"></i>
                    <p>常用</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅1</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅2</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅3</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅4</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅5</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅6</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅7</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅8</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅9</p>
                  </div>
                  <div class="item">
                    <i class="icon icon2"></i>
                    <p>客厅10</p>
                  </div>
                </div>
              </scroller>

              <router-link to="/intelligent/change/set" tag="div" class="item mb30">
                <i class="icon set"></i>
                <p>设置</p>
              </router-link>
            </div>

            <!--tab-box-->
            <div class="tab-box">
              <scroller lock-x height="100%" ref="scrollerBottom2">
                <div class="device-list">
                  <label class="item" :class="{active:item.switchValue}" v-for="(item,index) in deviceLists">
                    <div class="img-box">
                      <img class="img" src="@/assets/images/icons/camera2.jpeg" alt="">
                    </div>
                    <div class="content-box">
                      <div>
                        <p class="p1">
                          <span>客厅</span>
                          <tzSwitch v-model="item.switchValue" @on-change="change(item.switchValue,index)" class="pull-right"></tzSwitch>
                        </p>
                        <p class="p2">智能摄像机</p>
                      </div>

                      <div class="clearfix">
                        <span class="state">摄像机在线</span>
                        <i class="open"></i>
                      </div>
                    </div>
                  </label>

                  <!--设备添加-->
                  <div class="item">
                    <a href="#" class="add">
                      <span class="f32">+</span>
                      <span>添加常用设备</span>
                    </a>
                  </div>
                </div>
              </scroller>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import ColorNav from '@/pages/layout/colorNav'
  import { Scroller} from 'vux'
  import tzSwitch from '@/components/tzswitch'

  export default {
    name: "Index",
    components:{
      ColorNav,
      Scroller,
      tzSwitch
    },
    data(){
      return {
        deviceLists:{
          0:{
            switchValue:false,
            state:0
          },
          1:{
            switchValue:true,
            state:0
          },
          2:{
            switchValue:false,
            state:0
          },
          3:{
            switchValue:false,
            state:0
          },
          4:{
            switchValue:true,
            state:0
          },
          5:{
            switchValue:false,
            state:0
          },
        }
      }
    },
    computed:{

    },
    mounted(){
      /**
       * Scroller 组件重置
       * **/
      this.$nextTick(() => {
        this.$refs.scrollerBottom.reset({top: 0})
      });
      this.$nextTick(() => {
        this.$refs.scrollerBottom2.reset({top: 0})
      })
    },
    methods:{
      /**
       * switch按钮change事件
       * value : 改变后的值(true || false)
       * key : 当前switch索引
       * **/
      change(val,key){
        console.log(val,key);
      },
    }
  }
</script>
<style lang="css" scoped>
  @import "../../assets/css/intellindex.css";

  .animated{
    background: url("../../assets/images/img/m_bg.jpg") no-repeat;
    background-size: cover;
  }
</style>
<style lang="scss">
  @import "../../core/base";
</style>
