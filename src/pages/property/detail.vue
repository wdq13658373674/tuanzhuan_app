<template>
  <div>
    <section class="page-group">
      <div class="content">
        <div class="bill">
          <p>
            <span v-if="property_month_end - property_month_begin == 0 " class="f32 mr10">{{property_year}} {{property_month_begin}}月账单</span>
            <span v-else class="f32 mr10">{{property_year}}年 {{property_month_begin}}月 -  {{property_month_end}}月账单</span>
            <span class="pull-right">单位：元</span>
          </p>
          <p v-if="property_finished == 0">未缴纳</p>
          <p v-else>已缴费</p>
          <p>¥ {{property_money}}</p>
          <p>账单总金额</p>
        </div>

        <div class="radio-title">
          <label>
            <input type="checkbox" name="pay" v-bind:checked="select?'':'checked'" @click="check">
            <div class="radio pull-left mr20">
              <i class="check"></i>
            </div>
            <span class="txt">物业服务费详情</span>
          </label>
        </div>

        <ul class="cell-list ml53" style="list-style: disc;">
          <li class="item">
            <span class="tit">物业服务费</span>
            <span>¥ {{property_money}}</span>
          </li>
        </ul>
      </div>
    </section>

    <footer>
      <router-link :to="{name:'OrderPay',query:{type:'property',property_id:property_id}}" class="bottom-fixed btn-orange-fixed" :class="select?'disabled':''">我要缴费</router-link>
    </footer>
  </div>
</template>

<script>
  export default {
    name: "ServiceDetail",
    computed:{

    },
    data() {
      return {
        property_finished: 0,
        property_month_begin: '',
        property_month_end: '',
        property_year: '',
        property_money: 0,
        select: false,
        property_id:0
      }
    },
    mounted(){
      this.getPropertyDetail();
    },
    methods:{
      getPropertyDetail(){
        let params={
          property_id:this.$route.query.property_id
        };
        this.$axios.get(global.API_HOST+'property/getPropertyList',{
          params:params
        }).then(res=>{
          res=res.data;
          this.property_finished = res.data.property_finished;
          this.property_month_begin = res.data.property_month_begin;
          this.property_month_end = res.data.property_month_end;
          this.property_year = res.data.property_year;
          this.property_money = res.data.property_money;
          this.property_id = res.data.property_id;
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      check(){
        this.select = !this.select;
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/property.css';
</style>
