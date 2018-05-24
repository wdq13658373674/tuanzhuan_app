<template>
  <div>
    <!--section-->
    <section class="page-group address-list">
      <p class="tz-default-empty" v-if="addressList==''">你还没有添加地址</p>
      <div class="item" v-for="(item,index) in addressList">
        <label class="cell">
          <div>
            <input type="radio" name="pay"  :value="item.address_id" v-model="select">
            <div class="radio">
              <i class="check"></i>
            </div>
          </div>
          <div class="txt">
            <p>
              <span>{{item.address_user_realname}}</span>
              <span class="pull-right">{{item.address_user_phone}}</span>
            </p>
            <p class="p2">{{item.address_comment}}</p>
          </div>
        </label>
        <router-link :to="{name:'ShopEditAddress',params:{
          id:item.address_id
        }}" class="link" append>
          <i class="icon edit"></i>
        </router-link>
      </div>
    </section>

    <!--footer-->
    <footer>
      <router-link to="add" class="bottom-fixed btn-orange-fixed" append>添加地址</router-link>
    </footer>
  </div>
</template>

<script>
  const qs = require("querystring")
  import { mapState } from 'vuex'
  export default {
    name: "ShopAddress",
    components: {

    },
    data () {
      return {
        addressList:'',
      }
    },
    computed:{
      ...mapState(['userInfo']),
      select:{
        /**获取默认地址**/
        get(){
          var select;
          this.addressList.forEach(function(item){
            if(item.address_default==1){
              select=item.address_id;
            }
          })

          return select;
        },
        /**修改默认地址**/
        set(value){
          let params={
            address_user_id:this.userInfo.user_id,
            address_id:value,
          }
          this.$axios.post(global.API_HOST+'User_address/set_default',qs.stringify(params)).then(res=>{
            res=res.data;
            if(res.status==0){
              if(this.$route.query.type){
                this.$router.push({path: '/shop/order',query:{ type:this.$route.query.type}});
              }else{
                this.$router.push('/shop/order');
              }
            }
          }).catch(err=>{
            console.log('my err:'+err);
          })
        }
      }
    },
    mounted(){
      this.getAddressList();
    },
    methods: {
      /**获取地址列表**/
      getAddressList(){
        let params={
          address_user_id:this.userInfo.user_id
        }

        this.$axios.get(global.API_HOST+'User_address/allAddress',{
          params:params
        }).then(res=>{
          res=res.data;

          if(res.status==0){
            this.addressList=res.data;
          }
        }).catch(err=>{
          console.log('my err:'+err)
        })
      }
    }
  }
</script>
<style lang="css" scoped>
  @import '../../assets/css/address.css';
</style>
<style lang="scss">
  @import "../../core/base";
</style>
