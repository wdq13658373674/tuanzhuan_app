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
  /**[A-Za-z0-9_\-\u4e00-\u9fa5]+
   * 身份证格式验证
   * card: 身份证号
   */
  is_card(card) {
    var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    var card = card.match(reg);
    if (card != null) {
      return true;  //正确
    } else {
      return false; //错误
    }
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
  },
  /**
   * 去除字符串空格
   * str:字符串
   * is_global:('true'表示去除所有空格，否则只去除首尾空格)
   * */
  Trim(str,is_global) {
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g, "");
    if (is_global) {
      result = result.replace(/\s/g, "");
    }
    return result;
  },
  /**格式化银行卡4位空一格
   * v : 银行卡号
   * */
  formates(v){
    if(/\S{5}/.test(v)){
      v=v.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
    }

    return v;
  },
};

export default util;
