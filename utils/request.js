//封装网络请求，返回promise
export function httpRequest(url, params = "", successCode, method = "get") {
  let header = null;
  if(method =="post"){
    header={
      'content-type':'application/x-www-form-urlencoded'
    }
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: url,
      data: params,
      method: method,
      header:header,
      success: res => {
        if(!res.data.data){ //请求成功且为后端的successResult，但是data数据为null或false
          wx.showToast({
            title: res.data.message, //返回的message，内容为原因
            icon:"error"
          })
        }
        if (res.data.code == successCode) { //请求成功
          resolve(res.data.data)
        } else {  //请求成功但是为后端的failResult，内容一般也是null或false
          wx.showModal({
            cancelColor: 'cancelColor',
            title:"失败",
            content:"请求出错或请求无数据"
          })
          
        }
      },
      fail: err => {
        reject("网络请求失败")
      }
    })
  })
};