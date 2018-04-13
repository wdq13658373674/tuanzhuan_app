import router from '@/router'
const storeJs=require('storejs');

export default function(){
  if(storeJs('points') || storeJs('homeInfo')){
    return;
  }else {
    const geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
      if(this.getStatus() == BMAP_STATUS_SUCCESS){
        let point={
          lat:r.point.lat,
          lng:r.point.lng,
        }

        storeJs.set('points',point)
        router.push('/location');
      }
      else {
        console.log('定位失败！');
        return false;
      }
    });
  }
}

