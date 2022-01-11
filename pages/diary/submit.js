import {
  httpRequest
} from "../../utils/request";
export function submit(that) {
  wx.getStorage({
    key: "userId" //获取本地存储的userId
  }).then(res => {
    if(that.data.blogTitle==""||that.data.blogTitle.trim()==""){
      wx.showToast({
        title: '标题为必填项',
        icon:"error"
      })
      return
    }
    const data = { //表单数据
      title: that.data.blogTitle,
      content: that.data.blogContent,
      userId: res.data,
      weather: that.data.weather,
      weatherIcon: that.data.weatherIcon
    }
    wx.showLoading({ //加载框
      title: '请求中',
      mask: true
    })
    if (that.data.blogImg) {
      wx.uploadFile({
        filePath: that.data.blogImg, //存储的文件路径
        name: 'file',
        url: 'http://localhost:80/insertBlog',
        formData: data,
        success: res => {
          // console.log("上传成功",res)
          wx.hideLoading({ //隐藏加载框
          }).then(res => {
            wx.showToast({ //提示框
              title: '上传成功',
            }).then(res => { //提示框结束之后关闭日志窗口
              that.setData({
                blogTitle: "",
                blogContent: "",
                blogImg: null,
                blogPage: false
              })
              const toast = that.selectComponent('#imgUploader');
              console.log(toast)
              toast.linClearImage()
            })
          })
        },
        fail: res => {
          wx.hideLoading({ //隐藏加载框
          }).then(res => {
            wx.showModal({
              title: '请求失败',
              content: "日志提交失败，尝试重新提交或联系管理员QQ：3081531280"
            })
          })
        }
      })
    } else {
      httpRequest("http://localhost:80/insertBlog", data, 1, "post").then(res => {
        wx.hideLoading({ //隐藏加载框
        }).then(res => {
          wx.showToast({ //提示框
            title: '上传成功',
          }).then(res => { //提示框结束之后关闭日志窗口
            that.setData({
              blogPage: false
            })
          })
        })
      }).catch(err => {
        wx.hideLoading({ //隐藏加载框
        }).then(res => {
          wx.showModal({
            title: '请求失败',
            content: "日志提交失败，尝试重新提交或联系管理员QQ：3081531280"
          })
        })
      })
    }
  }).catch(err => {
    wx.showModal({
      title: "提交失败",
      content: "本地用户信息不存在"
    })
  })
};

export function cancel(that) {
  that.setData({
    blogPage: false
  })
}