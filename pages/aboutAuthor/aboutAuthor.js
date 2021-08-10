// pages/aboutAuthor/aboutAuthor.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gzhpic:["https://static.7ait.com/2021/06/18/afb804c228c14.jpg"],
    scriptpic:["https://static.7ait.com/2021/06/18/29a0dee376869.png"],
    scripturl:"https://greasyfork.org/zh-CN/scripts/427275",
    gitpagepic:["https://static.7ait.com/2021/06/18/b5998ceed25cd.png"],
    gitpageurl:"http://dabenfeng.top/",
    zcoolpic:["https://static.7ait.com/2021/06/18/abed75abf4d7a.png"],
    zcoolurl:"https://www.zcool.com.cn/u/20625526"
  },
showgzh(){
  wx.previewImage({
    urls: this.data.gzhpic,
    showmenu:true,
  })
},
showscript(){
  let that =this
    wx.previewImage({
      urls: this.data.scriptpic,
      complete(){
        wx.setClipboardData({
          data: that.data.scripturl,
          success(){
            wx.showToast({
              title: '链接已复制',
            })
          }
        })
      }
    })
},
showgitpage(){
  let that =this
  wx.previewImage({
    urls: this.data.gitpagepic,
    complete(){
      wx.setClipboardData({
        data: that.data.gitpageurl,
        success(){
          wx.showToast({
            title: '链接已复制',
          })
        }
      })
    }
  })
},
showzcool(){
  let that =this
  wx.previewImage({
    urls: this.data.zcoolpic,
    complete(){
      wx.setClipboardData({
        data: that.data.zcoolurl,
        success(){
          wx.showToast({
            title: '链接已复制',
          })
        }
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