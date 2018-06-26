/**
 * 压缩图片
 * img : 图片
 * rate : 压缩比例(0-1)
 * **/
const compressImg=function(img){

  let canvas = document.createElement('canvas');
  let ctx = canvas.getContext('2d');

  let width=img.width,
      height=img.height;

  canvas.width=width;
  canvas.height=height;

  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(img,0,0,width,height);

  let data = canvas.toDataURL('images/jpeg',0.7);

  return data;
}

/**
 * base64 转成 blob 对象
 * **/
const dataURItoBlob=function(base64Data){
  var byteString;
  if (base64Data.split(",")[0].indexOf("base64") >= 0)
    byteString = atob(base64Data.split(",")[1]);
  else byteString = unescape(base64Data.split(",")[1]);
  var mimeString = base64Data
    .split(",")[0]
    .split(":")[1]
    .split(";")[0];
  var ia = new Uint8Array(byteString.length);
  for (var i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }
  return new Blob([ia], { type: mimeString });
}

/**
 * 上传单张图片
 * **/
const uploadImg=function(event,callback){
  let data='';
  let files=event.target.files || event.dataTransfer.files;
  if(!files.length) return;

  let file = files[0];
  //判断是否支持reader
  if(!file || !window.FileReader) return;

  if(/^image/.test(file.type)){
    let reader = new FileReader();
    //将图片转成base64格式
    reader.readAsDataURL(file);

    //读取成功回调
     reader.onloadend =function(){
      let result=this.result;
      let img=new Image();
      img.src = result;

      return img.onload=function(){
        let compress = compressImg(img);
        let blob = dataURItoBlob(compress);

        callback(blob);
      }
    }
  }
}

export {uploadImg}
