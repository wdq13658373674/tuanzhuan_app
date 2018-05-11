<template>
  <header>
    <div class="nav-bar">
      <span @click="back" class="link pull-left">
          <slot name="leftIcon">
               <i class="icon arrow2"></i>
          </slot>
      </span>

      <div class="title">购物车</div>

      <div class="link pull-right">
        <i class="icon del"  @click="del"></i>
      </div>
    </div>
  </header>
</template>

<script>
import cart from '@/assets/js/shop/cart'

  export default {
    name: "cartNav",
    props: ["select"],
    methods: {
      back() {
        this.$router ? this.$router.go(-1) : window.history.back()
      },
      /**删除购物车选中商品**/
      del(){
        let select=this.select;
        if(select.length==0){
          this.$vux.toast.text('请选择要删除的商品','top');
        }else{
          this.$vux.confirm.show({
            title:'提示',
            content:'您确定要删除此商品吗?',
            onConfirm(){
              cart.delGoods(select);
              var money=cart.getMoney();
              this.price=money.price;
              this.tcion=money.tcion;
            }
          })
        }
      }
    }
  }
</script>
