const storeJs=require('storejs');

export default function(callback){
  const geolocation = new BMap.Geolocation();
  geolocation.getCurrentPosition(function(r){
    if(this.getStatus() == BMAP_STATUS_SUCCESS){
      let point = {
        lng:r.point.lng,
        lat:r.point.lat,
      };
      callback(point);
    }
    else {
      console.log('定位失败');
    }
  });
}

