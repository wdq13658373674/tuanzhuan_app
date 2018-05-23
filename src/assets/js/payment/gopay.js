function gopay(subject,total,user_id,type,callback){
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
        type:type
      },
      url:"http://192.168.1.252/index/pay/gopay",
      success:function(data){
        if(data.status){
          alert('错误:'+data.msg);
        }else{
          var useragent = navigator.userAgent.toLowerCase();
          if(cordovaLoaded && useragent.indexOf('tuanzhuanw')>-1){
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
          }else if(useragent.indexOf('micromessenger')>-1 && type=='weixin'){
            var options = JSON.parse(data.data);
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
          }else if(type=='weixin' && (useragent.indexOf('ipad')>-1 || useragent.indexOf('iphone')>-1 || useragent.indexOf('midp')>-1 || useragent.indexOf('rv:1.2.3.4')>-1 || useragent.indexOf('ucweb')>-1 || useragent.indexOf('android')>-1 || useragent.indexOf('windows ce')>-1 || useragent.indexOf('windows mobile')>-1)){
            callback(data.data,'wap');
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
