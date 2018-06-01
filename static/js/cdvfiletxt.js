window.cdvfiletxt = function(callback,filename,data,isappend){
  if(cordova && resolveLocalFileSystemURL){
    if(typeof callback != 'function'){callback(false,'callback is not function',{filename:filename});return;}
    window.resolveLocalFileSystemURL(cordova.file.dataDirectory, function (dirEntry) {
      if(typeof isappend == 'undefined') isappend = false;
      dirEntry.getFile(filename, {create: true, exclusive: false}, function(fileEntry) {
        if(typeof data == 'undefined'){
          fileEntry.file(function (file) {
            var reader = new FileReader();
            reader.onloadend = function() {
              callback(true,'success',{filename:filename,data:this.result});
            };
            reader.readAsText(file);
          }, function(){
            callback(false,'文件读取失败',{filename:filename});
          });
          readFile(dirEntry,filename);
        }else{
          fileEntry.createWriter(function (fileWriter) {
            fileWriter.onwriteend = function() {
              callback(true,'success',{filename:filename});
            };
            fileWriter.onerror = function (e) {
              callback(false,'写入文件失败',{filename:filename});
            };
            data = new Blob([data], { type: 'text/plain' });
            if (isappend) {
              try {
                fileWriter.seek(fileWriter.length);
              }catch (e) {
                callback(false,'写入文件失败:'+e,{filename:filename});
              }
            }
            fileWriter.write(data);
          });
        }
      }, function(){
        callback(false,'创建文件失败',{filename:filename});
      });
    }, function(){
      callback(false,'文件系统错误',{filename:filename});
    });
  }else{
    callback(false,'未引入文件操作插件或cordova',{filename:filename});
  }
}
