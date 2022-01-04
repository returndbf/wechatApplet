// pages/diary/diary.js
import {checkTextShow} from "./check"
import {getLocation} from "./getInfo"
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
    switchOn:false,//开关，是否打开文字卡片，true开启
    title:"123",
    notClock:true //是否显示打卡按钮，打卡之后消失，没有打卡为true
  },

//改变是否以文本显示卡片
changeType(event){
  const checked = event.detail.checked //获取ui组件传入的switch开关状态,true打开
  this.setData({
    switchOn:checked //switchOn控制显示，是否打开文字卡片
  })
  wx.setStorage({
    key:"switchOn",
    data: this.data.switchOn
  })
  console.log(this.data.switchOn)
},

//打卡
clockOn(){
  this.setData({
    notClock:false
    // 发送网络请求，请求成功之后弹出窗口

  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    checkTextShow(this) 
    getLocation(this)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
    wx.getUserProfile({
      success: function(res) {
        console.log(res)
      }
    })
    
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