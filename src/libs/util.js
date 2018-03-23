let util={
  is_mobile(phone){
    var reg = /^((\(\d{2,3}\))|(\d{3}\-))?(13|15|18|14|17)\d{9}$/;//手机
    return reg.test(phone);
  }
};

export default util;
