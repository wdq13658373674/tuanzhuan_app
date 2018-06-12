/*
* base index controller
* */
var index = {
	/* connect success function */
	connect:function(data){
		console.info('收到连接成功消息');
    },
    /* disconnect function */
	disconnect:function(data){
		console.warn('断开连接');
	},
    /* error message function */
	error:function(data){
		console.error(data.message);
	},
	login:function(data){
        wsocket.isloged = true;
	},
	joinGroup:function(data){

	}
}