function gopay(subject,total,user_id,type,out_trade_no,callback){
  if(typeof callback != 'function'){console.error('param 7 type error, the callback must be a function');return;}
  var onBridgeReady = function(options){
    WeixinJSBridge.invoke(
      "getBrandWCPayRequest",options,
      function(res){
        if(res.err_msg=="get_brand_wcpay_request:ok"){
          alert('支付成功');
          setTimeout("window.location.history.go(-1)",2000);
        }else{
          if(res.err_msg == "get_brand_wcpay_request:cancel"){
            alert("支付失败:你取消了支付");
          }else if(res.err_msg == "get_brand_wcpay_request:fail"){
            alert("支付失败:"+res.err_msg+' : '+res.err_desc);
          }else{
            alert("支付失败:"+res.err_msg+' : '+res.err_desc);
          }
          setTimeout("window.location.history.go(-1)",2000);
        }
      }
    );
  }
    $.ajax({
      type:"post",
      dataType:"json",
      data:{
        subject:subject,
        total:total,
        user_id:user_id,
        type:type,
        out_trade_no:out_trade_no
      },
      url:"http://192.168.1.252/index/pay/gopay", /*正式环境请更改域名*/
      success:function(data){
        if(data.status){
          alert('错误:'+data.msg);
        }else{
          if(cordovaLoaded && data.data.type=='app'){
            if(type=='weixin'){
              Wechat.sendPaymentRequest({
                  partnerid:data.data.data.mch_id,
                  prepayid:data.data.data.prepay_id,
                  noncestr:data.data.data.nonce_str,
                  timestamp:data.data.data.timestamp,
                  sign:data.data.data.sign
                },
                function(result){
                  callback(result,'app');
                },function(error){
                  console.log(error);
                });
            }else if(type=='alipay'){
              cordova.plugins.MyAlipay.coolMethod(
                data.data.data,
                function(result){
                  callback(result,'app');
                },function(error){
                  console.log(error);
                });
            }else{
              alert('没有该支付方式');
            }
          }else if(data.data.type=='jsapi'){
            var options = JSON.parse(data.data.data);
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady(options), false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady(options));
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(options));
              }
            }else{
              onBridgeReady(options);
            }
          }else{
            if(type=='weixin' || type=='alipay'){
              if(data.data.type=='h5' && navigator.userAgent.indexOf('Tuanzhuanw')>-1){
                cordova.InAppBrowser.open(data.data.data, '_blank', 'location=yes,hideurlbar=yes,clearcache=yes,clearsessioncache=yes');
                return;
              }
              callback(data.data.data,data.data.type);
            }else{
              alert('没有该支付方式');
            }
          }
        }
      },error:function(hxr,status,error){
        alert(error);
      }
    });
  }
export default gopay;
