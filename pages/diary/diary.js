// pages/diary/diary.js
import {
  httpRequest
} from "../../utils/request"
import {
  checkTextShow,
  checkLogin,
  checkClock
} from "./check"
import {
  getLocation,
  userLogin
} from "./getInfo"
import {
  submit,
  cancel
} from "./submit"
import { debounce } from "../../utils/debounce";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    longitude: 0, //经度
    latitude: 0, //纬度
    temp: 0, //温度
    weather: "晴", //天气状况
    weatherIcon: "100", //天气图标
    minDate: null,
    maxDate: null,
    switchOn: false, //开关，是否打开文字卡片，true开启
    title: "123",
    notClock: false, //是否显示打卡按钮，打卡之后消失，没有打卡为true
    clockList: false, //打卡日历是否显示
    blogPage: false, //写日志弹窗
    userId: null, //后端用户id
    userOpenId: null,//用户openid
    clockDays:0, //打卡日期
    blogTitle:"", // 日志标题
    blogContent:"",//日志内容
    blogImg: null,//日志图片
  },

  //改变是否以文本显示卡片
  changeType(event) {
    const checked = event.detail.checked //获取ui组件传入的switch开关状态,true打开
    this.setData({
      switchOn: checked //switchOn控制显示，是否打开文字卡片
    })
    wx.setStorage({
      key: "switchOn",
      data: this.data.switchOn
    })
    console.log(this.data.switchOn)
  },
  submitBlog() {
      submit(this)
  },
  cancelBlog() {
    cancel(this)
  },
  //打卡
  clockOn() {
    wx.getStorage({
      key: "userId"
    }).then(res => {
      this.setData({
        userId: res.data
      })
      const data = {
        userId: res.data
      }
      // 发送网络请求，请求成功之后弹出窗口
      httpRequest("http://localhost:80/userClock", data, 1).then(res => {
        console.log(res)//打卡天数
        wx.showToast({
          title: '打卡成功，总打卡天数:'+res,
          icon:"none"
        })
        this.setData({
          clockDays:res,
          notClock: false
        })
      }).catch(err => {
      })
    }).catch(err => {
      wx.showToast({
        title: '本地用户信息不存在',
      })
    })
  },
  //添加日志标题
  titleInsert(event){
    //console.log(event.detail.value)
      this.setData({
        blogTitle:event.detail.value
      })
      console.log(this.data.blogTitle)

  },
  //添加日志内容
  contentInsert(event){
    this.setData({
      blogContent:event.detail.value
    })
    console.log(this.data.blogContent)
  },
  //显示日志弹窗
  blogViewShow() {
    wx.getStorage({
      key:"userId"
    }).then(res=>{
      const data = {
        userId : res.data
      }
      //校验今日日志数量
      httpRequest("http://localhost:80/checkUserTodayBlogsCount",data,1).then(res=>{
        if(res!=false){
          this.setData({
            blogPage: true
          })
        }else{
          wx.showToast({
            icon:"error",
            title: "今日日志已上限",
          })
        }
      })
    }).catch(err=>{
      wx.showToast({
        icon:"error",
        title: "本地用户信息不存在",
      })
    })
    
  },
  //插入图片
  insertImg(event) {
    this.setData({
      blogImg: event.detail.current[0]
    })
    console.log(this.data.blogImg)
  },
  //删除图片
  removeImg(){
    console.log(123)
    this.setData({
      blogImg:null
    })
  },
  //日志列表
  showClockList() {
    if (!this.data.blogPage) {
      this.setData({
        clockList: true
      })

    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("onload")
    checkTextShow(this) //检查是否卡片显示
    getLocation(this) //获取坐标天气

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("onready")
    const minDate = new Date(2022, 1, 2).getTime();
    const maxDate = new Date(2022, 1, 10).getTime()
    this.setData({
      minDate: minDate,
      maxDate: maxDate
    })
  },


  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    checkLogin(this)
    checkClock(this)
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("onhide")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("onunload")
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