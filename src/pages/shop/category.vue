<template>
  <section class="page-group">
    <div class="z-index" style="position: relative;">
      <div class="content">
        <router-link :to="{path:'/shop/search',query:querys}" class="search-link">{{querys.title}}</router-link>
      </div>
      <div class="shop-filter">
        <span class="item" @click="tab(0)" :class="{'active':tabIndex==0}">销量优先</span>
        <span class="item" @click="tab(1)" :class="{'active':tabIndex==1}">
          价格排序
          <i class="icon sort" :class="{'up':sortIndex==1 || sortIndex==3,'down':sortIndex==0 || sortIndex==2}"></i>
        </span>
        <span class="item" @click="tab(2)" :class="{'active':tabIndex==2}">
          筛选
          <i class="icon filter"></i>
        </span>
      </div>

      <!--价格排序-->
      <ul class="sort-price cell-list" :class="tabIndex==1 ? 'show' : ''">
        <li class="item"
            v-for="(item,index) in sorts"
            @click="sort(index)"
            :class="{'orange':sortIndex==index}"
        >{{item}}</li>
      </ul>

      <!--价格筛选-->
      <ul class="sort-filter" :class="tabIndex==2 ? 'show' : ''">
        <li class="item">
          <span class="tit">价格区间</span>
          <input type="text" v-model="p1" placeholder="最低价"> <span class="line">——</span> <input type="text" v-model="p2" placeholder="最高价">
        </li>
        <li class="item">
          <span class="tit">团票区间</span>
          <input type="text" v-model="p3" placeholder="最低价"> <span class="line">——</span> <input type="text" v-model="p4" placeholder="最高价">
        </li>
        <li class="bottom">
          <span class="opera" @click="empty()">清空</span>
          <span class="opera orange" @click="filter()">确认</span>
        </li>
      </ul>
    </div>

    <ul class="shop-search-list">
      <li class="item" v-for="items in searchLists">
        <router-link class="cell" :to="{path:'/shop/detail',query:{
          id:items.goods_id
        }}">
          <div class="img-box">
            <img class="img" v-lazy="items.goods_logo" alt="">
          </div>
          <div class="con-box">
            <p class="title">{{items.goods_name}}</p>
            <div>
              <!--<p class="mt10">
                <span class="shop-mark yellow-bg">会员7折</span>
                <span class="shop-mark pink-bg">满100减50</span>
              </p>-->
              <p class="mt20">
                <i class="icon tp mr10"></i>
                <span class="orange">{{items.goods_tcion}}</span>
                <span>¥{{items.goods_price}}</span>
              </p>
            </div>
          </div>
        </router-link>
      </li>

      <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <load-more class="load-more" tip="正在加载" v-show="load"></load-more>
        <h3 class="no-more mb40" v-show="!load">
          <span class="tit">- 没有更多记录了 -</span>
        </h3>
      </li>
    </ul>
    <!--mask-->
    <div class="vux-masker vux-masker-fullscreen"  v-show="tabIndex==1 || tabIndex==2" @click="tab(10)"></div>
  </section>
</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
  import { LoadMore} from 'vux'
  export default {
    name: "ShopCategory",
    directives: {infiniteScroll},
    components: {
      LoadMore
    },
    data () {
      return {
        busy:false,
        load:false,
        page:0,
        sorts:['价格降序','价格升序','团票降序','团票升序'],
        sortIndex:10,
        tabIndex:10,
        searchLists:[],
        condition:{},
        p1:'',
        p2:'',
        p3:'',
        p4:'',
      }
    },
    computed:{
      querys:function(){
        const query=this.$route.query;

        const querys={
          store_id:query.store_id,
          type_id:query.type_id,
          title:query.title
        }

        return querys;
      }
    },
    mounted(){
      this.loadMore();
    },
    methods: {
      getSearchLists(flag){
        const query=this.$route.query;

        let store_id=query.store_id
          ,type_id=query.type_id ? query.type_id : 0;

        if(query.keyword) {
          this.condition.keyword=query.keyword;
        }

        let params={
          goods_store_id:store_id,
          goods_type_id:type_id,
          condition:JSON.stringify(this.condition)
        }

        this.$axios.get('/index/goods/searchAll',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            if(flag){
              this.searchLists=this.searchLists.concat(res.data.data);

              if(this.page >= res.data.last_page){
                this.busy=true;
                this.load=false;
              }else {
                this.busy=false;
                this.load=true;
              }

            }else {
              //第一次加载
              this.searchLists=res.data.data;
              this.busy=false;
              this.load=false;
            }
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      tab(index) {
        this.tabIndex=index;
        if(index==0){
          this.condition.price='';
          this.condition.sales=1;
          this.sortIndex=10;
          this.reset();
          this.loadMore();
        }
      },
      sort(index){
        this.tabIndex=10;
        this.sortIndex=index;

        this.condition.sales='';
        this.condition.price=index+1;

        this.reset();
        this.loadMore();
      },
      filter(){
        this.tabIndex=10;
        this.p1=this.p1 || 0;
        this.p2=this.p2 || 0;
        this.p3=this.p3 || 0;
        this.p4=this.p4 || 0;

        if(this.p1!=0 || this.p2!=0){
          this.condition.goods_price={
            p1:this.p1,
            p2:this.p2,
          }
        }

        if(this.p3!=0 || this.p4!=0){
          this.condition.goods_tcion={
            p1:this.p3,
            p2:this.p4,
          }
        }

        this.reset();
        this.loadMore();
      },
      loadMore(){
        this.busy = true;
        this.load = true;
        this.page++;
        this.getSearchLists(true);
      },
      reset(){
        this.busy=false;
        this.load=false;
        this.searchLists=[];
        this.page=0;
      },
      empty(){
        this.p1='';
        this.p2='';
        this.p3='';
        this.p4='';
      }
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shopCategory.css';
</style>
<style lang="scss">
  @import "../../core/base";
  .nav-bar,.z-index{
    z-index:20000;
  }

  .sort-price,.sort-filter{
    height:0;
    overflow: hidden;
    @include transition(all .3s linear);

    &.show{
      height:auto;
    }
  }

  .slide-down-box{
    background: #fff;
  }

  .vux-masker-fullscreen {
    position: fixed;
    z-index: 10001;
  }
  .vux-masker {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    border-radius: inherit;
    background-color: rgba(0, 0, 0, 0.5);
  }
</style>
