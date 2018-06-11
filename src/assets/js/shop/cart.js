/**
 * Created by andy on 2018/4/23.
 */
import router from '@/router'
const storeJs=require('storejs');

let car={
  //当前购物车列表数据
  order_pay:storeJs('order_pay')||[],

  /**
   * 增加购物车(本地储存)
   * @param goods_info 当前加入商品信息
   * @param cart_sum   购物车数量
   * @param prop_id   规格索引,格式 goods_id_index(索引)
   * @returns {number}
     */
  addCart(goods_info,cart_sum,prop_id=""){
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    if(cart_list_vill.length>0){
      var check=true;
      var stock=0;
      cart_list_vill.forEach((item,index)=>{
        if(!item.choose_prop_id){
          item.choose_prop_id='';
        }

        if(item.goods_id==goods_info.goods_id && item.choose_prop_id==prop_id){
          //console.log("add");
          if(cart_sum>cart_list_vill[index].goods_stock && cart_list_vill[index].goods_stock>-1){
            stock=1;
            cart_list_vill[index].cart_sum=cart_list_vill[index].goods_stock;
            storeJs.set('cart_list'+village_id, cart_list_vill);
          }else{
            cart_list_vill[index].cart_sum=cart_sum;
            storeJs.set('cart_list'+village_id, cart_list_vill);
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
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    goods_info.cart_sum=cart_sum;
    cart_list_vill.push(JSON.parse(JSON.stringify(goods_info)));
    storeJs.set('cart_list'+village_id, cart_list_vill);
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
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    if(cart_list_vill){
      if(all){
        cart_list_vill.find(item=>{
          catNum+=item.cart_sum;
        });
      }else{
        cart_list_vill.find(item=>{
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
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    if(stock<=0){
      return false;
    }else{
      cart_list_vill[key].cart_sum=stock;
    }

    storeJs.set('cart_list'+village_id, cart_list_vill);

  },

  /**
   * 获取购物车金额
   * @param car_index 购物车索引编号,多个以数组传入
   * @returns {{price: number, tcion: number}}
     */
  getMoney(car_index=[]){
    var price=0;
    var tcion=0;
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    if(car_index.length>0){
      car_index.find(item=>{
        price+=(cart_list_vill[item].now_price*cart_list_vill[item].cart_sum);
        tcion+=(cart_list_vill[item].now_tcion*cart_list_vill[item].cart_sum);
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
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];

    if(car_index.length>=cart_list_vill.length){
      cart_list_vill=[];
      storeJs.remove("cart_list"+village_id);
    }else{
      var arr=[];
      cart_list_vill.find((item,key)=>{
        if($.inArray(key,car_index)<0){
          arr.push(item);
        }
      });

      cart_list_vill=arr;
      storeJs.set('cart_list'+village_id, arr);
    }

    storeJs.remove("order_pay");
  },

  /**
   * 清空购物车
   */
  clearCart(){
    let village_id = storeJs('roomInfo').village_id;
    storeJs.remove("cart_list"+village_id);
  },
  /**
   *查询购物车
   *
   */
  query(goods_id, callBack){
    let village_id = storeJs('roomInfo').village_id;
    let cart_list_vill = storeJs('cart_list'+village_id)||[];
    let flag;
    cart_list_vill.find(item=>{
      if(item.goods_id == goods_id){
        flag = false;
      }else {
        flag = true;
      }
    });
    callBack(flag);
  }

};



export default car;
