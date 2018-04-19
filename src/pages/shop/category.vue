<template>
  <section class="page-group">
    <div class="content">
      <router-link :to="{path:'/shop/search',query:querys}" class="search-link">{{querys.title}}</router-link>
    </div>
    <div class="shop-filter">
      <span class="item">销量优先</span>
      <span class="item" @click="sortPrice">
        价格排序
        <i class="icon sort" :class="up"></i>
      </span>
      <span class="item" @click="sortFilter">
        筛选
        <i class="icon filter"></i>
      </span>

      <div class="slide-down-box"  :class="price || filter?'animate':''">
        <!--价格排序-->
        <ul class="sort-price cell-list" v-show="price">
          <li class="item" @click="up='down'">价格降序</li>
          <li class="item" @click="up='up'">价格升序</li>
          <li class="item" @click="up='down'">团票降序</li>
          <li class="item" @click="up='up'">团票升序</li>
        </ul>
        <!--价格排序-->

        <!--价格筛选-->
        <ul class="sort-filter" v-show="filter">
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
        <!--价格筛选-->
      </div>
    </div>
    <!--<masker class="masker" v-show="price || filter" :fullscreen="true"></masker>-->

    <ul class="shop-search-list">
      <li class="item" v-for="items in searchLists">
        <router-link class="cell" to="">
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
  </section>
</template>

<script>
  import { Masker } from 'vux'

  export default {
    name: "ShopCategory",
    components: {
      Masker
    },
    data () {
      return {
        price: false,
        filter: false,
        up:'',
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
      sortPrice:function () {
        this.filter=false;
        this.price=!this.price;
      },
      sortFilter:function(){
        this.price=false;
        this.filter=!this.filter;
      },
    },
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/shopCategory.css';

  .slide-down-box {
    overflow: hidden;
    height: 0;
  }
  .animate {
    height: auto;
  }
</style>
<style lang="scss">
  @import "../../core/base";

  .masker{
    .vux-masker-fullscreen{
      z-index:1;
    }

    .vux-masker{
      top:rem(270);
    }
  }
</style>
