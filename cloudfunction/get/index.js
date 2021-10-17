// 云函数入口文件
const cloud = require('wx-server-sdk')
var rp = require('request-promise');
cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return rp('http://101.42.103.236:8080/rainbowFart/randomRainbowFart').then(function(res){
    console.log(res)
  })
    
  
}