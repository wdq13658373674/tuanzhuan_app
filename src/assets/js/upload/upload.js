import lrz from 'lrz'

const uploadImg=function(event){
  let files=event.target.files || event.dataTransfer.files;
  if(!files.length) return;

  let data=''
  //图片压缩
  lrz(files[0], {
    quality:0.9,//压缩质量
    fieldName:'imgFile'
  }).then(rst => {
    data= rst.formData;
  })
}

export {uploadImg};
