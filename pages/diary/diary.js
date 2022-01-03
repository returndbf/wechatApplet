// pages/diary/diary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,//经度
    latitude:0,//纬度
    temp:0,//温度
    wheather:"晴",//天气状况
    wheatherIcon:null,//天气图标
    minDate:null ,
    maxDate: null,
    switchOn:false,
    title:"123"
  },
show(){
  console.log(this.longitude,this.latitude,this.res,this.data.temp)
},
getLocation(){
  wx.getLocation({
    type: 'wgs84',
    success:(res)=>{
      wx.request({
        //请求天气数据，通过经纬度
        url: 'https://devapi.qweather.com/v7/weather/now',
        data:{
          key:"0394034be5e54054bf95007e205ed377",
          location:`${res.longitude},${res.latitude}`
        },
        header:{
          'content-type': 'application/json'
        },
        //箭头函数为了修改this指向
        success:(res)=>{
          console.log(res)
          this.setData({
            temp:res.data.now.temp,
            wheather:res.data.now.text,
            wheatherIcon:res.data.now.icon
          })
        },
        
      })
    }
   })
},
changeType(event){
  const checked = event.detail.checked
  this.setData({
    switchOn:checked
  })
  
  console.log(this.data.switchOn)
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   this.getLocation();
   const minDate = new Date(2022, 1, 2).getTime();
   const maxDate = new Date(2022, 1, 10).getTime()
   this.setData({
     minDate:minDate,
     maxDate:maxDate
   })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})