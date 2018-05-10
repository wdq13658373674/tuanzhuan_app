/**
 * 时间戳转换日期
 * time：时间戳
 * flag：是否显示时分秒（false：不显示，true：显示）
 * **/
let stampToDate=(time,flag)=>{
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

/**
 * 格式化银行卡号星号并4个数字空格分割
 * cards：银行卡号
 * **/
let formatCards=(cards)=>{
  cards=cards.substr(0,4)+"********"+cards.substr(-4);
  return cards;
}

/**
 * 格式化电话号码星号代替
 * mobile： 电话号码
 * **/
let formatMobile=(mobile)=> {
  if (mobile.length > 7) {
    var new_mobile = mobile.substr(0, 3) + '****' + mobile.substr(7)
  }
  return new_mobile
}

export {stampToDate,formatCards,formatMobile}
