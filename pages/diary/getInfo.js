import {
  httpRequest
} from "../../utils/request"
import {
  blog
} from "./blogClass"
//获取天气信息
export function getLocation(that) {
  wx.getLocation({
    type: 'wgs84', // 获取位置信息必传参数
    success: (res) => { //成功之后的回调，开始请求天气api
      wx.request({
        //请求天气数据，通过经纬度
        url: 'https://devapi.qweather.com/v7/weather/now',
        data: {
          key: "0394034be5e54054bf95007e205ed377", //和风天气api使用的key
          location: `${res.longitude},${res.latitude}` //经纬度，模板字符串拼接
        },
        header: {
          'content-type': 'application/json'
        },
        //箭头函数为了修改this指向
        success: (res) => {
          console.log(res)
          that.setData({
            temp: res.data.now.temp, //气温
            weather: res.data.now.text, //天气状况
            weatherIcon: res.data.now.icon //图标
          })
          //return res.data.now.temp
        },
      })
    }
  })
};

function checkRegister(openId) {
  return new Promise((resolve, reject) => { //封装promise用于请求返回后的处理
    const data = {
      openId: openId //用户的openid
    }
    httpRequest('https://dabenfeng.top/checkUserRegister', data, 1).then(
      res => {
        resolve(res) //res就是后端的用户id，因为在网络请求的封装里只resolve了result（后端实体类）对象里面的data
      }
    ).catch(err => {
      reject(err)
    })
  })

};
export function userLogin(that) {
  return new Promise((resolve, reject) => {
    wx.login({
      timeout: 5000,
      success: (res) => {
        wx.request({
          url: 'https://dabenfeng.top/wxLogin',
          data: {
            code: res.code //登录凭证，用来换取openid
          },
          success(res) { //后端返回的是解析json字符串后的openid
            checkRegister(res.data.data).then(res => { //此处返回的是后端用户id//这一步是为了在后端进行注册校验，返回的是用户的id
              wx.setStorage({
                  key: "userId",
                  data: res
                }),
                that.setData({
                  userId: res
                })
            }).catch(err => {

            })
            console.log(res.data.data) //openid
            wx.setStorage({
                key: "userOpenId",
                data: res.data.data
              }),
              that.setData({
                userOpenId: res.data.data,
              })
            console.log(that.data.userOpenId)
            resolve("登录成功")
          },
          fail(err) {
            wx.showToast({
              title: err,
            })
          }
        })
      }
    })
  })
};
//获取blog详情
export function getBlogDetail(that) {
  httpRequest("https://dabenfeng.top/wxLogin")
}
//获取当前月份
export function getCurrentMonth(that) {
  return new Promise((resolve, reject) => {
    const date = new Date();
    const month = date.getMonth() + 1;
    const year = date.getFullYear()
    that.setData({
      selectedMonth: month,
      selectYear: year
    })
    const blogTime = {
      year: year,
      month: month
    }
    resolve(blogTime)
  })

}
//获取某个月份的blog
export function getBlogByMonth(that, year, month) {
  wx.getStorage({
    key: "userId"
  }).then(res => {
    const data = {
      userId: res.data,
      uploadMonth: month,
      uploadYear: year
    }
    httpRequest("https://dabenfeng.top/selectBlogsByMonth", data, 1).then(res => {
      that.setData({
        monthBlogs: []
      })
      if(res){
      res.map(item => {
        const blogObj = new blog(item.id, item.userId, item.uploadTime, item.title, item.content, item.img, item.uploadMonth, item.weather, item.weatherIcon)
        if (!item.img) {
          blogObj.img = `https://pic.dabenfeng.top/${item.weatherIcon}.svg`
        }
        that.data.monthBlogs.push(blogObj)
      })
    }
      that.setData({
        monthBlogs: that.data.monthBlogs
      })
      console.log(that.data.monthBlogs)
    })
  })


};
export function timestampToYear(timestamp) {
  const date = new Date(timestamp)
  return date.getFullYear()
};
export function timestampToMonth(timestamp) {
  const date = new Date(timestamp);
  return date.getMonth() + 1
}