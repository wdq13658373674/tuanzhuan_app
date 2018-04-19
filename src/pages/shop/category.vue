<template>
  <section class="page-group">
    <div class="z-index" style="position: relative;">
      <div class="content">
        <router-link :to="{path:'/shop/search',query:querys}" class="search-link">{{querys.title}}</router-link>
      </div>
      <div class="shop-filter">
      <!--<span class="item"-->
            <!--v-for="(item,index) in tabs"-->
            <!--:class="{active:index == tabIndex}"-->
            <!--@click="tab(index)">-->
        <!--{{item}}-->
      <!--</span>-->
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
          <input type="text" placeholder="最低价"> <span class="line">——</span> <input type="text" placeholder="最高价">
        </li>
        <li class="item">
          <span class="tit">团票区间</span>
          <input type="text" placeholder="最低价"> <span class="line">——</span> <input type="text" placeholder="最高价">
        </li>
        <li class="bottom">
          <span class="opera">清空</span>
          <span class="opera orange">确认</span>
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
    </ul>
    <h3 class="no-more mb40" v-show="searchLists==''">
      <span class="tit">- 暂无此商品 -</span>
    </h3>
    <!--mask-->
    <div class="vux-masker vux-masker-fullscreen"  v-show="tabIndex==1 || tabIndex==2" @click="tab(10)"></div>
  </section>
</template>

<script>
  export default {
    name: "ShopCategory",
    components: {
    },
    data () {
      return {
        sorts:['价格降序','价格升序','团票降序','团票升序'],
        sortIndex:10,
        tabIndex:10,
        searchLists:''
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
      this.getSearchLists();
    },
    methods: {
      getSearchLists:function(condition){
        condition={};
        const query=this.$route.query;

        let store_id=query.store_id
            ,type_id=query.type_id ? query.type_id : 0;

        if(query.keyword) {
          condition = {
            'keyword': query.keyword
          }
        }
        /*condition={
          // 'sales':1,
          'keyword':'测试',
          'price':4,
          'goods_price':{
            'p1':0,
            'p2':20
          },
          'goods_tcion':{
            'p1':0,
            'p2':12
          }
        }*/

        let params={
          goods_store_id:store_id,
          goods_type_id:type_id,
          condition:JSON.stringify(condition)
        }

        this.$axios.get('/index/goods/searchAll',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.searchLists=res.data.data;
          }
        }).catch(err=>{
          console.log('my err:'+err);
        })
      },
      tab(index) {
        this.tabIndex=index;
        if(index==0){
          this.sortIndex=10;
        }
      },
      sort(index){
        this.sortIndex=index;
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
  }

  .show{
    height:auto;
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
