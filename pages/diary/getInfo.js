//获取天气信息
export function getLocation(that){
  wx.getLocation({
    type: 'wgs84', // 获取位置信息必传参数
    success:(res)=>{ //成功之后的回调，开始请求天气api
      wx.request({
        //请求天气数据，通过经纬度
        url: 'https://devapi.qweather.com/v7/weather/now',
        data:{
          key:"0394034be5e54054bf95007e205ed377",//和彩云天气api使用的key
          location:`${res.longitude},${res.latitude}` //经纬度，模板字符串拼接
        },
        header:{
          'content-type': 'application/json'
        },
        //箭头函数为了修改this指向
        success:(res)=>{
          console.log(res)
          that.setData({
            temp:res.data.now.temp, //气温
            wheather:res.data.now.text, //天气状况
            wheatherIcon:res.data.now.icon //图标
          })
          //return res.data.now.temp
        },
      })
    }
   })
}