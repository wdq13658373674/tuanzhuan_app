<template>
  <section class="page-group">
    <div class="content">
      <router-link to="/shop/search" class="search-link">外套</router-link>
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
    <masker class="masker" v-show="price || filter" :fullscreen="true"></masker>

    <ul class="shop-search-list">
      <li class="item">
        <a class="cell" href="#">
          <div class="img-box">
            <img class="img" src="@/assets/images/test/img4.png" alt="">
          </div>
          <div class="con-box">
            <p class="title">秋冬折扣 zara 女装 垫肩装饰夹克 基本款外套 皮外套 07894894712</p>
            <div>
              <p class="mt10">
                <span class="shop-mark yellow-bg">会员7折</span>
                <span class="shop-mark pink-bg">满100减50</span>
              </p>
              <p class="mt20">
                <i class="icon tp mr10"></i>
                <span class="orange">29.00</span>
                <span>¥36.00</span>
              </p>
            </div>
          </div>
        </a>
      </li>
      <li class="item">
        <a class="cell" href="#">
          <div class="img-box">
            <img class="img" src="@/assets/images/test/img4.png" alt="">
          </div>
          <div class="con-box">
            <p class="title">秋冬折扣 zara 女装 垫肩秋冬折扣 zara 女装 垫肩装秋冬折扣 zara 女装 垫肩装秋冬折扣 zara 女装 垫肩装秋冬折扣 zara 女装 垫肩装秋冬折扣 zara 女装 垫肩装秋冬折扣 zara 女装 垫肩装装饰夹克 基本款外套 皮外套 07894894712</p>
            <div>
              <p class="mt10">
                <span class="shop-mark yellow-bg">会员7折</span>
                <span class="shop-mark pink-bg">满100减50</span>
              </p>
              <p class="mt20">
                <i class="icon tp mr10"></i>
                <span class="orange">29.00</span>
                <span>¥36.00</span>
              </p>
            </div>
          </div>
        </a>
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
      }
    },
    methods: {
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
