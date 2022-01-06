
/**
 * function: 封装网络请求
 * @url URL地址
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */

function request(url, params, method, onSuccess, onFailed) {
  console.log('请求url：' + url);
  wx.showLoading({
    title: "正在加载中...",
  })
  console.log("请求头：", header)
  wx.request({
    url: url,
    data: dealParams(params),
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      console.log('响应：', res.data);

      if (res.data) {
        /** start 根据需求 接口的返回状态码进行处理 */
        if (res.statusCode == 200) {
          onSuccess(res.data); //request success
        } else {
          onFailed(res.data.message); //request failed
        }
        /** end 处理结束*/
      }
    },
    fail: function(error) {
      onFailed(""); //failure for other reasons
    }
  })
}

/**
 * 供外部post请求调用  
 */
export function post(url, params, onSuccess, onFailed) {
  console.log("请求方式：", "POST")
  request(url, params, "POST", onSuccess, onFailed);

}

/**
 * 供外部get请求调用
 */
export function get(url, params, onSuccess, onFailed) {
  console.log("请求方式：", "GET")
  request(url, params, "GET", onSuccess, onFailed);
}