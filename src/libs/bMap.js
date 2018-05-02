import router from '@/router'
const storeJs=require('storejs');

/**
 * 定位获取当前地址经纬度
 * **/
const getCurrentPosition=function(){
  if(storeJs('roomInfo')){
    return;
  }else {
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        let point={
          lat:r.point.lat,
          lng:r.point.lng,
        }

        storeJs.set('roomInfo',point);

        router.push('/location');
      }
      else {
        console.log('定位失败！');
        router.push('/location');
        return false;
      }
    });
  }
}

/**
 * 地址解析转换经纬度
 * **/
const getPosition=function(address,callback){
  var myGeo = new BMap.Geocoder();
  myGeo.getPoint(address, function(point){
      callback(point);
  },'北京市');
}

export {getCurrentPosition,getPosition}

