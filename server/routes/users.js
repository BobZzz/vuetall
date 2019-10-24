var express = require('express');
var router = express.Router();
var User = require('./../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/test', function(req, res, next) {
  res.send('test');
});
//登录接口
router.post('/login',(req,res,next)=>{
  var param = {
    userName:req.body.userName,
    userPwd:req.body.userPwd
  }
  User.findOne(param,(err,doc)=>{
    if(err){
      res.json({
        status:"1",
        msg:err.message
      })
    }else{
      if(doc){
        res.cookie("userId",doc.userId,{
          path:'/',
          maxAge:1000*60*60
        })
        res.cookie("userName",doc.userName,{
          path:'/',
          maxAge:1000*60*60
        })
        // req.session.user = doc
        res.json({
          status:'0',
          msg:'',
          result:{
            userName:doc.userName
          }
        })
      }
    }
  })
})

//登出接口
router.post("/logout",(req,res,next)=>{
  res.cookie("userId","",{
    path:"/",
    maxAge:-1
  })
  res.json({
    status:"0",
    msg:'',
    result:''
  })
})
//校验用户信息
router.get("/checkLogin",(req,res,next)=>{
  if(req.cookies.userId){
    res.json({
      status:'0',
      msg:'',
      result:req.cookies.userName
    })
  }else{
    res.json({
      status:'1',
      msg:'未登录',
      result:''
    })
  }
})
//查询当前用户的购物车数据
router.get("/cartList",(req,res,next)=>{
  var userId = req.cookies.userId;
  User.findOne({userId},(err,doc)=>{
    if(err){
      res.json({
        status:'1',
        msg:'err.message',
        result:''
      })
    }else{
      if(doc){
        res.json({
          status:'0',
          msg:'',
          result:doc.cartList
        })
      }
    }
  })
});
//购物车删除
router.post("/cartDel",(req,res,next)=>{
  var userId = req.cookies.userId,productId = req.body.productId;
  User.update({
    userId
  },{
    $pull:{
      'cartList':{
        'productId':productId
      }
    }
  },(err,doc)=>{
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }else{
      res.json({
        status:'0',
        msg:'',
        result:'suc'
      })
    }
  })
})
//购物车数量、是否选中修改
router.post("/cartEdit",(req,res,next)=>{
  var userId = req.cookies.userId,
      productId = req.body.productId,
      productNum = req.body.productNum,
      checked = req.body.checked
      User.update({userId,"cartList.productId":productId},{
        "cartList.$.productNum":productNum,
        "cartList.$.checked":checked,
      },(err,doc)=>{
        if(err){
          res.json({
            status:'1',
            msg:err.message,
            result:''
          })
        }else{
          res.json({
            status:'0',
            msg:'',
            result:'suc'
          })
        }
      })
})
//购物车全选
router.post("/editCheckAll",(req,res,next)=>{
  var userId = req.cookies.userId,
      checkAll = req.body.checkAll?'1':'0'
  User.findOne({userId},(err,user)=>{
    if(err){
      res.json({
        status:'1',
        msg:err.message,
        result:''
      })
    }else{
      if(user){
        user.cartList.forEach((item)=>{
          item.checked = checkAll
        })
        user.save((err1,doc)=>{
          if(err1){
            res.json({
              status:'1',
              msg:err1.message,
              result:''
            })
          }else{
            res.json({
              status:'0',
              msg:'',
              result:'suc'
            })
          }
        })
      }
    }
  })
})
module.exports = router;
