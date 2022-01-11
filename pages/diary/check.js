import {
  userLogin
} from "./getInfo";
import {
  httpRequest
} from "../../utils/request";
//检查是否显示文本卡片
export function checkTextShow(that) {
  //获取本地存储
  wx.getStorage({
    key: "switchOn"
  }).then(res => {
    that.setData({
      switchOn: res.data //返回是个对象，要取出data
    })
  }).catch(err => {
    console.log(err)
  })
};
//检查是否打卡
export function checkClock(that) {
  wx.getStorage({
    key: "userId"
  }).then(res => {
    const data = {
      userId: res.data
    }
      //发送请求，检查用户是否打卡，如果打卡不显示打卡按钮
    httpRequest("http://localhost:80/userClockToday", data, 1).then(res => {
      if (res === false) {
        that.setData({
          notClock: true
        })
      }else{
        
      }
    })
  }).catch(err => {

  })



}

//检查本地openid是否存在
export function checkLogin(that) {
  //登录
  wx.getStorage({
    key: "userId",
    success: (res => { //获取成功就弹窗欢迎回来
      if (res.data) {
        
      }
    }),
    fail: (err => { //获取失败就进行登录操作，登录操作即：将用户信息存储在storage
      userLogin(that).then(res => {
        wx.showToast({
          title: res,
        })
      }).catch(err => {
        console.log(err)
      })

    })
  })


}