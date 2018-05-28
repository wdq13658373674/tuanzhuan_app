import lrz from 'lrz'
/**
 * 压缩高质量图片
 * **/
const compressImg=async function(event){
  let files=event.target.files || event.dataTransfer.files;
  if(!files.length) return;

  let data=''
  //图片压缩
  await lrz(files[0], {
    quality:0.9,//压缩质量
    fieldName:'imgFile'//后台接收参数名
  }).then(rst => {
    data= rst.formData;//上传的被压缩后的图片
  })

  return data;
}

/**
 * 上传单张图片
 * **/
const uploadImg=async function(event,self){
  var data='';
  await compressImg(event).then(params=>{
    /**图片上传接口**/
    return self.$axios.post(global.API_HOST+'index/upload',params,{
      headers:{'Content-Type':'multipart/form-data'}//添加请求头
    }).then(res=>{
      res=res.data;
      console.log(res);
      if(res.status==0){
        data=res.data;
      }else{
        self.$vux.toast.text('图片过大,上传失败');
      }
    })
  })

  return data;
}

export {compressImg,uploadImg};
