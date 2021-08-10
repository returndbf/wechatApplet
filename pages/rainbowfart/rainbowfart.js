// pages/rainbowfart/rainbowfart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      colors:['blue','pink','orange','MediumOrchid','DeepSkyBlue','	DarkGray','Cyan'],
      color:'black',
      sentences:[
      "光怪陆离的宇宙，你就是为我闪耀的星星",
      "你这颗星星在我眼里熠熠生辉",
      '正是因为在玫瑰身上付出的时间，才让玫瑰变得如此重要',
      '虽然爱情不是人生的义务，但是在爱情中信任、真诚、付出，想努力让你变得幸福是我的义务',
      '爱情让普通的两个人因为对方的存在而变得闪耀',
      '问世间情为何物，直教人生死相克',
      '等一个自然而然的晴天，我想要带你去海边',
      '能不能和你竭尽全力奔跑，向着海平线，余晖消逝之前都不算终点',
      '如果我们不分白天黑夜，唱着情歌一路来看你，你一定回答“情歌而已”',
      '每一个天使都热爱美丽，所以我才懂得你珍贵',
      '请你不要离开，这里胜似花开',
      '我想陪你去淌银河，摘一把野果坐看日落',
      '星星夜月引路，爱带我回家',
      '愿爱无忧',
      '漫山遍野都是你，你迷路在烟雨里，粉墙黛瓦有醉意，一饮而尽',
      '漫山遍野都是你，你就藏在山野里，炊烟袅袅隐茶林，一望无际',
      '漫山遍野都是你，你是山水的来历，一路奔新安江里，水墨丹青',
      '漫山遍野都是你，你被画在风景里，我沿落款的指引，随横江去',
      '你不嫌我丑，见面招招手，山高呀路远就一样地走',
      '我不嫌你黑，黑的像个鬼，举起杯还就嘴对嘴',
      'You Are The CSS To My HTML',
      '对着我眨眼睛的星星躲在我眼里',
      '想到世界上有同样看到我就会微笑的人，我便觉得浪漫极了',
      '假大空的承诺让我觉得俗不可耐，我要你切身实际的感受和包容',
      '我们可以不避讳任何话题，我们可以从余华谈到余秀华，从存在主义谈到朋克文化，从尼采的“上帝已死”到叔本华的处世哲学，谈论性、谈论太空、谈论彩礼、谈论我们粗鄙的思想',
      '那些人欣于千篇一律的新鲜感，只顾填补自己的欲望；我不一样，我很坦诚，我知道自己的自私，从不躲藏且隐瞒，我渴望从一而终，憎恨过河拆桥',
      '爱情是什么，就是灵魂里的幼稚鬼和神经病',
      '你是我想要拥抱的整个春天',
      '我不想给你讲那些枯燥乏味的道理，我会和你同仇敌忾对抗那些不愉快',
      '我所有的浪漫是写给你的情书',
      '你是这个世界赠予我的情书',
      '你是一颗小行星，砸到我心上，从此就有个一个坑'],
      sentence:""
  },
  change(){
    let randomNum =Math.floor(Math.random()*this.data.sentences.length)   
    let randomColor=Math.floor(Math.random()*this.data.colors.length)
    this.setData({
      sentence:this.data.sentences[randomNum],
      color:this.data.colors[randomColor]
    }) 
  },
  copy(){
    let that =this
    wx.setClipboardData({
      data: that.data.sentence,
      success(){
        wx.showToast({
          title: '已经复制啦',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      this.change()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
     })
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
      return{
        title:'给你放个彩虹屁',
        //desc:'给你放个彩虹屁',
        path:'pages/rainbowfart/rainbowfart'
      }
  },
  onShareTimeline:function(){
    return{
      title:"给你放个彩虹屁",
      imageUrl: ''
    }
   
  }
})