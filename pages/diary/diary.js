// pages/diary/diary.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude:0,
    latitude:0,
    res:null,
    temp:0,
    wheather:"晴",
    wheatherIcon:null
  },
show(){
  console.log(this.longitude,this.latitude,this.res,this.data.temp)
},
getLocation(){
  wx.getLocation({
    type: 'wgs84',
    success:(res)=>{
      wx.request({
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
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   this.getLocation()
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