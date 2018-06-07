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


const getLocalPosition = function () {
  const geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
      let point={
        lat:r.point.lat,
        lng:r.point.lng,
        time: new Date().getTime()/1000
      };
      storeJs.set('pointInfo',point);
    }
    else {
      console.log('定位失败！');
      return false;
    }
  });
}


/**
 * 地址解析转换经纬度
 * address : 地址名称
 * callback : 回调函数
 * **/
const getPosition=function(address,callback){
  var myGeo = new BMap.Geocoder();
  myGeo.getPoint(address, function(point){
      callback(point);
  },'北京市');
}



/**
 * 经纬度转城市地址
 *lat：经度
 *lng: 纬度
 * callback： 回调函数
 * */
const getCity = function (lat,lng,callback) {
  let point = new BMap.Point(lng,lat);
  let geoc = new BMap.Geocoder();
  geoc.getLocation(point, function(rs){
    //addressComponents对象可以获取到详细的地址信息
    let addComp = rs.addressComponents;
    //let site = addComp.province + ", " + addComp.city + ", " + addComp.district + ", " + addComp.street + ", " + addComp.streetNumber;
    // console.log(rs);
    callback(rs.address)
  });
}


export {getCurrentPosition,getPosition,getCity,getLocalPosition}

