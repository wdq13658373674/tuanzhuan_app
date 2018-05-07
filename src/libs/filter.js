/**
 * 时间戳转换日期
 * time：时间戳
 * flag：是否显示时分秒（false：不显示，true：显示）
 * **/
let stampToDate=(time,flag)=>{
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

/**
 * 格式化银行卡号
 * v：银行卡号
 * **/
let formate=(v)=>{
  /*if(/\S{5}/.test(v)){
    v=v.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, "$1 ");
  }

  return v;*/
}

export {stampToDate,formate}
