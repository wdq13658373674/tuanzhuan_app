<template>
  <div>
    <section class="page-group">
      <ul class="user-income-list">
        <li v-for="item in listData" class="item">
          <p class="p1 cell">
            <span v-if="item.user_ticket_change_type === 'goods'">消费</span>
            <span v-else-if="item.user_ticket_change_type === 'refund'">退款</span>
            <span v-else-if="item.user_ticket_change_type === 'property'">物业缴费</span>
            <span v-else-if="item.user_ticket_change_type === 'recharge'">充值</span>
            <span v-else>后台操作</span>
            <span class="span gray">{{item.add_time | stampToDate(true)}}</span>
          </p>
          <p class="p2 cell">
            <span class="span">余额：{{item.user_ticket_change_balance || 0.00}}</span>
            <span>{{item.user_ticket_change_ticket || 0.00}}</span>
          </p>
        </li>

        <li v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
          <load-more class="load-more" tip="正在加载" v-show="load"></load-more>
          <h3 class="no-more mb40" v-show="!load">
            <span class="tit">- 没有更多记录了 -</span>
          </h3>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
  import infiniteScroll from 'vue-infinite-scroll'
  import {LoadMore} from 'vux'
  import {mapState} from 'vuex'
  export default {
    name: "IncomeMoney",
    directives: {infiniteScroll},
    components: {
      LoadMore
    },
    computed:{
      ...mapState(['userInfo'])
    },
    data() {
      return {
        listData:[],
        page:0,
        busy:false,
        load:false,
      }
    },
    mounted(){
      this.loadMore();
    },
    methods:{
      list(flag){
        let params={
          user_id: this.userInfo.user_id,
          page: this.page
        };
        this.$axios.get(global.API_HOST+'user_change/ticket',{
          params:params
        }).then(res=>{
          res=res.data;
          if(flag){
            //多次加载
            res.data.data.map((item, index)=>{
              this.listData.push(item);
            });
            if(this.page >= res.data.last_page){
              this.busy=true;
              this.load=false;
            }else {
              this.busy=false;
              this.load=true;
            }

          }else {
            //第一次加载
            this.listData=res.data;
            this.busy=false;
            this.load=false;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      },
      loadMore(){
        this.busy = true;
        this.load = true;
        this.page++;
        this.list(true);
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../../assets/css/userIncome.css';
</style>
<style lang="scss">
  @import "../../../core/base";

</style>
