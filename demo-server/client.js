// 模拟调用第三方接口
let http = require('http');
let util = require('util');
http.get('http://www.imooc.com/index/getstarlist',(res)=>{
  let data='';
  res.on('data',(chunk)=>{
    data+=chunk;
  });
  res.on("end",()=>{
    let result = JSON.parse(data);
    console.log(`result:${result.msg}`)
    // console.log(`result:${util.inspect(result)}`)
  })
})
