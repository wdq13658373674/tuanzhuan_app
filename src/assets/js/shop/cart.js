/**
 * Created by andy on 2018/4/23.
 */
import router from '@/router'
const storeJs=require('storejs');

let car={
  //当前购物车列表数据
  cart_list:storeJs('cart_list')||[],
  order_pay:storeJs('order_pay')||[],

  /**
   * 增加购物车(本地储存)
   * @param goods_info 当前加入商品信息
   * @param cart_sum   购物车数量
   * @param prop_id   规格索引,格式 goods_id_index(索引)
   * @returns {number}
     */
  addCart(goods_info,cart_sum,prop_id=""){

    if(this.cart_list){
      var check=true;
      var stock=0;
      this.cart_list.forEach((item,index)=>{
        if(!item.choose_prop_id){
          item.choose_prop_id='';
        }

        if(item.goods_id==goods_info.goods_id && item.choose_prop_id==prop_id){
          //console.log("add");
          if(cart_sum>this.cart_list[index].goods_stock && this.cart_list[index].goods_stock>-1){
            stock=1;
            this.cart_list[index].cart_sum=this.cart_list[index].goods_stock;
            storeJs.set('cart_list', this.cart_list);
          }else{
            this.cart_list[index].cart_sum=cart_sum;
            storeJs.set('cart_list', this.cart_list);
          }
          check=false;
          return false;
        }
      });

      if(stock){
        return -1;
      }

      if(check){
        if(cart_sum>goods_info.goods_stock && goods_info.goods_stock>-1){
          return -1;
        }
        this.setCartList(goods_info,cart_sum,prop_id)
      }

    }else{
      if(cart_sum>goods_info.goods_stock && goods_info.goods_stock>-1){
        return -1;
      }
      this.setCartList(goods_info,cart_sum,prop_id)
    }
  },

  /**
   * 增加新数据到购物车
   * @param goods_info 当前加入商品信息
   * @param cart_sum   购物车数量
   * @param prop_id   规格索引,格式 goods_id_index(索引)
   */
  setCartList(goods_info,cart_sum,prop_id){
    goods_info.cart_sum=cart_sum;
    this.cart_list.push(goods_info);
    storeJs.set('cart_list', this.cart_list);
  },

  /**
   * 获取购物车数量
   * @param goods_id 商品ID
   * @param all  状态:false 获取指定商品数量, true 获取全部商品数量
   * @param prop_id   规格索引,格式 goods_id_index(索引)
   * @returns {number}
     */
  getCartShopSum(goods_id=0,prop_id="",all=false){
    let catNum=0;
    //console.log(this.cart_list);
    if(storeJs('cart_list')){
      if(all){
        this.cart_list.find(item=>{
          catNum+=item.cart_sum;
        });
      }else{
        this.cart_list.find(item=>{
          if(!item.choose_prop_id){
            item.choose_prop_id='';
          }

          if(item.goods_id==goods_id && item.choose_prop_id==prop_id){
            catNum=item.cart_sum;
            return true;
          }

        });
      }
    }
    return catNum;
  },

  /**
   * 通过Key值修改购物车数量
   * @param stock
   * @param key
     */
  setCartStock(stock,key){
    if(stock<=0){
      return false;
    }else{
      this.cart_list[key].cart_sum=stock;
    }

    storeJs.set('cart_list', this.cart_list);
  },

  /**
   * 获取购物车金额
   * @param car_index 购物车索引编号,多个以数组传入
   * @returns {{price: number, tcion: number}}
     */
  getMoney(car_index=[]){
    var price=0;
    var tcion=0;
    if(car_index.length>0){
      car_index.find(item=>{
        price+=(this.cart_list[item].now_price*this.cart_list[item].cart_sum);
        tcion+=(this.cart_list[item].now_tcion*this.cart_list[item].cart_sum);
      });
    }

    return {price:price.toFixed(2),tcion:tcion.toFixed(2)};
  },

  /**
   * 设置提交订单
   * @param order
   * @returns {boolean}
     */
  setOrder(order=[]){
    if(order.length>0){
      this.order_pay=order;
      storeJs.set('order_pay',order);

      return true
    }else{
      return false;
    }
  },

  /**
   * 删除购物车指定商品
   * @param car_index 购物车索引编号,多个以数组传入
   * @returns {{price: number, tcion: number}}
   */
  delGoods(car_index=[]){
    car_index.find(item=>{
      this.cart_list.splice(item, 1);
    });
    storeJs.remove("order_pay");
    storeJs.set('cart_list', this.cart_list);
  },

  /**
   * 清空购物车
   */
  clearCart(){
    storeJs.remove("cart_list");
  },
};



export default car;
