import router from '@/router'
const storeJs=require('storejs');

export default function(){
  console.log(storeJs('roomInfo'));
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

