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
                                     alert(point.lat);
             storeJs.set('roomInfo',point);
         }else {
             alert('百度地图定位失败！');
             return false;
         }
     });
  }
}


const getLocalPosition = function () {
    if(navigator.userAgent.indexOf('Tuanzhuanw')<0){
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
           console.log('百度地图定位失败！');
           return false;
       }
       });
    }else{
        navigator.geolocation.getCurrentPosition(function(position){
         storeJs.set('pointInfo',{lat:position.coords.latitude,lng:position.coords.longitude,time:parseInt(position.timestamp)/1000});
         }, function(error){
         console.log("定位失败");
             return false;
         });
    }
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

