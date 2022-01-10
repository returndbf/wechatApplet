//封装网络请求，返回promise
export function httpRequest(url, params = "", successCode, method = "get") {
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: method,
      success: res => {
        if (res.data.code == successCode) {
          resolve(res.data.data)
        } else {
          wx.showModal({
            cancelColor: 'cancelColor',
            title:"失败",
            content:"请求无数据或者请求失败"
          })
          
        }
      },
      fail: err => {
        reject("网络请求失败")
      }
    })
  })
};