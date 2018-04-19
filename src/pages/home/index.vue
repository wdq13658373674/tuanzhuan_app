<template>
  <div>
    <indexNav></indexNav>
    <section class="page-group">
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="0">
        <div class="content">
          <div class="banner" style="">
            <div class="clearfix">
              <div class="pull-left day">{{lunarData.cDay}}</div>
              <div class="pull-left date">
                <p>
                  <span class="mr10">{{lunarData.ncWeek}}</span>
                  <span>农历{{lunarData.monthCn}}{{lunarData.dayCn}}</span>
                </p>
                <p>{{lunarData.cYear}}年{{lunarData.cMonth}}月</p>
              </div>
            </div>
            <div class="temp">
              <span class="mr10">{{weather.weather}}</span>
              <span>气温{{weather.temperature}}</span>
              <span>{{weather.wind}}</span>
            </div>
          </div>

          <div class="menu-index">
            <router-link to="/property" class="item">
              <img class="img" src="@/assets/images/icons/menu1.svg" alt="">
              <p class="txt">物业缴费</p>
            </router-link>
            <router-link to="/life" class="item">
              <img class="img" src="@/assets/images/icons/menu2.svg" alt="">
              <p class="txt">生活缴费</p>
            </router-link>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu3.svg" alt="">
              <p class="txt">投诉建议</p>
            </a>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu4.svg" alt="">
              <p class="txt">报事报修</p>
            </a>
            <a href="#" class="item">
              <img class="img" src="@/assets/images/icons/menu5.svg" alt="">
              <p class="txt">全部服务</p>
            </a>
          </div>

          <div class="tips" v-if="newsLists">
            <span class="pull-left f24 mr10"><i class="icon notice mr10"></i></span>
            <div class="pull-left">
              <marquee>
                <marquee-item v-for="item in newsLists" :key="item.id" class="align-middle">
                  <router-link :to="{ path: '/article/detail', query: { id: item.id }}">{{item.notic_title}}</router-link>
                </marquee-item>
              </marquee>
            </div>

            <router-link to="article" class="pull-right gray" append>更多<i class="ml10 icon arrow"></i></router-link>
          </div>

          <h1 class="h1">
            <em class="pull-left">生活服务</em>
            <a class="pull-right gray">更多<i class="ml10 icon arrow"></i></a>
          </h1>

          <div class="life-list">
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img3.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
            <a href="#" class="item">
              <div class="img-box">
                <img class="img" src="@/assets/images/test/img1.jpg" alt="">
              </div>
              <p class="txt">日常保洁日常保洁日常保洁</p>
            </a>
          </div>

        </div>

        <div class="content mt20">
          <h1 class="h1">
            <em class="pull-left">团转商城</em>
            <router-link to="shop" class="pull-right gray">更多<i class="ml10 icon arrow"></i></router-link>
          </h1>

          <div class="shop-list mb70">
            <router-link :to="{path:'/shop/detail',query:{id:item.goods_id}}" class="item" v-for="item in goodsLists" :key="item.goods_id">
              <div class="img-box">
                <img class="img" v-lazy="item.goods_logo" alt="">
              </div>
              <p class="p1">{{item.goods_name}}</p>
              <p class="p2">
                <i class="icon tp mr10"></i>
                <span class="orange">{{item.goods_tcion}}</span>
                <!--<span class="shop-mark yellow-bg">满减</span>-->
                <span class="shop-mark pink-bg" v-if="parseInt(item.goods_discount)>0">{{item.goods_discount}}折</span>
              </p>
              <p class="p3">
                <span class="pull-left">¥{{item.goods_price}}</span>
                <span class="gray pull-right">已售{{item.goods_sell_count}}</span>
              </p>
            </router-link>
          </div>
        </div>

        <!--<load-more class="load-more" tip="正在加载" v-show="busy"></load-more>-->
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>

<script>
  import indexNav from '@/pages/layout/indexNav'
  import Footer from '@/pages/layout/footer'

  import solarLunar from 'solarLunar'
  import {mapState} from 'vuex'
  import {Marquee, MarqueeItem , Scroller , LoadMore} from 'vux'
  import infiniteScroll from 'vue-infinite-scroll'

  export default {
    name: "Index",
    directives: {infiniteScroll},
    components:{
      indexNav,
      Marquee,
      MarqueeItem,
      Scroller,
      LoadMore,
      Footer
    },
    data(){
      return{
        /*list: [
          'https://o5omsejde.qnssl.com/demo/test1.jpg',
          'https://o5omsejde.qnssl.com/demo/test2.jpg',
          'https://o5omsejde.qnssl.com/demo/test0.jpg',
          'https://o5omsejde.qnssl.com/demo/test4.jpg',
          'https://o5omsejde.qnssl.com/demo/test5.jpg',
          'https://o5omsejde.qnssl.com/demo/test6.jpg',
          'https://o5omsejde.qnssl.com/demo/test7.jpg',
          'https://o5omsejde.qnssl.com/demo/test8.jpg'
        ],*/
        busy:false,
        load:false,
        page:0,
        weather:'',
        newsLists:'',
        goodsLists:'',
        lunarData:''
      }
    },
    computed:{
      ...mapState(['roomInfo'])
    },
    mounted:function(){
      this.getNewsLists();
      this.getGoodsLists();
      this.getMap();
      this.getWeather();
    },
    methods:{
      getMap:function(){
        if(!this.roomInfo.village_name){
          this.$router.push('/location');
        }
      },
      getWeather:function(){
        const url='https://bird.ioliu.cn/v1?url=';
        let location=this.roomInfo.lng + ',' + this.roomInfo.lat;

        const param={
          location:location,
          output:'json',
          ak:'4ChzIxMmmkgsV1uhED0baRa3XsZVG777'
        }

        this.$axios.get(url+'http://api.map.baidu.com/telematics/v3/weather',{
          params:param
        }).then(res=>{
          res=res.data;

          const date=res.date.split('-');
          let year=parseInt(date[0])
            ,month=parseInt(date[1])
            ,day=parseInt(date[2]);

          this.lunarData = solarLunar.solar2lunar(year,month,day);
          this.weather=res.results[0].weather_data[0];
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      getNewsLists:function(){
        const param={
          'notic_village_id' : this.roomInfo.village_id
        }

        this.$axios.get('index/House_notic/getTitle',{
          params : param
        }).then(res=>{
          res=res.data;
          this.newsLists = res.data;
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      getGoodsLists:function(){
         let param={
           lat:this.roomInfo.lat,
           lng:this.roomInfo.lng,
          }

          this.$axios.get('/index/Goods/IndexGoods',{
            params:param
          }).then(res=>{
            res=res.data;
            console.log(res);
            if(res.status==0){
              this.goodsLists=res.data.goods;

              this.$store.commit('update_storeInfo',res.data.store);
            }
          }).catch(err=>{
            console.log('my err:'+err);
          })
      },
      loadMore: function() {
        /*this.busy = true;
        this.page++;*/
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../assets/css/index.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
