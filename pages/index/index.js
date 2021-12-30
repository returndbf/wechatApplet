// index.js
// 获取应用实例
//const app = getApp()

Page({
  onLoad() {
    wx.login({
      success: (res) => {
          // 通过code换取openid
          if (res.code) {
              wx.request({
                  url: "",
                  method: "get",
                  data: {
                      code: res.code,
                  },
                  success: (res) => {
                      if (res.data && res.data.openid) {
                          // 获取的openid存入storage，方便之后使用
                          wx.setStorageSync("openId", res.data.openid);
                      }
                  },
              });
          }
      },
      fail: () => {},
      complete: () => {},
  });
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    })
  },

  onShareTimeline() {
    return {
      title: "做个决定吧",
      imageUrl: ''
    }
  },
  onShareAppMessage: function () {
    return {
      title: '做个决定吧',

      path: 'pages/index/index'
    }
  },
  data: {
    // show:true,
    play: false,
    start: "做个决定吧",
    // pic1:"https://static.7ait.com/2021/06/16/347a482d43729.jpg",
    // pic2:"https://static.7ait.com/2021/06/16/6b6471a29fcb7.jpg",
    // pic3:"https://static.7ait.com/2021/06/16/abb99435e23f0.jpg",
    // pic4:"https://static.7ait.com/2021/06/16/f8b24e858731e.jpg",
    // pic5:"https://static.7ait.com/2021/06/16/69c20c46df57e.jpg",
    // pic6:"https://static.7ait.com/2021/06/16/8f447e05b9c0c.jpg",
    // pic7:"https://static.7ait.com/2021/06/16/235d0b113037c.jpg",
    // pic8:"https://static.7ait.com/2021/06/16/c3cb4fc065b26.jpg",
    // pic9:"https://static.7ait.com/2021/06/16/20a1445af2175.jpg",
    picArr: ["https://static.7ait.com/2021/06/18/8ab8a0920a801.png",
      "https://static.7ait.com/2021/06/18/46a8ba25b8ddd.png",
      "https://static.7ait.com/2021/06/18/0f4432c7b3be1.png",
      "https://static.7ait.com/2021/06/18/df729ad92abb5.png",
      "https://static.7ait.com/2021/06/18/36fa895a910b4.png",
      "https://static.7ait.com/2021/06/18/3b84b3b7ac018.png",
      "https://static.7ait.com/2021/06/18/268ee9ec9a8a0.png",
      "https://static.7ait.com/2021/06/18/86adc78d05417.png",
      "https://static.7ait.com/2021/06/18/d1354b18d8c8b.png"]
  },
  catchTouchMove() {
    return false;
  },
  start() {
    this.setData({
      play: !this.data.play,
      start: this.data.start == "做个决定吧" ? "停" : "做个决定吧"
    })
    if (this.data.play == false) {
      let foodArr = ['火锅', '日料', '拉面', '烧烤', '烤鸭', '西式快餐', '自助餐', '寿司', '麻辣烫']
      let skillArr = ['Ps', 'Ai', 'Java', 'Mysql', 'Javascript', 'Pr', 'Ae', 'Lr', 'Linux']
      let Recipes = ['红烧肉', '水煮肉片', '小酥肉', '红烧鸡翅', '可乐鸡翅', '红烧鱼', '咖喱鸡', '油闷大虾', '糖醋里脊', '小炒肉', '尖椒肉丝']
      let allArr = [foodArr, skillArr, Recipes]
      let parentArrNum = Math.floor(Math.random() * allArr.length);//从allArr中获取随机下标，即获取随机子数组的下标
      //console.log(allArr[parentArrNum])
      let childArr = allArr[parentArrNum];//获取子数组
      let childArrNum = Math.floor(Math.random() * childArr.length);//在子数组中获取随机下标
      //console.log(arr[i])
      let content = childArr[childArrNum];//获取最终结果
      //console.log(childArr,childArrNum,content)
      switch (parentArrNum) {
        case 0:
          content = '周末去吃' + content;
          break;
        case 1:
          content = '我要学习' + content;
          break;
        case 2:
          content = '这周要做' + content;
          break;
        default:
          break;
      }
      wx.showModal({
        //cancelColor: 'cancelColor',
        //cancelText: '返回',
        //confirmColor: 'lightskyblue',
        confirmText: '好的',
        // content: parentArrNum==0?"周末去吃"+allArr[parentArrNum][childArrNum]:"我要学习"+allArr[parentArrNum][childArrNum],
        content: content,
        //editable: true,
        // placeholderText: 'placeholderText',
        showCancel: false,
        title: '做个决定吧',
        success(result) {
          //此处的Promise只是为了看起来高级，实际上一点意义都没有，纯属脱裤子放屁
          let promise = new Promise(function (resolve, reject) {
            resolve('说做就做')
          })
          if (result.confirm) {
            promise.then(function (successMessage) {
              wx.showToast({
                title: successMessage
              })
            })
          }
        },
        fail: (res) => { },
        complete: (res) => { },
      })
    }
  }
})
