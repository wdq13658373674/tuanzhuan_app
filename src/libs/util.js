const util={
  /**
   * 验证手机号码
   * @param phone:手机号
   * @returns {boolean}
   */
  is_mobile(phone){
    var reg = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;//手机
    return reg.test(phone);
  },
  /**
   * 时间戳转换日期
   * time：时间戳
   * flag：是否显示时分秒（false：不显示，true：显示）
   * **/
  stampToDate(time,flag){
    flag=false;
    let date = new Date(time * 1000);
    let Y = date.getFullYear() + '-';
    let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
    let D = date.getDate() + ' ';
    let h = date.getHours() + ':';
    let m = date.getMinutes() + ':';
    let s = date.getSeconds();

    if(flag){
      return Y+M+D+h+m+s;
    }else{
      return Y+M+D;
    }
  }
};

export default util;
