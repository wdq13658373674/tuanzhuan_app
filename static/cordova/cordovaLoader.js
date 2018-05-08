function cordovaLoader(callback,path){

	var cdvpath = typeof path != 'undefined' ? path : "cordova/";   //cordova文件夹路径
	var cdvplatform = navigator.platform;
	var scriptc = "";
	//判断是android还是ios,引入对应平台的cordova
    if(cdvplatform.indexOf("iPhone")==0 || cdvplatform.indexOf("iPad")==0){
        scriptc = (cdvpath+"ios/cordova.js");
    }else if(cdvplatform.indexOf("Linux a")==0 || cdvplatform.indexOf("Linux i")==0){
        scriptc = (cdvpath+"android/cordova.js");
    }else{
        cordova = null;
        console.warn("This cordova plugin not support your device");
    }
	if(scriptc!=""){
		var headcdv = document.getElementsByTagName("head")[0];
		var cdvm = document.createElement("script");
		cdvm.type = "text/javascript";
		cdvm.src = scriptc;
		headcdv.appendChild(cdvm);
		cdvm.onload = function(){
            cdvm.onerror = function(err){
                console.error('cordova.js file not found: '+err.srcElement.outerHTML);return;
            }
		    document.addEventListener('deviceready', function(){
                cordovaLoaded = true;
                if(typeof callback == 'function') callback();   //引入成功后调用方法
		    }, false);
		}
	}
}
var cordovaLoaded = false;
