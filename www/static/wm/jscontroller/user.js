var msgDB=(store("msgDB"))?store("msgDB"):[];

var user = {
    //发送消息给社区方法 wsocket.doSend({controller:'index',action:'sendToVillage',result:{message:'消息内容',village_id:'小区ID'}});
    //发送消息给用户方法 wsocket.doSend({controller:'index',action:'sendToUid',result:{message:'消息内容',uid:'用户的UID/手机账号名'}});
    //发送成功后没有回调,发送错误时回传index的error方法
    showmessage: function(data){
      var timestamp = Date.parse(new Date());

      //历史记录限制条数处理(100条历史记录)
      if(msgDB.length>100){
        msgDB.splice(0,msgDB.length-100);
      }

      var arr={
        msg:data.result.text,
        time:timestamp/1000,
        status:0
      };
      msgDB.push(arr);

      store.set('msgDB', msgDB);

      if($("#moban")){
        var tpl=$("#moban").html();
        tpl =tpl.replace('{msg}',data.result.text);
        $("#msgbox").append(tpl);

        var msgbox=$("#msg-centent");
        msgbox.scrollTop(msgbox[0].scrollHeight);

      }
        //接受到的文本消息处理 data.result.message为消息内容,data.result.uid为消息来源用户UID,发送消息时需要带此参数
        //console.log(data);
    },
    sendsuccess:function(data){
      var timestamp = Date.parse(new Date());

      //历史记录限制条数处理(100条历史记录)
      if(msgDB.length>100){
        msgDB.splice(0,msgDB.length-100);
      }

      var arr={
        msg:data.result.text,
        time:timestamp/1000,
        img:data.result.type,
        status:1
      };
      msgDB.push(arr);

      store.set('msgDB', msgDB);

        //发送文本消息成功后的回传方法
      $(".tz-msg-loading").remove();
      //console.log(data);
    },
    senderror:function(data){
      console.log(data);
    },
    notic:function(data){
        //接收推送通知信息并显示
        if(cordovaLoaded){
            cordova.plugins.notification.local.schedule(data.result.notic);
        }
    }
}
