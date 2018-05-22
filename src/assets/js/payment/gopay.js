function gopay(subject,total,user_id,type,callback){
  var onBridgeReady = function(options,callback){
    WeixinJSBridge.invoke(
      "getBrandWCPayRequest",options,
      function(res){
        callback(res,'wxb');
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
        type:type
      },
      url:"http://192.168.1.252/index/pay/gopay",
      success:function(data){
        if(data.status){
          alert('错误:'+data.msg);
        }else{
          if(cordovaLoaded && navigator.userAgent.indexOf('Tuanzhuanw')>-1){
            if(type=='weixin'){
              Wechat.sendPaymentRequest({
                  partnerid:data.data.mch_id,
                  prepayid:data.data.prepay_id,
                  noncestr:data.data.nonce_str,
                  timestamp:data.data.timestamp,
                  sign:data.data.sign
                },
                function(result){
                  callback(result,'app');
                },function(error){
                  console.log(error);
                });
            }else if(type=='alipay'){
              cordova.plugins.MyAlipay.coolMethod(
                data.data,
                function(result){
                  callback(result,'app');
                },function(error){
                  console.log(error);
                });
            }else{
              alert('没有该支付方式');
            }
          }else if(navigator.userAgent.indexOf('MicroMessenger')>-1 && type=='weixin'){
            var options = JSON.stringify(data.data);
            if (typeof WeixinJSBridge == "undefined"){
              if( document.addEventListener ){
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady(options,callback), false);
              }else if (document.attachEvent){
                document.attachEvent('WeixinJSBridgeReady', onBridgeReady(options,callback));
                document.attachEvent('onWeixinJSBridgeReady', onBridgeReady(options,callback));
              }
            }else{
              onBridgeReady(options,callback);
            }
          }else{
            if(type=='weixin' || type=='alipay'){
              callback(data.data,'h5');
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
