/**
 * 个人中心资料修改接口
 * @param type : 修改的类型
 * @param value : 修改后的值
 */
const qs = require("querystring");
const updateMessage=function(self,data){
  let params={
    user_id:self.userInfo.user_id,
    ...data
  }

  self.$axios.post(global.API_HOST+'User/setUser',qs.stringify(params)).then(res=>{
    res=res.data;
    if(res.status==0){
      self.$vux.toast.text('修改成功','top');
    }else{
      self.$vux.toast.text('你没有修改','top');
    }
  }).catch(err=>{
    console.log('my err:'+err);
  })
}

export {updateMessage};
