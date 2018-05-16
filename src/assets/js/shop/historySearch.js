const maxLen=10;

const historySearch=function(val){
  let arr=[];

  if(val==''){
    return;
  }

  // if(arr.length < maxLen){
  //   arr.unshift(val);
  // }else{
  //   arr.pop();
  //   arr.unshift(val);
  // }
  arr.push(val);
  return arr;
}

export {historySearch}
